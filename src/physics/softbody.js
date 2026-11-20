/**
 * Shape-Matching Soft-Body Physics Engine
 *
 * Uses Position-Based Shape Matching with polar decomposition (quaternion extraction),
 * spatial hash grid broadphase collision, raycast picking, and container bounds.
 *
 * @author Sunil
 * @license MIT
 */

import * as THREE from "three";

const MAX_VELOCITY = 25;
const MAX_RELEASE_VEL = 14;
const GRAB_RADIUS_FACTOR = 2.2;
const GRAB_STRENGTH = 0.7;
const MAX_GRAB_STEP = 0.06;
const IMPACT_THRESHOLD = 1.2;
const IMPACT_COOLDOWN = 0.1;
const COLLISION_ITERS = 2;
const WALL_SLOPE = 1;
const WALL_EPS = 0.001;

const tempMatrix9 = new Float64Array(9);

function nextPowerOfTwo(n) {
  let p = 1;
  while (p < n) p <<= 1;
  return p;
}

export class SoftBodyWorld {
  constructor({
    halfX = 3,
    halfZ = 2,
    floorY = 0,
    wallHeight = 0.5,
    wallThickness = 0.26,
    gravity = -12,
    substeps = 6,
    collisionIters = COLLISION_ITERS,
    friction = 0.5,
  } = {}) {
    this.halfX = halfX;
    this.halfZ = halfZ;
    this.floorY = floorY;
    this.wallHeight = wallHeight;
    this.wallThickness = wallThickness;
    this.gravity = new THREE.Vector3(0, gravity, 0);
    this.substeps = substeps;
    this.collisionIters = collisionIters;
    this.friction = friction;
    this.bodies = [];
    this.onImpact = null;

    this._nextId = 1;
    this._grab = null;
    this._sCap = 0;
    this._impSum = null;
    this._impCnt = null;
    this._impMax = null;
    this._floorCnt = null;
    this._posArrs = [];
    this._oldArrs = [];
    this._innerArrs = [];
    this._cenArrs = [];
    this._rad = null;
    this._ks = null;
    this._fireB = [];
    this._fireS = [];
    this._rCap = 0;
    this._tSize = 0;
    this._refBody = null;
    this._refIdx = null;
    this._refKey = null;
    this._sorted = null;
    this._cellStart = null;
    this._fillPos = null;
    this._cellInv = 1;
  }

  addBody({
    rest,
    radius,
    stiffness = 0.25,
    beta = 0.35,
    damping = 0.995,
    position = { x: 0, y: 1, z: 0 },
    yaw = 0,
    velocity = { x: 0, y: 0, z: 0 },
  }) {
    const count = (rest.length / 3) | 0;
    const body = {
      id: this._nextId++,
      n: count,
      radius,
      pos: new Float32Array(count * 3),
      vel: new Float32Array(count * 3),
      rest: Float32Array.from(rest),
      center: new THREE.Vector3(),
      velocity: new THREE.Vector3(),
      M: new THREE.Matrix3(),
      R: new THREE.Matrix3(),
      restScale: new THREE.Vector3(1, 1, 1),
      stiffness,
      beta,
      damping,
      impact: 0,
      grounded: false,
      _old: new Float32Array(count * 3),
      _inv: new Float64Array(6),
      _q: new Float64Array([0, 0, 0, 1]),
      _cool: 0,
      _i: 0,
    };

    const r = body.rest;
    let xx = 0, xy = 0, xz = 0, yy = 0, yz = 0, zz = 0;
    for (let i = 0; i < count * 3; i += 3) {
      const rx = r[i], ry = r[i + 1], rz = r[i + 2];
      xx += rx * rx;
      xy += rx * ry;
      xz += rx * rz;
      yy += ry * ry;
      yz += ry * rz;
      zz += rz * rz;
    }

    const reg = (1e-6 * (xx + yy + zz)) / 3 + 1e-12;
    xx += reg;
    yy += reg;
    zz += reg;

    const c00 = yy * zz - yz * yz;
    const c01 = xz * yz - xy * zz;
    const c02 = xy * yz - xz * yy;
    const invDet = 1 / (xx * c00 + xy * c01 + xz * c02);

    body._inv.set([
      c00 * invDet,
      c01 * invDet,
      c02 * invDet,
      (xx * zz - xz * xz) * invDet,
      (xy * xz - xx * yz) * invDet,
      (xx * yy - xy * xy) * invDet,
    ]);

    const neighborDistSq = (2 * radius * 1.2) ** 2;
    body._inner = new Uint8Array(count);
    for (let i = 0; i < count; i++) {
      let neighbors = 0;
      for (let j = 0; j < count; j++) {
        if (j === i) continue;
        const dx = r[j * 3] - r[i * 3];
        const dy = r[j * 3 + 1] - r[i * 3 + 1];
        const dz = r[j * 3 + 2] - r[i * 3 + 2];
        if (dx * dx + dy * dy + dz * dz < neighborDistSq) neighbors++;
      }
      body._inner[i] = +(neighbors >= 6);
    }

    this._place(body, position, yaw, velocity);
    this.bodies.push(body);
    return body;
  }

  removeBody(body) {
    const idx = this.bodies.indexOf(body);
    if (idx < 0) return;
    if (this._grab && this._grab.body === body) this._grab = null;
    this.bodies.splice(idx, 1);
  }

  _place(body, position, yaw, velocity) {
    const { n, rest, pos, vel } = body;
    const cos = Math.cos(yaw);
    const sin = Math.sin(yaw);
    const vx = velocity.x, vy = velocity.y, vz = velocity.z;

    for (let i = 0; i < n * 3; i += 3) {
      const rx = rest[i], ry = rest[i + 1], rz = rest[i + 2];
      pos[i] = position.x + cos * rx + sin * rz;
      pos[i + 1] = position.y + ry;
      pos[i + 2] = position.z - sin * rx + cos * rz;
      vel[i] = vx;
      vel[i + 1] = vy;
      vel[i + 2] = vz;
    }

    body._old.set(pos);
    body._q[0] = 0;
    body._q[1] = Math.sin(yaw * 0.5);
    body._q[2] = 0;
    body._q[3] = Math.cos(yaw * 0.5);

    const R = body.R.elements;
    const M = body.M.elements;
    const scale = body.restScale;
    R[0] = cos; R[1] = 0; R[2] = -sin;
    R[3] = 0;   R[4] = 1; R[5] = 0;
    R[6] = sin; R[7] = 0; R[8] = cos;

    for (let col = 0; col < 3; col++) {
      const s = col === 0 ? scale.x : col === 1 ? scale.y : scale.z;
      for (let row = 0; row < 3; row++) {
        M[col * 3 + row] = R[col * 3 + row] * s;
      }
    }

    body.center.set(position.x, position.y, position.z);
    body.velocity.set(vx, vy, vz);
    body.impact = 0;
    body.grounded = false;
  }

  place(body, position, yaw = 0, velocity = { x: 0, y: 0, z: 0 }) {
    if (this._grab && this._grab.body === body) this._grab = null;
    body.restScale.set(1, 1, 1);
    this._place(body, position, yaw, velocity);
  }

  _resetBody(body) {
    this.place(body, { x: 0, y: 2.5, z: 0 });
  }

  step(dt) {
    dt = Math.min(dt, 1 / 30);
    const bodies = this.bodies;
    const numBodies = bodies.length;
    if (!(dt > 0) || numBodies === 0) return;

    const substeps = this.substeps;
    const subDt = dt / substeps;
    this._ensureStats(numBodies);

    let maxRadius = 0;
    for (let i = 0; i < numBodies; i++) {
      const b = bodies[i];
      b._i = i;
      b._cool -= dt;
      this._posArrs[i] = b.pos;
      this._oldArrs[i] = b._old;
      this._innerArrs[i] = b._inner;
      this._cenArrs[i] = b.center;
      this._rad[i] = b.radius;
      if (b.radius > maxRadius) maxRadius = b.radius;
      this._ks[i] = 1 - (1 - b.stiffness) ** (1 / substeps);
      this._impMax[i] = 0;
    }

    this._cellInv = 1 / (2 * maxRadius);
    this._ff = Math.min(0.9, this.friction * 0.25);

    const g = this.gravity;
    const gx = g.x * subDt;
    const gy = g.y * subDt;
    const gz = g.z * subDt;

    for (let s = 0; s < substeps; s++) {
      for (let i = 0; i < numBodies; i++) {
        const b = bodies[i];
        const pos = b.pos;
        const vel = b.vel;
        const old = b._old;
        const len = b.n * 3;
        for (let j = 0; j < len; j += 3) {
          vel[j] += gx;
          vel[j + 1] += gy;
          vel[j + 2] += gz;
          const px = pos[j], py = pos[j + 1], pz = pos[j + 2];
          old[j] = px;
          old[j + 1] = py;
          old[j + 2] = pz;
          pos[j] = px + vel[j] * subDt;
          pos[j + 1] = py + vel[j + 1] * subDt;
          pos[j + 2] = pz + vel[j + 2] * subDt;
        }
      }

      this._applyGrab();

      for (let i = 0; i < numBodies; i++) {
        this._shapeMatch(bodies[i], this._ks[i]);
      }

      this._impSum.fill(0);
      this._impCnt.fill(0);
      this._floorCnt.fill(0);

      for (let iter = 0; iter < this.collisionIters; iter++) {
        const first = iter === 0;
        if (numBodies > 1) {
          if (first) this._buildHash();
          this._collide(subDt, first);
        }
        for (let i = 0; i < numBodies; i++) {
          this._bounds(bodies[i], i, subDt, first);
        }
      }

      for (let i = 0; i < numBodies; i++) {
        const b = bodies[i];
        if (!this._updateVel(b, subDt)) {
          this._resetBody(b);
        }
        if (this._impCnt[i] >= 3) {
          const avgImp = this._impSum[i] / this._impCnt[i];
          if (avgImp > this._impMax[i]) this._impMax[i] = avgImp;
        }
        b.grounded = this._floorCnt[i] > 0;
      }
    }

    const decay = Math.exp(-dt * 3);
    this._fireB.length = 0;
    this._fireS.length = 0;

    for (let i = 0; i < numBodies; i++) {
      const b = bodies[i];
      const pos = b.pos;
      const vel = b.vel;
      const len = b.n * 3;
      let cx = 0, cy = 0, cz = 0, vx = 0, vy = 0, vz = 0;
      for (let j = 0; j < len; j += 3) {
        cx += pos[j];
        cy += pos[j + 1];
        cz += pos[j + 2];
        vx += vel[j];
        vy += vel[j + 1];
        vz += vel[j + 2];
      }
      const invN = 1 / b.n;
      b.center.set(cx * invN, cy * invN, cz * invN);
      b.velocity.set(vx * invN, vy * invN, vz * invN);

      const maxImp = this._impMax[i];
      b.impact *= decay;
      if (maxImp > b.impact) b.impact = maxImp;
      if (maxImp > IMPACT_THRESHOLD && b._cool <= 0) {
        b._cool = IMPACT_COOLDOWN;
        this._fireB.push(b);
        this._fireS.push(maxImp);
      }
    }

    if (this.onImpact) {
      for (let i = 0; i < this._fireB.length; i++) {
        this.onImpact(this._fireB[i], this._fireS[i]);
      }
    }
  }

  _ensureStats(count) {
    if (this._sCap >= count) return;
    const cap = Math.max(count, 32);
    this._sCap = cap;
    this._impSum = new Float32Array(cap);
    this._impCnt = new Int32Array(cap);
    this._impMax = new Float32Array(cap);
    this._floorCnt = new Int32Array(cap);
    this._rad = new Float32Array(cap);
    this._ks = new Float64Array(cap);
  }

  _applyGrab() {
    const grab = this._grab;
    if (!grab) return;
    const body = grab.body;
    const pos = body.pos;
    const R = body.R.elements;
    const target = grab.target;
    const r0 = R[0], r1 = R[1], r2 = R[2];
    const r3 = R[3], r4 = R[4], r5 = R[5];
    const r6 = R[6], r7 = R[7], r8 = R[8];
    const off = grab.off;
    const ids = grab.ids;
    const w = grab.w;
    const maxStepSq = MAX_GRAB_STEP * MAX_GRAB_STEP;

    for (let i = 0; i < grab.count; i++) {
      const idx = ids[i] * 3;
      const ox = off[i * 3], oy = off[i * 3 + 1], oz = off[i * 3 + 2];
      const weight = GRAB_STRENGTH * w[i];
      let dx = (target.x + r0 * ox + r3 * oy + r6 * oz - pos[idx]) * weight;
      let dy = (target.y + r1 * ox + r4 * oy + r7 * oz - pos[idx + 1]) * weight;
      let dz = (target.z + r2 * ox + r5 * oy + r8 * oz - pos[idx + 2]) * weight;
      const distSq = dx * dx + dy * dy + dz * dz;
      if (distSq > maxStepSq) {
        const s = MAX_GRAB_STEP / Math.sqrt(distSq);
        dx *= s;
        dy *= s;
        dz *= s;
      }
      pos[idx] += dx;
      pos[idx + 1] += dy;
      pos[idx + 2] += dz;
    }
  }

  _shapeMatch(body, ks) {
    const n = body.n;
    const len = n * 3;
    const pos = body.pos;
    const rest = body.rest;
    const inv = body._inv;
    const scale = body.restScale;
    const q = body._q;

    let cx = 0, cy = 0, cz = 0;
    for (let i = 0; i < len; i += 3) {
      cx += pos[i];
      cy += pos[i + 1];
      cz += pos[i + 2];
    }
    const invN = 1 / n;
    cx *= invN;
    cy *= invN;
    cz *= invN;

    let a00 = 0, a01 = 0, a02 = 0;
    let a10 = 0, a11 = 0, a12 = 0;
    let a20 = 0, a21 = 0, a22 = 0;

    for (let i = 0; i < len; i += 3) {
      const px = pos[i] - cx;
      const py = pos[i + 1] - cy;
      const pz = pos[i + 2] - cz;
      const rx = rest[i], ry = rest[i + 1], rz = rest[i + 2];
      a00 += px * rx; a01 += px * ry; a02 += px * rz;
      a10 += py * rx; a11 += py * ry; a12 += py * rz;
      a20 += pz * rx; a21 += pz * ry; a22 += pz * rz;
    }

    const i0 = inv[0], i1 = inv[1], i2 = inv[2], i3 = inv[3], i4 = inv[4], i5 = inv[5];
    const sx = 1 / Math.max(scale.x, 0.2);
    const sy = 1 / Math.max(scale.y, 0.2);
    const sz = 1 / Math.max(scale.z, 0.2);

    const A = tempMatrix9;
    A[0] = (a00 * i0 + a01 * i1 + a02 * i2) * sx;
    A[1] = (a00 * i1 + a01 * i3 + a02 * i4) * sy;
    A[2] = (a00 * i2 + a01 * i4 + a02 * i5) * sz;
    A[3] = (a10 * i0 + a11 * i1 + a12 * i2) * sx;
    A[4] = (a10 * i1 + a11 * i3 + a12 * i4) * sy;
    A[5] = (a10 * i2 + a11 * i4 + a12 * i5) * sz;
    A[6] = (a20 * i0 + a21 * i1 + a22 * i2) * sx;
    A[7] = (a20 * i1 + a21 * i3 + a22 * i4) * sy;
    A[8] = (a20 * i2 + a21 * i4 + a22 * i5) * sz;

    const m00 = A[0], m01 = A[1], m02 = A[2];
    const m10 = A[3], m11 = A[4], m12 = A[5];
    const m20 = A[6], m21 = A[7], m22 = A[8];

    let qx = q[0], qy = q[1], qz = q[2], qw = q[3];
    let r00, r01, r02, r10, r11, r12, r20, r21, r22;

    for (let iter = 0; iter < 4; iter++) {
      const x2 = qx * qx, y2 = qy * qy, z2 = qz * qz;
      r00 = 1 - 2 * (y2 + z2); r01 = 2 * (qx * qy - qz * qw); r02 = 2 * (qx * qz + qy * qw);
      r10 = 2 * (qx * qy + qz * qw); r11 = 1 - 2 * (x2 + z2); r12 = 2 * (qy * qz - qx * qw);
      r20 = 2 * (qx * qz - qy * qw); r21 = 2 * (qy * qz + qx * qw); r22 = 1 - 2 * (x2 + y2);

      let ox = r10 * m20 - r20 * m10 + (r11 * m21 - r21 * m11) + (r12 * m22 - r22 * m12);
      let oy = r20 * m00 - r00 * m20 + (r21 * m01 - r01 * m21) + (r22 * m02 - r02 * m22);
      let oz = r00 * m10 - r10 * m00 + (r01 * m11 - r11 * m01) + (r02 * m12 - r12 * m02);
      const denom = Math.abs(
        r00 * m00 + r10 * m10 + r20 * m20 +
        r01 * m01 + r11 * m11 + r21 * m21 +
        r02 * m02 + r12 * m12 + r22 * m22
      ) + 1e-9;

      ox /= denom;
      oy /= denom;
      oz /= denom;

      const angle = Math.sqrt(ox * ox + oy * oy + oz * oz);
      if (angle < 1e-9) break;

      const s = Math.sin(angle * 0.5) / angle;
      const dx = ox * s, dy = oy * s, dz = oz * s, dw = Math.cos(angle * 0.5);
      const nw = dw * qw - dx * qx - dy * qy - dz * qz;
      const nx = dw * qx + dx * qw + dy * qz - dz * qy;
      const ny = dw * qy - dx * qz + dy * qw + dz * qx;
      const nz = dw * qz + dx * qy - dy * qx + dz * qw;
      const invLen = 1 / Math.sqrt(nx * nx + ny * ny + nz * nz + nw * nw);
      qx = nx * invLen;
      qy = ny * invLen;
      qz = nz * invLen;
      qw = nw * invLen;
    }

    q[0] = qx; q[1] = qy; q[2] = qz; q[3] = qw;
    {
      const x2 = qx * qx, y2 = qy * qy, z2 = qz * qz;
      r00 = 1 - 2 * (y2 + z2); r01 = 2 * (qx * qy - qz * qw); r02 = 2 * (qx * qz + qy * qw);
      r10 = 2 * (qx * qy + qz * qw); r11 = 1 - 2 * (x2 + z2); r12 = 2 * (qy * qz - qx * qw);
      r20 = 2 * (qx * qz - qy * qw); r21 = 2 * (qy * qz + qx * qw); r22 = 1 - 2 * (x2 + y2);
    }

    const det = m00 * (m11 * m22 - m12 * m21) - m01 * (m10 * m22 - m12 * m20) + m02 * (m10 * m21 - m11 * m20);
    let n00, n01, n02, n10, n11, n12, n20, n21, n22;
    if (det > 1e-6) {
      const invCbrt = 1 / Math.cbrt(det);
      n00 = m00 * invCbrt; n01 = m01 * invCbrt; n02 = m02 * invCbrt;
      n10 = m10 * invCbrt; n11 = m11 * invCbrt; n12 = m12 * invCbrt;
      n20 = m20 * invCbrt; n21 = m21 * invCbrt; n22 = m22 * invCbrt;
    } else {
      n00 = r00; n01 = r01; n02 = r02;
      n10 = r10; n11 = r11; n12 = r12;
      n20 = r20; n21 = r21; n22 = r22;
    }

    const beta = body.beta;
    const oneMinusBeta = 1 - beta;
    const rsX = Math.max(scale.x, 0.2);
    const rsY = Math.max(scale.y, 0.2);
    const rsZ = Math.max(scale.z, 0.2);

    const g00 = (beta * n00 + oneMinusBeta * r00) * rsX;
    const g01 = (beta * n01 + oneMinusBeta * r01) * rsY;
    const g02 = (beta * n02 + oneMinusBeta * r02) * rsZ;
    const g10 = (beta * n10 + oneMinusBeta * r10) * rsX;
    const g11 = (beta * n11 + oneMinusBeta * r11) * rsY;
    const g12 = (beta * n12 + oneMinusBeta * r12) * rsZ;
    const g20 = (beta * n20 + oneMinusBeta * r20) * rsX;
    const g21 = (beta * n21 + oneMinusBeta * r21) * rsY;
    const g22 = (beta * n22 + oneMinusBeta * r22) * rsZ;

    const M = body.M.elements;
    const R = body.R.elements;
    M[0] = g00; M[1] = g10; M[2] = g20;
    M[3] = g01; M[4] = g11; M[5] = g21;
    M[6] = g02; M[7] = g12; M[8] = g22;

    R[0] = r00; R[1] = r10; R[2] = r20;
    R[3] = r01; R[4] = r11; R[5] = r21;
    R[6] = r02; R[7] = r12; R[8] = r22;

    body.center.set(cx, cy, cz);

    for (let i = 0; i < len; i += 3) {
      const rx = rest[i], ry = rest[i + 1], rz = rest[i + 2];
      pos[i] += ks * (cx + g00 * rx + g01 * ry + g02 * rz - pos[i]);
      pos[i + 1] += ks * (cy + g10 * rx + g11 * ry + g12 * rz - pos[i + 1]);
      pos[i + 2] += ks * (cz + g20 * rx + g21 * ry + g22 * rz - pos[i + 2]);
    }
  }

  _updateVel(body, dt) {
    const pos = body.pos;
    const old = body._old;
    const vel = body.vel;
    const len = body.n * 3;
    const invDt = 1 / dt;
    const damping = body.damping;

    for (let i = 0; i < len; i += 3) {
      const px = pos[i], py = pos[i + 1], pz = pos[i + 2];
      if (!(px > -20 && px < 20 && pz > -20 && pz < 20 && py > -30 && py < 60)) {
        return false;
      }
      let vx = (px - old[i]) * invDt * damping;
      let vy = (py - old[i + 1]) * invDt * damping;
      let vz = (pz - old[i + 2]) * invDt * damping;
      const speedSq = vx * vx + vy * vy + vz * vz;
      if (speedSq > 625) {
        const s = MAX_VELOCITY / Math.sqrt(speedSq);
        vx *= s;
        vy *= s;
        vz *= s;
      }
      vel[i] = vx;
      vel[i + 1] = vy;
      vel[i + 2] = vz;
    }
    return true;
  }

  _bounds(body, bodyIdx, dt, recordStats) {
    const pos = body.pos;
    const old = body._old;
    const len = body.n * 3;
    const rad = body.radius;
    const ff = this._ff;
    const invDt = 1 / dt;
    const hx = this.halfX;
    const hz = this.halfZ;
    const innerX = hx - rad;
    const innerZ = hz - rad;
    const minFloorY = this.floorY + rad;
    const wt = this.wallThickness;
    const outerX = hx + wt + rad;
    const outerZ = hz + wt + rad;
    const midX = hx + wt / 2;
    const midZ = hz + wt / 2;
    const topY = this.floorY + this.wallHeight + rad;

    let impSum = 0, impCnt = 0, floorCnt = 0;

    for (let i = 0; i < len; i += 3) {
      let px = pos[i], py = pos[i + 1], pz = pos[i + 2];
      const ox = old[i], oz = old[i + 2];

      if (py < minFloorY && px >= -hx && px <= hx && pz >= -hz && pz <= hz) {
        const vy = (py - old[i + 1]) * invDt;
        if (recordStats) {
          floorCnt++;
          if (vy < -0.5) {
            impSum -= vy;
            impCnt++;
          }
        }
        py = minFloorY;
        px -= (px - ox) * ff;
        pz -= (pz - oz) * ff;
      }

      if (py < topY + WALL_SLOPE * (wt + 2 * rad)) {
        const ax = Math.abs(px);
        if (ax > innerX && ax < outerX && Math.abs(pz) < outerZ) {
          const signX = px < 0 ? -1 : 1;
          const oy = old[i + 1];
          if (oy >= topY + WALL_SLOPE * Math.max(0, Math.abs(ox) - innerX) - WALL_EPS) {
            py = Math.max(py, topY + WALL_SLOPE * (ax - innerX));
            px -= (px - ox) * ff;
            pz -= (pz - oz) * ff;
          } else {
            const vx = (px - ox) * invDt * -signX;
            if (recordStats && vx < -0.5) {
              impSum -= vx;
              impCnt++;
            }
            px = Math.abs(ox) < midX ? signX * innerX : signX * outerX;
            py -= (py - oy) * ff;
            pz -= (pz - oz) * ff;
          }
        }

        const az = Math.abs(pz);
        if (az > innerZ && az < outerZ && Math.abs(px) < outerX) {
          const signZ = pz < 0 ? -1 : 1;
          const oy = old[i + 1];
          if (oy >= topY + WALL_SLOPE * Math.max(0, Math.abs(oz) - innerZ) - WALL_EPS) {
            py = Math.max(py, topY + WALL_SLOPE * (az - innerZ));
            px -= (px - ox) * ff;
            pz -= (pz - oz) * ff;
          } else {
            const vz = (pz - oz) * invDt * -signZ;
            if (recordStats && vz < -0.5) {
              impSum -= vz;
              impCnt++;
            }
            pz = Math.abs(oz) < midZ ? signZ * innerZ : signZ * outerZ;
            py -= (py - oy) * ff;
            px -= (px - ox) * ff;
          }
        }
      }

      if (py < minFloorY && px >= -hx && px <= hx && pz >= -hz && pz <= hz) {
        py = minFloorY;
      }

      pos[i] = px;
      pos[i + 1] = py;
      pos[i + 2] = pz;
    }

    if (recordStats) {
      this._impSum[bodyIdx] += impSum;
      this._impCnt[bodyIdx] += impCnt;
      this._floorCnt[bodyIdx] += floorCnt;
    }
  }

  _buildHash() {
    const bodies = this.bodies;
    const numBodies = bodies.length;
    let totalParticles = 0;
    for (let i = 0; i < numBodies; i++) totalParticles += bodies[i].n;

    if (totalParticles > this._rCap) {
      const cap = nextPowerOfTwo(totalParticles);
      const tSize = Math.max(16384, nextPowerOfTwo(cap * 16));
      this._rCap = cap;
      this._tSize = tSize;
      this._refBody = new Int32Array(cap);
      this._refIdx = new Int32Array(cap);
      this._refKey = new Int32Array(cap);
      this._sorted = new Int32Array(cap);
      this._cellStart = new Int32Array(tSize + 1);
      this._fillPos = new Int32Array(tSize);
    }

    const tSize = this._tSize;
    const mask = tSize - 1;
    const cellInv = this._cellInv;
    const refBody = this._refBody;
    const refIdx = this._refIdx;
    const refKey = this._refKey;
    const sorted = this._sorted;
    const cellStart = this._cellStart;
    const fillPos = this._fillPos;

    cellStart.fill(0);
    if (!this._box || this._box.length < numBodies * 6) {
      this._box = new Float32Array(numBodies * 6);
    }
    const box = this._box;
    const pad = 2 / cellInv;

    for (let i = 0; i < numBodies; i++) {
      const pos = bodies[i].pos;
      const len = bodies[i].n * 3;
      let minX = Infinity, minY = Infinity, minZ = Infinity;
      let maxX = -Infinity, maxY = -Infinity, maxZ = -Infinity;
      for (let j = 0; j < len; j += 3) {
        const x = pos[j], y = pos[j + 1], z = pos[j + 2];
        if (x < minX) minX = x; if (x > maxX) maxX = x;
        if (y < minY) minY = y; if (y > maxY) maxY = y;
        if (z < minZ) minZ = z; if (z > maxZ) maxZ = z;
      }
      box.set([minX - pad, minY - pad, minZ - pad, maxX + pad, maxY + pad, maxZ + pad], i * 6);
    }

    let count = 0;
    for (let i = 0; i < numBodies; i++) {
      const b = bodies[i];
      const pos = b.pos;
      const near = (this._near ??= []);
      near.length = 0;

      for (let j = 0; j < numBodies; j++) {
        if (j === i) continue;
        if (
          box[j * 6] > box[i * 6 + 3] || box[j * 6 + 3] < box[i * 6] ||
          box[j * 6 + 1] > box[i * 6 + 4] || box[j * 6 + 4] < box[i * 6 + 1] ||
          box[j * 6 + 2] > box[i * 6 + 5] || box[j * 6 + 5] < box[i * 6 + 2]
        ) continue;
        near.push(j * 6);
      }

      if (near.length) {
        for (let p = 0; p < b.n; p++) {
          const px = pos[p * 3], py = pos[p * 3 + 1], pz = pos[p * 3 + 2];
          let overlaps = false;
          for (let k = 0; k < near.length; k++) {
            const bi = near[k];
            if (
              px >= box[bi] && px <= box[bi + 3] &&
              py >= box[bi + 1] && py <= box[bi + 4] &&
              pz >= box[bi + 2] && pz <= box[bi + 5]
            ) {
              overlaps = true;
              break;
            }
          }
          if (!overlaps) continue;
          const key = (
            Math.imul(Math.floor(px * cellInv), 73856093) ^
            Math.imul(Math.floor(py * cellInv), 19349663) ^
            Math.imul(Math.floor(pz * cellInv), 83492791)
          ) & mask;
          refBody[count] = i;
          refIdx[count] = p;
          refKey[count] = key;
          cellStart[key + 1]++;
          count++;
        }
      }
    }

    for (let i = 0; i < tSize; i++) cellStart[i + 1] += cellStart[i];
    fillPos.set(cellStart.subarray(0, tSize));
    for (let i = 0; i < count; i++) {
      sorted[fillPos[refKey[i]]++] = i;
    }
    this._refCount = count;
  }

  _collide(dt, recordStats) {
    const refCount = this._refCount;
    const mask = this._tSize - 1;
    const cellInv = this._cellInv;
    const invDt = 1 / dt;
    const refBody = this._refBody;
    const refIdx = this._refIdx;
    const sorted = this._sorted;
    const cellStart = this._cellStart;
    const posArrs = this._posArrs;
    const oldArrs = this._oldArrs;
    const rad = this._rad;
    const innerArrs = this._innerArrs;
    const cenArrs = this._cenArrs;
    const impSum = this._impSum;
    const impCnt = this._impCnt;
    const frictionHalf = this._ff * 0.5;

    for (let i = 0; i < refCount; i++) {
      const bA = refBody[i];
      const posA = posArrs[bA];
      const oldA = oldArrs[bA];
      const idxA = refIdx[i] * 3;
      const radA = rad[bA];
      let ax = posA[idxA], ay = posA[idxA + 1], az = posA[idxA + 2];
      const cx = Math.floor(ax * cellInv);
      const cy = Math.floor(ay * cellInv);
      const cz = Math.floor(az * cellInv);

      for (let dz = -1; dz <= 1; dz++) {
        const hz = Math.imul(cz + dz, 83492791);
        for (let dy = -1; dy <= 1; dy++) {
          const hyz = Math.imul(cy + dy, 19349663) ^ hz;
          for (let dx = -1; dx <= 1; dx++) {
            const cell = (Math.imul(cx + dx, 73856093) ^ hyz) & mask;
            const end = cellStart[cell + 1];
            for (let k = cellStart[cell]; k < end; k++) {
              const j = sorted[k];
              if (j <= i) continue;
              const bB = refBody[j];
              if (bB === bA) continue;

              const posB = posArrs[bB];
              const idxB = refIdx[j] * 3;
              const rx = ax - posB[idxB];
              const ry = ay - posB[idxB + 1];
              const rz = az - posB[idxB + 2];
              const minDist = radA + rad[bB];
              const distSq = rx * rx + ry * ry + rz * rz;
              if (distSq >= minDist * minDist) continue;

              const dist = Math.sqrt(distSq);
              let nx = 0, ny = 1, nz = 0;
              if (innerArrs[bA][refIdx[i]] || innerArrs[bB][refIdx[j]]) {
                const cA = cenArrs[bA], cB = cenArrs[bB];
                const cdx = cA.x - cB.x, cdy = cA.y - cB.y, cdz = cA.z - cB.z;
                const cLen = Math.sqrt(cdx * cdx + cdy * cdy + cdz * cdz);
                if (cLen > 1e-6) {
                  nx = cdx / cLen; ny = cdy / cLen; nz = cdz / cLen;
                }
              } else if (dist > 1e-6) {
                const invDist = 1 / dist;
                nx = rx * invDist; ny = ry * invDist; nz = rz * invDist;
              }

              const oldB = oldArrs[bB];
              if (recordStats) {
                const relVn = (
                  (ax - oldA[idxA] - posB[idxB] + oldB[idxB]) * nx +
                  (ay - oldA[idxA + 1] - posB[idxB + 1] + oldB[idxB + 1]) * ny +
                  (az - oldA[idxA + 2] - posB[idxB + 2] + oldB[idxB + 2]) * nz
                ) * invDt;
                if (relVn < -0.5) {
                  impSum[bA] -= relVn;
                  impCnt[bA]++;
                  impSum[bB] -= relVn;
                  impCnt[bB]++;
                }
              }

              const corr = 0.5 * (minDist - dist);
              ax += nx * corr; ay += ny * corr; az += nz * corr;
              posB[idxB] -= nx * corr; posB[idxB + 1] -= ny * corr; posB[idxB + 2] -= nz * corr;

              const dvx = ax - oldA[idxA] - posB[idxB] + oldB[idxB];
              const dvy = ay - oldA[idxA + 1] - posB[idxB + 1] + oldB[idxB + 1];
              const dvz = az - oldA[idxA + 2] - posB[idxB + 2] + oldB[idxB + 2];
              const dvn = dvx * nx + dvy * ny + dvz * nz;
              const tx = (dvx - dvn * nx) * frictionHalf;
              const ty = (dvy - dvn * ny) * frictionHalf;
              const tz = (dvz - dvn * nz) * frictionHalf;
              ax -= tx; ay -= ty; az -= tz;
              posB[idxB] += tx; posB[idxB + 1] += ty; posB[idxB + 2] += tz;
            }
          }
        }
      }
      posA[idxA] = ax; posA[idxA + 1] = ay; posA[idxA + 2] = az;
    }
  }

  pick(origin, direction) {
    let dx = direction.x, dy = direction.y, dz = direction.z;
    const len = Math.sqrt(dx * dx + dy * dy + dz * dz) || 1;
    dx /= len; dy /= len; dz /= len;

    let bestDist = Infinity;
    let bestBody = null;
    let bestIdx = -1;

    for (const body of this.bodies) {
      const pos = body.pos;
      const r = body.radius * 1.5;
      const rSq = r * r;
      for (let i = 0; i < body.n; i++) {
        const vx = pos[i * 3] - origin.x;
        const vy = pos[i * 3 + 1] - origin.y;
        const vz = pos[i * 3 + 2] - origin.z;
        const proj = vx * dx + vy * dy + vz * dz;
        if (proj < -r) continue;
        const perpSq = vx * vx + vy * vy + vz * vz - proj * proj;
        if (perpSq > rSq) continue;
        const hitDist = Math.max(0, proj - Math.sqrt(rSq - perpSq));
        if (hitDist < bestDist) {
          bestDist = hitDist;
          bestBody = body;
          bestIdx = i;
        }
      }
    }

    return bestBody
      ? {
          body: bestBody,
          index: bestIdx,
          distance: bestDist,
          point: new THREE.Vector3(
            origin.x + dx * bestDist,
            origin.y + dy * bestDist,
            origin.z + dz * bestDist
          ),
        }
      : null;
  }

  grab(body, index, point) {
    this.release();
    const pos = body.pos;
    const R = body.R.elements;
    const base = index * 3;
    const gx = pos[base], gy = pos[base + 1], gz = pos[base + 2];
    const grabRad = GRAB_RADIUS_FACTOR * 2 * body.radius;
    const grabRadSq = grabRad * grabRad;
    const ids = [], weights = [], offsets = [];

    for (let i = 0; i < body.n; i++) {
      const dx = pos[i * 3] - gx;
      const dy = pos[i * 3 + 1] - gy;
      const dz = pos[i * 3 + 2] - gz;
      const dSq = dx * dx + dy * dy + dz * dz;
      if (dSq >= grabRadSq) continue;
      const t = 1 - Math.sqrt(dSq) / grabRad;
      ids.push(i);
      weights.push(t * t * (3 - 2 * t));
      offsets.push(
        R[0] * dx + R[1] * dy + R[2] * dz,
        R[3] * dx + R[4] * dy + R[5] * dz,
        R[6] * dx + R[7] * dy + R[8] * dz
      );
    }

    this._grab = {
      body,
      target: point.clone(),
      count: ids.length,
      ids: Int32Array.from(ids),
      w: Float32Array.from(weights),
      off: Float32Array.from(offsets),
    };
  }

  moveGrab(target) {
    if (this._grab) this._grab.target.copy(target);
  }

  release() {
    const grab = this._grab;
    if (!grab) return;
    this._grab = null;
    const vel = grab.body.vel;
    const len = grab.body.n * 3;
    for (let i = 0; i < len; i += 3) {
      const sSq = vel[i] * vel[i] + vel[i + 1] * vel[i + 1] + vel[i + 2] * vel[i + 2];
      if (sSq > 196) {
        const scale = MAX_RELEASE_VEL / Math.sqrt(sSq);
        vel[i] *= scale;
        vel[i + 1] *= scale;
        vel[i + 2] *= scale;
      }
    }
  }

  poke(body, point, direction, strength) {
    const pos = body.pos;
    const vel = body.vel;
    const radius = 0.45;
    for (let i = 0; i < body.n * 3; i += 3) {
      const dx = pos[i] - point.x;
      const dy = pos[i + 1] - point.y;
      const dz = pos[i + 2] - point.z;
      const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
      if (dist >= radius) continue;
      const t = 1 - dist / radius;
      const impulse = t * t * (3 - 2 * t) * strength;
      vel[i] += direction.x * impulse;
      vel[i + 1] += direction.y * impulse;
      vel[i + 2] += direction.z * impulse;
    }
  }

  shake(impulse) {
    const spread = 0.3 * Math.sqrt(impulse.x * impulse.x + impulse.y * impulse.y + impulse.z * impulse.z);
    for (const body of this.bodies) {
      const rx = (Math.random() - 0.5) * spread;
      const ry = Math.random() * spread * 0.5;
      const rz = (Math.random() - 0.5) * spread;
      const vel = body.vel;
      for (let i = 0; i < body.n * 3; i += 3) {
        vel[i] += impulse.x + rx;
        vel[i + 1] += impulse.y + ry;
        vel[i + 2] += impulse.z + rz;
      }
    }
  }
}

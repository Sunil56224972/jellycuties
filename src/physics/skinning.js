/**
 * Soft-Body Mesh Skinning & Anchor Binding
 *
 * Binds high-resolution surface mesh vertices and facial feature anchors
 * to the 4 nearest interior physics particles using inverse-distance weights.
 *
 * @author Sunil
 * @license MIT
 */

import * as THREE from "three";

const WEIGHT_COUNT = 4;

function computeBindings(restParticles, numParticles, points, numPoints) {
  const idx = new Uint16Array(numPoints * WEIGHT_COUNT);
  const w = new Float32Array(numPoints * WEIGHT_COUNT);
  const off = new Float32Array(numPoints * 3);
  const bestIdx = new Int32Array(WEIGHT_COUNT);
  const bestDistSq = new Float64Array(WEIGHT_COUNT);

  for (let i = 0; i < numPoints; i++) {
    const px = points[i * 3];
    const py = points[i * 3 + 1];
    const pz = points[i * 3 + 2];
    bestDistSq.fill(Infinity);
    bestIdx.fill(0);

    for (let p = 0; p < numParticles; p++) {
      const dx = px - restParticles[p * 3];
      const dy = py - restParticles[p * 3 + 1];
      const dz = pz - restParticles[p * 3 + 2];
      const dSq = dx * dx + dy * dy + dz * dz;
      if (dSq >= bestDistSq[3]) continue;
      let k = 3;
      while (k > 0 && bestDistSq[k - 1] > dSq) {
        bestDistSq[k] = bestDistSq[k - 1];
        bestIdx[k] = bestIdx[k - 1];
        k--;
      }
      bestDistSq[k] = dSq;
      bestIdx[k] = p;
    }

    let weightSum = 0;
    let ox = 0, oy = 0, oz = 0;
    const rawW = [0, 0, 0, 0];

    for (let k = 0; k < WEIGHT_COUNT; k++) {
      if (bestDistSq[k] === Infinity) {
        bestIdx[k] = bestIdx[0];
        bestDistSq[k] = bestDistSq[0];
      }
      const d = Math.sqrt(bestDistSq[k]) + 0.02;
      rawW[k] = 1 / (d * d);
      weightSum += rawW[k];
    }

    for (let k = 0; k < WEIGHT_COUNT; k++) {
      const p = bestIdx[k];
      const wk = rawW[k] / weightSum;
      idx[i * WEIGHT_COUNT + k] = p;
      w[i * WEIGHT_COUNT + k] = wk;
      ox += wk * (px - restParticles[p * 3]);
      oy += wk * (py - restParticles[p * 3 + 1]);
      oz += wk * (pz - restParticles[p * 3 + 2]);
    }

    off[i * 3] = ox;
    off[i * 3 + 1] = oy;
    off[i * 3 + 2] = oz;
  }

  return { idx, w, off };
}

export function createSkinBinding(body, geometry, anchors) {
  const posAttr = geometry.attributes.position;
  posAttr.setUsage(THREE.DynamicDrawUsage);
  const posArr = posAttr.array;
  const vertCount = posAttr.count;
  const rest = body.rest;
  const numParticles = body.n;

  const meshBind = computeBindings(rest, numParticles, Float32Array.from(posArr), vertCount);
  const indexArr = geometry.index.array;

  if (!geometry.attributes.normal) {
    geometry.setAttribute("normal", new THREE.BufferAttribute(new Float32Array(vertCount * 3), 3));
  }
  const normAttr = geometry.attributes.normal;
  normAttr.setUsage(THREE.DynamicDrawUsage);
  const normArr = normAttr.array;

  let maxRadSq = 0;
  for (let i = 0; i < vertCount * 3; i += 3) {
    maxRadSq = Math.max(maxRadSq, posArr[i] ** 2 + posArr[i + 1] ** 2 + posArr[i + 2] ** 2);
  }
  geometry.boundingSphere = new THREE.Sphere(new THREE.Vector3(), Math.sqrt(maxRadSq) * 2);

  const numAnchors = anchors.length;
  const anchorRestPos = new Float32Array(numAnchors * 3);
  const anchorRestNorm = new Float32Array(numAnchors * 3);
  for (let i = 0; i < numAnchors; i++) {
    anchorRestPos.set(anchors[i].pos, i * 3);
    anchorRestNorm.set(anchors[i].normal, i * 3);
  }

  const anchorBind = computeBindings(rest, numParticles, anchorRestPos, numAnchors);
  const anchorPos = new Float32Array(numAnchors * 3);
  const anchorNormal = new Float32Array(numAnchors * 3);

  function update() {
    const p = body.pos;
    const M = body.M.elements;
    const m00 = M[0], m10 = M[1], m20 = M[2];
    const m01 = M[3], m11 = M[4], m21 = M[5];
    const m02 = M[6], m12 = M[7], m22 = M[8];

    const { idx, w, off } = meshBind;
    for (let i = 0; i < vertCount; i++) {
      const b = i * WEIGHT_COUNT;
      const i0 = idx[b] * 3, i1 = idx[b + 1] * 3, i2 = idx[b + 2] * 3, i3 = idx[b + 3] * 3;
      const w0 = w[b], w1 = w[b + 1], w2 = w[b + 2], w3 = w[b + 3];
      const ox = off[i * 3], oy = off[i * 3 + 1], oz = off[i * 3 + 2];

      posArr[i * 3] = w0 * p[i0] + w1 * p[i1] + w2 * p[i2] + w3 * p[i3] + m00 * ox + m01 * oy + m02 * oz;
      posArr[i * 3 + 1] = w0 * p[i0 + 1] + w1 * p[i1 + 1] + w2 * p[i2 + 1] + w3 * p[i3 + 1] + m10 * ox + m11 * oy + m12 * oz;
      posArr[i * 3 + 2] = w0 * p[i0 + 2] + w1 * p[i1 + 2] + w2 * p[i2 + 2] + w3 * p[i3 + 2] + m20 * ox + m21 * oy + m22 * oz;
    }
    posAttr.needsUpdate = true;

    normArr.fill(0);
    for (let i = 0; i < indexArr.length; i += 3) {
      const a = indexArr[i] * 3;
      const b = indexArr[i + 1] * 3;
      const c = indexArr[i + 2] * 3;
      const abx = posArr[b] - posArr[a], aby = posArr[b + 1] - posArr[a + 1], abz = posArr[b + 2] - posArr[a + 2];
      const acx = posArr[c] - posArr[a], acy = posArr[c + 1] - posArr[a + 1], acz = posArr[c + 2] - posArr[a + 2];
      const nx = aby * acz - abz * acy;
      const ny = abz * acx - abx * acz;
      const nz = abx * acy - aby * acx;
      normArr[a] += nx; normArr[a + 1] += ny; normArr[a + 2] += nz;
      normArr[b] += nx; normArr[b + 1] += ny; normArr[b + 2] += nz;
      normArr[c] += nx; normArr[c + 1] += ny; normArr[c + 2] += nz;
    }

    for (let i = 0; i < vertCount * 3; i += 3) {
      const invLen = 1 / (Math.hypot(normArr[i], normArr[i + 1], normArr[i + 2]) || 1);
      normArr[i] *= invLen;
      normArr[i + 1] *= invLen;
      normArr[i + 2] *= invLen;
    }
    normAttr.needsUpdate = true;
    geometry.boundingSphere.center.copy(body.center);

    // Cofactor matrix for normal transformation
    const c00 = m11 * m22 - m12 * m21;
    const c01 = m12 * m20 - m10 * m22;
    const c02 = m10 * m21 - m11 * m20;
    const c10 = m02 * m21 - m01 * m22;
    const c11 = m00 * m22 - m02 * m20;
    const c12 = m01 * m20 - m00 * m21;
    const c20 = m01 * m12 - m02 * m11;
    const c21 = m02 * m10 - m00 * m12;
    const c22 = m00 * m11 - m01 * m10;
    const detSign = m00 * c00 + m01 * c01 + m02 * c02 < 0 ? -1 : 1;

    const { idx: aIdx, w: aW, off: aOff } = anchorBind;
    for (let i = 0; i < numAnchors; i++) {
      const b = i * WEIGHT_COUNT;
      const i0 = aIdx[b] * 3, i1 = aIdx[b + 1] * 3, i2 = aIdx[b + 2] * 3, i3 = aIdx[b + 3] * 3;
      const w0 = aW[b], w1 = aW[b + 1], w2 = aW[b + 2], w3 = aW[b + 3];
      const ox = aOff[i * 3], oy = aOff[i * 3 + 1], oz = aOff[i * 3 + 2];

      anchorPos[i * 3] = w0 * p[i0] + w1 * p[i1] + w2 * p[i2] + w3 * p[i3] + m00 * ox + m01 * oy + m02 * oz;
      anchorPos[i * 3 + 1] = w0 * p[i0 + 1] + w1 * p[i1 + 1] + w2 * p[i2 + 1] + w3 * p[i3 + 1] + m10 * ox + m11 * oy + m12 * oz;
      anchorPos[i * 3 + 2] = w0 * p[i0 + 2] + w1 * p[i1 + 2] + w2 * p[i2 + 2] + w3 * p[i3 + 2] + m20 * ox + m21 * oy + m22 * oz;

      const rnx = anchorRestNorm[i * 3], rny = anchorRestNorm[i * 3 + 1], rnz = anchorRestNorm[i * 3 + 2];
      let tnx = detSign * (c00 * rnx + c01 * rny + c02 * rnz);
      let tny = detSign * (c10 * rnx + c11 * rny + c12 * rnz);
      let tnz = detSign * (c20 * rnx + c21 * rny + c22 * rnz);
      const nLen = Math.sqrt(tnx * tnx + tny * tny + tnz * tnz);
      if (nLen > 1e-8) {
        tnx /= nLen; tny /= nLen; tnz /= nLen;
      } else {
        tnx = rnx; tny = rny; tnz = rnz;
      }
      anchorNormal[i * 3] = tnx;
      anchorNormal[i * 3 + 1] = tny;
      anchorNormal[i * 3 + 2] = tnz;
    }
  }

  update();
  return { update, anchorPos, anchorNormal };
}

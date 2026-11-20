/**
 * Procedural SDF Animal Species Models & Surface Net Mesher
 *
 * Generates smooth needle-felted animal meshes and interior physics particle
 * clouds from smooth-blended Signed Distance Field primitives.
 *
 * @author Sunil
 * @license MIT
 */

import * as THREE from "three";
import { createFeltMaterial } from "../shaders/felt.js";
import { PERF } from "../core/perf.js";

export const SPECIES_NAMES = [
  "bear",
  "bunny",
  "cat",
  "frog",
  "chick",
  "pig",
  "penguin",
  "seal",
];

const primSphere = (c, r, k = 0.1) => ({ t: 0, c, r, k });
const primEllipsoid = (c, r, k = 0.1) => ({ t: 1, c, r, k });
const primCapsule = (a, b, r, k = 0.1) => ({ t: 2, a, b, r, k });
const primCone = (a, b, r1, r2, k = 0.1) => ({ t: 3, a, b, r1, r2, k });

const mirrorX = (v) => [-v[0], v[1], v[2]];
const mirrorPrim = (p) => ({
  ...p,
  c: p.c && mirrorX(p.c),
  a: p.a && mirrorX(p.a),
  b: p.b && mirrorX(p.b),
});
const symmetric = (...prims) => prims.flatMap((p) => [p, mirrorPrim(p)]);

function evalPrim(p, x, y, z) {
  switch (p.t) {
    case 0:
      return Math.hypot(x - p.c[0], y - p.c[1], z - p.c[2]) - p.r;
    case 1: {
      const dx = x - p.c[0], dy = y - p.c[1], dz = z - p.c[2];
      const r = p.r;
      const k0 = Math.hypot(dx / r[0], dy / r[1], dz / r[2]);
      const k1 = Math.hypot(dx / (r[0] * r[0]), dy / (r[1] * r[1]), dz / (r[2] * r[2]));
      return k1 < 1e-9 ? -Math.min(r[0], r[1], r[2]) : (k0 * (k0 - 1)) / k1;
    }
    case 2: {
      const pax = x - p.a[0], pay = y - p.a[1], paz = z - p.a[2];
      const bax = p.b[0] - p.a[0], bay = p.b[1] - p.a[1], baz = p.b[2] - p.a[2];
      const h = Math.min(1, Math.max(0, (pax * bax + pay * bay + paz * baz) / (bax * bax + bay * bay + baz * baz)));
      return Math.hypot(pax - bax * h, pay - bay * h, paz - baz * h) - p.r;
    }
    default: {
      const pax = x - p.a[0], pay = y - p.a[1], paz = z - p.a[2];
      const bax = p.b[0] - p.a[0], bay = p.b[1] - p.a[1], baz = p.b[2] - p.a[2];
      const l2 = bax * bax + bay * bay + baz * baz;
      const rr = p.r1 - p.r2;
      const a2 = l2 - rr * rr;
      const il2 = 1 / l2;
      const yDot = pax * bax + pay * bay + paz * baz;
      const y2 = yDot - l2;
      const x0 = pax * l2 - bax * yDot;
      const x1 = pay * l2 - bay * yDot;
      const x2 = paz * l2 - baz * yDot;
      const xLenSq = x0 * x0 + x1 * x1 + x2 * x2;
      const yDotSq = yDot * yDot * l2;
      const y2Sq = y2 * y2 * l2;
      const k = Math.sign(rr) * rr * rr * xLenSq;
      if (Math.sign(y2) * a2 * y2Sq > k) return Math.sqrt(xLenSq + y2Sq) * il2 - p.r2;
      if (Math.sign(yDot) * a2 * yDotSq < k) return Math.sqrt(xLenSq + yDotSq) * il2 - p.r1;
      return (Math.sqrt(xLenSq * a2 * il2) + yDot * rr) * il2 - p.r1;
    }
  }
}

function evalSDF(prims, x, y, z) {
  let d = evalPrim(prims[0], x, y, z);
  for (let i = 1; i < prims.length; i++) {
    const p = prims[i];
    const di = evalPrim(p, x, y, z);
    const h = Math.max(p.k - Math.abs(d - di), 0) / p.k;
    d = Math.min(d, di) - h * h * p.k * 0.25;
  }
  return d;
}

const colorPatches = (prims, color) => prims.map((p) => [p, color]);

export const SPECIES_DEFS = {
  bear: {
    pitch: 220,
    color: "#dcc4a3",
    prims: [
      primEllipsoid([0, 0.34, 0], [0.31, 0.34, 0.27], 0.12),
      primSphere([0, 0.71, 0.03], 0.26, 0.12),
      ...symmetric(primSphere([0.19, 0.93, -0.01], 0.11, 0.08)),
      primEllipsoid([0, 0.65, 0.24], [0.11, 0.075, 0.09], 0.06),
      ...symmetric(primCone([0.26, 0.52, 0.03], [0.42, 0.38, 0.1], 0.11, 0.1, 0.1)),
      ...symmetric(primCapsule([0.17, 0.12, 0], [0.19, 0.12, 0.2], 0.12, 0.1)),
    ],
    patches: [
      ...colorPatches(symmetric(primSphere([0.2, 0.95, 0.07], 0.065)), "#e6ab9b"),
      [primEllipsoid([0, 0.65, 0.3], [0.12, 0.085, 0.07]), "#f3e9d8"],
    ],
    face: {
      head: [0, 0.71, 0.03],
      eye: [26, 10],
      cheek: [50, -14],
      mouth: [[0, 0.65, 0.24], 0, "bear"],
      size: 0.1,
    },
  },
  bunny: {
    pitch: 330,
    color: "#9c8b7d",
    prims: [
      primEllipsoid([0, 0.38, 0], [0.38, 0.38, 0.33], 0.12),
      primEllipsoid([0, 0.58, 0.05], [0.36, 0.28, 0.3], 0.14),
      primEllipsoid([0, 0.13, -0.03], [0.28, 0.13, 0.25], 0.1),
      ...symmetric(primCone([0.31, 0.76, 0.07], [0.4, 0.36, 0.11], 0.09, 0.11, 0.03)),
      primSphere([0, 0.24, -0.33], 0.09, 0.06),
      ...symmetric(primEllipsoid([0.2, 0.1, 0.21], [0.12, 0.1, 0.13], 0.08)),
    ],
    patches: [
      [primEllipsoid([0, 0.56, 0.3], [0.15, 0.1, 0.08]), "#efe4d2"],
      [primEllipsoid([0, 0.3, 0.29], [0.24, 0.22, 0.1]), "#efe4d2"],
      [primSphere([0, 0.24, -0.4], 0.09), "#efe4d2"],
    ],
    face: {
      head: [0, 0.58, 0.05],
      eye: [30, 8],
      cheek: [52, -12],
      mouth: [[0, 0.56, 0.3], 0, "bear"],
      size: 0.135,
    },
  },
  cat: {
    pitch: 294,
    color: "#dc975a",
    prims: [
      primEllipsoid([0, 0.38, 0], [0.37, 0.38, 0.32], 0.12),
      primEllipsoid([0, 0.6, 0.04], [0.37, 0.27, 0.29], 0.14),
      primEllipsoid([0, 0.13, -0.03], [0.28, 0.13, 0.25], 0.1),
      ...symmetric(primCone([0.23, 0.8, 0], [0.28, 0.97, -0.01], 0.11, 0.035, 0.06)),
      primCapsule([0.1, 0.12, -0.3], [0.3, 0.12, -0.2], 0.07, 0.06),
      ...symmetric(primEllipsoid([0.2, 0.1, 0.22], [0.11, 0.1, 0.12], 0.08)),
    ],
    patches: [
      [primEllipsoid([0, 0.57, 0.3], [0.15, 0.1, 0.08]), "#f3e6cf"],
      [primEllipsoid([0, 0.32, 0.28], [0.23, 0.24, 0.1]), "#f3e6cf"],
      [primEllipsoid([0, 0.83, 0.17], [0.035, 0.09, 0.1]), "#b8682f"],
      ...colorPatches(symmetric(primEllipsoid([0.1, 0.81, 0.18], [0.03, 0.08, 0.1])), "#b8682f"),
      ...colorPatches(
        symmetric(
          primEllipsoid([0.37, 0.5, 0], [0.08, 0.035, 0.18]),
          primEllipsoid([0.38, 0.37, 0], [0.08, 0.035, 0.2])
        ),
        "#b8682f"
      ),
      ...colorPatches(symmetric(primSphere([0.26, 0.88, 0.05], 0.045)), "#e8a99a"),
    ],
    face: {
      head: [0, 0.6, 0.04],
      eye: [30, 8],
      cheek: [54, -12],
      mouth: [null, -14, "cat"],
      size: 0.135,
    },
  },
  frog: {
    pitch: 185,
    color: "#97ab7c",
    prims: [
      primEllipsoid([0, 0.3, 0], [0.36, 0.3, 0.32], 0.12),
      primEllipsoid([0, 0.5, 0.08], [0.38, 0.26, 0.3], 0.12),
      ...symmetric(primSphere([0.2, 0.74, 0.12], 0.15, 0.08)),
      ...symmetric(primEllipsoid([0.3, 0.15, -0.08], [0.14, 0.15, 0.2], 0.1)),
      ...symmetric(primEllipsoid([0.26, 0.11, 0.25], [0.11, 0.11, 0.14], 0.08)),
    ],
    patches: [[primEllipsoid([0, 0.22, 0.3], [0.22, 0.16, 0.1]), "#ebe5cc"]],
    face: {
      head: [0, 0.5, 0.08],
      eye: [16, 12, [0.2, 0.74, 0.12]],
      cheek: [55, -10],
      mouth: [null, -14, "frog"],
      size: 0.11,
    },
  },
  chick: {
    pitch: 440,
    color: "#efd27a",
    prims: [
      primEllipsoid([0, 0.43, 0], [0.36, 0.43, 0.32], 0.12),
      primEllipsoid([0, 0.68, 0.04], [0.33, 0.26, 0.28], 0.14),
      primEllipsoid([0, 0.23, 0], [0.42, 0.23, 0.38], 0.05),
      primEllipsoid([0, 0.4, 0], [0.42, 0.05, 0.38], 0.04),
      primEllipsoid([0, 0.65, 0.3], [0.08, 0.045, 0.07], 0.04),
      ...symmetric(primEllipsoid([0.35, 0.5, 0.03], [0.08, 0.11, 0.1], 0.06)),
    ],
    patches: [
      [primEllipsoid([0, 0, 0], [2, 0.44, 2]), "#f7f2e8"],
      ...Array.from({ length: 10 }, (_, idx) => {
        const angle = (idx / 10) * Math.PI * 2;
        return [primSphere([0.42 * Math.sin(angle), 0.47, 0.38 * Math.cos(angle)], 0.08), "#f7f2e8"];
      }),
      [primEllipsoid([0, 0.65, 0.33], [0.1, 0.06, 0.08]), "#e69a4a"],
    ],
    face: {
      head: [0, 0.68, 0.04],
      eye: [30, 10],
      cheek: [54, -12],
      mouth: [[0, 0.65, 0.3], 0, "none"],
      size: 0.13,
    },
  },
  pig: {
    pitch: 165,
    color: "#eeb2a2",
    prims: [
      primEllipsoid([0, 0.36, 0], [0.38, 0.36, 0.33], 0.12),
      primEllipsoid([0, 0.56, 0.05], [0.38, 0.26, 0.3], 0.14),
      primEllipsoid([0, 0.54, 0.33], [0.12, 0.08, 0.05], 0.03),
      primEllipsoid([0, 0.13, -0.03], [0.28, 0.13, 0.25], 0.1),
      ...symmetric(primEllipsoid([0.27, 0.79, 0.12], [0.13, 0.05, 0.13], 0.04)),
      primSphere([0, 0.3, -0.33], 0.07, 0.05),
      ...symmetric(primEllipsoid([0.2, 0.1, 0.22], [0.12, 0.1, 0.12], 0.08)),
    ],
    patches: [
      [primEllipsoid([0, 0.54, 0.38], [0.13, 0.09, 0.05]), "#e5978a"],
      [primEllipsoid([0, 0.3, 0.28], [0.24, 0.2, 0.1]), "#f6e8d6"],
    ],
    face: {
      head: [0, 0.56, 0.05],
      eye: [30, 12],
      cheek: [55, -12],
      mouth: [[0, 0.54, 0.33], 0, "pig"],
      size: 0.135,
    },
  },
  penguin: {
    pitch: 247,
    color: "#7d8bad",
    prims: [
      primEllipsoid([0, 0.45, 0], [0.36, 0.45, 0.32], 0.12),
      primEllipsoid([0, 0.76, 0.03], [0.28, 0.22, 0.26], 0.15),
      primEllipsoid([0, 0.7, 0.26], [0.09, 0.055, 0.09], 0.04),
      ...symmetric(primCone([0.33, 0.6, 0], [0.5, 0.4, 0.04], 0.1, 0.08, 0.08)),
      ...symmetric(primEllipsoid([0.14, 0.06, 0.15], [0.12, 0.06, 0.17], 0.06)),
    ],
    patches: [
      ...colorPatches(symmetric(primEllipsoid([0.1, 0.74, 0.22], [0.16, 0.17, 0.15])), "#f3ecdf"),
      [primEllipsoid([0, 0.36, 0.26], [0.26, 0.28, 0.12]), "#f3ecdf"],
      [primEllipsoid([0, 0.7, 0.3], [0.1, 0.07, 0.09]), "#e2a43c"],
      ...colorPatches(symmetric(primEllipsoid([0.14, 0.05, 0.16], [0.14, 0.07, 0.19])), "#e2a43c"),
    ],
    face: {
      head: [0, 0.76, 0.03],
      eye: [28, 10],
      cheek: [55, -14],
      mouth: [[0, 0.7, 0.26], 0, "none"],
      size: 0.1,
    },
  },
  seal: {
    pitch: 196,
    color: "#cdc8d4",
    prims: [
      primCapsule([0, 0.28, -0.38], [0, 0.34, 0.1], 0.28, 0.1),
      primSphere([0, 0.62, 0.3], 0.26, 0.12),
      primEllipsoid([0, 0.55, 0.5], [0.12, 0.08, 0.1], 0.05),
      ...symmetric(primCone([0.06, 0.2, -0.55], [0.2, 0.2, -0.8], 0.11, 0.09, 0.06)),
      ...symmetric(primCone([0.25, 0.28, 0.1], [0.42, 0.14, 0.2], 0.1, 0.08, 0.08)),
    ],
    patches: [
      [primEllipsoid([0, 0.55, 0.56], [0.13, 0.09, 0.08]), "#f3ecdf"],
      ...colorPatches(symmetric(primEllipsoid([0.14, 0.2, -0.75], [0.15, 0.1, 0.14])), "#bdb6c6"),
    ],
    face: {
      head: [0, 0.62, 0.3],
      eye: [26, 18],
      cheek: [50, -12],
      mouth: [[0, 0.55, 0.5], 0, "cat"],
      size: 0.1,
      whiskers: true,
    },
  },
};

const CUBE_EDGES = [
  [0, 1], [2, 3], [4, 5], [6, 7],
  [0, 2], [1, 3], [4, 6], [5, 7],
  [0, 4], [1, 5], [2, 6], [3, 7],
];

function sdfGradient(fn, x, y, z, eps = 0.004) {
  return [
    (fn(x + eps, y, z) - fn(x - eps, y, z)) / (2 * eps),
    (fn(x, y + eps, z) - fn(x, y - eps, z)) / (2 * eps),
    (fn(x, y, z + eps) - fn(x, y, z - eps)) / (2 * eps),
  ];
}

function extractIsoSurface(fn, minB, maxB, step) {
  const dims = [0, 1, 2].map((i) => Math.ceil((maxB[i] - minB[i]) / step) + 1);
  const [nx, ny, nz] = dims;
  const strides = [1, nx, nx * ny];
  const grid = new Float32Array(nx * ny * nz);

  for (let z = 0; z < nz; z++) {
    for (let y = 0; y < ny; y++) {
      for (let x = 0; x < nx; x++) {
        grid[x + nx * (y + ny * z)] = fn(minB[0] + x * step, minB[1] + y * step, minB[2] + z * step);
      }
    }
  }

  const cellVert = new Int32Array(grid.length).fill(-1);
  const verts = [];
  const cornerVal = new Float32Array(8);

  for (let z = 0; z < nz - 1; z++) {
    for (let y = 0; y < ny - 1; y++) {
      for (let x = 0; x < nx - 1; x++) {
        let inside = 0;
        for (let c = 0; c < 8; c++) {
          const val = grid[x + (c & 1) + nx * (y + ((c >> 1) & 1) + ny * (z + (c >> 2)))];
          cornerVal[c] = val;
          if (val < 0) inside++;
        }
        if (inside === 0 || inside === 8) continue;

        let cx = 0, cy = 0, cz = 0, edgeCount = 0;
        for (const [e0, e1] of CUBE_EDGES) {
          const v0 = cornerVal[e0], v1 = cornerVal[e1];
          if (v0 < 0 === v1 < 0) continue;
          const t = v0 / (v0 - v1);
          cx += (e0 & 1) + t * ((e1 & 1) - (e0 & 1));
          cy += ((e0 >> 1) & 1) + t * (((e1 >> 1) & 1) - ((e0 >> 1) & 1));
          cz += (e0 >> 2) + t * ((e1 >> 2) - (e0 >> 2));
          edgeCount++;
        }

        let px = minB[0] + (x + cx / edgeCount) * step;
        let py = minB[1] + (y + cy / edgeCount) * step;
        let pz = minB[2] + (z + cz / edgeCount) * step;

        for (let iter = 0; iter < 3; iter++) {
          const val = fn(px, py, pz);
          const g = sdfGradient(fn, px, py, pz);
          const gLenSq = g[0] * g[0] + g[1] * g[1] + g[2] * g[2];
          if (gLenSq < 1e-9) break;
          px -= (g[0] * val) / gLenSq;
          py -= (g[1] * val) / gLenSq;
          pz -= (g[2] * val) / gLenSq;
        }

        cellVert[x + nx * (y + ny * z)] = verts.length / 3;
        verts.push(px, py, pz);
      }
    }
  }

  const indices = [];
  for (let z = 0; z < nz; z++) {
    for (let y = 0; y < ny; y++) {
      for (let x = 0; x < nx; x++) {
        const coord = [x, y, z];
        const idx = x + nx * (y + ny * z);
        for (let axis = 0; axis < 3; axis++) {
          const a1 = (axis + 1) % 3;
          const a2 = (axis + 2) % 3;
          if (
            coord[axis] >= dims[axis] - 1 ||
            coord[a1] < 1 || coord[a2] < 1 ||
            coord[a1] > dims[a1] - 2 || coord[a2] > dims[a2] - 2
          ) continue;

          const v0 = grid[idx];
          const v1 = grid[idx + strides[axis]];
          if (v0 < 0 === v1 < 0) continue;

          const c0 = cellVert[idx - strides[a1] - strides[a2]];
          const c1 = cellVert[idx - strides[a2]];
          const c2 = cellVert[idx];
          const c3 = cellVert[idx - strides[a1]];

          if (v0 < 0) {
            indices.push(c0, c1, c2, c0, c2, c3);
          } else {
            indices.push(c0, c2, c1, c0, c3, c2);
          }
        }
      }
    }
  }

  return {
    pos: new Float32Array(verts),
    index: new Uint32Array(indices),
  };
}

const PARTICLE_SPACING = PERF.particleSpacing;

function sampleInteriorParticles(prims, fn, minB, maxB) {
  let bestList = null;
  let bestScore = -1;
  const steps = PERF.particleOffsetSteps;

  for (let ox = 0; ox < steps; ox++) {
    for (let oy = 0; oy < steps; oy++) {
      for (let oz = 0; oz < steps; oz++) {
        const list = [];
        for (let x = minB[0] + (ox / steps) * PARTICLE_SPACING; x <= maxB[0]; x += PARTICLE_SPACING) {
          for (let y = minB[1] + (oy / steps) * PARTICLE_SPACING; y <= maxB[1]; y += PARTICLE_SPACING) {
            for (let z = minB[2] + (oz / steps) * PARTICLE_SPACING; z <= maxB[2]; z += PARTICLE_SPACING) {
              if (fn(x, y, z) < -0.0275) list.push(x, y, z);
            }
          }
        }

        let score = 0;
        for (const p of prims) {
          let hit = 0;
          for (let i = 0; i < list.length && hit < 3; i += 3) {
            if (evalPrim(p, list[i], list[i + 1], list[i + 2]) < -0.0275) hit++;
          }
          score += hit;
        }
        if (score > bestScore) {
          bestScore = score;
          bestList = list;
        }
      }
    }
  }

  return new Float32Array(bestList);
}

function projectSurfaceAnchor(fn, origin, yawDeg, pitchDeg) {
  const yaw = (yawDeg * Math.PI) / 180;
  const pitch = (pitchDeg * Math.PI) / 180;
  const dir = [
    Math.sin(yaw) * Math.cos(pitch),
    Math.sin(pitch),
    Math.cos(yaw) * Math.cos(pitch),
  ];
  const rayPt = (t) => [
    origin[0] + dir[0] * t,
    origin[1] + dir[1] * t,
    origin[2] + dir[2] * t,
  ];

  let lo = 0, hi = 0.02;
  while (fn(...rayPt(hi)) < 0 && hi < 2) {
    lo = hi;
    hi += 0.02;
  }
  for (let i = 0; i < 24; i++) {
    const mid = (lo + hi) / 2;
    if (fn(...rayPt(mid)) < 0) lo = mid;
    else hi = mid;
  }

  const pos = rayPt((lo + hi) / 2);
  const g = sdfGradient(fn, ...pos);
  const gLen = Math.hypot(...g);
  return {
    pos,
    normal: g.map((v) => v / gLen),
  };
}

const speciesCache = new Map();

function generateSpeciesTemplate(name) {
  const def = SPECIES_DEFS[name];
  const prims = def.prims;
  const face = def.face;
  const fn = (x, y, z) => evalSDF(prims, x, y, z);

  const minB = [1e9, 1e9, 1e9];
  const maxB = [-1e9, -1e9, -1e9];
  for (const p of prims) {
    const pts = p.t < 2 ? [p.c] : [p.a, p.b];
    const rad = p.t === 0 ? p.r : p.t === 1 ? Math.max(...p.r) : p.t === 2 ? p.r : Math.max(p.r1, p.r2);
    for (const pt of pts) {
      for (let i = 0; i < 3; i++) {
        minB[i] = Math.min(minB[i], pt[i] - rad);
        maxB[i] = Math.max(maxB[i], pt[i] + rad);
      }
    }
  }
  for (let i = 0; i < 3; i++) {
    minB[i] -= 0.1;
    maxB[i] += 0.1;
  }

  const { pos, index } = extractIsoSurface(fn, minB, maxB, PERF.isoStep);
  const rest = sampleInteriorParticles(prims, fn, minB, maxB);

  const [eyeYaw, eyePitch, eyeOrigin] = face.eye;
  const getEyeCenter = (sign) => (eyeOrigin ? [sign * eyeOrigin[0], eyeOrigin[1], eyeOrigin[2]] : face.head);

  const anchors = [
    projectSurfaceAnchor(fn, getEyeCenter(-1), -eyeYaw, eyePitch),
    projectSurfaceAnchor(fn, getEyeCenter(1), eyeYaw, eyePitch),
    projectSurfaceAnchor(fn, face.head, -face.cheek[0], face.cheek[1]),
    projectSurfaceAnchor(fn, face.head, face.cheek[0], face.cheek[1]),
    projectSurfaceAnchor(fn, face.mouth[0] ?? face.head, 0, face.mouth[1]),
  ];

  const baseColor = new THREE.Color(def.color);
  const tempColor = new THREE.Color();
  const col = new Float32Array(pos.length);

  for (let i = 0; i < pos.length; i += 3) {
    tempColor.copy(baseColor);
    for (const [patchPrim, patchHex] of def.patches) {
      const d = evalPrim(patchPrim, pos[i], pos[i + 1], pos[i + 2]);
      const blend = Math.min(1, Math.max(0, 0.5 - d / 0.03));
      if (blend > 0) tempColor.lerp(new THREE.Color(patchHex), blend);
    }
    col[i] = tempColor.r;
    col[i + 1] = tempColor.g;
    col[i + 2] = tempColor.b;
  }

  const center = [0, 0, 0];
  const numRest = rest.length / 3;
  for (let i = 0; i < rest.length; i++) center[i % 3] += rest[i] / numRest;
  for (let i = 0; i < rest.length; i++) rest[i] -= center[i % 3];
  for (let i = 0; i < pos.length; i++) pos[i] -= center[i % 3];
  for (const a of anchors) a.pos = a.pos.map((v, i) => v - center[i]);

  return {
    pos,
    index,
    rest,
    anchors,
    col,
    face,
    pitch: def.pitch,
    color: def.color,
  };
}

let sharedFeltMaterial = null;

export function buildSpeciesModel(species, { scale = 1 } = {}) {
  if (!SPECIES_DEFS[species]) throw new Error(`unknown species: ${species}`);
  let tmpl = speciesCache.get(species);
  if (!tmpl) {
    tmpl = generateSpeciesTemplate(species);
    speciesCache.set(species, tmpl);
  }

  const scaledPos = tmpl.pos.map((v) => v * scale);
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.BufferAttribute(scaledPos, 3));
  geometry.setAttribute("color", new THREE.BufferAttribute(tmpl.col.slice(), 3));
  geometry.setIndex(new THREE.BufferAttribute(tmpl.index.slice(), 1));
  geometry.computeVertexNormals();
  geometry.setAttribute("fiber", new THREE.BufferAttribute(scaledPos.slice(), 3));
  geometry.setAttribute("fiberN", new THREE.BufferAttribute(geometry.attributes.normal.array.slice(), 3));

  const scaleAnchor = (a) => ({
    pos: a.pos.map((v) => v * scale),
    normal: [...a.normal],
  });

  return {
    species,
    geometry,
    rest: tmpl.rest.map((v) => v * scale),
    radius: PARTICLE_SPACING * scale * 0.5,
    color: new THREE.Color(tmpl.color),
    material: (sharedFeltMaterial ??= createFeltMaterial()),
    face: {
      eyes: [scaleAnchor(tmpl.anchors[0]), scaleAnchor(tmpl.anchors[1])],
      cheeks: [scaleAnchor(tmpl.anchors[2]), scaleAnchor(tmpl.anchors[3])],
      mouth: scaleAnchor(tmpl.anchors[4]),
      size: tmpl.face.size * scale,
      mouthStyle: tmpl.face.mouth[2],
      whiskers: !!tmpl.face.whiskers,
    },
    pitch: tmpl.pitch,
  };
}

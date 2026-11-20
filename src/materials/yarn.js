/**
 * Procedural Knitted Yarn Material Generator
 *
 * Synthesizes 512x512 seamless height, ambient occlusion, normal, and roughness
 * maps for stockinette, rib, garter, seed, cable, boucle, and braided strand
 * stitches, with optional stripe, check, and Fair Isle colorwork patterns.
 *
 * @author Sunil
 * @license MIT
 */

import * as THREE from "three";

const TEX_SIZE = 512;
const TEX_PIXELS = TEX_SIZE * TEX_SIZE;
const wrapIdx = (v) => v & 511;
const TWO_PI = Math.PI * 2;

function hashInt(x, y, salt = 0) {
  let h = (Math.imul(x | 0, 374761393) + Math.imul(y | 0, 668265263) + Math.imul(salt | 0, 1440670441)) | 0;
  h = Math.imul(h ^ (h >>> 13), 1274126177);
  h ^= h >>> 16;
  return (h >>> 0) / 4294967296;
}

function mulberry32(seed) {
  let s = seed >>> 0;
  return () => {
    s = (s + 1831565813) | 0;
    let t = Math.imul(s ^ (s >>> 15), 1 | s);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const clamp01 = (v) => (v < 0 ? 0 : v > 1 ? 1 : v);
const smoothstep = (e0, e1, x) => {
  const t = clamp01((x - e0) / (e1 - e0));
  return t * t * (3 - 2 * t);
};
const linearToSRGBByte = (v) => {
  v = clamp01(v);
  return 255 * (v <= 0.0031308 ? v * 12.92 : 1.055 * v ** (1 / 2.4) - 0.055);
};
const srgbToLinear = (v) => (v <= 0.04045 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4);

function boxBlurTile(src, radius, passes = 1) {
  let cur = src;
  const invW = 1 / (2 * radius + 1);
  for (let p = 0; p < passes; p++) {
    const tmp = new Float32Array(TEX_PIXELS);
    const out = new Float32Array(TEX_PIXELS);
    for (let y = 0; y < TEX_SIZE; y++) {
      for (let x = 0; x < TEX_SIZE; x++) {
        let sum = 0;
        for (let k = -radius; k <= radius; k++) sum += cur[y * TEX_SIZE + wrapIdx(x + k)];
        tmp[y * TEX_SIZE + x] = sum * invW;
      }
    }
    for (let y = 0; y < TEX_SIZE; y++) {
      for (let x = 0; x < TEX_SIZE; x++) {
        let sum = 0;
        for (let k = -radius; k <= radius; k++) sum += tmp[wrapIdx(y + k) * TEX_SIZE + x];
        out[y * TEX_SIZE + x] = sum * invW;
      }
    }
    cur = out;
  }
  return cur;
}

const makeCanvasLayers = () => ({
  top: new Float32Array(TEX_PIXELS),
  base: new Float32Array(TEX_PIXELS),
  bright: new Float32Array(TEX_PIXELS),
});

function drawYarnStroke(layers, x0, y0, x1, y1, width, opts = {}) {
  const {
    amp = 1,
    plies = 0,
    lambda = 40,
    phase = 0,
    plyDepth = 0.3,
    taper = true,
    base = false,
    bright = 0,
    exponent = 0.5,
  } = opts;
  const dx = x1 - x0;
  const dy = y1 - y0;
  const lenSq = dx * dx + dy * dy;
  const len = Math.sqrt(lenSq);
  const minX = Math.floor(Math.min(x0, x1) - width) - 1;
  const maxX = Math.ceil(Math.max(x0, x1) + width) + 1;
  const minY = Math.floor(Math.min(y0, y1) - width) - 1;
  const maxY = Math.ceil(Math.max(y0, y1) + width) + 1;
  const target = base ? layers.base : layers.top;

  for (let py = minY; py <= maxY; py++) {
    for (let px = minX; px <= maxX; px++) {
      const rx = px + 0.5 - x0;
      const ry = py + 0.5 - y0;
      const t = lenSq > 0 ? Math.min(1, Math.max(0, (rx * dx + ry * dy) / lenSq)) : 0;
      const ex = rx - t * dx;
      const ey = ry - t * dy;
      const dist = Math.sqrt(ex * ex + ey * ey) / width;
      if (dist >= 1) continue;

      let h = (1 - dist * dist) ** exponent;
      if (taper) h *= 0.4 + 0.6 * Math.sin(Math.PI * t) ** 0.6;
      if (plies > 0) {
        const side = dx * ry - dy * rx >= 0 ? 1 : -1;
        const twist = (plies * Math.asin(dist) * side) / TWO_PI + (t * len) / lambda + phase;
        const frac = twist - Math.floor(twist) - 0.5;
        const ridge = Math.sqrt(Math.max(0, 1 - 4 * frac * frac * 0.96));
        h *= 1 - plyDepth + plyDepth * ridge;
      }
      h *= amp;
      const idx = wrapIdx(py) * TEX_SIZE + wrapIdx(px);
      if (h > target[idx]) {
        target[idx] = h;
        if (!base) layers.bright[idx] = bright;
      }
    }
  }
}

function drawKnitLoop(layers, col, row, cellW, cellH, amp = 1) {
  const ox = col * cellW;
  const oy = row * cellH;
  const w = 0.21 * cellW;
  for (const side of [-1, 1]) {
    const salt = side < 0 ? 1 : 2;
    const jit = (i) => hashInt(col, row, salt * 10 + i) - 0.5;
    drawYarnStroke(
      layers,
      ox + (0.5 + 0.07 * side + 0.02 * jit(0)) * cellW,
      oy - 0.06 * cellH,
      ox + (0.5 + 0.27 * side + 0.02 * jit(1)) * cellW,
      oy + 1.08 * cellH,
      w,
      { amp: amp * (1 + 0.1 * jit(2)), plies: 3, lambda: 0.5 * cellH, phase: jit(3), bright: jit(4) * 0.08 }
    );
  }
}

function drawPurlBump(layers, col, row, cellW, cellH, amp = 1) {
  const ox = col * cellW;
  const oy = row * cellH;
  const jit = (i) => hashInt(col, row, 50 + i) - 0.5;
  drawYarnStroke(
    layers,
    ox + 0.14 * cellW,
    oy + (0.31 + 0.03 * jit(1)) * cellH,
    ox + 0.86 * cellW,
    oy + (0.34 + 0.03 * jit(2)) * cellH,
    0.26 * cellH,
    { amp: amp * (1 + 0.1 * jit(3)), plies: 3, lambda: 0.45 * cellW, phase: jit(4), bright: jit(5) * 0.08, taper: false }
  );
  drawYarnStroke(
    layers,
    ox + 0.24 * cellW,
    oy + (0.8 + 0.02 * jit(6)) * cellH,
    ox + 0.76 * cellW,
    oy + (0.78 + 0.02 * jit(7)) * cellH,
    0.15 * cellH,
    { amp: amp * 0.6, plies: 2, lambda: 0.35 * cellW, phase: jit(8), bright: jit(5) * 0.08, taper: false }
  );
}

function tileGrid(cols, rows, fn) {
  const layers = makeCanvasLayers();
  const cw = TEX_SIZE / cols;
  const ch = TEX_SIZE / rows;
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) fn(layers, c, r, cw, ch);
  }
  return layers;
}

const buildStockinette = () => tileGrid(4, 5, (l, c, r, w, h) => drawKnitLoop(l, c, r, w, h, 1));
const buildGarter = () => tileGrid(4, 6, (l, c, r, w, h) => drawPurlBump(l, c, r, w, h, 1));
const buildSeed = () =>
  tileGrid(8, 8, (l, c, r, w, h) => {
    const ox = (c + (r % 2) * 0.5) * w;
    const oy = r * h;
    const jit = (i) => hashInt(c, r, 70 + i) - 0.5;
    drawYarnStroke(
      l,
      ox + (0.24 + 0.04 * jit(0)) * w,
      oy + (0.5 + 0.06 * jit(1)) * h,
      ox + (0.76 + 0.04 * jit(2)) * w,
      oy + (0.5 + 0.06 * jit(3)) * h,
      0.36 * h,
      { amp: 1 + 0.12 * jit(4), plies: 3, lambda: 0.4 * w, phase: jit(5), bright: jit(6) * 0.08, taper: false }
    );
  });

const buildRib = () =>
  tileGrid(4, 5, (l, c, r, w, h) => {
    if (c < 2) {
      const ox = c * w, oy = r * h;
      drawYarnStroke(l, ox + 0.5 * w, oy - 0.5 * h, ox + 0.5 * w, oy + 1.5 * h, 0.78 * w, {
        amp: 0.5, base: true, taper: false, exponent: 0.35,
      });
      drawKnitLoop(l, c, r, w, h, 0.7);
    } else {
      drawPurlBump(l, c, r, w, h, 0.4);
    }
  });

const CABLE_PERIOD = 8;
const cablePhase = (v) => {
  const m = ((v % CABLE_PERIOD) + CABLE_PERIOD) % CABLE_PERIOD;
  if (m < 2) return 0;
  if (m < 4) return smoothstep(0, 1, (m - 2) / 2);
  if (m < 6) return 1;
  return 1 - smoothstep(0, 1, (m - 6) / 2);
};

function buildCable() {
  const layers = makeCanvasLayers();
  const cw = TEX_SIZE / 8;
  const ch = TEX_SIZE / 8;
  for (let b = 0; b < 2; b++) {
    const col0 = b * 4;
    drawYarnStroke(layers, (col0 + 1.5) * cw, -64, (col0 + 1.5) * cw, 576, 1.4 * cw, {
      amp: 0.5, base: true, taper: false, exponent: 0.35,
    });
    for (let r = 0; r < 8; r++) {
      const p = r + 0.5 + b * 4;
      const s = cablePhase(p);
      const m = ((p % CABLE_PERIOD) + CABLE_PERIOD) % CABLE_PERIOD;
      const over = m >= 2 && m < 4 ? 1 : m >= 6 ? -1 : 0;
      const ampA = over > 0 ? 1.12 : over < 0 ? 0.88 : 1;
      const ampB = over < 0 ? 1.12 : over > 0 ? 0.88 : 1;
      const xA = 0.75 + 1.5 * s;
      const xB = 2.25 - 1.5 * s;
      for (const dx of [-0.3, 0.3]) {
        drawKnitLoop(layers, col0 + xA + dx - 0.5, r, cw, ch, ampA);
        drawKnitLoop(layers, col0 + xB + dx - 0.5, r, cw, ch, ampB);
      }
      drawPurlBump(layers, col0 + 3, r, cw, ch, 0.4);
    }
  }
  return layers;
}

function buildBoucle() {
  const layers = makeCanvasLayers();
  layers.base.fill(0.1);
  const rand = mulberry32(1337);
  for (const tier of [
    { count: 520, R: [9, 18], w: [4, 6.5] },
    { count: 1400, R: [4, 9], w: [2.2, 3.6] },
  ]) {
    for (let i = 0; i < tier.count; i++) {
      const cx = rand() * TEX_SIZE;
      const cy = rand() * TEX_SIZE;
      const rad = tier.R[0] + rand() * (tier.R[1] - tier.R[0]);
      const thick = tier.w[0] + rand() * (tier.w[1] - tier.w[0]);
      const span = (1.1 + 0.9 * rand()) * Math.PI;
      const a0 = rand() * TWO_PI;
      const amp = 0.45 + 0.55 * rand();
      const bright = (rand() - 0.5) * 0.08;
      const bound = Math.ceil(rad + thick) + 1;

      for (let py = Math.floor(cy) - bound; py <= Math.floor(cy) + bound; py++) {
        for (let px = Math.floor(cx) - bound; px <= Math.floor(cx) + bound; px++) {
          const dx = px + 0.5 - cx;
          const dy = py + 0.5 - cy;
          const d = Math.abs(Math.hypot(dx, dy) - rad) / thick;
          if (d >= 1) continue;
          const ang = ((((Math.atan2(dy, dx) - a0) % TWO_PI) + TWO_PI) % TWO_PI) / span;
          if (ang > 1) continue;
          const h = Math.sqrt(1 - d * d) * (0.35 + 0.65 * Math.sin(Math.PI * ang)) * amp;
          const idx = wrapIdx(py) * TEX_SIZE + wrapIdx(px);
          if (h > layers.top[idx]) {
            layers.top[idx] = h;
            layers.bright[idx] = bright;
          }
        }
      }
    }
  }
  return layers;
}

function buildStrand() {
  const layers = makeCanvasLayers();
  layers.base.fill(0.08);
  for (let y = 0; y < TEX_SIZE; y++) {
    const v = y / TEX_SIZE;
    for (let x = 0; x < TEX_SIZE; x++) {
      const u = x / TEX_SIZE;
      let bestH = 0;
      let bestB = 0;
      for (let ply = 0; ply < 3; ply++) {
        let d = v - ply / 3 - 2 * u;
        d -= Math.floor(d + 0.5);
        const t = d / (0.52 / 3);
        if (Math.abs(t) >= 1) continue;
        const h = Math.sqrt(1 - t * t) * (0.96 + 0.04 * Math.sin(TWO_PI * 3.5 * t));
        if (h > bestH) {
          bestH = h;
          bestB = (hashInt(ply, 0, 5) - 0.5) * 0.08;
        }
      }
      const idx = y * TEX_SIZE + x;
      layers.top[idx] = bestH;
      layers.bright[idx] = bestB;
    }
  }
  return layers;
}

function makeDataTex(data, colorSpace) {
  const tex = new THREE.DataTexture(data, TEX_SIZE, TEX_SIZE, THREE.RGBAFormat, THREE.UnsignedByteType);
  tex.colorSpace = colorSpace;
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  tex.minFilter = THREE.LinearMipmapLinearFilter;
  tex.magFilter = THREE.LinearFilter;
  tex.generateMipmaps = true;
  tex.anisotropy = 8;
  tex.flipY = false;
  tex.needsUpdate = true;
  return tex;
}

function bakeMaps(layers, spec) {
  const height = new Float32Array(TEX_PIXELS);
  let maxH = 1e-6;
  for (let i = 0; i < TEX_PIXELS; i++) {
    height[i] = layers.top[i] + layers.base[i];
    if (height[i] > maxH) maxH = height[i];
  }
  for (let i = 0; i < TEX_PIXELS; i++) height[i] /= maxH;

  const smoothH = boxBlurTile(height, 1, 1);
  const aoBlur = boxBlurTile(smoothH, spec.aoRadius, 2);
  const brightBlur = boxBlurTile(layers.bright, 2, 1);

  const normData = new Uint8Array(TEX_PIXELS * 4);
  const albedoData = new Uint8Array(TEX_PIXELS * 4);
  const roughData = new Uint8Array(TEX_PIXELS * 4);

  for (let y = 0; y < TEX_SIZE; y++) {
    for (let x = 0; x < TEX_SIZE; x++) {
      const idx = y * TEX_SIZE + x;
      const gx = (smoothH[y * TEX_SIZE + wrapIdx(x + 1)] - smoothH[y * TEX_SIZE + wrapIdx(x - 1)]) * 0.5;
      const gy = (smoothH[wrapIdx(y + 1) * TEX_SIZE + x] - smoothH[wrapIdx(y - 1) * TEX_SIZE + x]) * 0.5;
      let nx = -gx * spec.slope;
      let ny = -gy * spec.slope;
      const invLen = 1 / Math.sqrt(nx * nx + ny * ny + 1);
      nx *= invLen;
      ny *= invLen;
      const nz = invLen;

      const p = idx * 4;
      normData[p] = (nx * 0.5 + 0.5) * 255;
      normData[p + 1] = (ny * 0.5 + 0.5) * 255;
      normData[p + 2] = (nz * 0.5 + 0.5) * 255;
      normData[p + 3] = 255;

      const ao = clamp01((aoBlur[idx] - smoothH[idx]) * spec.aoGain);
      const cavity = 0.38 + 0.62 * smoothstep(0, 0.45, smoothH[idx]);
      const shade = linearToSRGBByte(Math.max(0.35, cavity * (1 - 0.4 * ao)) * (1 + brightBlur[idx]));
      albedoData[p] = albedoData[p + 1] = albedoData[p + 2] = shade;
      albedoData[p + 3] = 255;

      const rough = 255 * (1 - 0.12 * smoothH[idx]);
      roughData[p] = roughData[p + 1] = roughData[p + 2] = rough;
      roughData[p + 3] = 255;
    }
  }

  return {
    map: makeDataTex(albedoData, THREE.SRGBColorSpace),
    normalMap: makeDataTex(normData, ""),
    roughnessMap: makeDataTex(roughData, ""),
  };
}

const STITCH_SPECS = {
  stockinette: { build: buildStockinette, slope: 14, aoRadius: 9, aoGain: 3, normalScale: 1.5 },
  rib: { build: buildRib, slope: 14, aoRadius: 12, aoGain: 3, normalScale: 1.5 },
  garter: { build: buildGarter, slope: 14, aoRadius: 9, aoGain: 3, normalScale: 1.5 },
  seed: { build: buildSeed, slope: 16, aoRadius: 6, aoGain: 3, normalScale: 1.4 },
  cable: { build: buildCable, slope: 14, aoRadius: 10, aoGain: 3, normalScale: 1.5 },
  boucle: { build: buildBoucle, slope: 20, aoRadius: 8, aoGain: 3.5, normalScale: 1.8 },
  strand: { build: buildStrand, slope: 34, aoRadius: 10, aoGain: 3, normalScale: 1.6 },
};

const stitchCache = new Map();

function getStitchSpec(stitch) {
  const spec = STITCH_SPECS[stitch];
  if (!spec) throw new Error(`yarnMaterial: unknown stitch "${stitch}"`);
  return spec;
}

function getStitchMaps(stitch) {
  let maps = stitchCache.get(stitch);
  if (!maps) {
    const spec = getStitchSpec(stitch);
    maps = bakeMaps(spec.build(), spec);
    stitchCache.set(stitch, maps);
  }
  return maps;
}

function deriveSheenColor(color) {
  const hsl = {};
  color.getHSL(hsl);
  return new THREE.Color().setHSL(hsl.h, hsl.s * 0.7, hsl.l + (1 - hsl.l) * 0.4);
}

const COLORWORK_GRIDS = {
  stockinette: [4, 5],
  rib: [4, 5],
  garter: [4, 6],
  seed: [8, 8],
  cable: [8, 8],
};

const COLORWORK_RES = 1024;
const PATTERN_TILES = 4;
const FAIR_ISLE_MOTIFS = [
  ["...#....", "..###...", ".#####..", "#######.", ".#####..", "..###...", "...#...."],
  ["........", ".##.##..", "#######.", "#######.", ".#####..", "..###...", "...#...."],
  ["...#....", "..###...", ".#####..", "..###...", ".#####..", "#######.", "...#...."],
];

function nearestDivisor(n, target, minVal = 1) {
  let best = n;
  for (let d = minVal; d <= n; d++) {
    if (n % d) continue;
    const dist = Math.abs(d - target);
    const bestDist = Math.abs(best - target);
    if (dist < bestDist || (dist === bestDist && d > best)) best = d;
  }
  return best;
}

function buildPatternGrid(stitch, pattern) {
  const [cols, rows] = COLORWORK_GRIDS[stitch];
  const gw = cols * PATTERN_TILES;
  const gh = rows * PATTERN_TILES;
  const tones = new Uint8Array(gw * gh);

  if (pattern === "stripe") {
    const period = nearestDivisor(gh, 6);
    const band = Math.max(1, Math.round(period * 0.4));
    for (let y = 0; y < gh; y++) {
      if (y % period < band) tones.fill(1, y * gw, (y + 1) * gw);
    }
  } else if (pattern === "check") {
    let step = 1;
    for (const cand of [5, 4, 6, 3, 2]) {
      if (gh % cand === 0 && (gh / cand) % 2 === 0) {
        step = cand;
        break;
      }
    }
    const lookup = [1, 2, 0];
    for (let y = 0; y < gh; y++) {
      for (let x = 0; x < gw; x++) {
        const cx = ((x / 4) | 0) & 1;
        const cy = ((y / step) | 0) & 1;
        tones[y * gw + x] = lookup[cx + cy];
      }
    }
  } else if (pattern === "fairisle") {
    const period = nearestDivisor(gh, 10, 8);
    for (let y = 0; y < gh; y++) {
      const my = y % period;
      if (my >= 7) continue;
      const rowIdx = (y / period) | 0;
      for (let x = 0; x < gw; x++) {
        const motif = FAIR_ISLE_MOTIFS[(rowIdx + ((x / 8) | 0)) % FAIR_ISLE_MOTIFS.length];
        if (motif[my][x % 8] === "#") tones[y * gw + x] = 1;
      }
    }
  } else {
    throw new Error(`yarnMaterial: unknown pattern "${pattern}"`);
  }

  return { tones, gw, gh };
}

const colorworkCache = new Map();

function getColorworkMap(stitch, pattern, c1, c2) {
  const key = `${stitch}|${pattern}|${c1.getHexString()}|${c2.getHexString()}`;
  let tex = colorworkCache.get(key);
  if (tex) return tex;

  const { tones, gw, gh } = buildPatternGrid(stitch, pattern);
  const palette = [c1, c2, c1.clone().lerp(c2, 0.5)];
  const lut = new Uint8Array(2304);
  for (let p = 0; p < 3; p++) {
    for (let v = 0; v < 256; v++) {
      const lin = srgbToLinear(v / 255);
      const off = (p * 256 + v) * 3;
      lut[off] = linearToSRGBByte(palette[p].r * lin) + 0.5;
      lut[off + 1] = linearToSRGBByte(palette[p].g * lin) + 0.5;
      lut[off + 2] = linearToSRGBByte(palette[p].b * lin) + 0.5;
    }
  }

  const baseAlbedo = getStitchMaps(stitch).map.image.data;
  const pixels = new Uint8Array(COLORWORK_RES * COLORWORK_RES * 4);
  const cellW = COLORWORK_RES / gw;
  const cellH = COLORWORK_RES / gh;
  const isSeed = stitch === "seed";
  const srcStep = (PATTERN_TILES * TEX_SIZE) / COLORWORK_RES;

  for (let y = 0; y < COLORWORK_RES; y++) {
    const gy = Math.min(gh - 1, Math.floor(y / cellH));
    const shift = isSeed && (gy & 1) ? 0.5 : 0;
    const sy0 = wrapIdx(y * srcStep);
    const sy1 = wrapIdx(y * srcStep + 1);

    for (let x = 0; x < COLORWORK_RES; x++) {
      const gx = ((Math.floor(x / cellW - shift) % gw) + gw) % gw;
      const sx0 = wrapIdx(x * srcStep);
      const sx1 = wrapIdx(x * srcStep + 1);
      const shade =
        (baseAlbedo[(sy0 * TEX_SIZE + sx0) * 4] +
          baseAlbedo[(sy0 * TEX_SIZE + sx1) * 4] +
          baseAlbedo[(sy1 * TEX_SIZE + sx0) * 4] +
          baseAlbedo[(sy1 * TEX_SIZE + sx1) * 4]) >>
        2;
      const lutIdx = (tones[gy * gw + gx] * 256 + shade) * 3;
      const outIdx = (y * COLORWORK_RES + x) * 4;
      pixels[outIdx] = lut[lutIdx];
      pixels[outIdx + 1] = lut[lutIdx + 1];
      pixels[outIdx + 2] = lut[lutIdx + 2];
      pixels[outIdx + 3] = 255;
    }
  }

  tex = new THREE.DataTexture(pixels, COLORWORK_RES, COLORWORK_RES, THREE.RGBAFormat, THREE.UnsignedByteType);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  tex.minFilter = THREE.LinearMipmapLinearFilter;
  tex.magFilter = THREE.LinearFilter;
  tex.generateMipmaps = true;
  tex.anisotropy = 8;
  tex.flipY = false;
  tex.needsUpdate = true;
  colorworkCache.set(key, tex);
  return tex;
}

export function createYarnMaterial({
  color,
  color2,
  pattern,
  stitch = "stockinette",
  repeat = [8, 8],
  sheen = 1,
  roughness = 0.9,
} = {}) {
  const spec = getStitchSpec(stitch);
  const maps = getStitchMaps(stitch);
  const baseColor = new THREE.Color(color ?? 0xffffff);
  let mapTex = maps.map;
  let tileDiv = 1;
  let matColor = baseColor;
  let sheenBase = baseColor;

  if (pattern) {
    if (!COLORWORK_GRIDS[stitch]) throw new Error(`yarnMaterial: stitch "${stitch}" has no colorwork grid`);
    const secColor = new THREE.Color(color2 ?? 0xffffff);
    mapTex = getColorworkMap(stitch, pattern, baseColor, secColor);
    tileDiv = PATTERN_TILES;
    matColor = new THREE.Color(0xffffff);
    sheenBase = baseColor.clone().lerp(secColor, 0.5);
  }

  const cloneScaled = (tex, div = 1) => {
    const t = tex.clone();
    t.repeat.set(repeat[0] / div, repeat[1] / div);
    return t;
  };

  return new THREE.MeshPhysicalMaterial({
    color: matColor,
    map: cloneScaled(mapTex, tileDiv),
    normalMap: cloneScaled(maps.normalMap),
    normalScale: new THREE.Vector2(spec.normalScale, spec.normalScale),
    roughnessMap: cloneScaled(maps.roughnessMap),
    roughness,
    metalness: 0,
    sheen,
    sheenRoughness: 0.5,
    sheenColor: deriveSheenColor(sheenBase),
  });
}

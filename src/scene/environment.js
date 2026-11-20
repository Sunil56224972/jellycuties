/**
 * Cozy Room Environment, Day/Night Tabletop Props & Knitted Basket
 *
 * Builds the wooden table, plastered window wall with day/night sky backdrop,
 * sunlit window gobo projection, and handcrafted knitted props (potted plant,
 * yarn balls & needles, checkered cloth, coaster, daytime flower mug with steam,
 * nighttime bear mug with marshmallows, floor lamp, books, flickering candle,
 * and the central knitted basket).
 *
 * @author Sunil
 * @license MIT
 */

import * as THREE from "three";
import { RoundedBoxGeometry } from "three/addons/geometries/RoundedBoxGeometry.js";
import { mergeGeometries } from "three/addons/utils/BufferGeometryUtils.js";
import { createYarnMaterial } from "../materials/yarn.js";
import { PERF } from "../core/perf.js";

const BOX_SEGS = PERF.isMobile ? 2 : 4;
const TUBE_STEP = PERF.isMobile ? 0.08 : 0.035;
const TUBE_RADIAL = PERF.isMobile ? 6 : 8;
const RING_SEGS = PERF.isMobile ? 32 : 64;

const TABLE_Y = -0.16;
const WALL_Z = -5.2;
const SUN_INTENSITY = 5;
const WINDOW_RECT = { x0: -2.5, x1: 4.5, y0: 0.35, y1: 6.5 };

const makeSquareCanvas = (size) => {
  const c = document.createElement("canvas");
  c.width = c.height = size;
  return c;
};

function createWallPlasterTexture(renderer) {
  const canvas = makeSquareCanvas(512);
  const ctx = canvas.getContext("2d");
  ctx.fillStyle = "#efe2cf";
  ctx.fillRect(0, 0, 512, 512);

  for (let i = 0; i < 40; i++) {
    const x = 50 + Math.random() * 412;
    const y = 50 + Math.random() * 412;
    const r = 30 + Math.random() * 20;
    const g = ctx.createRadialGradient(x, y, 0, x, y, r);
    g.addColorStop(0, i % 2 ? "rgba(255,255,255,0.05)" : "rgba(150,110,70,0.04)");
    g.addColorStop(1, "rgba(0,0,0,0)");
    ctx.fillStyle = g;
    ctx.fillRect(x - r, y - r, r * 2, r * 2);
  }

  const img = ctx.getImageData(0, 0, 512, 512);
  const data = img.data;
  for (let i = 0; i < data.length; i += 4) {
    const grain = (Math.random() - 0.5) * 14;
    data[i] += grain;
    data[i + 1] += grain;
    data[i + 2] += grain;
  }
  ctx.putImageData(img, 0, 0);

  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  tex.repeat.set(1 / 6, 1 / 6);
  tex.anisotropy = Math.min(renderer.capabilities.getMaxAnisotropy(), PERF.anisotropy);
  return tex;
}

function createWindowGoboTexture() {
  const canvas = makeSquareCanvas(512);
  const ctx = canvas.getContext("2d");
  ctx.fillStyle = "#000";
  ctx.fillRect(0, 0, 512, 512);

  const pad = 61.44;
  const pane = (512 - pad * 2 - 25.6) / 2;
  for (const ix of [0, 1]) {
    for (const iy of [0, 1]) {
      const px = pad + ix * 207.36;
      const py = pad + iy * 207.36;
      for (let b = 10; b >= 0; b--) {
        const blur = (b - 5) * 1.6;
        ctx.fillStyle = "rgba(255,246,232,0.22)";
        ctx.fillRect(px - blur, py - blur, pane + blur * 2, pane + blur * 2);
      }
    }
  }

  for (let i = 0; i < 18; i++) {
    const x = pad + Math.random() * (512 - pad * 2);
    const y = pad + Math.random() * (512 - pad * 2);
    const r = 18 + Math.random() * 24;
    const g = ctx.createRadialGradient(x, y, 0, x, y, r);
    g.addColorStop(0, "rgba(0,0,0,0.14)");
    g.addColorStop(1, "rgba(0,0,0,0)");
    ctx.fillStyle = g;
    ctx.fillRect(x - r, y - r, r * 2, r * 2);
  }

  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

export function createRoom({ scene, renderer }) {
  const group = new THREE.Group();
  scene.add(group);

  const loader = new THREE.TextureLoader();
  const maxAniso = Math.min(renderer.capabilities.getMaxAnisotropy(), PERF.anisotropy);
  const loadTex = (name) => {
    const tex = loader.load(`./tex/${name}.jpg`);
    tex.colorSpace = THREE.SRGBColorSpace;
    tex.anisotropy = maxAniso;
    return tex;
  };

  // Wooden tabletop
  const tableDepth = 10.5;
  const tableThick = 0.3;
  const tableGeo = new RoundedBoxGeometry(20, tableThick, tableDepth, BOX_SEGS, 0.06);
  const posAttr = tableGeo.attributes.position;
  const uvAttr = tableGeo.attributes.uv;
  for (let i = 0; i < posAttr.count; i++) {
    uvAttr.setXY(i, (posAttr.getX(i) + 10) / 20, 1 - (posAttr.getZ(i) + tableDepth / 2) / tableDepth);
  }
  const table = new THREE.Mesh(tableGeo, new THREE.MeshStandardMaterial({ map: loadTex("wood"), roughness: 0.55 }));
  table.position.set(0, TABLE_Y - tableThick / 2, 0.25);
  table.receiveShadow = true;
  group.add(table);

  // Room floor beneath table
  const floor = new THREE.Mesh(
    new THREE.PlaneGeometry(60, 60),
    new THREE.MeshStandardMaterial({ color: "#7d6650", roughness: 1 })
  );
  floor.rotation.x = -Math.PI / 2;
  floor.position.y = -3.5;
  group.add(floor);

  // Plastered back wall with window cutout
  const wallShape = new THREE.Shape();
  wallShape.moveTo(-16, -3.5);
  wallShape.lineTo(16, -3.5);
  wallShape.lineTo(16, 9);
  wallShape.lineTo(-16, 9);
  wallShape.closePath();

  const hole = new THREE.Path();
  hole.moveTo(WINDOW_RECT.x0, WINDOW_RECT.y0);
  hole.lineTo(WINDOW_RECT.x0, WINDOW_RECT.y1);
  hole.lineTo(WINDOW_RECT.x1, WINDOW_RECT.y1);
  hole.lineTo(WINDOW_RECT.x1, WINDOW_RECT.y0);
  hole.closePath();
  wallShape.holes.push(hole);

  const wall = new THREE.Mesh(
    new THREE.ShapeGeometry(wallShape),
    new THREE.MeshStandardMaterial({ map: createWallPlasterTexture(renderer), roughness: 0.95 })
  );
  wall.position.z = WALL_Z;
  wall.receiveShadow = true;
  group.add(wall);

  // Window frame & mullions
  const frameMat = new THREE.MeshStandardMaterial({ color: "#f3eee4", roughness: 0.55 });
  const addFramePiece = (w, h, d, x, y, z) => {
    const mesh = new THREE.Mesh(new RoundedBoxGeometry(w, h, d, 2, 0.025), frameMat);
    mesh.position.set(x, y, z);
    group.add(mesh);
  };

  const winCx = (WINDOW_RECT.x0 + WINDOW_RECT.x1) / 2;
  const fw = 0.4;
  const fh = 0.4;
  const sideH = WINDOW_RECT.y1 + fh / 2 - WINDOW_RECT.y0;
  const sideCy = (WINDOW_RECT.y0 + WINDOW_RECT.y1 + fh / 2) / 2;

  addFramePiece(WINDOW_RECT.x1 - WINDOW_RECT.x0 + 0.6, 0.12, 0.75, winCx, WINDOW_RECT.y0 - 0.06, -5.325);
  addFramePiece(fw, sideH, 0.4, WINDOW_RECT.x0, sideCy, WALL_Z);
  addFramePiece(fw, sideH, 0.4, WINDOW_RECT.x1, sideCy, WALL_Z);
  addFramePiece(WINDOW_RECT.x1 - WINDOW_RECT.x0 + 0.4, fh, 0.4, winCx, WINDOW_RECT.y1, WALL_Z);

  const innerH = WINDOW_RECT.y1 - fh / 2 - WINDOW_RECT.y0;
  const innerCy = WINDOW_RECT.y0 + innerH / 2;
  addFramePiece(0.14, innerH, 0.12, winCx, innerCy, -5.25);
  addFramePiece(WINDOW_RECT.x1 - WINDOW_RECT.x0 - fw, 0.14, 0.12, winCx, innerCy, -5.25);

  const addBackdrop = (name, z, transparent) => {
    const mesh = new THREE.Mesh(
      new THREE.PlaneGeometry(16, 11),
      new THREE.MeshBasicMaterial({ map: loadTex(name), toneMapped: false, transparent })
    );
    mesh.position.set(winCx, (WINDOW_RECT.y0 + WINDOW_RECT.y1) / 2, z);
    group.add(mesh);
    return mesh;
  };
  addBackdrop("outside-night", -6.6, false);
  const dayBackdrop = addBackdrop("outside-day", -6.5, true);

  // Sunlight with window gobo projection
  const sun = new THREE.SpotLight("#ffe2b8", SUN_INTENSITY, 0, 0.27, 0.05, 0);
  sun.position.set(-3, 11, -15);
  sun.target.position.set(0.5, 0, 0.5);
  sun.map = createWindowGoboTexture();
  sun.castShadow = true;
  sun.shadow.mapSize.set(PERF.shadowMapSize, PERF.shadowMapSize);
  sun.shadow.bias = -8e-4;
  sun.shadow.normalBias = 0.06;
  sun.shadow.radius = PERF.isMobile ? 2 : 3;
  sun.shadow.camera.near = 12;
  sun.shadow.camera.far = 32;
  group.add(sun, sun.target);

  const hemi = new THREE.HemisphereLight();
  const moonDir = new THREE.DirectionalLight("#9db4e8", 0);
  moonDir.position.set(1, 6, -10);
  const warmFill = new THREE.DirectionalLight("#ffb27a", 0);
  warmFill.position.set(-2, 4, 9);
  group.add(hemi, moonDir, warmFill);

  const bgColor = new THREE.Color();
  scene.background = bgColor;

  const dayPalette = {
    sky: new THREE.Color("#fde8d2"),
    ground: new THREE.Color("#8a6a52"),
    bg: new THREE.Color("#f1dcc4"),
    hemi: 0.6,
    env: 0.25,
  };
  const nightPalette = {
    sky: new THREE.Color("#3a4a7a"),
    ground: new THREE.Color("#1d1712"),
    bg: new THREE.Color("#141a2e"),
    hemi: 0.25,
    env: 0.08,
  };

  function setTime(t) {
    const n = THREE.MathUtils.clamp(t, 0, 1);
    sun.intensity = SUN_INTENSITY * (1 - n);
    sun.castShadow = sun.intensity > 0.001;
    hemi.color.lerpColors(dayPalette.sky, nightPalette.sky, n);
    hemi.groundColor.lerpColors(dayPalette.ground, nightPalette.ground, n);
    hemi.intensity = THREE.MathUtils.lerp(dayPalette.hemi, nightPalette.hemi, n);
    moonDir.intensity = 0.25 * n;
    warmFill.intensity = 0.45 * n;
    bgColor.lerpColors(dayPalette.bg, nightPalette.bg, n);
    scene.environmentIntensity = THREE.MathUtils.lerp(dayPalette.env, nightPalette.env, n);
    dayBackdrop.material.opacity = 1 - n;
    dayBackdrop.visible = n < 1;
  }

  setTime(0);
  return { group, sun, setTime };
}

// --- Knitted Tabletop Props ---

const TWO_PI = Math.PI * 2;
const LAMP_SPOT_MAX = 40;
const CANDLE_LIGHT_MAX = 3;
const LAMP_GLOW_MAX = 2.2;
const smoothstep = THREE.MathUtils.smoothstep;

let propAnisotropy = 4;

function seededRand(seed) {
  let s = seed >>> 0;
  return () => {
    s = (s + 1831565813) | 0;
    let t = Math.imul(s ^ (s >>> 15), 1 | s);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function makeCanvas(w, h, drawFn) {
  const c = document.createElement("canvas");
  c.width = w;
  c.height = h;
  drawFn?.(c.getContext("2d"), w, h);
  return c;
}

function toSRGBTexture(canvas) {
  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = propAnisotropy;
  return tex;
}

function addShadowMesh(parent, geo, mat, x = 0, y = 0, z = 0) {
  const mesh = new THREE.Mesh(geo, mat);
  mesh.position.set(x, y, z);
  mesh.castShadow = mesh.receiveShadow = true;
  parent.add(mesh);
  return mesh;
}

function placeOnTable(obj, x, z, rotY = 0) {
  obj.position.set(x, TABLE_Y, z);
  obj.rotation.y = rotY;
  return obj;
}

function createLatheProfile(points, segments = PERF.latheCurvePts) {
  const segCount = Math.min(segments, PERF.latheCurvePts);
  const spline = new THREE.SplineCurve(points.map(([x, y]) => new THREE.Vector2(x, y)));
  const spaced = spline.getSpacedPoints(segCount);
  const topIdx = spaced.reduce((best, pt, i) => (pt.y > spaced[best].y ? i : best), 0);
  const outer = spaced.slice(0, topIdx + 1);
  return {
    geo: new THREE.LatheGeometry(spaced, PERF.latheRadial),
    len: spline.getLength(),
    radiusAt: (y) => {
      const idx = outer.findIndex((pt) => pt.y >= y);
      if (idx <= 0) return outer[0].x;
      const p0 = outer[idx - 1];
      const p1 = outer[idx];
      return p0.x + ((p1.x - p0.x) * (y - p0.y)) / (p1.y - p0.y || 1);
    },
  };
}

const yarnMatCache = new Map();
function getYarn(color, stitch, repeat, color2, pattern) {
  const key = `${color}|${stitch}|${repeat}|${color2 ?? ""}|${pattern ?? ""}`;
  let m = yarnMatCache.get(key);
  if (!m) {
    m = createYarnMaterial({ color, color2, pattern, stitch, repeat });
    yarnMatCache.set(key, m);
  }
  return m;
}

const snapMult = (val, step) => Math.max(step, Math.round(val / step) * step);
const sphereRepeat = (r) => [snapMult((TWO_PI * r) / 0.4, 4), snapMult((Math.PI * r) / 0.5, 2)];
const strandRepeat = (len, step = 8) => [snapMult(len / 0.4, step), 1];
const STITCH_CELL = {
  stockinette: [4, 5],
  rib: [4, 5],
  garter: [4, 6],
  seed: [8, 8],
  cable: [8, 8],
  boucle: [7, 7],
};
const surfaceRepeat = (stitch, w, h) => {
  const [cols, rows] = STITCH_CELL[stitch];
  return [Math.max(1, Math.round(w / (cols * 0.075))), Math.max(1, Math.round(h / (rows * 0.065)))];
};

function addYarnTube(parent, curve, radius, color, closed = false) {
  const len = curve.getLength();
  return addShadowMesh(
    parent,
    new THREE.TubeGeometry(curve, Math.max(12, Math.round(len / TUBE_STEP)), radius, TUBE_RADIAL, closed),
    getYarn(color, "strand", strandRepeat((len * 0.035) / radius, 2))
  );
}

function addYarnRing(parent, radius, y, tubeRad, color) {
  const mesh = addShadowMesh(
    parent,
    new THREE.TorusGeometry(radius, tubeRad, PERF.isMobile ? 7 : 10, RING_SEGS),
    getYarn(color, "strand", strandRepeat((TWO_PI * radius * 0.035) / tubeRad, 2))
  );
  mesh.rotation.x = Math.PI / 2;
  mesh.position.y = y;
  return mesh;
}

function addCoiledDisc(parent, radius, tubeRad, color, y) {
  const startR = 0.02;
  const endR = radius - tubeRad;
  const turns = (endR - startR) / (tubeRad * 1.8);
  const steps = Math.ceil(turns * 36);
  const pts = [];
  for (let i = 0; i <= steps; i++) {
    const a = (i / steps) * turns * TWO_PI;
    const r = startR + ((endR - startR) * i) / steps;
    pts.push(new THREE.Vector3(Math.cos(a) * r, 0, Math.sin(a) * r));
  }
  addYarnTube(parent, new THREE.CatmullRomCurve3(pts), tubeRad, color).position.y = y;
  const disc = addShadowMesh(
    parent,
    new THREE.CircleGeometry(radius - 0.01, 40),
    getYarn(color, "stockinette", surfaceRepeat("stockinette", 2 * radius, 2 * radius)),
    0,
    y - tubeRad * 0.4,
    0
  );
  disc.rotation.x = -Math.PI / 2;
}

const unitSphere = new THREE.SphereGeometry(1, 16, 12);
function addEllipsoid(parent, mat, x, y, z, sx, sy = sx, sz = sx) {
  const m = addShadowMesh(parent, unitSphere, mat, x, y, z);
  m.scale.set(sx, sy, sz);
  return m;
}

const buttonEyeMat = new THREE.MeshStandardMaterial({ color: "#1c1210", roughness: 0.25 });

function createHaloTexture() {
  return toSRGBTexture(
    makeCanvas(128, 128, (ctx) => {
      const g = ctx.createRadialGradient(64, 64, 0, 64, 64, 64);
      g.addColorStop(0, "rgba(255,255,255,1)");
      g.addColorStop(0.35, "rgba(255,255,255,0.45)");
      g.addColorStop(1, "rgba(255,255,255,0)");
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, 128, 128);
    })
  );
}

// Heart-shaped knitted leaves for the potted plant
const LEAF_SEGS = PERF.leafSegs;
const LEAF_RINGS = PERF.leafRings;
const LEAF_BULGE = 0.12;
const LEAF_CENTER_Y = 0.2;
const LEAF_CONTOUR = Array.from({ length: LEAF_SEGS }, (_, i) => {
  const t = (i / LEAF_SEGS) * TWO_PI;
  const y = 13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t);
  return [0.5 * Math.sin(t) ** 3, ((12 - y) * 1.1) / 32 - 0.2406];
});
const leafCup = (x, y) => -0.6 * x * x - 0.3 * y * y;

function createLeafHalf(scale, side) {
  const pos = [0, LEAF_CENTER_Y, leafCup(0, LEAF_CENTER_Y) + side * LEAF_BULGE];
  const uv = [0, LEAF_CENTER_Y * scale];
  for (let r = 1; r <= LEAF_RINGS; r++) {
    const f = r / LEAF_RINGS;
    const zOff = LEAF_BULGE * Math.sqrt(1 - f * f);
    for (const [cx, cy] of LEAF_CONTOUR) {
      const x = cx * f;
      const y = LEAF_CENTER_Y + (cy - LEAF_CENTER_Y) * f;
      pos.push(x, y, leafCup(x, y) + side * zOff);
      uv.push(x * scale, y * scale);
    }
  }
  const idx = [];
  const ringVert = (ring, seg) => 1 + (ring - 1) * LEAF_SEGS + (seg % LEAF_SEGS);
  const pushTri = (a, b, c) => (side > 0 ? idx.push(a, b, c) : idx.push(a, c, b));
  for (let s = 0; s < LEAF_SEGS; s++) pushTri(0, ringVert(1, s), ringVert(1, s + 1));
  for (let r = 2; r <= LEAF_RINGS; r++) {
    for (let s = 0; s < LEAF_SEGS; s++) {
      pushTri(ringVert(r - 1, s), ringVert(r, s), ringVert(r, s + 1));
      pushTri(ringVert(r - 1, s), ringVert(r, s + 1), ringVert(r - 1, s + 1));
    }
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute("position", new THREE.Float32BufferAttribute(pos, 3));
  geo.setAttribute("uv", new THREE.Float32BufferAttribute(uv, 2));
  geo.setIndex(idx);
  geo.computeVertexNormals();
  return geo;
}

const LEAF_STYLES = [
  { color: "#6aad4f", stitch: "seed" },
  { color: "#4a9446", stitch: "seed" },
  { color: "#3a7f44", stitch: "garter" },
  { color: "#4f9a46", stitch: "seed", color2: "#d8e48e", pattern: "stripe" },
];
const LEAF_ORDER = [0, 1, 0, 2, 1, 3, 0, 2, 1, 0, 3, 2];
const LEAF_RIM_COLOR = "#2e6a3a";

function collectKnittedLeaf(buckets, rimGeos, matrix, scale, styleIdx) {
  const blade = mergeGeometries([createLeafHalf(scale, 1), createLeafHalf(scale, -1)]).applyMatrix4(matrix);
  buckets[styleIdx].push(blade);

  const pt = (x, y, z) => new THREE.Vector3(x, y, z).applyMatrix4(matrix);
  const rimCurve = new THREE.CatmullRomCurve3(LEAF_CONTOUR.map(([x, y]) => pt(x, y, leafCup(x, y))), true);
  rimGeos.push(
    new THREE.TubeGeometry(rimCurve, Math.max(12, Math.round(rimCurve.getLength() / TUBE_STEP)), 0.03, TUBE_RADIAL, true)
  );

  const vein = [];
  for (let i = 0; i <= 8; i++) {
    const y = 0.02 + (0.62 * i) / 8;
    const t = y < LEAF_CENTER_Y ? (LEAF_CENTER_Y - y) / LEAF_CENTER_Y : (y - LEAF_CENTER_Y) / 0.556;
    vein.push(pt(0, y, leafCup(0, y) + LEAF_BULGE * Math.sqrt(1 - t * t)));
  }
  const veinCurve = new THREE.CatmullRomCurve3(vein);
  rimGeos.push(
    new THREE.TubeGeometry(veinCurve, Math.max(8, Math.round(veinCurve.getLength() / TUBE_STEP)), 0.022, TUBE_RADIAL, false)
  );
}

function createPottedPlant() {
  const rand = seededRand(11);
  const group = placeOnTable(new THREE.Group(), -2.9, -3.9);
  const potColor = "#d8c7a0";
  const pot = createLatheProfile(
    [[0.001, 0], [0.36, 0], [0.4, 0.03], [0.5, 0.3], [0.58, 0.62], [0.62, 0.8], [0.665, 0.84], [0.67, 0.88], [0.645, 0.9], [0.615, 0.88], [0.585, 0.82], [0.52, 0.6], [0.001, 0.55]],
    100
  );
  addShadowMesh(group, pot.geo, getYarn(potColor, "stockinette", surfaceRepeat("stockinette", TWO_PI * 0.55, pot.len)));
  addYarnRing(group, 0.64, 0.86, 0.06, potColor);
  addYarnRing(group, 0.395, 0.05, 0.05, potColor);

  const soil = addShadowMesh(group, new THREE.CircleGeometry(0.58, PERF.isMobile ? 20 : 40), getYarn("#4a3224", "boucle", [3, 3]), 0, 0.74, 0);
  soil.rotation.x = -Math.PI / 2;

  const v3 = (x, y, z) => new THREE.Vector3(x, y, z);
  const stems = [];
  const leafT = [[0.72, 1], [0.68, 1], [0.7, 1], [1], [1], [1]];

  for (let i = 0; i < 6; i++) {
    const a = (i / 6) * TWO_PI + rand() * 0.5;
    const ca = Math.cos(a), sa = Math.sin(a);
    const h = 1.35 + rand() * 0.45;
    stems.push(
      new THREE.CatmullRomCurve3([
        v3(ca * 0.15, 0.72, sa * 0.15),
        v3(ca * 0.2, 1.2, sa * 0.2),
        v3(ca * (0.45 + rand() * 0.15), h * 0.85 + 0.1, sa * (0.45 + rand() * 0.15)),
        v3(ca * (0.8 + rand() * 0.25), h, sa * (0.8 + rand() * 0.25)),
        v3(ca * (1.1 + rand() * 0.2), h - 0.2, sa * (1.1 + rand() * 0.2)),
      ])
    );
  }
  for (const [ang, stops] of [[Math.PI * 0.9, [0.55, 0.98]], [Math.PI * 0.6, [0.98]]]) {
    const ca = Math.cos(ang), sa = Math.sin(ang);
    const tx = -sa * 0.25, tz = ca * 0.25;
    stems.push(
      new THREE.CatmullRomCurve3([
        v3(ca * 0.15, 0.72, sa * 0.15),
        v3(ca * 0.45, 1.05, sa * 0.45),
        v3(ca * 0.8, 1, sa * 0.8),
        v3(ca * 0.9, 0.55, sa * 0.9),
        v3(ca * 0.9 + tx * 0.4, 0.15, sa * 0.9 + tz * 0.4),
        v3(ca * 1 + tx, 0.03, sa * 1 + tz),
      ])
    );
    leafT.push(stops);
  }

  const up = v3(0, 1, 0);
  const stemGeos = [];
  const leafBuckets = LEAF_STYLES.map(() => []);
  const rimGeos = [];
  let leafIdx = 0;

  stems.forEach((curve, sIdx) => {
    stemGeos.push(
      new THREE.TubeGeometry(curve, Math.max(12, Math.round(curve.getLength() / TUBE_STEP)), 0.035, TUBE_RADIAL, false)
    );
    for (const t of leafT[sIdx]) {
      const pt = curve.getPoint(t);
      const tan = curve.getTangent(t);
      const out = v3(pt.x, 0, pt.z).normalize();
      const dir = v3()
        .addScaledVector(tan, 0.45)
        .addScaledVector(out, 0.85)
        .addScaledVector(up, 0.15)
        .add(v3(rand() - 0.5, rand() - 0.5, rand() - 0.5).multiplyScalar(0.5))
        .normalize();
      const side = v3().crossVectors(dir, up);
      if (side.lengthSq() < 1e-4) side.set(1, 0, 0);
      side.normalize();
      const fwd = v3().crossVectors(side, dir);
      const twist = (rand() - 0.5) * 0.9;
      const ct = Math.cos(twist), st = Math.sin(twist);
      const rx = side.clone().multiplyScalar(ct).addScaledVector(fwd, st);
      const rz = fwd.clone().multiplyScalar(ct).addScaledVector(side, -st);
      const scale = 0.62 + rand() * 0.22;
      const mat4 = new THREE.Matrix4().makeBasis(
        rx.multiplyScalar(scale),
        dir.clone().multiplyScalar(scale),
        rz.multiplyScalar(scale)
      );
      mat4.setPosition(pt);
      collectKnittedLeaf(leafBuckets, rimGeos, mat4, scale, LEAF_ORDER[leafIdx++ % LEAF_ORDER.length]);
    }
  });

  // Batch stems, rims/veins, and leaf blades by material to cut draw calls from 48 -> 9
  addShadowMesh(group, mergeGeometries(stemGeos), getYarn("#5b9442", "strand", strandRepeat(1.8, 2)));
  stemGeos.forEach((g) => g.dispose());

  addShadowMesh(group, mergeGeometries(rimGeos), getYarn(LEAF_RIM_COLOR, "strand", strandRepeat(1.6, 2)));
  rimGeos.forEach((g) => g.dispose());

  leafBuckets.forEach((geos, idx) => {
    if (!geos.length) return;
    const style = LEAF_STYLES[idx];
    const [cols, rows] = STITCH_CELL[style.stitch];
    const mat = getYarn(style.color, style.stitch, [1 / (cols * 0.075), 1 / (rows * 0.065)], style.color2, style.pattern);
    addShadowMesh(group, mergeGeometries(geos), mat);
    geos.forEach((g) => g.dispose());
  });

  return group;
}

function createYarnBall(radius, coreColor, strandColors, rand) {
  const group = new THREE.Group();
  const sphereSegs = PERF.isMobile ? 16 : 32;
  addShadowMesh(group, new THREE.SphereGeometry(radius - 0.03, sphereSegs, Math.round(sphereSegs * 0.7)), getYarn(coreColor, "stockinette", sphereRepeat(radius - 0.03)));
  const buckets = strandColors.map(() => []);
  const tubeR = (radius / 0.55) * 0.032;

  for (let i = 0; i < PERF.yarnBallTubes; i++) {
    const axis = new THREE.Vector3(rand() * 2 - 1, rand() * 2 - 1, rand() * 2 - 1).normalize();
    const ref = Math.abs(axis.y) < 0.9 ? new THREE.Vector3(0, 1, 0) : new THREE.Vector3(1, 0, 0);
    const u = new THREE.Vector3().crossVectors(axis, ref).normalize();
    const v = new THREE.Vector3().crossVectors(axis, u);
    const r = radius - 0.02 + (rand() - 0.5) * 0.04;
    const sweep = Math.PI * (1.5 + rand() * 0.4);
    const a0 = rand() * TWO_PI;
    const h0 = (rand() - 0.5) * 0.6 * r;
    const dh = (rand() - 0.5) * 0.7 * r;
    const pts = [];
    const ptSteps = PERF.isMobile ? 20 : 40;
    for (let s = 0; s <= ptSteps; s++) {
      const f = s / ptSteps;
      const a = a0 + f * sweep;
      const h = THREE.MathUtils.clamp(h0 + dh * f, -0.85 * r, 0.85 * r);
      const ringR = Math.sqrt(r * r - h * h);
      pts.push(
        new THREE.Vector3()
          .addScaledVector(u, Math.cos(a) * ringR)
          .addScaledVector(v, Math.sin(a) * ringR)
          .addScaledVector(axis, h)
      );
    }
    buckets[i % strandColors.length].push(
      new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts), PERF.yarnBallTubeSegs, tubeR, PERF.yarnBallRadial, false)
    );
  }

  buckets.forEach((geos, idx) => {
    addShadowMesh(group, mergeGeometries(geos), getYarn(strandColors[idx], "strand", strandRepeat(radius * 5.3)));
    geos.forEach((g) => g.dispose());
  });
  return group;
}

const woodNeedleMat = new THREE.MeshStandardMaterial({ color: "#dfb883", roughness: 0.5 });

function addKnittingNeedles(ballGroup, radius) {
  const shaft = new THREE.CylinderGeometry(0.034, 0.016, 2.2, 10);
  const knob = new THREE.SphereGeometry(0.085, 16, 12);
  const up = new THREE.Vector3(0, 1, 0);

  for (const [entry, dirArr] of [
    [[0.2, 0.9, 0.1], [-0.5, 0.85, 0.15]],
    [[0.5, 0.8, 0.3], [0.1, 0.9, 0.35]],
  ]) {
    const dir = new THREE.Vector3(...dirArr).normalize();
    const needle = new THREE.Group();
    needle.position.set(...entry).normalize().multiplyScalar(radius).addScaledVector(dir, 0.75);
    needle.quaternion.setFromUnitVectors(up, dir);
    addShadowMesh(needle, shaft, woodNeedleMat);
    addShadowMesh(needle, knob, woodNeedleMat, 0, 1.12, 0);
    ballGroup.add(needle);
  }
}

function createYarnCluster() {
  const group = new THREE.Group();
  const pinkBall = createYarnBall(0.55, "#c97b84", ["#e9a0a0", "#dd8f94", "#f0b4ae"], seededRand(21));
  pinkBall.position.set(4.3, 0.3625, -0.4);
  addKnittingNeedles(pinkBall, 0.55);
  group.add(pinkBall);

  const creamBall = createYarnBall(0.5, "#cdbb9d", ["#efe4d0", "#f6ecdb", "#e3d4ba"], seededRand(22));
  creamBall.position.set(4.6, 0.315, 0.95);
  group.add(creamBall);

  const tailY = -0.125;
  const tail = new THREE.CatmullRomCurve3([
    new THREE.Vector3(4.38, 0.04, 1.36),
    new THREE.Vector3(4.22, -0.085, 1.62),
    new THREE.Vector3(4.42, tailY, 1.92),
    new THREE.Vector3(4.12, tailY, 2.2),
    new THREE.Vector3(4.3, tailY, 2.42),
  ]);
  addShadowMesh(group, new THREE.TubeGeometry(tail, 80, 0.035, 6), getYarn("#efe4d0", "strand", strandRepeat(tail.getLength(), 4)));
  return group;
}

function createFoldedCloth() {
  const group = placeOnTable(new THREE.Group(), 4, 3, THREE.MathUtils.degToRad(-20));
  const edgeMat = getYarn("#efe4d0", "garter", [8, 1]);
  const addLayer = (w, d, x, y, z, ry) => {
    const topMat = getYarn("#efe4d0", "stockinette", [snapMult(w / 0.3, 4), snapMult(d / 0.3, 4)], "#d98f86", "check");
    const mesh = addShadowMesh(group, new RoundedBoxGeometry(w, 0.09, d, 4, 0.04), [edgeMat, edgeMat, topMat, edgeMat, edgeMat, edgeMat], x, y, z);
    mesh.rotation.y = ry;
  };
  addLayer(1.6, 1.1, 0, 0.045, 0, 0);
  addLayer(1.5, 0.95, 0.05, 0.135, -0.07, 0.05);
  addYarnTube(group, new THREE.LineCurve3(new THREE.Vector3(-0.68, 0.1, 0.42), new THREE.Vector3(0.78, 0.1, 0.42)), 0.075, "#d98f86");
  return group;
}

function createCoaster() {
  const group = placeOnTable(new THREE.Group(), -4.3, 0.9);
  addCoiledDisc(group, 0.63, 0.06, "#efe4d0", 0.06);
  addYarnRing(group, 0.66, 0.07, 0.07, "#efe4d0");
  return group;
}

function createMugBase(profile, { color, rim, base, handle }) {
  const { geo, len, radiusAt } = createLatheProfile(profile);
  const group = new THREE.Group();
  addShadowMesh(group, geo, getYarn(color, "stockinette", surfaceRepeat("stockinette", TWO_PI * 0.5, len)));
  addYarnRing(group, rim[0], rim[1], 0.06, color);
  addYarnRing(group, base[0], base[1], 0.05, color);
  const arc = Math.PI * 1.1;
  const tubeR = 0.065;
  const hMesh = addShadowMesh(
    group,
    new THREE.TorusGeometry(handle.r, tubeR, 12, 36, arc),
    getYarn(color, "strand", strandRepeat((arc * handle.r * 0.035) / tubeR, 2)),
    handle.x,
    handle.y,
    0
  );
  hMesh.rotation.z = Math.PI - arc / 2;
  return { group, radiusAt };
}

function attachMugEmblem(mug, emblem, angle, y) {
  const slope = (mug.radiusAt(y + 0.03) - mug.radiusAt(y - 0.03)) / 0.06;
  const rad = mug.radiusAt(y) + 0.015;
  const clone = emblem.clone();
  clone.position.set(Math.cos(angle) * rad, y, Math.sin(angle) * rad);
  clone.rotation.order = "YXZ";
  clone.rotation.set(Math.atan(slope), Math.PI / 2 - angle, 0);
  mug.group.add(clone);
}

function createFlowerEmblem() {
  const g = new THREE.Group();
  const petalMat = getYarn("#c4683c", "stockinette", [2, 1]);
  const centerMat = getYarn("#e2a53c", "stockinette", [1, 1]);
  for (let i = 0; i < 5; i++) {
    const a = (i / 5) * TWO_PI;
    addEllipsoid(g, petalMat, Math.cos(a) * 0.085, Math.sin(a) * 0.085, 0.02, 0.07, 0.07, 0.04);
  }
  addEllipsoid(g, centerMat, 0, 0, 0.04, 0.045, 0.045, 0.04);
  return g;
}

function createBearEmblem() {
  const g = new THREE.Group();
  const headMat = getYarn("#8a5638", "stockinette", [3, 2]);
  const earMat = getYarn("#8a5638", "stockinette", [1, 1]);
  const snoutMat = getYarn("#e8cfa8", "stockinette", [1, 1]);
  for (const side of [-1, 1]) {
    addEllipsoid(g, earMat, side * 0.075, 0.075, 0.01, 0.045, 0.045, 0.03);
    addEllipsoid(g, buttonEyeMat, side * 0.035, 0.015, 0.078, 0.015);
  }
  addEllipsoid(g, headMat, 0, 0, 0.03, 0.1, 0.092, 0.055);
  addEllipsoid(g, snoutMat, 0, -0.03, 0.065, 0.045, 0.036, 0.03);
  addEllipsoid(g, buttonEyeMat, 0, -0.018, 0.093, 0.016, 0.012, 0.012);
  return g;
}

function createSteamSprites(parent) {
  const tex = toSRGBTexture(
    makeCanvas(128, 128, (ctx) => {
      const puff = (x, y, r, a) => {
        const g = ctx.createRadialGradient(x, y, 0, x, y, r);
        g.addColorStop(0, `rgba(255,255,255,${a})`);
        g.addColorStop(1, "rgba(255,255,255,0)");
        ctx.fillStyle = g;
        ctx.fillRect(0, 0, 128, 128);
      };
      puff(64, 64, 50, 0.7);
      puff(46, 52, 28, 0.5);
      puff(82, 74, 30, 0.5);
    })
  );
  const sprites = [];
  for (let i = 0; i < 5; i++) {
    const sp = new THREE.Sprite(
      new THREE.SpriteMaterial({ map: tex, transparent: true, depthWrite: false, opacity: 0, rotation: i * 1.3 })
    );
    sp.renderOrder = 5;
    parent.add(sp);
    sprites.push(sp);
  }
  return sprites;
}

const MUG_YAW = THREE.MathUtils.degToRad(40);

function createDayMug() {
  const group = new THREE.Group();
  group.position.set(-4.3, -0.06, 0.9);
  const mug = createMugBase(
    [[0.001, 0], [0.26, 0], [0.33, 0.04], [0.44, 0.18], [0.5, 0.38], [0.515, 0.6], [0.505, 0.8], [0.495, 0.88], [0.47, 0.92], [0.44, 0.88], [0.45, 0.7], [0.44, 0.4], [0.36, 0.18], [0.001, 0.14]],
    { color: "#efe4d0", rim: [0.495, 0.88], base: [0.33, 0.04], handle: { r: 0.2, x: -0.5, y: 0.48 } }
  );
  mug.group.rotation.y = MUG_YAW;
  group.add(mug.group);

  const flower = createFlowerEmblem();
  for (const [deg, y] of [[25, 0.45], [70, 0.62], [115, 0.45], [300, 0.6]]) {
    attachMugEmblem(mug, flower, THREE.MathUtils.degToRad(deg), y);
  }
  addCoiledDisc(mug.group, 0.435, 0.045, "#9a5424", 0.76);
  return { group, steam: createSteamSprites(group) };
}

function createNightMug() {
  const group = new THREE.Group();
  group.position.set(-4.3, -0.06, 0.9);
  const mug = createMugBase(
    [[0.001, 0], [0.4, 0], [0.47, 0.05], [0.5, 0.3], [0.51, 0.75], [0.52, 1], [0.525, 1.04], [0.5, 1.08], [0.46, 1.04], [0.45, 0.8], [0.44, 0.3], [0.4, 0.15], [0.001, 0.13]],
    { color: "#efe4d0", rim: [0.49, 1.04], base: [0.455, 0.055], handle: { r: 0.25, x: -0.47, y: 0.55 } }
  );
  mug.group.rotation.y = MUG_YAW;
  group.add(mug.group);

  const bear = createBearEmblem();
  for (const deg of [30, 95, 300]) {
    attachMugEmblem(mug, bear, THREE.MathUtils.degToRad(deg), 0.55);
  }
  addCoiledDisc(mug.group, 0.44, 0.05, "#6a3a22", 0.88);

  const mGeo = new RoundedBoxGeometry(0.21, 0.15, 0.21, 3, 0.06);
  const mMat = getYarn("#fff6ea", "stockinette", surfaceRepeat("stockinette", 0.21, 0.15));
  const rand = seededRand(41);
  for (const [mx, mz] of [[-0.17, 0.1], [0.15, 0.15], [-0.02, -0.15], [0.22, -0.1]]) {
    addShadowMesh(mug.group, mGeo, mMat, mx, 0.98, mz).rotation.set(
      (rand() - 0.5) * 0.4,
      rand() * TWO_PI,
      (rand() - 0.5) * 0.4
    );
  }
  return group;
}

function createFloorLamp() {
  const group = new THREE.Group();
  const standMat = new THREE.MeshStandardMaterial({ color: "#a8703f", roughness: 0.55 });
  const baseZ = -2.2;
  const topY = 2.75;

  const baseMesh = addShadowMesh(
    group,
    createLatheProfile([[0.001, 0], [0.5, 0], [0.55, 0.03], [0.55, 0.09], [0.48, 0.13], [0.3, 0.15], [0.001, 0.15]], 40).geo,
    standMat, -6, TABLE_Y, baseZ
  );
  const poleMesh = addShadowMesh(group, new THREE.CylinderGeometry(0.045, 0.05, 2.76, 14), standMat, -6, 1.37, baseZ);
  addShadowMesh(group, new THREE.SphereGeometry(0.07, 14, 10), standMat, -6, topY, baseZ);

  const armMesh = addShadowMesh(
    group,
    new THREE.TubeGeometry(
      new THREE.CatmullRomCurve3([
        new THREE.Vector3(-6, topY, baseZ),
        new THREE.Vector3(-5.8, 3.1, -1.9),
        new THREE.Vector3(-5.35, 3.3, -1.55),
        new THREE.Vector3(-4.9, 3.25, -1.3),
        new THREE.Vector3(-4.9, 2.95, -1.3),
      ]),
      40, 0.035, 8
    ),
    standMat
  );
  [baseMesh, poleMesh, armMesh].forEach((m) => (m.castShadow = false));

  const shadePos = new THREE.Vector3(-4.9, 2.6, -1.3);
  const bulb = addShadowMesh(
    group,
    new THREE.SphereGeometry(0.2, 20, 14),
    new THREE.MeshBasicMaterial({ color: "#ffe2b0", toneMapped: false }),
    shadePos.x, shadePos.y - 0.05, shadePos.z
  );
  bulb.castShadow = bulb.receiveShadow = false;

  const addEmissive = (mat, side) => {
    mat.side = side;
    mat.emissive = new THREE.Color("#ffb35e");
    mat.emissiveMap = mat.map;
    mat.emissiveIntensity = 0;
    return mat;
  };

  const shadeRep = surfaceRepeat("rib", TWO_PI * 0.775, 0.95);
  const shadeGeo = new THREE.CylinderGeometry(0.7, 0.85, 0.9, 56, 1, true);
  const shadeMats = [0, 1].map((side) => addEmissive(createYarnMaterial({ color: "#f3e0b8", stitch: "rib", repeat: shadeRep }), side));
  for (const mat of shadeMats) {
    const m = addShadowMesh(group, shadeGeo, mat, shadePos.x, shadePos.y, shadePos.z);
    m.castShadow = m.receiveShadow = false;
  }

  const trimMat = addEmissive(createYarnMaterial({ color: "#f3e0b8", stitch: "strand", repeat: strandRepeat(TWO_PI * 0.78 * 0.7, 2) }), 0);
  shadeMats.push(trimMat);
  for (const [r, dy] of [[0.7, 0.45], [0.85, -0.45]]) {
    const ring = addShadowMesh(group, new THREE.TorusGeometry(r, 0.05, 10, 64), trimMat, shadePos.x, shadePos.y + dy, shadePos.z);
    ring.rotation.x = Math.PI / 2;
    ring.castShadow = ring.receiveShadow = false;
  }

  const spot = new THREE.SpotLight("#ffc27a", 0, 0, 0.85, 0.8, 1);
  spot.position.set(shadePos.x, shadePos.y - 0.1, shadePos.z);
  spot.target.position.set(0.2, 0, 0.2);
  spot.shadow.mapSize.set(PERF.shadowMapSize, PERF.shadowMapSize);
  spot.shadow.bias = -8e-4;
  spot.shadow.normalBias = 0.06;
  spot.shadow.camera.near = 0.5;
  spot.shadow.camera.far = 20;
  group.add(spot);

  const glow = new THREE.PointLight("#ffb766", 0, 4, 2);
  glow.position.copy(shadePos);
  group.add(glow);

  return { group, spot, glow, shadeMats };
}

function createBookStack() {
  const group = placeOnTable(new THREE.Group(), 4.7, -2.6, 0.12);
  const pageMat = getYarn("#f0e4cc", "garter", [4, 1]);
  let stackY = 0;

  const specs = [
    [1.9, 0.32, 1.4, "#7a5238", "stockinette", "#e6d9b8", 0.08, 0, 0],
    [1.75, 0.28, 1.28, "#e6d9b8", "seed", "#8a6a4a", -0.1, 0.06, -0.04],
    [1.65, 0.26, 1.2, "#6f8c64", "rib", "#efe4d0", 0.38, -0.04, 0.03],
  ];

  for (const [w, h, d, coverColor, stitch, bandColor, ry, ox, oz] of specs) {
    const book = new THREE.Group();
    const coverMat = getYarn(coverColor, stitch, surfaceRepeat(stitch, w, d));
    const coverT = 0.06;
    addShadowMesh(book, new RoundedBoxGeometry(w, coverT, d, 3, 0.025), coverMat, 0, h / 2 - coverT / 2, 0);
    addShadowMesh(book, new RoundedBoxGeometry(w, coverT, d, 3, 0.025), coverMat, 0, -h / 2 + coverT / 2, 0);
    addShadowMesh(book, new RoundedBoxGeometry(w, h, 0.08, 3, 0.03), coverMat, 0, 0, d / 2 - 0.04);
    addShadowMesh(book, new THREE.BoxGeometry(w - 0.12, h - 2 * coverT + 0.02, d - 0.1), pageMat, 0, 0, -0.01);

    for (const bx of [-0.55, -0.45, 0.45, 0.55]) {
      addYarnTube(
        book,
        new THREE.LineCurve3(
          new THREE.Vector3((w / 1.9) * bx, -h / 2 + 0.03, d / 2 + 0.005),
          new THREE.Vector3((w / 1.9) * bx, h / 2 - 0.03, d / 2 + 0.005)
        ),
        0.025,
        bandColor
      );
    }

    book.position.set(ox, stackY + h / 2, oz);
    book.rotation.y = ry;
    group.add(book);
    stackY += h;
  }
  return group;
}

function createCandle() {
  const group = placeOnTable(new THREE.Group(), 5, -1.1);
  const waxMat = createYarnMaterial({ color: "#f4e6c8", stitch: "rib", repeat: surfaceRepeat("rib", TWO_PI * 0.4, 0.6) });
  waxMat.emissive = new THREE.Color("#ffb060");
  waxMat.emissiveIntensity = 0;

  addShadowMesh(group, new THREE.CylinderGeometry(0.4, 0.4, 0.6, 40), waxMat, 0, 0.34, 0);
  addYarnRing(group, 0.4, 0.61, 0.055, "#f4e6c8");
  addYarnRing(group, 0.4, 0.07, 0.055, "#f4e6c8");
  addCoiledDisc(group, 0.38, 0.045, "#f4e6c8", 0.6);
  addYarnTube(group, new THREE.LineCurve3(new THREE.Vector3(0, 0.6, 0), new THREE.Vector3(0, 0.7, 0)), 0.02, "#3a2a22");

  const flame = new THREE.Group();
  flame.position.y = 0.66;
  const flameGeo = createLatheProfile(
    [[0.001, 0], [0.03, 0.015], [0.048, 0.07], [0.042, 0.14], [0.022, 0.22], [0.001, 0.3]],
    24
  ).geo;
  const outerFlame = new THREE.Mesh(flameGeo, new THREE.MeshBasicMaterial({ color: "#ffc864", toneMapped: false }));
  const innerFlame = new THREE.Mesh(flameGeo, new THREE.MeshBasicMaterial({ color: "#fff3cf", toneMapped: false }));
  innerFlame.scale.set(0.55, 0.6, 0.55);
  flame.add(outerFlame, innerFlame);
  flame.scale.setScalar(0.75);
  group.add(flame);

  const halo = new THREE.Sprite(
    new THREE.SpriteMaterial({
      map: createHaloTexture(),
      color: "#ff9a40",
      blending: THREE.AdditiveBlending,
      transparent: true,
      depthWrite: false,
      toneMapped: false,
      opacity: 0.5,
    })
  );
  halo.scale.setScalar(1.1);
  halo.position.y = 0.78;
  halo.renderOrder = 6;
  group.add(halo);

  const light = new THREE.PointLight("#ffa04a", 0, 5, 2);
  light.position.set(0, 0.85, 0);
  group.add(light);

  return { group, flame, halo, light, wax: waxMat };
}

export function createProps({ scene, renderer }) {
  propAnisotropy = Math.min(renderer.capabilities.getMaxAnisotropy(), PERF.anisotropy);
  const group = new THREE.Group();
  scene.add(group);

  const disableShadows = (obj) => {
    if (!PERF.isMobile) return obj;
    obj.traverse((child) => {
      if (child.isMesh) child.castShadow = false;
    });
    return obj;
  };

  group.add(
    createPottedPlant(),
    disableShadows(createYarnCluster()),
    disableShadows(createFoldedCloth()),
    disableShadows(createCoaster())
  );

  const dayGroup = new THREE.Group();
  const dayMug = createDayMug();
  dayGroup.add(disableShadows(dayMug.group));

  const nightGroup = new THREE.Group();
  const lamp = createFloorLamp();
  const candle = createCandle();
  nightGroup.add(
    disableShadows(createNightMug()),
    lamp.group,
    disableShadows(createBookStack()),
    disableShadows(candle.group)
  );

  group.add(dayGroup, nightGroup, lamp.spot.target);
  nightGroup.visible = false;

  const lampSpot = lamp.spot;
  let nightFactor = 0;

  function setTime(t) {
    const isNight = t >= 0.5;
    nightFactor = smoothstep(t, 0.5, 1);
    dayGroup.visible = !isNight;
    nightGroup.visible = isNight;
    lampSpot.castShadow = isNight;
    lampSpot.intensity = LAMP_SPOT_MAX * nightFactor;
    lamp.glow.intensity = LAMP_GLOW_MAX * nightFactor;
    lamp.shadeMats[0].emissiveIntensity = 0.45 * nightFactor;
    lamp.shadeMats[1].emissiveIntensity = 0.9 * nightFactor;
    lamp.shadeMats[2].emissiveIntensity = 0.6 * nightFactor;
    candle.wax.emissiveIntensity = 0.15 * nightFactor;
  }

  setTime(0);

  let clock = 0;
  let flickerCur = 0;
  let flickerTarget = 0;
  let flickerTimer = 0;

  function update(dt) {
    dt = Math.min(dt, 0.1);
    clock += dt;

    if (dayGroup.visible) {
      dayMug.steam.forEach((sp, i) => {
        const p = (clock / 4 + i / dayMug.steam.length) % 1;
        sp.position.set(Math.sin(p * 5 + i * 2) * 0.09 + p * 0.1, 0.95 + p * 1.6, Math.cos(p * 4 + i) * 0.05);
        sp.scale.setScalar(0.3 + p * 0.7);
        sp.material.opacity = Math.sin(p * Math.PI) ** 1.3 * 0.4;
      });
    }

    if (nightGroup.visible) {
      flickerTimer -= dt;
      if (flickerTimer <= 0) {
        flickerTarget = Math.random() * 2 - 1;
        flickerTimer = 0.05 + Math.random() * 0.12;
      }
      flickerCur += (flickerTarget - flickerCur) * Math.min(1, dt * 14);
      const wave =
        1 +
        0.07 * Math.sin(clock * 9.3) +
        0.05 * Math.sin(clock * 15.7 + 1.3) +
        0.04 * Math.sin(clock * 4.1 + 0.6) +
        0.07 * flickerCur;
      candle.light.intensity = CANDLE_LIGHT_MAX * nightFactor * wave;
      candle.halo.material.opacity = 0.5 * (0.4 + 0.6 * nightFactor) * wave;
      candle.flame.scale.set(
        0.75 * (1 + 0.06 * Math.sin(clock * 13) + 0.04 * flickerCur),
        0.75 * (1 + 0.5 * (wave - 1)),
        0.75
      );
      candle.flame.rotation.z = 0.06 * Math.sin(clock * 5.3) + 0.05 * flickerCur;
    }
  }

  return { group, lampLight: lampSpot, setTime, update };
}

export function createBasket(wallThickness = 0.26) {
  const group = new THREE.Group();
  const makeMat = (w, h, stitch = "stockinette") =>
    createYarnMaterial({
      color: "#f3e7d3",
      stitch,
      repeat: [Math.max(1, Math.round(w / 0.88)), Math.max(1, Math.round(h / 1.1))],
    });

  const floor = new THREE.Mesh(new THREE.PlaneGeometry(6, 4), makeMat(6, 4));
  floor.rotation.x = -Math.PI / 2;
  floor.position.y = 0.001;
  floor.receiveShadow = true;
  group.add(floor);

  const wallH = 0.5;
  const rims = [
    [6.52, wallH, wallThickness, 0, -2 - wallThickness / 2],
    [6.52, wallH, wallThickness, 0, 2.13],
    [wallThickness, wallH, 4.52, -3 - wallThickness / 2, 0],
    [wallThickness, wallH, 4.52, 3.13, 0],
  ];

  for (const [w, h, d, x, z] of rims) {
    const rim = new THREE.Mesh(new RoundedBoxGeometry(w, h, d, BOX_SEGS, 0.12), makeMat(Math.max(w, d), h));
    rim.position.set(x, h / 2 - 0.02, z);
    rim.castShadow = rim.receiveShadow = true;
    rim.userData.rim = true;
    group.add(rim);
  }

  const base = new THREE.Mesh(new RoundedBoxGeometry(6.52, 0.16, 4.52, BOX_SEGS, 0.07), makeMat(6, 0.3));
  base.position.y = -0.08;
  base.receiveShadow = true;
  group.add(base);

  return { group, rims: group.children.filter((c) => c.userData.rim) };
}

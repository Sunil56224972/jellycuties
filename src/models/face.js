/**
 * Procedural 2D Canvas Facial Expression System
 *
 * Renders a 6x4 sprite atlas of eyes, highlights, blush cheeks, whiskers,
 * and mouths onto 3D surface-anchored quads with pupil tracking and blinking.
 *
 * @author Sunil
 * @license MIT
 */

import * as THREE from "three";
import { PERF } from "../core/perf.js";

const CELL_SIZE = PERF.isMobile ? 128 : 256;
const CELL_SCALE = CELL_SIZE / 256;
const ATLAS_COLS = 6;
const ATLAS_ROWS = 4;
const EYE_STROKE = "#1f1517";
const MOUTH_COLOR = "#3b2326";
const TONGUE_COLOR = "#ff8fab";

const ATLAS_CELLS = {
  eyeOpen: [0, 0],
  eyeSurprised: [1, 0],
  eyeSquintL: [2, 0],
  eyeSquintR: [3, 0],
  eyeHappy: [4, 0],
  eyeSleepy: [5, 0],
  eyeDizzy: [0, 1],
  hlIdle: [1, 1],
  hlSurprised: [2, 1],
  cheek: [3, 1],
  mouthHappy: [1, 2],
  mouthSquint: [2, 2],
  mouthSurprised: [3, 2],
  mouthDizzy: [4, 2],
  mouthSleepy: [5, 2],
  mouthBear: [0, 3],
  mouthCat: [1, 3],
  mouthFrog: [2, 3],
  mouthPig: [3, 3],
  cheekWL: [4, 3],
  cheekWR: [5, 3],
};

function strokePath(ctx, width, color = EYE_STROKE) {
  ctx.lineWidth = width;
  ctx.strokeStyle = color;
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  ctx.stroke();
}

function drawEyeCircle(ctx, radius) {
  const grad = ctx.createRadialGradient(-radius * 0.3, -radius * 0.3, 0, 0, 0, radius);
  grad.addColorStop(0, "#3a2a2c");
  grad.addColorStop(1, "#120b0c");
  ctx.fillStyle = grad;
  ctx.beginPath();
  ctx.arc(0, 0, radius, 0, Math.PI * 2);
  ctx.fill();
}

function drawCheekBlush(ctx) {
  ctx.save();
  ctx.scale(1, 0.62);
  const grad = ctx.createRadialGradient(0, 0, 0, 0, 0, 70);
  grad.addColorStop(0, "rgba(255,130,150,0.9)");
  grad.addColorStop(0.5, "rgba(255,140,160,0.5)");
  grad.addColorStop(1, "rgba(255,150,170,0)");
  ctx.fillStyle = grad;
  ctx.beginPath();
  ctx.arc(0, 0, 70, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();
}

function drawWhiskers(ctx, sign) {
  ctx.beginPath();
  for (const slope of [-0.22, 0.08]) {
    ctx.moveTo(sign * 66, -6 + slope * 40);
    ctx.lineTo(sign * 118, -6 + slope * 120);
  }
  strokePath(ctx, 6, "#6e5a55");
}

function drawHighlightDot(ctx, x, y, r) {
  ctx.fillStyle = "#fff";
  ctx.beginPath();
  ctx.arc(x, y, r, 0, Math.PI * 2);
  ctx.fill();
}

function drawWavyMouth(ctx, amp, waves, width) {
  ctx.beginPath();
  for (let x = -70; x <= 70; x += 3) {
    const y = -amp * Math.sin((x / 70) * Math.PI * waves);
    if (x === -70) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  }
  strokePath(ctx, width, MOUTH_COLOR);
}

function pathHappyMouth(ctx) {
  ctx.beginPath();
  ctx.moveTo(-64, -34);
  ctx.lineTo(64, -34);
  ctx.bezierCurveTo(60, 30, 30, 70, 0, 70);
  ctx.bezierCurveTo(-30, 70, -60, 30, -64, -34);
  ctx.closePath();
}

const CELL_DRAWERS = {
  eyeOpen: (ctx) => drawEyeCircle(ctx, 60),
  eyeSurprised: (ctx) => drawEyeCircle(ctx, 74),
  eyeSquintL: (ctx) => {
    ctx.beginPath();
    ctx.moveTo(-48, -54);
    ctx.lineTo(42, 0);
    ctx.lineTo(-48, 54);
    strokePath(ctx, 20);
  },
  eyeSquintR: (ctx) => {
    ctx.beginPath();
    ctx.moveTo(48, -54);
    ctx.lineTo(-42, 0);
    ctx.lineTo(48, 54);
    strokePath(ctx, 20);
  },
  eyeHappy: (ctx) => {
    ctx.beginPath();
    ctx.arc(0, 30, 50, Math.PI, Math.PI * 2);
    strokePath(ctx, 18);
  },
  eyeSleepy: (ctx) => {
    ctx.beginPath();
    ctx.moveTo(-56, -6);
    ctx.quadraticCurveTo(0, 34, 56, -6);
    strokePath(ctx, 16);
  },
  eyeDizzy: (ctx) => {
    ctx.beginPath();
    for (let i = 0; i <= 120; i++) {
      const t = i / 120;
      const angle = t * Math.PI * 6.4;
      const rad = 6 + t * 84;
      if (i) ctx.lineTo(Math.cos(angle) * rad, Math.sin(angle) * rad);
      else ctx.moveTo(rad, 0);
    }
    strokePath(ctx, 14);
  },
  hlIdle: (ctx) => {
    drawHighlightDot(ctx, -20, -22, 15);
    drawHighlightDot(ctx, 18, 20, 6);
  },
  hlSurprised: (ctx) => {
    drawHighlightDot(ctx, -26, -28, 16);
    drawHighlightDot(ctx, 22, 26, 7);
  },
  cheek: drawCheekBlush,
  cheekWL: (ctx) => {
    drawCheekBlush(ctx);
    drawWhiskers(ctx, -1);
  },
  cheekWR: (ctx) => {
    drawCheekBlush(ctx);
    drawWhiskers(ctx, 1);
  },
  mouthBear: (ctx) => {
    ctx.fillStyle = MOUTH_COLOR;
    ctx.beginPath();
    ctx.ellipse(0, -22, 15, 11, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.moveTo(0, -14);
    ctx.lineTo(0, 4);
    ctx.moveTo(-30, 16);
    ctx.quadraticCurveTo(-6, 20, 0, 4);
    ctx.quadraticCurveTo(6, 20, 30, 16);
    strokePath(ctx, 10, MOUTH_COLOR);
  },
  mouthCat: (ctx) => {
    ctx.beginPath();
    ctx.arc(-18, -4, 18, 0, Math.PI);
    ctx.moveTo(36, -4);
    ctx.arc(18, -4, 18, 0, Math.PI);
    strokePath(ctx, 10, MOUTH_COLOR);
  },
  mouthFrog: (ctx) => {
    ctx.beginPath();
    ctx.moveTo(-58, -12);
    ctx.quadraticCurveTo(0, 34, 58, -12);
    strokePath(ctx, 9, MOUTH_COLOR);
  },
  mouthPig: (ctx) => {
    ctx.fillStyle = "#e4838f";
    for (const x of [-26, 26]) {
      ctx.beginPath();
      ctx.ellipse(x, 0, 13, 20, 0, 0, Math.PI * 2);
      ctx.fill();
    }
  },
  mouthHappy: (ctx) => {
    ctx.save();
    pathHappyMouth(ctx);
    ctx.clip();
    ctx.fillStyle = MOUTH_COLOR;
    ctx.fillRect(-100, -100, 200, 200);
    ctx.fillStyle = TONGUE_COLOR;
    ctx.beginPath();
    ctx.ellipse(0, 64, 38, 28, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
    pathHappyMouth(ctx);
    strokePath(ctx, 16, MOUTH_COLOR);
  },
  mouthSquint: (ctx) => drawWavyMouth(ctx, 13, 2, 20),
  mouthDizzy: (ctx) => drawWavyMouth(ctx, 22, 1, 20),
  mouthSurprised: (ctx) => {
    ctx.save();
    ctx.beginPath();
    ctx.ellipse(0, 0, 24, 30, 0, 0, Math.PI * 2);
    ctx.clip();
    ctx.fillStyle = MOUTH_COLOR;
    ctx.fillRect(-40, -40, 80, 80);
    ctx.fillStyle = TONGUE_COLOR;
    ctx.beginPath();
    ctx.ellipse(0, 28, 16, 12, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
    ctx.beginPath();
    ctx.ellipse(0, 0, 24, 30, 0, 0, Math.PI * 2);
    strokePath(ctx, 12, MOUTH_COLOR);
  },
  mouthSleepy: (ctx) => {
    ctx.beginPath();
    ctx.moveTo(-24, -4);
    ctx.quadraticCurveTo(0, 26, 24, -4);
    strokePath(ctx, 20, MOUTH_COLOR);
  },
};

const faceAtlasTexture = (() => {
  const canvas = document.createElement("canvas");
  canvas.width = CELL_SIZE * ATLAS_COLS;
  canvas.height = CELL_SIZE * ATLAS_ROWS;
  const ctx = canvas.getContext("2d");

  for (const [key, [col, row]] of Object.entries(ATLAS_CELLS)) {
    ctx.save();
    ctx.beginPath();
    ctx.rect(col * CELL_SIZE, row * CELL_SIZE, CELL_SIZE, CELL_SIZE);
    ctx.clip();
    ctx.translate(col * CELL_SIZE + CELL_SIZE / 2, row * CELL_SIZE + CELL_SIZE / 2);
    if (CELL_SCALE !== 1) ctx.scale(CELL_SCALE, CELL_SCALE);
    CELL_DRAWERS[key](ctx);
    ctx.restore();
  }

  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.premultiplyAlpha = true;
  tex.anisotropy = PERF.anisotropy;
  tex.generateMipmaps = true;
  tex.minFilter = THREE.LinearMipmapLinearFilter;
  tex.magFilter = THREE.LinearFilter;
  return tex;
})();

function setQuadCell(mesh, cellName) {
  const [col, row] = ATLAS_CELLS[cellName];
  const u0 = col / ATLAS_COLS;
  const u1 = (col + 1) / ATLAS_COLS;
  const v0 = 1 - row / ATLAS_ROWS;
  const v1 = 1 - (row + 1) / ATLAS_ROWS;
  const uv = mesh.geometry.attributes.uv;
  uv.array.set([u0, v0, u1, v0, u0, v1, u1, v1]);
  uv.needsUpdate = true;
}

const EXPRESSIONS = {
  idle: { eye: () => "eyeOpen", hl: "hlIdle", mouth: null },
  surprised: { eye: () => "eyeSurprised", hl: "hlSurprised", mouth: "mouthSurprised" },
  squint: { eye: (side) => (side === "L" ? "eyeSquintL" : "eyeSquintR"), mouth: "mouthSquint" },
  happy: { eye: () => "eyeHappy", mouth: "mouthHappy" },
  dizzy: { eye: () => "eyeDizzy", mouth: "mouthDizzy" },
  sleepy: { eye: () => "eyeSleepy", mouth: null },
};

const POP_DURATION = 0.15;
const BLINK_DURATION = 0.08;
const BASE_BLUSH = 0.6;
const BLUSH_DECAY_TIME = 1.5;
const EYE_SCALE = 1.6;
const MOUTH_SCALE = 1.5;
const CHEEK_SCALE = 2.2;

const axisZ = new THREE.Vector3(0, 0, 1);
const tmpNorm = new THREE.Vector3();
const tmpUp = new THREE.Vector3();
const tmpRight = new THREE.Vector3();
const tmpLook = new THREE.Vector3();
const tmpBasis = new THREE.Matrix4();
const tmpQuat = new THREE.Quaternion();
const tmpRoll = new THREE.Quaternion();

export function createFace(faceConfig) {
  const baseSize = faceConfig.size ?? 0.14;
  const group = new THREE.Group();
  group.visible = false;

  const leftIdx = faceConfig.eyes[0].pos[0] <= faceConfig.eyes[1].pos[0] ? 0 : 1;
  const sideOf = (idx) => (idx === leftIdx ? "L" : "R");

  const makeFeatureQuad = (anchorIdx, cellName, scaleMult, offset, renderOrder) => {
    const mat = new THREE.MeshBasicMaterial({
      map: faceAtlasTexture,
      transparent: true,
      depthTest: true,
      depthWrite: false,
      toneMapped: false,
      blending: THREE.CustomBlending,
      blendSrc: THREE.OneFactor,
      blendDst: THREE.OneMinusSrcAlphaFactor,
      blendSrcAlpha: THREE.OneFactor,
      blendDstAlpha: THREE.OneMinusSrcAlphaFactor,
    });
    const mesh = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), mat);
    mesh.renderOrder = renderOrder;
    setQuadCell(mesh, cellName);
    group.add(mesh);
    return { mesh, anchor: anchorIdx, base: baseSize * scaleMult, offset, roll: 0 };
  };

  const eyes = [0, 1].map((i) => makeFeatureQuad(i, "eyeOpen", EYE_SCALE, 0.03, 1001));
  const highlights = [0, 1].map((i) => makeFeatureQuad(i, "hlIdle", EYE_SCALE, 0.0302, 1002));
  const cheeks = [0, 1].map((i) =>
    makeFeatureQuad(
      2 + i,
      faceConfig.whiskers ? (sideOf(i) === "L" ? "cheekWL" : "cheekWR") : "cheek",
      CHEEK_SCALE,
      0.028,
      1000
    )
  );

  const mouthStyle = faceConfig.mouthStyle ?? "cat";
  const defaultMouthCell = {
    bear: "mouthBear",
    cat: "mouthCat",
    frog: "mouthFrog",
    pig: "mouthPig",
  }[mouthStyle];
  const mouth = makeFeatureQuad(4, defaultMouthCell ?? "mouthCat", MOUTH_SCALE, 0.03, 1001);
  mouth.mesh.visible = mouthStyle !== "none";

  const allFeatures = [...eyes, ...highlights, ...cheeks, mouth];
  const pupilShift = [{ x: 0, y: 0 }, { x: 0, y: 0 }];

  let currentExpr = "idle";
  let exprTimer = 0;
  let popTime = POP_DURATION;
  let animClock = Math.random() * 10;
  let blinkTime = -1;
  let nextBlink = 1 + Math.random() * 4;
  let blushLevel = 0;
  let lookTarget = null;

  function applyExpression(name) {
    const def = EXPRESSIONS[name] ?? EXPRESSIONS.idle;
    currentExpr = EXPRESSIONS[name] ? name : "idle";
    eyes.forEach((e, idx) => setQuadCell(e.mesh, def.eye(sideOf(idx))));
    highlights.forEach((h) => {
      h.mesh.visible = !!def.hl;
      if (def.hl) setQuadCell(h.mesh, def.hl);
    });
    if (mouthStyle !== "none" && mouthStyle !== "pig") {
      setQuadCell(mouth.mesh, def.mouth ?? defaultMouthCell);
    }
    popTime = 0;
  }

  function placeFeature(feat, anchorPos, anchorNorm, shiftX, shiftY, scaleX, scaleY) {
    const a = feat.anchor;
    tmpNorm.set(anchorNorm[a * 3], anchorNorm[a * 3 + 1], anchorNorm[a * 3 + 2]).normalize();
    tmpUp.set(0, 1, 0).addScaledVector(tmpNorm, -tmpNorm.y);
    if (tmpUp.lengthSq() < 0.04) {
      tmpUp.set(0, 0, 1).addScaledVector(tmpNorm, -tmpNorm.z);
      if (tmpUp.lengthSq() < 1e-4) tmpUp.set(0, 1, 0);
    }
    tmpUp.normalize();
    tmpRight.crossVectors(tmpUp, tmpNorm);

    feat.mesh.position
      .set(anchorPos[a * 3], anchorPos[a * 3 + 1], anchorPos[a * 3 + 2])
      .addScaledVector(tmpNorm, feat.offset)
      .addScaledVector(tmpRight, shiftX)
      .addScaledVector(tmpUp, shiftY);

    tmpBasis.makeBasis(tmpRight, tmpUp, tmpNorm);
    tmpQuat.setFromRotationMatrix(tmpBasis);
    if (feat.roll) tmpQuat.multiply(tmpRoll.setFromAxisAngle(axisZ, feat.roll));
    feat.mesh.quaternion.copy(tmpQuat);
    feat.mesh.scale.set(feat.base * scaleX, feat.base * scaleY, 1);
  }

  return {
    object: group,
    setExpression(name, duration = 0) {
      if (name !== currentExpr) applyExpression(name);
      exprTimer = name === "idle" ? 0 : duration;
    },
    lookAt(target) {
      lookTarget = target ? (lookTarget ?? new THREE.Vector3()).copy(target) : null;
    },
    setBlush(val) {
      blushLevel = val <= 0 ? 0 : Math.max(blushLevel, Math.min(1, val));
    },
    update(anchorPos, anchorNorm, dt) {
      group.visible = true;
      animClock += dt;
      if (exprTimer > 0 && (exprTimer -= dt) <= 0) {
        exprTimer = 0;
        applyExpression("idle");
      }

      popTime = Math.min(POP_DURATION, popTime + dt);
      const popScale = 1 + 0.25 * Math.sin((popTime / POP_DURATION) * Math.PI);
      let blinkScaleY = 1;

      if (currentExpr === "idle") {
        if (blinkTime < 0 && (nextBlink -= dt) <= 0) {
          blinkTime = 0;
          nextBlink = 2 + Math.random() * 3;
        }
      } else {
        blinkTime = -1;
      }

      if (blinkTime >= 0) {
        blinkTime += dt;
        const t = blinkTime / BLINK_DURATION;
        if (t >= 1) blinkTime = -1;
        else blinkScaleY = 1 - 0.92 * Math.sin(Math.PI * t);
      }

      blushLevel = Math.max(0, blushLevel - dt / BLUSH_DECAY_TIME);
      const cheekAlpha = Math.min(1, BASE_BLUSH + 0.9 * blushLevel);
      for (const c of cheeks) {
        c.mesh.material.opacity = cheekAlpha;
        c.mesh.material.color.setScalar(cheekAlpha);
      }

      const canTrack = lookTarget && (currentExpr === "idle" || currentExpr === "surprised");
      const lerpFactor = 1 - Math.exp(-10 * dt);

      for (let i = 0; i < 2; i++) {
        tmpNorm.set(anchorNorm[i * 3], anchorNorm[i * 3 + 1], anchorNorm[i * 3 + 2]).normalize();
        tmpUp.set(0, 1, 0).addScaledVector(tmpNorm, -tmpNorm.y);
        if (tmpUp.lengthSq() < 0.04) tmpUp.set(0, 0, 1).addScaledVector(tmpNorm, -tmpNorm.z);
        tmpUp.normalize();
        tmpRight.crossVectors(tmpUp, tmpNorm);

        let tx = 0, ty = 0;
        if (canTrack) {
          tmpLook.set(
            lookTarget.x - anchorPos[i * 3],
            lookTarget.y - anchorPos[i * 3 + 1],
            lookTarget.z - anchorPos[i * 3 + 2]
          );
          const dist = Math.max(tmpLook.length(), 0.01);
          tx = (tmpLook.dot(tmpRight) / dist) * 1.6;
          ty = (tmpLook.dot(tmpUp) / dist) * 1.6;
          const mag = Math.hypot(tx, ty);
          if (mag > 1) {
            tx /= mag;
            ty /= mag;
          }
        }

        pupilShift[i].x += (tx - pupilShift[i].x) * lerpFactor;
        pupilShift[i].y += (ty - pupilShift[i].y) * lerpFactor;

        const maxShift = 0.15 * baseSize;
        const roll = currentExpr === "dizzy" ? (i === leftIdx ? 1 : -1) * animClock * 9 : 0;
        eyes[i].roll = roll;

        placeFeature(eyes[i], anchorPos, anchorNorm, pupilShift[i].x * maxShift, pupilShift[i].y * maxShift, popScale, popScale * blinkScaleY);
        placeFeature(highlights[i], anchorPos, anchorNorm, 0, 0, popScale, popScale * blinkScaleY);
        placeFeature(cheeks[i], anchorPos, anchorNorm, 0, 0, 1, 1);
      }

      mouth.roll = currentExpr === "squint" || currentExpr === "dizzy" ? 0.1 * Math.sin(animClock * 22) : 0;
      placeFeature(mouth, anchorPos, anchorNorm, 0, 0, popScale, popScale);
    },
    dispose() {
      for (const f of allFeatures) {
        f.mesh.geometry.dispose();
        f.mesh.material.dispose();
      }
      group.removeFromParent();
    },
  };
}

/**
 * Jelly Zoo — Main Application Entry Point
 *
 * Interactive 3D needle-felted soft-body animal playground in a knitted basket.
 * Supports poking, squashing, dragging, petting (fur combing & purring),
 * rim tilting, keyboard/spacebar shaking, spawning, and day/night lighting.
 *
 * @author Sunil
 * @license MIT
 */

import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { RoomEnvironment } from "three/addons/environments/RoomEnvironment.js";
import { SoftBodyWorld } from "./physics/softbody.js";
import { createSkinBinding } from "./physics/skinning.js";
import { addFeltFuzz, createFurComb, fuzzGlowUniform } from "./shaders/felt.js";
import { SPECIES_NAMES, buildSpeciesModel } from "./models/species.js";
import { createFace } from "./models/face.js";
import {
  initAudio,
  playBounceSound,
  playPopSound,
  playChirpSound,
  startStretchSound,
  startPurrSound,
  playShakeSound,
} from "./audio/sound.js";
import { createParticles, createDizzyStars } from "./effects/particles.js";
import { createRoom, createProps, createBasket } from "./scene/environment.js";
import { PERF } from "./core/perf.js";

const query = new URLSearchParams(location.search);
const parseVec3 = (str) => str && new THREE.Vector3(...str.split(",").map(Number));
const randRange = (lo, hi) => lo + Math.random() * (hi - lo);

const HALF_X = 3;
const HALF_Z = 2;
const WALL_THICKNESS = 0.26;
const MAX_ANIMALS = PERF.maxAnimals;
const MIN_ANIMALS = PERF.minAnimals;

// Renderer (preserveDrawingBuffer: false avoids expensive full-screen copies on Android GPUs)
const renderer = new THREE.WebGLRenderer({
  antialias: PERF.antialias,
  powerPreference: "high-performance",
});
let activePixelRatio = Math.min(devicePixelRatio, PERF.maxPixelRatio);
renderer.setPixelRatio(activePixelRatio);
renderer.setSize(innerWidth, innerHeight);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFShadowMap;
renderer.toneMapping = THREE.NeutralToneMapping;
renderer.toneMappingExposure = 1;
document.body.appendChild(renderer.domElement);

// Scene & Environment
const scene = new THREE.Scene();
scene.environment = new THREE.PMREMGenerator(renderer).fromScene(new RoomEnvironment(), 0.04).texture;
scene.environmentIntensity = 0.25;

const room = createRoom({ scene, renderer });
const props = createProps({ scene, renderer });

function getTargetNightFactor() {
  if (query.get("time") === "day") return 0;
  if (query.get("time") === "night") return 1;
  const hour = new Date().getHours();
  return hour >= 7 && hour < 18 ? 0 : 1;
}
let nightFactor = getTargetNightFactor();

// Camera & Controls
const customCam = parseVec3(query.get("cam"));
const camera = new THREE.PerspectiveCamera(32, innerWidth / innerHeight, 0.1, 100);

function applyResponsiveCamera(resetPosition = false) {
  const aspect = innerWidth / innerHeight;
  camera.aspect = aspect;
  if (aspect < 1) {
    // Widen vertical FOV and pull back slightly on portrait mobile screens so the full basket fits with rim margin
    camera.fov = Math.min(54, Math.round(32 / Math.pow(aspect, 0.55)));
    if (resetPosition && !customCam) {
      const pull = Math.min(1.68, 1.08 / Math.pow(aspect, 0.45));
      camera.position.set(0, 5.4 * pull, 7.6 * pull);
    }
  } else {
    camera.fov = 32;
    if (resetPosition && !customCam) {
      camera.position.set(0, 5.4, 7.6);
    }
  }
  camera.updateProjectionMatrix();
}

if (customCam) camera.position.copy(customCam);
applyResponsiveCamera(true);

const controls = new OrbitControls(camera, renderer.domElement);
controls.target.set(0, 0.2, 0);
controls.mouseButtons = {
  LEFT: null,
  MIDDLE: THREE.MOUSE.DOLLY,
  RIGHT: THREE.MOUSE.ROTATE,
};
// One-finger touch interacts with animals/basket; two-finger touch zooms and orbits
controls.touches = {
  ONE: null,
  TWO: THREE.TOUCH.DOLLY_ROTATE,
};
controls.enablePan = false;
controls.enableDamping = true;
controls.minDistance = 5;
controls.maxDistance = 22;
controls.maxPolarAngle = Math.PI * 0.42;

// Play Arena (Basket + Animals + Particles)
const arenaGroup = new THREE.Group();
scene.add(arenaGroup);

const basket = createBasket(WALL_THICKNESS);
arenaGroup.add(basket.group);

const arenaInvMatrix = new THREE.Matrix4();
const world = new SoftBodyWorld({
  halfX: HALF_X,
  halfZ: HALF_Z,
  wallThickness: WALL_THICKNESS,
  substeps: PERF.physicsSubsteps,
  collisionIters: PERF.collisionIters,
});
const particles = createParticles(arenaGroup);

const animals = [];
let fuzzDisabledByPerf = false;

function makeDizzy(animal, duration) {
  animal.face.setExpression("dizzy", duration);
  animal.dizzyUntil = performance.now() + duration * 1000;
}

function spawnAnimal(species, x, z, y = randRange(2.5, 3.5)) {
  if (animals.length >= MAX_ANIMALS) return null;
  const model = buildSpeciesModel(species, { scale: randRange(0.9, 1.12) });
  const body = world.addBody({
    rest: model.rest,
    radius: model.radius,
    stiffness: randRange(0.18, 0.28),
    position: { x, y, z },
    yaw: randRange(-0.25, 0.25),
    velocity: { x: 0, y: -1, z: 0 },
  });

  const mesh = new THREE.Mesh(model.geometry, model.material);
  const fuzz = addFeltFuzz(mesh);
  if (fuzzDisabledByPerf) fuzz.visible = false;
  mesh.castShadow = true;
  mesh.frustumCulled = false;
  arenaGroup.add(mesh);

  const f = model.face;
  const skin = createSkinBinding(body, model.geometry, [
    f.eyes[0],
    f.eyes[1],
    f.cheeks[0],
    f.cheeks[1],
    f.mouth,
  ]);
  const face = createFace(f);
  arenaGroup.add(face.object);

  const animal = {
    data: model,
    body,
    mesh,
    fuzz,
    skin,
    face,
    comb: createFurComb(model.geometry),
    stars: createDizzyStars(arenaGroup),
    dizzyUntil: 0,
    zTimer: randRange(0, 1.5),
    head: new THREE.Vector3(),
    phase: randRange(0, 6.28),
    pokes: [],
    squash: 0,
    squashing: false,
    nextHop: randRange(3, 9),
    pet: 0,
    petted: false,
    chirpAt: 0,
    heartAt: 0,
    puff: 0,
    purr: null,
    look: null,
    lookUntil: 0,
    squished: false,
    squishAt: 0,
    calm: 0,
    cuddleCd: randRange(4, 10),
    lean: null,
    leanUntil: 0,
    returnedAt: 0,
  };
  body.animal = animal;
  animals.push(animal);
  face.setExpression("surprised", 0.6);
  return animal;
}

function handleOutOfBounds(animal) {
  particles.poof(animal.body.center, animal.data.color);
  playPopSound();

  if (animals.length <= MIN_ANIMALS) {
    world.place(
      animal.body,
      { x: randRange(-2, 2), y: randRange(3.5, 4.5), z: randRange(-1.2, 1.2) },
      randRange(-0.3, 0.3),
      { x: 0, y: -1, z: 0 }
    );
    animal.face.setExpression("surprised", 1);
  } else {
    if (pointerDrag?.a === animal) {
      world.release();
      pointerDrag = null;
    }
    if (hoveredAnimal === animal) hoveredAnimal = null;
    world.removeBody(animal.body);
    animal.mesh.removeFromParent();
    animal.mesh.geometry.dispose();
    for (const child of animal.mesh.children) child.material.dispose();
    animal.face.dispose();
    animal.stars.dispose();
    animal.purr?.stop();
    animals.splice(animals.indexOf(animal), 1);
  }
}

// Initial animal drop-in
const initialCount = Number(query.get("n") ?? PERF.defaultAnimals);
const initialQueue = [];
for (let i = 0; i < initialCount; i++) initialQueue.push(SPECIES_NAMES[i % SPECIES_NAMES.length]);
for (let i = 0; i < initialCount; i++) {
  const col = i % 4;
  const row = Math.floor(i / 4) % 2;
  const tier = Math.floor(i / 8);
  setTimeout(() => {
    spawnAnimal(
      initialQueue[i],
      (PERF.isMobile ? -1.8 + col * 1.2 : -2.2 + (i % 5) * 1.1) + randRange(-0.15, 0.15),
      (PERF.isMobile ? -0.8 + row * 1.5 : -0.9 + (Math.floor(i / 5) % 2) * 1.6) + randRange(-0.15, 0.15),
      randRange(2.5, 3.5) + (PERF.isMobile ? tier : Math.floor(i / 10)) * 1.2
    );
    playPopSound();
  }, 250 + i * 160);
}

// Impact feedback
let soundBudget = 0;
world.onImpact = (body, speed) => {
  const animal = body.animal;
  if (!animal) return;
  if (speed > 7) makeDizzy(animal, 1.2);
  if (animal.returnedAt && performance.now() - animal.returnedAt < 3000 && body.grounded) {
    animal.returnedAt = 0;
    for (const other of animals) {
      if (other === animal || other.body.center.distanceTo(animal.body.center) > 1.9 || !other.body.grounded) continue;
      setLookAt(other, animal.head, 1.5);
      setTimeout(() => {
        applyBodyImpulse(other.body, 0, randRange(2.2, 3), 0);
        other.face.setExpression("happy", 1.2);
      }, randRange(60, 260));
    }
    setTimeout(() => particles.burst(animal.head, { count: 4, kinds: ["heart"], speed: 1.6, size: 0.2 }), 250);
  }
  if (speed > 2.5 && soundBudget > 0) {
    soundBudget--;
    playBounceSound(animal.data.pitch * 0.85, Math.min(1, speed / 9));
  }
};

// Pointer, Touch & Keyboard Interactions
const ndc = new THREE.Vector2();
const raycaster = new THREE.Raycaster();
const floorPlane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0);
const dragPlane = new THREE.Plane();
const tmpVec = new THREE.Vector3();
const localRay = new THREE.Ray();

let pointerDrag = null;
let stretchAudio = null;
let pointerWorld = null;
let lastActivityAt = performance.now();
let hoveredAnimal = null;
let rimTiltDrag = null;
let rainSpawn = null;

function getArenaRay(ev) {
  ndc.set((ev.clientX / innerWidth) * 2 - 1, -(ev.clientY / innerHeight) * 2 + 1);
  raycaster.setFromCamera(ndc, camera);
  return localRay.copy(raycaster.ray).applyMatrix4(arenaInvMatrix);
}

function wakeAnimals() {
  const now = performance.now();
  if (now - lastActivityAt > 20000) {
    for (const a of animals) a.face.setExpression("surprised", 0.8);
  }
  lastActivityAt = now;
}

function applyBodyImpulse(body, vx, vy, vz) {
  for (let i = 0; i < body.n; i++) {
    body.vel[i * 3] += vx;
    body.vel[i * 3 + 1] += vy;
    body.vel[i * 3 + 2] += vz;
  }
}

function setLookAt(animal, target, duration) {
  animal.look = target;
  animal.lookUntil = performance.now() + duration * 1000;
}

function leanTowards(animal, target, strength, dt) {
  const body = animal.body;
  const center = body.center;
  let dx = target.x - center.x;
  let dz = target.z - center.z;
  const dist = Math.hypot(dx, dz);
  if (dist < 0.001) return;
  dx /= dist;
  dz /= dist;
  for (let i = 0; i < body.n; i++) {
    const h = body.pos[i * 3 + 1] - center.y;
    if (h <= 0) continue;
    const f = strength * dt * Math.min(1, h / 0.4);
    body.vel[i * 3] += dx * f;
    body.vel[i * 3 + 2] += dz * f;
  }
}

function pokeAnimal(animal, hit, dir) {
  world.poke(animal.body, hit.point, dir, 4.5);
  particles.burst(hit.point.clone().addScaledVector(dir, -0.1));
  animal.face.setExpression("squint", 0.45);
  animal.face.setBlush(1);
  playBounceSound(animal.data.pitch, 0.75);

  const now = performance.now();
  animal.pokes = animal.pokes.filter((t) => now - t < 2000);
  animal.pokes.push(now);
  if (animal.pokes.length >= 5) {
    makeDizzy(animal, 1.6);
    particles.burst(animal.head, { count: 8, kinds: ["star"], speed: 2.6 });
    animal.pokes.length = 0;
  }

  for (const other of animals) {
    if (other !== animal && other.body.center.distanceTo(animal.body.center) < 1.6) {
      other.face.setExpression("surprised", 0.5);
      setLookAt(other, animal.head, 1.2);
    }
  }
}

function setHovered(animal) {
  if (animal !== hoveredAnimal) {
    hoveredAnimal = animal;
    if (animal) {
      animal.face.setExpression("happy", 0.7);
      animal.face.setBlush(0.6);
    }
  }
}

renderer.domElement.addEventListener("contextmenu", (e) => e.preventDefault());

renderer.domElement.addEventListener("pointerdown", (e) => {
  if (e.button !== 0 || !e.isPrimary) return;
  initAudio();
  wakeAnimals();

  const ray = getArenaRay(e);
  const hit = world.pick(ray.origin, ray.direction);
  if (hit) {
    renderer.domElement.setPointerCapture(e.pointerId);
    pointerDrag = {
      a: hit.body.animal,
      hit,
      t0: performance.now(),
      x0: e.clientX,
      y0: e.clientY,
      mode: "press",
      dir: ray.direction.clone(),
    };
    return;
  }

  enableGyroTilt();
  const rimHit = raycaster.intersectObjects(basket.rims, false)[0];
  if (rimHit) {
    const localPt = arenaGroup.worldToLocal(rimHit.point.clone());
    rimTiltDrag = {
      dir:
        Math.abs(localPt.x) / HALF_X > Math.abs(localPt.z) / HALF_Z
          ? new THREE.Vector2(Math.sign(localPt.x), 0)
          : new THREE.Vector2(0, Math.sign(localPt.z)),
      y0: e.clientY,
      amount: 0,
    };
    renderer.domElement.setPointerCapture(e.pointerId);
    renderer.domElement.style.cursor = "grabbing";
  } else if (ray.intersectPlane(floorPlane, tmpVec)) {
    rainSpawn = { x: tmpVec.x, z: tmpVec.z, next: 0 };
    renderer.domElement.setPointerCapture(e.pointerId);
  }
});

renderer.domElement.addEventListener("pointermove", (e) => {
  const ray = getArenaRay(e);

  if (rimTiltDrag) {
    rimTiltDrag.amount = THREE.MathUtils.clamp((rimTiltDrag.y0 - e.clientY) * 0.005, -MAX_TILT, MAX_TILT);
    lastActivityAt = performance.now();
    return;
  }
  if (rainSpawn) {
    if (ray.intersectPlane(floorPlane, tmpVec)) {
      rainSpawn.x = tmpVec.x;
      rainSpawn.z = tmpVec.z;
    }
    return;
  }

  if (!pointerDrag) {
    const hit = world.pick(ray.origin, ray.direction);
    const over = hit?.body.animal ?? null;
    if (over && over === hoveredAnimal && pointerWorld) {
      const stroke = hit.point.clone().sub(pointerWorld);
      const dist = stroke.length();
      if (dist > 1e-4 && dist < 0.5) {
        over.comb.brush(hit.point, stroke);
        over.pet = Math.min(1.5, over.pet + dist * 1.3);
        lastActivityAt = performance.now();
      }
    }
    pointerWorld = hit ? hit.point.clone() : ray.intersectPlane(floorPlane, tmpVec)?.clone() ?? null;
    setHovered(over);
    renderer.domElement.style.cursor = over
      ? "pointer"
      : raycaster.intersectObjects(basket.rims, false).length
      ? "grab"
      : "default";
    return;
  }

  lastActivityAt = performance.now();
  const moveDist = Math.hypot(e.clientX - pointerDrag.x0, e.clientY - pointerDrag.y0);
  if (pointerDrag.mode === "press" && moveDist > 6) {
    pointerDrag.mode = "drag";
    camera.getWorldDirection(tmpVec).transformDirection(arenaInvMatrix);
    dragPlane.setFromNormalAndCoplanarPoint(tmpVec.negate(), pointerDrag.hit.point);
    world.grab(pointerDrag.a.body, pointerDrag.hit.index, pointerDrag.hit.point);
    pointerDrag.a.face.setExpression("happy");
    stretchAudio = startStretchSound();
    for (const other of animals) {
      if (other !== pointerDrag.a && other.body.center.distanceTo(pointerDrag.a.body.center) < 1.8) {
        other.face.setExpression("surprised", 0.6);
      }
    }
  }

  if (pointerDrag.mode === "drag" && ray.intersectPlane(dragPlane, tmpVec)) {
    tmpVec.x = THREE.MathUtils.clamp(tmpVec.x, -2.8, 2.8);
    tmpVec.z = THREE.MathUtils.clamp(tmpVec.z, -1.8, 1.8);
    tmpVec.y = THREE.MathUtils.clamp(tmpVec.y, 0.15, 2.4);
    world.moveGrab(tmpVec);

    const b = pointerDrag.a.body;
    const pIdx = pointerDrag.hit.index * 3;
    const stretch = Math.hypot(b.pos[pIdx] - tmpVec.x, b.pos[pIdx + 1] - tmpVec.y, b.pos[pIdx + 2] - tmpVec.z);
    stretchAudio?.set(Math.min(1, stretch / 1.2));
    pointerWorld = tmpVec.clone();
  }
});

function endPointer() {
  if (rimTiltDrag) {
    rimTiltDrag = null;
    renderer.domElement.style.cursor = "grab";
  }
  rainSpawn = null;
  if (!pointerDrag) return;

  const { a, mode, hit, dir } = pointerDrag;
  if (mode === "press") pokeAnimal(a, hit, dir);
  if (mode === "drag") {
    world.release();
    stretchAudio?.stop();
    stretchAudio = null;
    a.face.setExpression("surprised", 0.4);
    a.returnedAt = performance.now();
  }
  if (mode === "squash") {
    a.squashing = false;
    applyBodyImpulse(a.body, 0, 4 + 6 * a.squash, 0);
    a.face.setExpression("happy", 1);
    playBounceSound(a.data.pitch * 1.5, 1);
    particles.burst(a.body.center.clone().setY(0.1), {
      count: 10,
      kinds: ["star", "sparkle"],
      speed: 3.4,
      size: 0.3,
    });
  }
  pointerDrag = null;
}

renderer.domElement.addEventListener("pointerup", endPointer);
renderer.domElement.addEventListener("pointercancel", endPointer);

// Keyboard & Gyro Basket Tilt / Shake
const ARROW_TILT = {
  ArrowLeft: [1, 0],
  ArrowRight: [-1, 0],
  ArrowUp: [0, 1],
  ArrowDown: [0, -1],
};
const heldKeys = new Set();

addEventListener("keyup", (e) => heldKeys.delete(e.code));
addEventListener("keydown", (e) => {
  if (ARROW_TILT[e.code]) {
    e.preventDefault();
    heldKeys.add(e.code);
    lastActivityAt = performance.now();
  } else if (e.code === "Space") {
    e.preventDefault();
    initAudio();
    wakeAnimals();
    world.shake(new THREE.Vector3(randRange(-1.5, 1.5), 6, randRange(-1, 1)));
    bounceSpring.vy = 2.2;
    bounceSpring.vrx += randRange(-0.8, 0.8);
    bounceSpring.vrz += randRange(-1.2, 1.2);
    playShakeSound();
    for (const a of animals) a.face.setExpression("surprised", 0.6);
  }
});

addEventListener("resize", () => {
  applyResponsiveCamera(false);
  renderer.setSize(innerWidth, innerHeight);
});

const MAX_TILT = 1;
const KEY_TILT = 0.5;
const TILT_STIFF = 70;
const TILT_DAMP = 6;
const tiltSpring = { x: 0, z: 0, vx: 0, vz: 0, wasTilted: false };
const bounceSpring = { y: 0, vy: 0, rx: 0, vrx: 0, rz: 0, vrz: 0 };

const tmpQuat = new THREE.Quaternion();
const tmpEuler = new THREE.Euler();
const baseGravity = new THREE.Vector3(0, -12, 0);
const tiltAxis = new THREE.Vector3();
const pivotPt = new THREE.Vector3();
const pivotRot = new THREE.Vector3();
const invQuat = new THREE.Quaternion();
const camShiftPrev = new THREE.Vector3();
const camShiftCur = new THREE.Vector3();
const worldCheckPt = new THREE.Vector3();

let gyroState = null;

function enableGyroTilt() {
  if (gyroState || typeof DeviceOrientationEvent === "undefined") return;
  gyroState = { beta0: null, gamma0: null, x: 0, z: 0 };
  const bind = () =>
    addEventListener("deviceorientation", (e) => {
      if (e.beta == null) return;
      if (gyroState.beta0 == null) {
        gyroState.beta0 = e.beta;
        gyroState.gamma0 = e.gamma;
      }
      const deg = Math.PI / 180;
      gyroState.x = THREE.MathUtils.clamp(-(e.gamma - gyroState.gamma0) * deg, -KEY_TILT, KEY_TILT);
      gyroState.z = THREE.MathUtils.clamp(-(e.beta - gyroState.beta0) * deg, -KEY_TILT, KEY_TILT);
    });
  if (DeviceOrientationEvent.requestPermission) {
    DeviceOrientationEvent.requestPermission()
      .then((res) => res === "granted" && bind())
      .catch(() => {});
  } else {
    bind();
  }
}

function updateBasketMotion(dt) {
  let targetX = 0;
  let targetZ = 0;
  if (rimTiltDrag) {
    targetX = rimTiltDrag.dir.x * rimTiltDrag.amount;
    targetZ = rimTiltDrag.dir.y * rimTiltDrag.amount;
  } else if (heldKeys.size) {
    for (const code of heldKeys) {
      targetX += ARROW_TILT[code][0] * KEY_TILT;
      targetZ += ARROW_TILT[code][1] * KEY_TILT;
    }
  } else if (gyroState) {
    targetX = gyroState.x;
    targetZ = gyroState.z;
  }

  const h = dt / 2;
  for (let i = 0; i < 2; i++) {
    tiltSpring.vx += (TILT_STIFF * (targetX - tiltSpring.x) - TILT_DAMP * tiltSpring.vx) * h;
    tiltSpring.vz += (TILT_STIFF * (targetZ - tiltSpring.z) - TILT_DAMP * tiltSpring.vz) * h;
    tiltSpring.x += tiltSpring.vx * h;
    tiltSpring.z += tiltSpring.vz * h;

    bounceSpring.vy -= 12 * h;
    bounceSpring.y += bounceSpring.vy * h;
    if (bounceSpring.y < 0) {
      bounceSpring.y = 0;
      bounceSpring.vy = bounceSpring.vy < -0.3 ? -bounceSpring.vy * 0.3 : 0;
    }
    bounceSpring.vrx += (-260 * bounceSpring.rx - 10 * bounceSpring.vrx) * h;
    bounceSpring.vrz += (-260 * bounceSpring.rz - 10 * bounceSpring.vrz) * h;
    bounceSpring.rx += bounceSpring.vrx * h;
    bounceSpring.rz += bounceSpring.vrz * h;
  }

  const tiltMag = Math.min(MAX_TILT * 1.15, Math.hypot(tiltSpring.x, tiltSpring.z));
  if (tiltMag < 1e-4) {
    arenaGroup.position.set(0, 0, 0);
    arenaGroup.quaternion.identity();
  } else {
    const rawLen = Math.hypot(tiltSpring.x, tiltSpring.z);
    const nx = tiltSpring.x / rawLen;
    const nz = tiltSpring.z / rawLen;
    const edgeDist = Math.min(3.26 / Math.max(Math.abs(nx), 1e-6), 2.26 / Math.max(Math.abs(nz), 1e-6));
    pivotPt.set(-nx * edgeDist, -0.16, -nz * edgeDist);
    arenaGroup.quaternion.setFromAxisAngle(tiltAxis.set(-nz, 0, nx), tiltMag);
    pivotRot.copy(pivotPt).applyQuaternion(arenaGroup.quaternion);
    arenaGroup.position.copy(pivotPt).sub(pivotRot);
  }

  arenaGroup.updateMatrixWorld();
  camShiftCur.set(0, 0.2, 0).applyMatrix4(arenaGroup.matrixWorld);

  arenaGroup.position.y += bounceSpring.y;
  arenaGroup.quaternion.multiply(tmpQuat.setFromEuler(tmpEuler.set(bounceSpring.rx, 0, bounceSpring.rz)));
  arenaGroup.updateMatrixWorld();
  arenaInvMatrix.copy(arenaGroup.matrixWorld).invert();
  world.gravity.copy(baseGravity).applyQuaternion(invQuat.copy(arenaGroup.quaternion).invert());

  camShiftCur.y -= 0.2;
  camShiftCur.multiplyScalar(0.85);
  camera.position.add(camShiftCur).sub(camShiftPrev);
  controls.target.add(camShiftCur).sub(camShiftPrev);
  camShiftPrev.copy(camShiftCur);
  camera.zoom = 1 / (1 + 0.6 * tiltMag);
  camera.updateProjectionMatrix();

  if (!tiltSpring.wasTilted && tiltMag > 0.28) {
    tiltSpring.wasTilted = true;
    for (const a of animals) a.face.setExpression("surprised", 1);
    playShakeSound();
  }
  if (tiltMag > 0.65) {
    for (const a of animals) {
      if (!a.body.grounded || pointerDrag?.a === a || Math.random() > dt * 2) continue;
      applyBodyImpulse(a.body, randRange(-0.5, 0.5), randRange(2.5, 4), randRange(-0.5, 0.5));
      a.face.setExpression("surprised", 0.8);
    }
  }
  const tiltSpeed = Math.hypot(tiltSpring.vx, tiltSpring.vz);
  if (tiltSpring.wasTilted && tiltMag < 0.05 && tiltSpeed > 1.2) {
    tiltSpring.wasTilted = false;
    world.shake(new THREE.Vector3(0, Math.min(5, tiltSpeed * 1.6), 0));
    playShakeSound();
    for (const a of animals) a.face.setExpression("happy", 0.8);
  }
  if (tiltSpring.wasTilted && tiltMag < 0.05 && tiltSpeed < 0.3) {
    tiltSpring.wasTilted = false;
  }
}

function updateRainSpawn(dt) {
  if (!rainSpawn) return;
  rainSpawn.next -= dt;
  if (rainSpawn.next > 0 || animals.length >= MAX_ANIMALS) return;
  rainSpawn.next = 0.09;
  const x = THREE.MathUtils.clamp(rainSpawn.x + randRange(-0.45, 0.45), -2.5, 2.5);
  const z = THREE.MathUtils.clamp(rainSpawn.z + randRange(-0.45, 0.45), -1.5, 1.5);
  const spawned = spawnAnimal(SPECIES_NAMES[Math.floor(Math.random() * SPECIES_NAMES.length)], x, z, randRange(3.2, 4.2));
  if (spawned) {
    spawned.face.setExpression("happy", 1);
    playPopSound();
  }
}

function updatePetting(animal, dt, now) {
  animal.pet = Math.max(0, animal.pet - dt * 0.35);
  animal.puff = Math.max(0, animal.puff - dt * 0.5);
  const isHovered = animal === hoveredAnimal && !pointerDrag;

  if (!animal.petted && animal.pet > 0.35) {
    animal.petted = true;
    animal.face.setExpression("happy", 1);
  } else if (animal.petted && animal.pet < 0.12) {
    animal.petted = false;
  }

  if (animal.petted) {
    animal.face.setExpression("happy", 0.6);
    animal.face.setBlush(0.5 + 0.5 * Math.min(1, animal.pet));
    if (isHovered && pointerWorld) leanTowards(animal, pointerWorld, 2.2 * Math.min(1, animal.pet), dt);
    if (animal.pet > 0.7 && now - animal.heartAt > 2200) {
      animal.heartAt = now;
      particles.burst(animal.head, { count: 3, kinds: ["heart"], speed: 1.4, size: 0.18 });
      if (animal.data.species === "chick") animal.puff = 1;
    }
    if (animal.data.species !== "cat" && isHovered && now - animal.chirpAt > randRange(700, 1400)) {
      animal.chirpAt = now;
      playChirpSound(animal.data.pitch);
    }
  }

  if (animal.data.species === "cat") {
    if (animal.petted && !animal.purr) animal.purr = startPurrSound();
    animal.purr?.set(animal.petted ? Math.min(1, animal.pet) : 0);
    if (!animal.petted && animal.purr && animal.pet < 0.05) {
      animal.purr.stop();
      animal.purr = null;
    }
  }
}

const horizDist = (a, b) => Math.hypot(a.x - b.x, a.z - b.z);

function updateSocialBehavior(dt, now) {
  for (const a of animals) {
    const pos = a.body.center;
    let squished = false;
    for (const other of animals) {
      if (other !== a && other.body.center.y - pos.y > 0.3 && horizDist(other.body.center, pos) < 0.55) {
        squished = true;
      }
    }

    if (squished && (!a.squished || now - a.squishAt > 500)) {
      a.squishAt = now;
      a.face.setExpression("squint", 0.7);
      a.face.setBlush(0.9);
    } else if (!squished && a.squished) {
      a.face.setExpression("surprised", 0.4);
    }
    a.squished = squished;

    a.calm = a.body.grounded && a.body.velocity.length() < 0.35 && pointerDrag?.a !== a && !squished ? a.calm + dt : 0;
    a.cuddleCd -= dt;

    if (a.calm > 2.5 && a.cuddleCd <= 0) {
      let partner = null;
      let bestDist = 1.05;
      for (const other of animals) {
        if (other === a || other.calm < 1 || other.cuddleCd > 0) continue;
        const d = horizDist(other.body.center, pos);
        if (d < bestDist) {
          bestDist = d;
          partner = other;
        }
      }
      if (partner) {
        for (const [x, y] of [[a, partner], [partner, a]]) {
          x.lean = y;
          x.leanUntil = now + 900;
          x.cuddleCd = randRange(12, 24);
          x.face.setExpression("happy", 1.8);
          x.face.setBlush(0.9);
          setLookAt(x, y.head, 1.8);
        }
        setTimeout(() => {
          particles.burst(a.head.clone().lerp(partner.head, 0.5), { count: 2, kinds: ["heart"], speed: 1, size: 0.2 });
        }, 350);
        playChirpSound(a.data.pitch);
      }
    }

    if (a.lean && now < a.leanUntil) leanTowards(a, a.lean.body.center, 3, dt);
    else a.lean = null;
  }
}

// Main Animation Loop + Adaptive Mobile Performance Scaler
const localCamPos = new THREE.Vector3();
let lastFrameMs = performance.now();
let elapsedSec = 0;
let perfFrames = 0;
let perfSumMs = 0;
let perfTier = 0;

document.addEventListener("visibilitychange", () => {
  if (!document.hidden) lastFrameMs = performance.now();
});

function checkAdaptiveMobilePerf(rawDeltaMs) {
  if (!PERF.isMobile || elapsedSec < 2.5 || perfTier >= 3) return;
  perfFrames++;
  perfSumMs += rawDeltaMs;
  if (perfFrames < 45) return;

  const avgMs = perfSumMs / perfFrames;
  perfFrames = 0;
  perfSumMs = 0;

  if (avgMs > 28) {
    perfTier++;
    if (perfTier === 1 && activePixelRatio > 0.85) {
      activePixelRatio = 0.85;
      renderer.setPixelRatio(activePixelRatio);
      renderer.setSize(innerWidth, innerHeight);
    } else if (perfTier === 2) {
      fuzzDisabledByPerf = true;
      for (const a of animals) {
        if (a.fuzz) a.fuzz.visible = false;
      }
    } else if (perfTier === 3 && activePixelRatio > 0.72) {
      activePixelRatio = 0.72;
      renderer.setPixelRatio(activePixelRatio);
      renderer.setSize(innerWidth, innerHeight);
    }
  }
}

renderer.setAnimationLoop(() => {
  if (document.hidden) return;
  const frameNow = performance.now();
  const rawDeltaMs = frameNow - lastFrameMs;
  const dt = Math.min(rawDeltaMs / 1000, 1 / 30);
  lastFrameMs = frameNow;
  elapsedSec += dt;
  checkAdaptiveMobilePerf(rawDeltaMs);

  soundBudget = Math.min(4, soundBudget + dt * 14);
  nightFactor += THREE.MathUtils.clamp(getTargetNightFactor() - nightFactor, -dt / 4, dt / 4);
  room.setTime(nightFactor);
  props.setTime(nightFactor);
  props.update(dt);
  fuzzGlowUniform.value = THREE.MathUtils.lerp(0.35, 0.14, nightFactor);

  updateBasketMotion(dt);
  updateRainSpawn(dt);

  for (let i = animals.length - 1; i >= 0; i--) {
    const a = animals[i];
    const c = a.body.center;
    if (
      ((Math.abs(c.x) > 3.3 || Math.abs(c.z) > 2.3) && worldCheckPt.copy(c).applyMatrix4(arenaGroup.matrixWorld).y < 0.2) ||
      c.y < -2.5
    ) {
      handleOutOfBounds(a);
    }
  }

  if (pointerDrag?.mode === "press" && frameNow - pointerDrag.t0 > 300) {
    pointerDrag.mode = "squash";
    pointerDrag.a.squashing = true;
    pointerDrag.a.face.setExpression("squint");
    stretchAudio = null;
  }

  const sleepyMode = frameNow - lastActivityAt > 25000;

  for (const a of animals) {
    const body = a.body;
    a.squash = THREE.MathUtils.damp(a.squash, +!!a.squashing, a.squashing ? 3 : 14, dt);
    if (a.squashing) a.face.setBlush(0.4 + 0.6 * a.squash);

    const breathe = (1 + 0.03 * Math.sin(elapsedSec * (sleepyMode ? 1.2 : 2.2) + a.phase)) * (1 - 0.5 * a.squash);
    const invSqrt = 1 / Math.sqrt(breathe);
    const puffScale = 1 + 0.1 * a.puff;
    body.restScale.set(invSqrt * puffScale, breathe * puffScale, invSqrt * puffScale);

    a.nextHop -= dt;
    if (a.nextHop < 0) {
      a.nextHop = randRange(4, 12);
      if (!sleepyMode && body.grounded && pointerDrag?.a !== a) {
        applyBodyImpulse(body, randRange(-0.6, 0.6), randRange(2.5, 3.8), randRange(-0.6, 0.6));
        a.face.setExpression("happy", 0.6);
      }
    }
    if (sleepyMode && Math.random() < dt * 0.3) a.face.setExpression("sleepy", 4);
    updatePetting(a, dt, frameNow);
  }

  updateSocialBehavior(dt, frameNow);
  world.step(dt);

  const afterNow = performance.now();
  localCamPos.copy(camera.position).applyMatrix4(arenaInvMatrix);

  for (const a of animals) {
    a.skin.update();
    a.comb.update(dt);
    const dragHead = pointerDrag?.mode === "drag" && pointerDrag.a !== a ? pointerDrag.a.head : null;
    a.face.lookAt(dragHead ?? (afterNow < a.lookUntil ? a.look : null) ?? pointerWorld ?? localCamPos);
    a.face.update(a.skin.anchorPos, a.skin.anchorNormal, dt);

    const ap = a.skin.anchorPos;
    a.head.set((ap[0] + ap[3]) / 2, (ap[1] + ap[4]) / 2 + 0.32, (ap[2] + ap[5]) / 2);
    a.stars.update(a.head, elapsedSec, afterNow < a.dizzyUntil);

    if (sleepyMode && (a.zTimer -= dt) < 0) {
      a.zTimer = randRange(1.2, 2.2);
      particles.zzz(a.head);
    }
  }

  particles.update(dt);
  controls.update(dt);
  renderer.render(scene, camera);
});

window.__jelly = {
  world,
  animals,
  camera,
  renderer,
  scene,
  spawn: spawnAnimal,
  poke: (idx) => {
    const a = animals[idx];
    const c = a.body.center;
    pokeAnimal(a, { point: c.clone().add(new THREE.Vector3(0, 0.3, 0.3)) }, new THREE.Vector3(0, -0.5, -1).normalize());
  },
};

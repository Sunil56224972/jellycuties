/**
 * Needle-Felted Wool Material, Shell Fur Shader & Interactive Combing
 *
 * Uses multi-layer instanced shell rendering with 3D procedural hash noise
 * to render individual wool fibers that flatten and shine when brushed.
 *
 * @author Sunil
 * @license MIT
 */

import * as THREE from "three";

const FELT_NOISE_GLSL = `
float fzHash3( vec3 p ) {
  p = fract( p * 0.1031 );
  p += dot( p, p.zyx + 31.32 );
  return fract( ( p.x + p.y ) * p.z );
}
vec3 fzHash33( vec3 p ) {
  p = fract( p * vec3( 0.1031, 0.1030, 0.0973 ) );
  p += dot( p, p.yxz + 33.33 );
  return fract( ( p.xxy + p.yxx ) * p.zyx );
}
float fzNoise( vec3 p ) {
  vec3 i = floor( p ), f = fract( p );
  f = f * f * ( 3.0 - 2.0 * f );
  return mix(
    mix( mix( fzHash3( i ), fzHash3( i + vec3( 1, 0, 0 ) ), f.x ), mix( fzHash3( i + vec3( 0, 1, 0 ) ), fzHash3( i + vec3( 1, 1, 0 ) ), f.x ), f.y ),
    mix( mix( fzHash3( i + vec3( 0, 0, 1 ) ), fzHash3( i + vec3( 1, 0, 1 ) ), f.x ), mix( fzHash3( i + vec3( 0, 1, 1 ) ), fzHash3( i + vec3( 1, 1, 1 ) ), f.x ), f.y ),
    f.z );
}
// Wool depth tone: macro mottling combined with fine fiber grain
float feltTone( vec3 p ) {
  return 0.9 + 0.12 * fzNoise( p * 9.0 ) + 0.06 * fzNoise( p * 60.0 );
}
`;

function injectFeltShader(vertExtra = "", fragExtra = "") {
  return (shader) => {
    shader.vertexShader = shader.vertexShader
      .replace(
        "#include <common>",
        `#include <common>\nattribute vec3 fiber;\nattribute vec3 fiberN;\nvarying vec3 vFiber;\nvarying vec3 vFiberN;\n${vertExtra ? vertExtra.split("@@")[0] : ""}`
      )
      .replace(
        "#include <begin_vertex>",
        `#include <begin_vertex>\nvFiber = fiber;\nvFiberN = fiberN;\n${vertExtra ? vertExtra.split("@@")[1] : ""}`
      );
    shader.fragmentShader = shader.fragmentShader
      .replace(
        "#include <common>",
        `#include <common>\nvarying vec3 vFiber;\nvarying vec3 vFiberN;\n${FELT_NOISE_GLSL}\n${fragExtra ? fragExtra.split("@@")[0] : ""}`
      )
      .replace(
        "#include <color_fragment>",
        `#include <color_fragment>\ndiffuseColor.rgb *= feltTone( vFiber );\n${fragExtra ? fragExtra.split("@@")[1] : ""}`
      );
  };
}

export function createFeltMaterial() {
  const mat = new THREE.MeshPhysicalMaterial({
    color: "#ffffff",
    vertexColors: true,
    roughness: 1,
    metalness: 0,
    sheen: 0.6,
    sheenColor: "#fff4e6",
    sheenRoughness: 0.8,
  });
  mat.onBeforeCompile = injectFeltShader();
  mat.customProgramCacheKey = () => "felt";
  return mat;
}

const FUZZ_VERT_GLSL = `
uniform float uFuzzLength;
uniform float uFuzzLayers;
attribute vec3 comb; // Brushed lay-down vector in world space
varying float vFuzzShell;
varying float vComb;
@@
float fzShell = float( gl_InstanceID + 1 ) / uFuzzLayers;
float fzComb = length( comb );
vFuzzShell = fzShell;
vComb = min( 1.0, fzComb );
transformed += normalize( normal ) * ( uFuzzLength * fzShell * ( 1.0 - 0.7 * vComb ) ); // Flatten brushed fibers
transformed += comb * uFuzzLength * 3.0 * pow( fzShell, 1.5 ); // Bend along stroke direction
transformed.y -= 0.35 * uFuzzLength * fzShell * fzShell; // Slight gravity droop at tips
`;

const FUZZ_FRAG_GLSL = `
uniform float uFuzzDensity;
uniform float uFuzzCover;
varying float vFuzzShell;
varying float vComb;
@@
{
  float s = vFuzzShell;
  vec3 g = vFiber * uFuzzDensity;
  vec3 cell = floor( g );
  vec3 local = fract( g ) - 0.5;

  // At most one fiber per cell; uFuzzCover controls density coverage
  if ( fzHash3( cell + 3.7 ) > uFuzzCover ) discard;
  float hgt = 0.25 + 0.8 * pow( fzHash3( cell + 11.3 ), 1.4 );
  if ( s > hgt ) discard;

  // Fibers taper toward the tip and tilt randomly; circular cross-section in tangent plane
  float rad = 0.3 * ( 1.0 - 0.8 * ( s / hgt ) );
  vec3 c = ( fzHash33( cell + 5.1 ) - 0.5 ) * 0.3 + ( fzHash33( cell + 9.9 ) - 0.5 ) * 0.5 * s;
  vec3 n = normalize( vFiberN );
  vec3 d = local - c;
  d -= dot( d, n ) * n;
  if ( length( d ) > rad ) discard;

  // Darker at roots, brighter at tips for self-shadowing
  diffuseColor.rgb *= mix( 0.84, 1.06, pow( s, 0.7 ) ) * mix( 0.94, 1.06, fzHash3( cell + 1.9 ) );
  diffuseColor.rgb *= 1.0 + 0.25 * vComb; // Brushed wool sheen highlight
}
`;

export const fuzzGlowUniform = { value: 0.35 };

export function addFeltFuzz(
  mesh,
  { length = 0.02, density = 110, layers = 5, cover = 0.7 } = {}
) {
  const uniforms = {
    uFuzzLength: { value: length },
    uFuzzLayers: { value: layers },
    uFuzzDensity: { value: density },
    uFuzzCover: { value: cover },
  };
  const mat = new THREE.MeshLambertMaterial({
    color: "#ffffff",
    vertexColors: true,
  });
  const baseHook = injectFeltShader(FUZZ_VERT_GLSL, FUZZ_FRAG_GLSL);
  mat.onBeforeCompile = (shader) => {
    Object.assign(shader.uniforms, uniforms, { uFuzzGlow: fuzzGlowUniform });
    baseHook(shader);
    shader.fragmentShader = shader.fragmentShader
      .replace(
        "#include <common>",
        "#include <common>\nuniform float uFuzzGlow;"
      )
      .replace(
        "#include <emissivemap_fragment>",
        "#include <emissivemap_fragment>\ntotalEmissiveRadiance += diffuseColor.rgb * uFuzzGlow;"
      );
  };
  mat.customProgramCacheKey = () => "feltFuzz";

  const instanced = new THREE.InstancedMesh(mesh.geometry, mat, layers);
  const identity = new THREE.Matrix4();
  for (let i = 0; i < layers; i++) {
    instanced.setMatrixAt(i, identity);
  }
  instanced.instanceMatrix.needsUpdate = true;
  instanced.receiveShadow = true;
  instanced.frustumCulled = false;
  mesh.add(instanced);
  return instanced;
}

const COMB_GAIN = 1 / 0.08;
const COMB_DECAY = 1.3;
const COMB_EPS = 0.01;

export function createFurComb(geometry) {
  const posAttr = geometry.attributes.position;
  const normAttr = geometry.attributes.normal;
  const combAttr = new THREE.BufferAttribute(new Float32Array(posAttr.count * 3), 3);
  combAttr.setUsage(THREE.DynamicDrawUsage);
  geometry.setAttribute("comb", combAttr);

  const arr = combAttr.array;
  let active = false;

  function brush(point, delta, radius = 0.22) {
    const pos = posAttr.array;
    const norm = normAttr.array;
    const radSq = radius * radius;

    for (let i = 0, count = posAttr.count; i < count; i++) {
      const idx = i * 3;
      const dx = pos[idx] - point.x;
      const dy = pos[idx + 1] - point.y;
      const dz = pos[idx + 2] - point.z;
      const dSq = dx * dx + dy * dy + dz * dz;
      if (dSq >= radSq) continue;

      const nx = norm[idx], ny = norm[idx + 1], nz = norm[idx + 2];
      const dot = delta.x * nx + delta.y * ny + delta.z * nz;
      const t = Math.sqrt(dSq) / radius;
      const weight = (1 - t * t * (3 - 2 * t)) * COMB_GAIN;

      let cx = arr[idx] + (delta.x - dot * nx) * weight;
      let cy = arr[idx + 1] + (delta.y - dot * ny) * weight;
      let cz = arr[idx + 2] + (delta.z - dot * nz) * weight;
      const lenSq = cx * cx + cy * cy + cz * cz;
      if (lenSq > 1) {
        const inv = 1 / Math.sqrt(lenSq);
        cx *= inv; cy *= inv; cz *= inv;
      }
      arr[idx] = cx;
      arr[idx + 1] = cy;
      arr[idx + 2] = cz;
    }
    combAttr.needsUpdate = true;
    active = true;
  }

  function update(dt) {
    if (!active) return;
    const factor = Math.exp(-dt * COMB_DECAY);
    let maxSq = 0;
    for (let i = 0, len = arr.length; i < len; i += 3) {
      const cx = arr[i] * factor;
      const cy = arr[i + 1] * factor;
      const cz = arr[i + 2] * factor;
      arr[i] = cx;
      arr[i + 1] = cy;
      arr[i + 2] = cz;
      const lSq = cx * cx + cy * cy + cz * cz;
      if (lSq > maxSq) maxSq = lSq;
    }
    if (maxSq < COMB_EPS * COMB_EPS) {
      arr.fill(0);
      active = false;
    }
    combAttr.needsUpdate = true;
  }

  return { brush, update };
}

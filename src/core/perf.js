/**
 * Device Capability & Performance Profile
 *
 * Automatically detects mobile / touch devices and tunes rendering,
 * shadow maps, fur shell layers, procedural textures, and soft-body
 * simulation budgets for smooth performance on Android & iOS.
 *
 * @author Sunil
 * @license MIT
 */

const ua = typeof navigator !== "undefined" ? navigator.userAgent : "";
const isMobileUA = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(ua);
const isTouchSmall =
  typeof window !== "undefined" &&
  navigator.maxTouchPoints > 1 &&
  Math.min(window.innerWidth, window.innerHeight) < 900;

const params =
  typeof location !== "undefined" ? new URLSearchParams(location.search) : new URLSearchParams();
const forcedQuality = params.get("quality"); // Optional override: ?quality=low | ?quality=high

export const IS_MOBILE =
  forcedQuality === "low" ? true : forcedQuality === "high" ? false : isMobileUA || isTouchSmall;

export const PERF = IS_MOBILE
  ? {
      isMobile: true,
      maxPixelRatio: 1.0,
      antialias: true,
      shadowMapSize: 1024,
      anisotropy: 2,
      // Procedural yarn texture budgets (4x faster startup & 4x less VRAM)
      yarnTexSize: 256,
      colorworkRes: 512,
      usePhysicalYarn: false,
      boucleScale: 0.45,
      // Static prop geometry detail
      latheRadial: 28,
      latheCurvePts: 48,
      leafSegs: 24,
      leafRings: 4,
      yarnBallTubes: 18,
      yarnBallTubeSegs: 24,
      yarnBallRadial: 5,
      // Soft-body & SDF animal mesh detail
      isoStep: 0.068,
      particleSpacing: 0.138,
      particleOffsetSteps: 2,
      // Shell fur settings
      fuzzLayers: 2,
      fuzzReceiveShadow: false,
      simpleFeltTone: true,
      // Physics & crowd limits
      physicsSubsteps: 4,
      collisionIters: 2,
      defaultAnimals: 8,
      maxAnimals: 16,
      minAnimals: 6,
    }
  : {
      isMobile: false,
      maxPixelRatio: 1.5,
      antialias: true,
      shadowMapSize: 2048,
      anisotropy: 8,
      // Procedural yarn texture budgets
      yarnTexSize: 512,
      colorworkRes: 1024,
      usePhysicalYarn: true,
      boucleScale: 1.0,
      // Static prop geometry detail
      latheRadial: 64,
      latheCurvePts: 120,
      leafSegs: 64,
      leafRings: 8,
      yarnBallTubes: 50,
      yarnBallTubeSegs: 64,
      yarnBallRadial: 6,
      // Soft-body & SDF animal mesh detail
      isoStep: 0.045,
      particleSpacing: 0.11,
      particleOffsetSteps: 3,
      // Shell fur settings
      fuzzLayers: 5,
      fuzzReceiveShadow: true,
      simpleFeltTone: false,
      // Physics & crowd limits
      physicsSubsteps: 6,
      collisionIters: 2,
      defaultAnimals: 10,
      maxAnimals: 30,
      minAnimals: 8,
    };

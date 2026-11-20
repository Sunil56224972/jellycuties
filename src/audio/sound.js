/**
 * Procedural WebAudio Sound Synthesizer
 *
 * Generates soft thuds, pentatonic chimes, chirps, stretch creaks, cat purrs,
 * and basket shake sounds in real time with convolution reverb.
 *
 * @author Sunil
 * @license MIT
 */

let ctx = null;
let masterBus = null;
let noiseBuffer = null;
let activeVoices = 0;
const MAX_VOICES = 12;
const PENTATONIC = [0, 2, 4, 7, 9];

const randRange = (a, b) => a + Math.random() * (b - a);
const clamp = (v, lo, hi) => Math.min(hi, Math.max(lo, v));

export function initAudio() {
  if (!ctx) {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return;
    ctx = new AudioCtx();

    const outGain = ctx.createGain();
    outGain.gain.value = 0.85;

    const comp = ctx.createDynamicsCompressor();
    comp.threshold.value = -20;
    comp.knee.value = 24;
    comp.ratio.value = 4;
    comp.attack.value = 0.005;
    comp.release.value = 0.2;
    outGain.connect(comp);
    comp.connect(ctx.destination);

    const irLen = Math.floor(ctx.sampleRate * 0.8);
    const irBuf = ctx.createBuffer(2, irLen, ctx.sampleRate);
    for (let ch = 0; ch < 2; ch++) {
      const data = irBuf.getChannelData(ch);
      let acc = 0;
      for (let i = 0; i < irLen; i++) {
        acc += (Math.random() * 2 - 1 - acc) * 0.35;
        data[i] = acc * (1 - i / irLen) ** 2.5;
      }
    }

    const convolver = ctx.createConvolver();
    convolver.buffer = irBuf;
    const wetGain = ctx.createGain();
    wetGain.gain.value = 0.18;

    masterBus = ctx.createGain();
    masterBus.connect(outGain);
    masterBus.connect(convolver);
    convolver.connect(wetGain);
    wetGain.connect(outGain);

    noiseBuffer = ctx.createBuffer(1, Math.floor(ctx.sampleRate * 0.5), ctx.sampleRate);
    const noiseData = noiseBuffer.getChannelData(0);
    for (let i = 0; i < noiseData.length; i++) {
      noiseData[i] = Math.random() * 2 - 1;
    }
  }
  if (ctx.state !== "running") ctx.resume();
}

function claimVoice(duration) {
  if (!ctx || activeVoices >= MAX_VOICES) return false;
  activeVoices++;
  setTimeout(() => {
    activeVoices--;
  }, duration * 1000 + 80);
  return true;
}

function createEnvelope(start, peak, attack, release, cutoff, q = 0.5) {
  const lp = ctx.createBiquadFilter();
  lp.type = "lowpass";
  lp.frequency.value = cutoff;
  lp.Q.value = q;

  const env = ctx.createGain();
  env.gain.setValueAtTime(1e-4, start);
  env.gain.linearRampToValueAtTime(peak, start + attack);
  env.gain.exponentialRampToValueAtTime(1e-4, start + release);
  env.connect(lp);
  lp.connect(masterBus);
  env.lp = lp;
  return env;
}

function startOsc(type, start, stop, dest) {
  const osc = ctx.createOscillator();
  osc.type = type;
  osc.connect(dest);
  osc.start(start);
  osc.stop(stop);
  return osc;
}

function startNoise(start, duration) {
  const src = ctx.createBufferSource();
  src.buffer = noiseBuffer;
  src.loop = true;
  src.start(start, randRange(0, 0.3));
  if (duration !== undefined) src.stop(start + duration);
  return src;
}

function playNoiseSweep(start, peak, attack, release, fStart, fEnd) {
  const env = createEnvelope(start, peak, attack, release, fStart);
  env.lp.frequency.setValueAtTime(fStart, start);
  env.lp.frequency.exponentialRampToValueAtTime(fEnd, start + release);
  startNoise(start, release + 0.05).connect(env);
}

function playThud(start, freq, peak, release) {
  const env = createEnvelope(start, peak, 0.005, release, 420);
  const osc = startOsc("sine", start, start + release + 0.05, env);
  osc.frequency.setValueAtTime(freq * 1.5, start);
  osc.frequency.exponentialRampToValueAtTime(freq, start + 0.06);
}

function playToneGlide(type, start, fStart, fEnd, peak, attack, release, cutoff) {
  const env = createEnvelope(start, peak, attack, release, cutoff);
  const osc = startOsc(type, start, start + release + 0.05, env);
  osc.frequency.setValueAtTime(fStart, start);
  osc.frequency.exponentialRampToValueAtTime(fEnd, start + release * 0.8);
}

function snapPentatonic(baseFreq) {
  const midi = 69 + 12 * Math.log2(Math.max(60, baseFreq) / 440);
  const center = Math.round(midi);
  const notes = [];
  const weights = [];
  let sum = 0;

  for (let m = center - 12; m <= center + 12; m++) {
    if (!PENTATONIC.includes(((m % 12) + 12) % 12)) continue;
    const w = 1 / (1 + Math.abs(m - midi) / 5);
    notes.push(m);
    weights.push(w);
    sum += w;
  }

  let pick = Math.random() * sum;
  let chosen = notes[0];
  for (let i = 0; i < notes.length; i++) {
    if ((pick -= weights[i]) <= 0) {
      chosen = notes[i];
      break;
    }
  }
  return 440 * 2 ** ((chosen - 69) / 12);
}

export function playBounceSound(pitch = 300, intensity = 0.6) {
  if (!ctx) return;
  const amt = clamp(intensity, 0, 1);
  if (!claimVoice(0.35)) return;

  const now = ctx.currentTime;
  playNoiseSweep(now, 0.12 + 0.2 * amt, 0.008, 0.12 + 0.08 * amt, 600 + 900 * amt, 300 + 250 * amt);
  playThud(now, 70 + 90 * clamp((pitch - 165) / 275, 0, 1), 0.22 + 0.3 * amt, 0.14 + 0.1 * amt);

  const noteFreq = clamp(snapPentatonic(pitch) * 2, 260, 1400);
  const bend = Math.random() < 0.5 ? 1.09 : 0.92;
  playToneGlide(
    Math.random() < 0.5 ? "sine" : "triangle",
    now + 0.012,
    noteFreq / bend,
    noteFreq * bend,
    0.035 + 0.05 * amt,
    0.01,
    randRange(0.06, 0.12),
    2200 + 1800 * amt
  );
}

export function playPopSound() {
  if (!claimVoice(0.4)) return;
  const now = ctx.currentTime;
  playThud(now, randRange(80, 110), 0.2, 0.13);
  playNoiseSweep(now, 0.12, 0.015, 0.16, 1800, 800);
  const freq = 523.25 * 2 ** ((PENTATONIC[Math.floor(Math.random() * PENTATONIC.length)] + 12) / 12);
  playToneGlide("sine", now + 0.025, freq, freq, 0.03, 0.004, 0.2, 4500);
}

export function playChirpSound(pitch = 300) {
  if (!claimVoice(0.3)) return;
  const now = ctx.currentTime;
  const freq = clamp(snapPentatonic(pitch) * 2, 300, 1200);
  const dur = randRange(0.16, 0.24);
  const env = createEnvelope(now, 0.028, 0.03, dur, 3000);
  const osc = startOsc("sine", now, now + dur + 0.05, env);
  osc.frequency.setValueAtTime(freq * 0.93, now);
  osc.frequency.exponentialRampToValueAtTime(freq * 1.07, now + dur * 0.4);
  osc.frequency.exponentialRampToValueAtTime(freq * 0.96, now + dur * 0.95);
  playNoiseSweep(now, 0.012, 0.02, 0.1, 2200, 900);
}

const NOOP_HANDLE = { set() {}, stop() {} };

export function startStretchSound() {
  if (!ctx || activeVoices >= MAX_VOICES) return NOOP_HANDLE;
  activeVoices++;

  const now = ctx.currentTime;
  const bp = ctx.createBiquadFilter();
  bp.type = "bandpass";
  bp.Q.value = 1.2;
  bp.frequency.value = 450;

  const amGain = ctx.createGain();
  amGain.gain.value = 0.75;

  const noiseEnv = ctx.createGain();
  noiseEnv.gain.setValueAtTime(1e-4, now);
  noiseEnv.gain.linearRampToValueAtTime(0.012, now + 0.08);

  const noise = startNoise(now);
  noise.connect(bp);
  bp.connect(amGain);
  amGain.connect(noiseEnv);
  noiseEnv.connect(masterBus);

  const lfo = ctx.createOscillator();
  lfo.frequency.value = randRange(6, 9);
  const lfoDepth = ctx.createGain();
  lfoDepth.gain.value = 0.25;
  lfo.connect(lfoDepth);
  lfoDepth.connect(amGain.gain);
  lfo.start(now);

  const creakLp = ctx.createBiquadFilter();
  creakLp.type = "lowpass";
  creakLp.Q.value = 2;
  creakLp.frequency.value = 280;

  const creakEnv = ctx.createGain();
  creakEnv.gain.setValueAtTime(1e-4, now);
  creakEnv.gain.linearRampToValueAtTime(0.003, now + 0.1);

  const creakOsc = ctx.createOscillator();
  creakOsc.type = "sawtooth";
  creakOsc.frequency.value = 55;
  creakOsc.connect(creakLp);
  creakLp.connect(creakEnv);
  creakEnv.connect(masterBus);
  creakOsc.start(now);

  let amount = 0;
  let stopped = false;
  const jitterTimer = setInterval(() => {
    if (!stopped) {
      creakOsc.frequency.setTargetAtTime(
        (55 + 40 * amount) * (1 + randRange(-0.08, 0.08)),
        ctx.currentTime,
        0.05
      );
    }
  }, 80);

  return {
    set(val) {
      if (stopped) return;
      amount = clamp(val, 0, 1);
      const t = ctx.currentTime;
      bp.frequency.setTargetAtTime(450 * 4 ** amount, t, 0.06);
      noiseEnv.gain.setTargetAtTime(0.012 + 0.07 * amount, t, 0.06);
      creakEnv.gain.setTargetAtTime(0.003 + 0.012 * amount, t, 0.06);
    },
    stop() {
      if (stopped) return;
      stopped = true;
      clearInterval(jitterTimer);
      const t = ctx.currentTime;
      for (const g of [noiseEnv, creakEnv]) {
        g.gain.cancelScheduledValues(t);
        g.gain.setTargetAtTime(1e-4, t, 0.05);
      }
      noise.stop(t + 0.35);
      lfo.stop(t + 0.35);
      creakOsc.stop(t + 0.35);
      setTimeout(() => {
        for (const node of [noise, bp, amGain, noiseEnv, lfo, lfoDepth, creakOsc, creakLp, creakEnv]) {
          node.disconnect();
        }
        activeVoices--;
      }, 450);
    },
  };
}

export function startPurrSound() {
  if (!ctx || activeVoices >= MAX_VOICES) return NOOP_HANDLE;
  activeVoices++;

  const now = ctx.currentTime;
  const outGain = ctx.createGain();
  outGain.gain.value = 1e-4;

  const breathGain = ctx.createGain();
  breathGain.gain.value = 0.65;

  const breathOsc = ctx.createOscillator();
  breathOsc.frequency.value = 1 / 1.6;
  const breathDepth = ctx.createGain();
  breathDepth.gain.value = 0.35;
  breathOsc.connect(breathDepth);
  breathDepth.connect(breathGain.gain);

  const lp = ctx.createBiquadFilter();
  lp.type = "lowpass";
  lp.frequency.value = 150;
  lp.Q.value = 0.7;

  const boost = ctx.createGain();
  boost.gain.value = 5;

  const rumbleGain = ctx.createGain();
  rumbleGain.gain.value = 0.55;

  const rumbleOsc = ctx.createOscillator();
  rumbleOsc.frequency.value = 25;
  const rumbleDepth = ctx.createGain();
  rumbleDepth.gain.value = 0.45;

  const driftOsc = ctx.createOscillator();
  driftOsc.frequency.value = 0.9;
  const driftDepth = ctx.createGain();
  driftDepth.gain.value = 1.5;

  rumbleOsc.connect(rumbleDepth);
  rumbleDepth.connect(rumbleGain.gain);
  driftOsc.connect(driftDepth);
  driftDepth.connect(rumbleOsc.frequency);

  const noise = startNoise(now);
  noise.connect(lp);
  lp.connect(boost);
  boost.connect(rumbleGain);
  rumbleGain.connect(breathGain);

  const subOsc = ctx.createOscillator();
  subOsc.frequency.value = 50;
  const subGain = ctx.createGain();
  subGain.gain.value = 0.35;
  subOsc.connect(subGain);
  subGain.connect(breathGain);

  breathGain.connect(outGain);
  outGain.connect(masterBus);

  for (const osc of [breathOsc, rumbleOsc, driftOsc, subOsc]) osc.start(now);

  let level = 0;
  let stopped = false;

  return {
    set(val) {
      if (stopped) return;
      val = clamp(val, 0, 1);
      if (Math.abs(val - level) < 0.002) return;
      level = val;
      outGain.gain.setTargetAtTime(1e-4 + 0.2 * val, ctx.currentTime, 0.08);
    },
    stop() {
      if (stopped) return;
      stopped = true;
      const t = ctx.currentTime;
      outGain.gain.cancelScheduledValues(t);
      outGain.gain.setTargetAtTime(1e-4, t, 0.1);
      for (const node of [noise, breathOsc, rumbleOsc, driftOsc, subOsc]) node.stop(t + 0.45);
      setTimeout(() => {
        for (const node of [
          noise, lp, boost, rumbleGain, rumbleOsc, rumbleDepth,
          driftOsc, driftDepth, breathOsc, breathDepth, breathGain, subOsc, subGain, outGain,
        ]) {
          node.disconnect();
        }
        activeVoices--;
      }, 550);
    },
  };
}

export function playShakeSound() {
  if (!ctx) return;
  const now = ctx.currentTime;
  if (claimVoice(0.9)) {
    const dur = 0.75;
    const env = createEnvelope(now, 0.16, 0.25, dur, 2200);
    const bp = ctx.createBiquadFilter();
    bp.type = "bandpass";
    bp.Q.value = 0.9;
    bp.frequency.setValueAtTime(700, now);
    bp.frequency.exponentialRampToValueAtTime(1800, now + 0.3);
    bp.frequency.exponentialRampToValueAtTime(900, now + dur);
    startNoise(now, 0.8).connect(bp);
    bp.connect(env);
  }
  const taps = 3 + Math.floor(Math.random() * 3);
  let t = now + 0.03;
  for (let i = 0; i < taps && claimVoice(0.3); i++, t += randRange(0.07, 0.16)) {
    playThud(t, randRange(80, 130), randRange(0.12, 0.2), 0.15);
    playNoiseSweep(t, 0.05, 0.01, 0.09, 700, 400);
  }
}

/**
 * Particle Effects & Dizzy Star Ring
 *
 * Manages pooled 2D canvas sprite particles (hearts, stars, sparkles, wool puffs,
 * and floating sleepy Z's) plus orbiting dizzy stars above stunned animals.
 *
 * @author Sunil
 * @license MIT
 */

import * as THREE from "three";

function makeSpriteTexture(drawFn) {
  const canvas = document.createElement("canvas");
  canvas.width = canvas.height = 128;
  const ctx = canvas.getContext("2d");
  ctx.translate(64, 64);
  ctx.lineJoin = ctx.lineCap = "round";
  drawFn(ctx);
  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

function fillOutlined(ctx, fillColor) {
  ctx.fillStyle = fillColor;
  ctx.fill();
  ctx.lineWidth = 7;
  ctx.strokeStyle = "rgba(255,255,255,0.95)";
  ctx.stroke();
}

const WHITE = new THREE.Color("#ffffff");

const PARTICLE_TEXTURES = {
  heart: makeSpriteTexture((ctx) => {
    ctx.beginPath();
    ctx.moveTo(0, 40);
    ctx.bezierCurveTo(-70, -5, -35, -60, 0, -25);
    ctx.bezierCurveTo(35, -60, 70, -5, 0, 40);
    fillOutlined(ctx, "#ff5c8a");
  }),
  star: makeSpriteTexture((ctx) => {
    ctx.beginPath();
    for (let i = 0; i < 10; i++) {
      const r = i % 2 ? 22 : 50;
      const a = -Math.PI / 2 + (i * Math.PI) / 5;
      ctx.lineTo(Math.cos(a) * r, Math.sin(a) * r);
    }
    ctx.closePath();
    fillOutlined(ctx, "#ffd23f");
  }),
  sparkle: makeSpriteTexture((ctx) => {
    ctx.beginPath();
    for (let i = 0; i < 8; i++) {
      const r = i % 2 ? 9 : 52;
      const a = (i * Math.PI) / 4;
      ctx.lineTo(Math.cos(a) * r, Math.sin(a) * r);
    }
    ctx.closePath();
    ctx.fillStyle = "#ffffff";
    ctx.fill();
  }),
  puff: makeSpriteTexture((ctx) => {
    const grad = ctx.createRadialGradient(0, 0, 0, 0, 0, 58);
    grad.addColorStop(0, "rgba(255,250,240,1)");
    grad.addColorStop(0.55, "rgba(250,240,224,0.9)");
    grad.addColorStop(1, "rgba(250,240,224,0)");
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.arc(0, 0, 58, 0, Math.PI * 2);
    ctx.fill();
  }),
  z: makeSpriteTexture((ctx) => {
    ctx.font = 'bold 96px ui-rounded, "Arial Rounded MT Bold", sans-serif';
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.lineWidth = 10;
    ctx.strokeStyle = "#ffffff";
    ctx.strokeText("z", 0, 4);
    ctx.fillStyle = "#7d8cff";
    ctx.fillText("z", 0, 4);
  }),
};

export function createParticles(parent) {
  const active = [];
  const pool = [];
  const tmpVel = new THREE.Vector3();

  function spawn(
    kind,
    pos,
    vel,
    { size = 0.16, life = 0.8, gravity = -3, spin = 0, color } = {}
  ) {
    const sprite =
      pool.pop() ??
      new THREE.Sprite(
        new THREE.SpriteMaterial({
          transparent: true,
          depthWrite: false,
          toneMapped: false,
        })
      );
    sprite.material.map = PARTICLE_TEXTURES[kind];
    sprite.material.color.set(color ?? "#ffffff");
    sprite.material.rotation = Math.random() * 0.6 - 0.3;
    sprite.material.opacity = 1;
    sprite.position.copy(pos);
    sprite.renderOrder = 20;
    sprite.userData = { vel: vel.clone(), size, life, age: 0, gravity, spin };
    sprite.scale.setScalar(0.001);
    parent.add(sprite);
    active.push(sprite);
    return sprite;
  }

  return {
    burst(pos, { count = 6, kinds = ["heart", "sparkle"], speed = 2.4, size = 0.26 } = {}) {
      for (let i = 0; i < count; i++) {
        const angle = Math.random() * Math.PI * 2;
        tmpVel
          .set(Math.cos(angle), 1.2 + Math.random(), Math.sin(angle))
          .normalize()
          .multiplyScalar(speed * (0.6 + Math.random() * 0.6));
        const kind = kinds[i % kinds.length];
        spawn(kind, pos, tmpVel, {
          size: size * (kind === "sparkle" ? 0.8 : 1) * (0.7 + Math.random() * 0.5),
          life: 0.6 + Math.random() * 0.4,
          spin: (Math.random() - 0.5) * 6,
        });
      }
    },
    poof(pos, baseColor) {
      const tint = new THREE.Color(baseColor).lerp(WHITE, 0.6);
      for (let i = 0; i < 14; i++) {
        const angle = (i / 14) * Math.PI * 2 + Math.random() * 0.4;
        tmpVel
          .set(Math.cos(angle), 0.4 + Math.random() * 0.8, Math.sin(angle))
          .multiplyScalar(1.8 + Math.random() * 1.4);
        spawn("puff", pos, tmpVel, {
          size: 0.42 + Math.random() * 0.24,
          life: 0.6 + Math.random() * 0.3,
          gravity: 0.6,
          color: tint,
        });
      }
      for (let i = 0; i < 6; i++) {
        tmpVel.set(Math.random() - 0.5, 1.2, Math.random() - 0.5).normalize().multiplyScalar(2.6);
        spawn(i % 2 ? "star" : "sparkle", pos, tmpVel, {
          size: 0.22,
          life: 0.7,
          spin: (Math.random() - 0.5) * 6,
        });
      }
    },
    zzz(pos) {
      tmpVel.set(0.15 + Math.random() * 0.1, 0.35, 0);
      spawn("z", pos.clone().setY(pos.y + 0.15), tmpVel, {
        size: 0.2 + Math.random() * 0.08,
        life: 2.2,
        gravity: 0,
      });
    },
    update(dt) {
      for (let i = active.length - 1; i >= 0; i--) {
        const sprite = active[i];
        const data = sprite.userData;
        data.age += dt;
        const t = data.age / data.life;
        if (t >= 1) {
          parent.remove(sprite);
          active.splice(i, 1);
          pool.push(sprite);
          continue;
        }
        data.vel.y += data.gravity * dt;
        data.vel.multiplyScalar(Math.exp(-dt * 2.5));
        sprite.position.addScaledVector(data.vel, dt);
        sprite.material.rotation += data.spin * dt;
        const pop =
          t < 0.15
            ? THREE.MathUtils.smootherstep(t / 0.15, 0, 1) * 1.25
            : 1.25 - 0.25 * Math.min(1, (t - 0.15) / 0.2);
        sprite.scale.setScalar(data.size * pop * (1 - 0.3 * t));
        sprite.material.opacity = t > 0.6 ? 1 - (t - 0.6) / 0.4 : 1;
      }
    },
  };
}

export function createDizzyStars(parent) {
  const group = new THREE.Group();
  for (let i = 0; i < 3; i++) {
    const star = new THREE.Sprite(
      new THREE.SpriteMaterial({
        map: PARTICLE_TEXTURES.star,
        transparent: true,
        depthWrite: false,
        toneMapped: false,
      })
    );
    star.scale.setScalar(0.19);
    star.renderOrder = 20;
    group.add(star);
  }
  group.visible = false;
  parent.add(group);

  return {
    update(headPos, time, visible) {
      group.visible = visible;
      if (!visible) return;
      group.position.copy(headPos);
      group.children.forEach((star, idx) => {
        const a = time * 5 + (idx * Math.PI * 2) / 3;
        star.position.set(Math.cos(a) * 0.4, Math.sin(a * 2) * 0.04, Math.sin(a) * 0.4);
      });
    },
    dispose() {
      group.removeFromParent();
      for (const child of group.children) child.material.dispose();
    },
  };
}

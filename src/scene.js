// Floating construction shapes (box, sphere, cylinder, cone) drawn like sketchbook forms.
// Kept light on purpose: ~8 meshes, one light, capped pixel ratio, paused when the tab is hidden.
import {
  WebGLRenderer, Scene, PerspectiveCamera, Group, Mesh, LineSegments, Line, LineLoop,
  BoxGeometry, SphereGeometry, CylinderGeometry, ConeGeometry, EdgesGeometry, BufferGeometry,
  MeshToonMaterial, LineBasicMaterial, DirectionalLight, AmbientLight, DataTexture, RedFormat,
  NearestFilter, Vector2, Vector3, Raycaster, Float32BufferAttribute, MathUtils,
} from 'three';

const INK = 0x3a2a24;
const PAPER = 0xf6f0e6;
const ACCENT = 0x9b4a32;

function toonRamp() {
  const t = new DataTexture(new Uint8Array([150, 205, 240, 255]), 4, 1, RedFormat);
  t.minFilter = t.magFilter = NearestFilter;
  t.needsUpdate = true;
  return t;
}

function circle(r, axis, color, opacity) {
  const pts = [];
  const n = 48;
  for (let i = 0; i < n; i++) {
    const a = (i / n) * Math.PI * 2;
    const c = Math.cos(a) * r, s = Math.sin(a) * r;
    if (axis === 'y') pts.push(c, 0, s);
    else if (axis === 'x') pts.push(0, c, s);
    else pts.push(c, s, 0);
  }
  const g = new BufferGeometry();
  g.setAttribute('position', new Float32BufferAttribute(pts, 3));
  return new LineLoop(g, new LineBasicMaterial({ color, transparent: true, opacity }));
}

function axisLine(len, color) {
  const g = new BufferGeometry();
  g.setAttribute('position', new Float32BufferAttribute([0, -len, 0, 0, len, 0], 3));
  return new Line(g, new LineBasicMaterial({ color, transparent: true, opacity: 0.35 }));
}

export function startScene(canvas) {
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  let renderer;
  try {
    renderer = new WebGLRenderer({ canvas, antialias: true, alpha: true, powerPreference: 'low-power' });
  } catch {
    canvas.remove();
    return;
  }
  renderer.setClearColor(0x000000, 0);

  const scene = new Scene();
  const camera = new PerspectiveCamera(35, 1, 0.1, 100);
  camera.position.set(0, 0, 14);

  scene.add(new AmbientLight(0xffffff, 0.9));
  const sun = new DirectionalLight(0xffffff, 1.6);
  sun.position.set(-4, 6, 8);
  scene.add(sun);

  const ramp = toonRamp();
  const fill = (color = PAPER) => new MeshToonMaterial({ color, gradientMap: ramp });
  const edges = (geo, color = INK, opacity = 0.9) =>
    new LineSegments(new EdgesGeometry(geo, 25), new LineBasicMaterial({ color, transparent: true, opacity }));

  const makers = {
    box: () => {
      const g = new BoxGeometry(1.6, 1.6, 1.6);
      const grp = new Group();
      grp.add(new Mesh(g, fill()), edges(g));
      return grp;
    },
    sphere: (accent) => {
      const g = new SphereGeometry(1, 32, 20);
      const grp = new Group();
      grp.add(new Mesh(g, fill(accent ? 0xf0d9c8 : PAPER)));
      const c = accent ? ACCENT : INK;
      grp.add(circle(1.002, 'y', c, 0.75), circle(1.002, 'x', c, 0.45), circle(1.002, 'z', c, 0.45));
      return grp;
    },
    cylinder: () => {
      const g = new CylinderGeometry(0.75, 0.75, 2, 40, 1);
      const grp = new Group();
      grp.add(new Mesh(g, fill()), edges(g), axisLine(1.3, INK));
      return grp;
    },
    cone: () => {
      const g = new ConeGeometry(0.9, 1.8, 40, 1);
      const grp = new Group();
      grp.add(new Mesh(g, fill()), edges(g), axisLine(1.2, INK));
      return grp;
    },
  };

  // Shapes sit around the edges so text stays readable.
  const layout = [
    ['box', -5.6, 2.6, -1, 1.0],
    ['sphere', 5.4, 2.9, -2, 0.9, true],
    ['cylinder', 6.2, -1.6, -1, 0.85],
    ['cone', -6.4, -2.2, -2, 0.9],
    ['box', 3.2, -3.6, -4, 0.6],
    ['sphere', -3.4, -4.0, -5, 0.55],
    ['cylinder', -2.6, 4.4, -6, 0.5],
    ['box', 1.2, 4.6, -7, 0.45],
  ];

  const shapes = layout.map(([kind, x, y, z, s, accent], i) => {
    const obj = makers[kind](accent);
    obj.position.set(x, y, z);
    obj.scale.setScalar(s);
    obj.rotation.set(Math.random() * 3, Math.random() * 3, Math.random() * 3);
    obj.userData = {
      base: new Vector3(x, y, z),
      home: new Vector3(x, y, z),
      scale: s,
      phase: i * 1.37,
      spin: new Vector3((Math.random() - 0.5) * 0.25, 0.15 + Math.random() * 0.2, (Math.random() - 0.5) * 0.15),
      kick: 0,
    };
    scene.add(obj);
    return obj;
  });

  // Pointer: parallax + hover "kick" (shape spins faster and grows a bit).
  const pointer = new Vector2(0, 0);
  const target = new Vector2(0, 0);
  let pointerMoved = false;
  addEventListener('pointermove', (e) => {
    target.set((e.clientX / innerWidth) * 2 - 1, -(e.clientY / innerHeight) * 2 + 1);
    pointerMoved = true;
  }, { passive: true });

  const ray = new Raycaster();
  let scrollY = scrollY0();
  function scrollY0() { return window.scrollY || 0; }
  addEventListener('scroll', () => { scrollY = scrollY0(); }, { passive: true });

  function resize() {
    const w = innerWidth, h = innerHeight;
    const dpr = Math.min(devicePixelRatio || 1, w < 700 ? 1.5 : 1.75);
    renderer.setPixelRatio(dpr);
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    // On narrow screens, tuck shapes closer to the sides and spread them vertically.
    const narrow = w < 700;
    for (const s of shapes) {
      const h0 = s.userData.home;
      s.userData.base.set(narrow ? h0.x * 0.3 : h0.x, narrow ? h0.y * 1.3 : h0.y, h0.z);
      s.userData.scale0 ??= s.userData.scale;
      s.userData.scale = s.userData.scale0 * (narrow ? 0.7 : 1);
    }
    camera.updateProjectionMatrix();
  }
  resize();
  addEventListener('resize', resize, { passive: true });

  let last = performance.now();
  let t = 0;
  function frame(now) {
    const dt = Math.min((now - last) / 1000, 0.05);
    last = now;
    t += dt;

    pointer.lerp(target, 1 - Math.pow(0.001, dt));

    if (pointerMoved) {
      pointerMoved = false;
      ray.setFromCamera(target, camera);
      const hits = ray.intersectObjects(shapes, true);
      if (hits.length) {
        let o = hits[0].object;
        while (o.parent && !shapes.includes(o)) o = o.parent;
        o.userData.kick = 1;
      }
    }

    const scrollShift = scrollY * 0.0025;
    for (const s of shapes) {
      const u = s.userData;
      u.kick = Math.max(0, u.kick - dt * 0.8);
      const boost = 1 + u.kick * 6;
      s.rotation.x += u.spin.x * dt * boost;
      s.rotation.y += u.spin.y * dt * boost;
      s.rotation.z += u.spin.z * dt * boost;
      const depth = 1 + (-u.base.z) * 0.12;
      s.position.x = u.base.x + pointer.x * 0.35 / depth;
      s.position.y = u.base.y + Math.sin(t * 0.6 + u.phase) * 0.18 + pointer.y * 0.25 / depth + scrollShift / depth;
      s.scale.setScalar(u.scale * (1 + u.kick * 0.12));
    }

    camera.rotation.y = MathUtils.lerp(camera.rotation.y, -pointer.x * 0.03, 0.1);
    camera.rotation.x = MathUtils.lerp(camera.rotation.x, pointer.y * 0.02, 0.1);
    renderer.render(scene, camera);
  }

  if (reduced) {
    frame(performance.now());
    addEventListener('resize', () => renderer.render(scene, camera), { passive: true });
    return;
  }

  const loop = (now) => frame(now);
  renderer.setAnimationLoop(loop);
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) renderer.setAnimationLoop(null);
    else { last = performance.now(); renderer.setAnimationLoop(loop); }
  });
}

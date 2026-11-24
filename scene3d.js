import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { buildRoomModel } from './model3d.js';
import { createCharacter3D } from './character3d.js';

const ROOM3D_VIEWS = {
  home: { name: '小屋全景', target: [580, 45, 389], offset: [0, 2200, 1000], extent: 750 },
  top: { name: '俯视布局', target: [580, 0, 389], offset: [0, 1800, 0.1], extent: 660 },
  projection: { name: '投影这面墙', target: [665, 86, 219], offset: [40, 500, 1000], extent: 690 },
  memories: { name: '沙发背后的回忆', target: [625, 76, 505], offset: [-30, 570, -1050], extent: 690 },
  entrance: { name: '门旁的纪念', target: [905, 92, 355], offset: [-950, 535, 250], extent: 650 },
  bookshelf: { name: '书架与相机', target: [338, 95, 516], offset: [450, 260, 120], extent: 310 },
  window: { name: '电脑旁的窗户与门', target: [291, 105, 257], offset: [650, 260, 380], extent: 430 },
};

let room3dSavedCamera = null;

export function createRoom3D({ container, state = {}, onFloorClick = () => {}, onHotspotClick = () => {}, onViewChange = () => {}, onReady = () => {}, onError = () => {} }) {
  let renderer, scene, camera, controls, model, player, marker, nearbyRing, mounted = false, disposed = false;
  let view = room3dSavedCamera?.view || 'home', currentAspect = 1, measuredAspect = null, lastTime = 0, transition = null, pointerOrigin = null, userOrbit = Boolean(room3dSavedCamera?.userOrbit), lost = false;
  let navigationMode = room3dSavedCamera?.navigationMode || 'pan';
  const activePointers = new Set();
  let fittedExtent = null;
  let playerPosition = { x: 905, y: 430 }, playerFacing = 'down', playerWalking = false;
  const reducedMotion = typeof matchMedia === 'function' && matchMedia('(prefers-reduced-motion: reduce)').matches;
  const listeners = new AbortController();
  const raycaster = new THREE.Raycaster(), pointer = new THREE.Vector2();
  const vectorFrom = values => new THREE.Vector3(...values);

  function cameraExtent() {
    if (fittedExtent !== null) return fittedExtent;
    const preset = ROOM3D_VIEWS[view];
    if (view === 'top') return Math.max(preset.extent, 1120 / currentAspect);
    if (currentAspect < 1.1) return ({home:820,projection:530,memories:480,entrance:430,bookshelf:365,window:430})[view]||800;
    return ['bookshelf','window'].includes(view)?Math.max(preset.extent,350/currentAspect):Math.max(preset.extent, 1210 / currentAspect);
  }
  function fitPreset(position, target) {
    const rect = container.getBoundingClientRect();
    if (!model || !rect.width || !rect.height) return { position, target, extent: cameraExtent() };
    model.group.updateMatrixWorld(true);
    const bounds = new THREE.Box3().setFromObject(model.group);
    const framing = new THREE.OrthographicCamera(-1, 1, 1, -1, .5, 8000);
    framing.position.copy(position); framing.lookAt(target); framing.updateMatrixWorld(true);
    const min = new THREE.Vector2(Infinity, Infinity), max = new THREE.Vector2(-Infinity, -Infinity);
    for (const x of [bounds.min.x, bounds.max.x]) for (const y of [bounds.min.y, bounds.max.y]) for (const z of [bounds.min.z, bounds.max.z]) {
      const projected = new THREE.Vector3(x, y, z).applyMatrix4(framing.matrixWorldInverse);
      min.x = Math.min(min.x, projected.x); min.y = Math.min(min.y, projected.y);
      max.x = Math.max(max.x, projected.x); max.y = Math.max(max.y, projected.y);
    }
    const portrait = currentAspect < 1.1;
    const left = portrait ? 18 : 35, right = left;
    const toolbar = document.querySelector('.room-view-controls')?.getBoundingClientRect();
    const footer = document.querySelector('.scene-bottom')?.getBoundingClientRect();
    const header = document.querySelector('.scene-top')?.getBoundingClientRect();
    const toolbarIsAbove = toolbar && (toolbar.top + toolbar.bottom) / 2 < rect.top + rect.height / 2;
    const top = Math.max(portrait ? 100 : 70, header ? header.bottom - rect.top + 12 : 0, toolbarIsAbove ? toolbar.bottom - rect.top + 12 : 0);
    const bottom = Math.max(portrait ? 180 : 60, footer ? rect.bottom - footer.top + 12 : 0);
    const availableWidth = Math.max(rect.width * .4, rect.width - left - right);
    const availableHeight = Math.max(rect.height * .35, rect.height - top - bottom);
    const extent = Math.max((max.y - min.y) * rect.height / availableHeight, (max.x - min.x) * rect.height / availableWidth) * 1.025;
    const safeCentreX = (left + rect.width - right) / 2, safeCentreY = (top + rect.height - bottom) / 2;
    const wantedX = (safeCentreX / rect.width * 2 - 1) * extent * currentAspect / 2;
    const wantedY = (1 - safeCentreY / rect.height * 2) * extent / 2;
    const dx = (min.x + max.x) / 2 - wantedX, dy = (min.y + max.y) / 2 - wantedY;
    const rightVector = new THREE.Vector3().setFromMatrixColumn(framing.matrixWorld, 0);
    const upVector = new THREE.Vector3().setFromMatrixColumn(framing.matrixWorld, 1);
    const shift = rightVector.multiplyScalar(dx).add(upVector.multiplyScalar(dy));
    return { position: position.clone().add(shift), target: target.clone().add(shift), extent };
  }
  function resize() {
    if (!renderer || disposed) return;
    const rect = container.getBoundingClientRect(); if (!rect.width || !rect.height) return;
    const previousAspect = measuredAspect;
    currentAspect = rect.width / rect.height; measuredAspect = currentAspect;
    renderer.setSize(rect.width, rect.height, false);
    if (!userOrbit) fittedExtent = null;
    const extent = cameraExtent();
    camera.left = -extent * currentAspect / 2; camera.right = extent * currentAspect / 2;
    camera.top = extent / 2; camera.bottom = -extent / 2; camera.updateProjectionMatrix();
    if (previousAspect !== null && !userOrbit) {
      // Refit presets around the controls; preserve a deliberately panned view.
      setView(view, true);
    }
    render(lastTime);
  }
  function updateWalls() {
    if (!model?.walls) return;
    const offset = camera.position.clone().sub(controls.target);
    const show = (!userOrbit && view === 'top') || Math.abs(offset.y) / Math.max(1, Math.hypot(offset.x, offset.z)) > 4;
    if (model.walls.north) model.walls.north.visible = !show && offset.z > -50;
    if (model.walls.south) model.walls.south.visible = !show && offset.z < 50;
    if (model.walls.west) model.walls.west.visible = !show && offset.x > -50;
    if (model.walls.east) model.walls.east.visible = !show && offset.x < 50;
  }
  function setView(name, immediately = false) {
    if (!ROOM3D_VIEWS[name] || !camera) return false;
    const preset = ROOM3D_VIEWS[name]; view = name; userOrbit = false;
    let target = vectorFrom(preset.target);
    if(currentAspect<1.1&&view==='projection')target.set(600,118,153);
    if(currentAspect<1.1&&view==='memories')target.set(390,117,621);
    if(currentAspect<1.1&&view==='entrance')target.set(1095,125,310);
    let position = target.clone().add(vectorFrom(preset.offset));
    fittedExtent = null;
    if (view === 'top' || view === 'home') {
      const fit = fitPreset(position, target); position = fit.position; target = fit.target; fittedExtent = fit.extent;
    }
    camera.zoom = 1;
    if (immediately || reducedMotion) {
      controls.target.copy(target); camera.position.copy(position); transition = null;
    } else {
      transition = { start: performance.now(), fromPosition: camera.position.clone(), fromTarget: controls.target.clone(), toPosition: position, toTarget: target };
    }
    const extent = cameraExtent();
    camera.left = -extent * currentAspect / 2; camera.right = extent * currentAspect / 2; camera.top = extent / 2; camera.bottom = -extent / 2; camera.updateProjectionMatrix();
    container.dataset.view = name; renderer.domElement.dataset.view = name;
    onViewChange(name); render(performance.now()); return true;
  }
  function render(time = performance.now()) {
    if (!mounted || disposed || lost) return;
    lastTime = time;
    if (transition) {
      const p = Math.max(0, Math.min(1, (time - transition.start) / 760));
      const eased = p * p * (3 - 2 * p);
      camera.position.lerpVectors(transition.fromPosition, transition.toPosition, eased);
      camera.position.y += Math.sin(p * Math.PI) * 100;
      controls.target.lerpVectors(transition.fromTarget, transition.toTarget, eased);
      if (p === 1) transition = null;
    }
    controls.update(); updateWalls(); renderer.render(scene, camera);
    renderer.domElement.dataset.playerX = playerPosition.x.toFixed(2);
    renderer.domElement.dataset.playerY = playerPosition.y.toFixed(2);
    renderer.domElement.dataset.facing = playerFacing;
    renderer.domElement.dataset.walking = String(playerWalking);
    renderer.domElement.dataset.calls = String(renderer.info.render.calls);
    renderer.domElement.dataset.triangles = String(renderer.info.render.triangles);
    renderer.domElement.dataset.visibleWalls = Object.entries(model?.walls || {}).filter(([, wall]) => wall.visible).map(([name]) => name).join(',');
    renderer.domElement.dataset.cameraZoom = camera.zoom.toFixed(3);
    renderer.domElement.dataset.targetX = controls.target.x.toFixed(2);
    renderer.domElement.dataset.targetY = controls.target.y.toFixed(2);
    renderer.domElement.dataset.targetZ = controls.target.z.toFixed(2);
    renderer.domElement.dataset.cameraX = camera.position.x.toFixed(2);
    renderer.domElement.dataset.cameraY = camera.position.y.toFixed(2);
    renderer.domElement.dataset.cameraZ = camera.position.z.toFixed(2);
    renderer.domElement.dataset.navigationMode = navigationMode;
    renderer.domElement.dataset.manualCamera = String(userOrbit);
  }
  function setNavigationMode(mode) {
    if (!controls || !['pan', 'rotate'].includes(mode)) return false;
    navigationMode = mode;
    controls.mouseButtons = { LEFT: mode === 'pan' ? THREE.MOUSE.PAN : THREE.MOUSE.ROTATE, MIDDLE: THREE.MOUSE.DOLLY, RIGHT: mode === 'pan' ? THREE.MOUSE.ROTATE : THREE.MOUSE.PAN };
    controls.touches = { ONE: mode === 'pan' ? THREE.TOUCH.PAN : THREE.TOUCH.ROTATE, TWO: mode === 'pan' ? THREE.TOUCH.DOLLY_PAN : THREE.TOUCH.DOLLY_ROTATE };
    document.querySelectorAll('[data-camera-mode]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.cameraMode === mode)));
    const hint = document.getElementById('camera-help');
    if (hint) hint.textContent = mode === 'pan' ? '拖动平移 · 滚轮 / 双指缩放' : '拖动旋转 · 滚轮 / 双指缩放';
    renderer.domElement.dataset.navigationMode = mode;
    return true;
  }
  function onCameraKey(event) {
    const directions = { ArrowLeft: [-40, 0], ArrowRight: [40, 0], ArrowUp: [0, -40], ArrowDown: [0, 40] };
    if (event.key === 'Home') {
      event.preventDefault(); event.stopImmediatePropagation(); setView('home'); return;
    }
    if (!event.shiftKey || !directions[event.key]) return;
    event.preventDefault(); event.stopImmediatePropagation();
    const [dx, dy] = directions[event.key];
    const units = (camera.top - camera.bottom) / camera.zoom / Math.max(1, renderer.domElement.clientHeight);
    camera.updateMatrixWorld();
    const shift = new THREE.Vector3().setFromMatrixColumn(camera.matrixWorld, 0).multiplyScalar(-dx * units)
      .addScaledVector(new THREE.Vector3().setFromMatrixColumn(camera.matrixWorld, 1), dy * units);
    transition = null; userOrbit = true;
    camera.position.add(shift); controls.target.add(shift); render(performance.now());
  }
  function setPlayer(position, facing = 'down', moving = false, time = performance.now()) {
    playerPosition = { x: position.x, y: position.y }; playerFacing = facing; playerWalking = moving;
    if (!player) return;
    player.position.set(position.x, 0, position.y);
    const rotation = { down: 0, up: Math.PI, left: -Math.PI / 2, right: Math.PI / 2 };
    player.rotation.y = rotation[facing] ?? 0;
    const step = moving && !reducedMotion ? Math.sin(time / 90) : 0;
    const { leftLeg, rightLeg, body, leftArm, rightArm } = player.userData.parts;
    leftLeg.rotation.x = step * .42; rightLeg.rotation.x = -step * .42;
    leftArm.rotation.x = -step * .12; rightArm.rotation.x = step * .12;
    body.position.y = Math.abs(step) * 1.4;
  }
  function setNearby(id) {
    if (!nearbyRing) return;
    nearbyRing.visible = Boolean(id);
    if (!id) return;
    const object = model.interactables.find(entry => entry.userData.hotspot === id);
    if (object) {
      const bounds = new THREE.Box3().setFromObject(object), centre = bounds.getCenter(new THREE.Vector3());
      nearbyRing.position.set(centre.x, 1.2, centre.z);
      nearbyRing.scale.set(Math.min(1.7, Math.max(.65, (bounds.max.x - bounds.min.x) / 70)), Math.min(1.7, Math.max(.65, (bounds.max.z - bounds.min.z) / 70)), 1);
    } else nearbyRing.visible = false;
  }
  function setDestination(point) {
    if (!marker) return;
    marker.visible = Boolean(point);
    if (point) marker.position.set(point.x, 1.3, point.y);
  }
  function clickableAncestor(object) {
    for (let current = object; current && current !== scene; current = current.parent) if (current.userData.hotspot) return current.userData.hotspot;
    return null;
  }
  function objectIsVisible(object) {
    for (let current = object; current; current = current.parent) if (!current.visible) return false;
    return true;
  }
  function onPointerUp(event) {
    activePointers.delete(event.pointerId);
    if (activePointers.size) return;
    if (!pointerOrigin || pointerOrigin.id !== event.pointerId || pointerOrigin.dragged || Math.hypot(event.clientX - pointerOrigin.x, event.clientY - pointerOrigin.y) > 6) { pointerOrigin = null; return; }
    pointerOrigin = null;
    if (event.button > 0 || document.querySelector('dialog[open]')) return;
    const rect = renderer.domElement.getBoundingClientRect();
    pointer.set((event.clientX - rect.left) / rect.width * 2 - 1, -(event.clientY - rect.top) / rect.height * 2 + 1);
    raycaster.setFromCamera(pointer, camera);
    const hits = raycaster.intersectObjects([model.group], true).filter(hit => hit.object.isMesh && objectIsVisible(hit.object));
    if (!hits.length) return;
    const hit = hits[0], hotspot = clickableAncestor(hit.object);
    if (hotspot) onHotspotClick(hotspot);
    else if (hit.object.userData.floor) onFloorClick({ x: hit.point.x, y: hit.point.z });
  }
  function mount() {
    if (mounted || disposed) return false;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false, powerPreference: 'high-performance' });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.6));
      renderer.outputColorSpace = THREE.SRGBColorSpace;
      renderer.toneMapping = THREE.ACESFilmicToneMapping; renderer.toneMappingExposure = .92;
      renderer.shadowMap.enabled = true; renderer.shadowMap.type = THREE.PCFShadowMap;
      renderer.domElement.className = 'room3d-canvas';
      renderer.domElement.setAttribute('role', 'img');
      renderer.domElement.setAttribute('aria-label', '可探索的立体小屋。拖动平移，切换旋转可调整角度；滚轮或双指缩放。方向键移动小人，Shift 加方向键平移，Home 看全屋，靠近按 E 互动。');
      renderer.domElement.tabIndex = 0;
      scene = new THREE.Scene(); scene.background = new THREE.Color('#eeeadd');
      scene.add(new THREE.HemisphereLight('#fff8e8', '#a3a891', 1.6));
      const sun = new THREE.DirectionalLight('#fff1d2', 2.5);
      sun.position.set(160, 1100, 140); sun.target.position.set(550, 0, 420);
      sun.castShadow = true; sun.shadow.mapSize.set(2048, 2048);
      Object.assign(sun.shadow.camera, { left: -800, right: 800, top: 800, bottom: -800, near: 1, far: 2200 });
      sun.shadow.bias = -.0002; sun.shadow.normalBias = 1.1; sun.shadow.radius = 3;
      scene.add(sun, sun.target);
      const fill = new THREE.DirectionalLight('#e3e9df', .65); fill.position.set(1100, 600, 1100); scene.add(fill);
      model = buildRoomModel(state); scene.add(model.group);
      player = createCharacter3D(state.character); scene.add(player); setPlayer(playerPosition);
      marker = new THREE.Mesh(new THREE.RingGeometry(7.5, 9, 32), new THREE.MeshBasicMaterial({ color: '#738668', transparent: true, opacity: .8, side: THREE.DoubleSide, depthWrite: false }));
      marker.rotation.x = -Math.PI / 2; marker.visible = false; marker.name = 'walk-destination'; scene.add(marker);
      nearbyRing = new THREE.Mesh(new THREE.RingGeometry(24, 25, 44), new THREE.MeshBasicMaterial({ color: '#7f926b', transparent: true, opacity: .5, side: THREE.DoubleSide, depthWrite: false }));
      nearbyRing.rotation.x = -Math.PI / 2; nearbyRing.visible = false; scene.add(nearbyRing);
      camera = new THREE.OrthographicCamera(-650, 650, 450, -450, .5, 8000);
      camera.position.set(1400, 1250, 1500);
      controls = new OrbitControls(camera, renderer.domElement);
      controls.target.set(550, 45, 392); controls.enableDamping = true; controls.dampingFactor = .09;
      controls.minPolarAngle = .00001; controls.maxPolarAngle = Math.PI / 2 - .13;
      controls.minZoom = .25; controls.maxZoom = 5; controls.enablePan = true;
      controls.screenSpacePanning = true;
      setNavigationMode(navigationMode);
      controls.addEventListener('start', () => { transition = null; });
      container.replaceChildren(renderer.domElement); mounted = true;
      resize();
      if (room3dSavedCamera?.userOrbit) {
        camera.position.copy(vectorFrom(room3dSavedCamera.position)); controls.target.copy(vectorFrom(room3dSavedCamera.target)); camera.zoom = room3dSavedCamera.zoom;
        fittedExtent = room3dSavedCamera.extent;
        const extent = cameraExtent();
        camera.left = -extent * currentAspect / 2; camera.right = extent * currentAspect / 2;
        camera.top = extent / 2; camera.bottom = -extent / 2; camera.updateProjectionMatrix();
        container.dataset.view = view; renderer.domElement.dataset.view = view; onViewChange(view);
      } else setView(view, true);
      renderer.domElement.addEventListener('pointerdown', event => {
        activePointers.add(event.pointerId);
        if (activePointers.size === 1) pointerOrigin = { x: event.clientX, y: event.clientY, id: event.pointerId, dragged: false };
        else if (pointerOrigin) pointerOrigin.dragged = true;
      }, { signal: listeners.signal });
      renderer.domElement.addEventListener('pointermove', event => {
        if (pointerOrigin && activePointers.has(event.pointerId) && (activePointers.size > 1 || Math.hypot(event.clientX - pointerOrigin.x, event.clientY - pointerOrigin.y) > 6)) {
          pointerOrigin.dragged = true; userOrbit = true;
        }
      }, { signal: listeners.signal });
      renderer.domElement.addEventListener('wheel', () => { userOrbit = true; }, { signal: listeners.signal });
      renderer.domElement.addEventListener('pointerup', onPointerUp, { signal: listeners.signal });
      renderer.domElement.addEventListener('pointercancel', event => { activePointers.delete(event.pointerId); pointerOrigin = null; }, { signal: listeners.signal });
      renderer.domElement.addEventListener('keydown', onCameraKey, { capture: true, signal: listeners.signal });
      document.querySelectorAll('[data-camera-mode]').forEach(button => button.addEventListener('click', () => setNavigationMode(button.dataset.cameraMode), { signal: listeners.signal }));
      document.querySelector('[data-camera-action="reset"]')?.addEventListener('click', () => setView('home'), { signal: listeners.signal });
      renderer.domElement.addEventListener('webglcontextlost', event => { event.preventDefault(); lost = true; onError('画面暂时休息了，刷新一下就能回到小屋。'); }, { signal: listeners.signal });
      renderer.domElement.addEventListener('webglcontextrestored', () => { lost = false; container.querySelector('.scene-render-error')?.remove(); render(performance.now()); onReady(); }, { signal: listeners.signal });
      window.addEventListener('resize', resize, { signal: listeners.signal });
      render(performance.now()); onReady(); return true;
    } catch (error) {
      renderer?.dispose(); onError('这个浏览器暂时无法打开立体小屋，请使用支持 WebGL 的浏览器。');
      return false;
    }
  }
  function destroy() {
    if (disposed) return;
    if (camera && controls) room3dSavedCamera = { view, position: camera.position.toArray(), target: controls.target.toArray(), extent: camera.top - camera.bottom, zoom: camera.zoom, userOrbit, navigationMode, aspect: currentAspect };
    disposed = true; mounted = false; listeners.abort(); controls?.dispose();
    const geometries = new Set(), materials = new Set(), textures = new Set();
    scene?.traverse(object => {
      if (object.geometry) geometries.add(object.geometry);
      const items = Array.isArray(object.material) ? object.material : object.material ? [object.material] : [];
      items.forEach(material => { materials.add(material); Object.values(material).forEach(value => { if (value?.isTexture) textures.add(value); }); });
    });
    textures.forEach(texture => texture.dispose()); geometries.forEach(geometry => geometry.dispose()); materials.forEach(material => material.dispose()); renderer?.dispose(); renderer?.forceContextLoss(); renderer?.domElement.remove();
  }
  function screenDirection(dx, dy) {
    if (!camera || !controls) return { x: dx, y: dy };
    const forward = controls.target.clone().sub(camera.position); forward.y = 0;
    // At the exact overhead vantage, the tiny Z offset defines screen north.
    if (forward.lengthSq() < .0001) forward.set(0, 0, -1); else forward.normalize();
    const right = new THREE.Vector3().crossVectors(forward, new THREE.Vector3(0, 1, 0)).normalize();
    const direction = right.multiplyScalar(dx).addScaledVector(forward, -dy);
    return { x: direction.x, y: direction.z };
  }
  return { mount, destroy, resize, render, setPlayer, setNearby, setDestination, setView, screenDirection, getView: () => view,
    getDiagnostics: () => ({ view, mounted, contextLost: lost, camera: camera?.position.toArray(), target: controls?.target.toArray(), calls: renderer?.info.render.calls, triangles: renderer?.info.render.triangles,
      visibleWalls: model?.walls ? Object.fromEntries(Object.entries(model.walls).map(([key, wall]) => [key, wall.visible])) : {} }) };
}

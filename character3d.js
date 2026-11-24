import * as THREE from 'three';
import { normalizeAvatar, avatarPalette, avatarFeatures } from './avatar.js';

// Parts keep the same walking pivots as the original paper character.
export function createCharacter3D(input) {
  const avatar = normalizeAvatar(input), palette = avatarPalette(avatar), feature = avatarFeatures(avatar);
  const player = new THREE.Group(); player.name = 'player';
  player.userData.player = true; player.userData.avatar = avatar;
  const materials = {
    skin: new THREE.MeshStandardMaterial({ color: palette.skinTone, roughness: 1 }),
    hair: new THREE.MeshStandardMaterial({ color: palette.hairColor, roughness: 1 }),
    sweater: new THREE.MeshStandardMaterial({ color: palette.shirtColor, roughness: 1 }),
    stripe: new THREE.MeshStandardMaterial({ color: '#eae6c9', roughness: 1 }),
    pants: new THREE.MeshStandardMaterial({ color: '#7c897d', roughness: 1 }),
    shoes: new THREE.MeshStandardMaterial({ color: '#655b4b', roughness: 1 }),
    face: new THREE.MeshBasicMaterial({ color: '#493d35' }),
    mouth: new THREE.MeshBasicMaterial({ color: '#8f594b' }),
    cheeks: new THREE.MeshBasicMaterial({ color: '#d48f79', transparent: true, opacity: .48 }),
  };
  const ball = (name, material, x, y, z, scale, parent = player) => {
    const mesh = new THREE.Mesh(new THREE.SphereGeometry(1, 16, 12), material);
    mesh.name = name; mesh.position.set(x, y, z); mesh.scale.set(...scale); mesh.castShadow = true;
    parent.add(mesh); return mesh;
  };
  const box = (width, height, depth, material, x, y, z, parent = player) => {
    const mesh = new THREE.Mesh(new THREE.BoxGeometry(width, height, depth), material);
    mesh.position.set(x, y, z); mesh.castShadow = true; parent.add(mesh); return mesh;
  };
  const stroke = (name, points, radius, material, parent) => {
    const curve = new THREE.CatmullRomCurve3(points.map(point => new THREE.Vector3(...point)));
    const mesh = new THREE.Mesh(new THREE.TubeGeometry(curve, 12, radius, 5, false), material);
    mesh.name = name; parent.add(mesh); return mesh;
  };
  const leftLeg = new THREE.Group(), rightLeg = new THREE.Group();
  leftLeg.name = 'player-left-leg'; rightLeg.name = 'player-right-leg';
  leftLeg.position.set(-4.6, 13, 0); rightLeg.position.set(4.6, 13, 0);
  player.add(leftLeg, rightLeg);
  box(6.7, 10, 7, materials.pants, 0, -4.5, 0, leftLeg);
  box(6.7, 10, 7, materials.pants, 0, -4.5, 0, rightLeg);
  ball('left-shoe', materials.shoes, 0, -10.5, 2.5, [4.5, 2.34, 6.75], leftLeg);
  ball('right-shoe', materials.shoes, 0, -10.5, 2.5, [4.5, 2.34, 6.75], rightLeg);
  const body = new THREE.Group(); body.name = 'player-body'; player.add(body);
  ball('player-shirt', materials.sweater, 0, 22, 0, [10.45, 11.88, 7.26], body);
  for (const y of [17, 22, 27]) {
    const stripe = new THREE.Mesh(new THREE.TorusGeometry(8.7, .9, 4, 22), materials.stripe);
    stripe.rotation.x = Math.PI / 2; stripe.scale.set(1, .72, 1); stripe.position.set(0, y, .15); body.add(stripe);
  }
  const leftArm = ball('player-left-arm', materials.sweater, -11.1, 22, 0, [3.4, 7, 3.8], body);
  const rightArm = ball('player-right-arm', materials.sweater, 11.1, 22, 0, [3.4, 7, 3.8], body);
  ball('left-hand', materials.skin, -11.3, 15, 0, [2.55, 2.76, 2.7], body);
  ball('right-hand', materials.skin, 11.3, 15, 0, [2.55, 2.76, 2.7], body);
  ball('neck', materials.skin, 0, 33, 0, [3.4, 4.42, 3.4], body);

  const hair = new THREE.Group(); hair.name = `hair-${avatar.hairStyle}`; body.add(hair);
  ball('hair-crown', materials.hair, 0, 45, -1.4, [feature.faceWidth + 2.3, 13.35, 11.1], hair);
  if (avatar.hairStyle !== 'short') {
    const long = avatar.hairStyle === 'long';
    ball('hair-back', materials.hair, 0, long ? 35 : 40, -3.6,
      [feature.faceWidth + 2, long ? 20 : 13.5, 8.3], hair);
    for (const side of [-1, 1]) ball(`hair-side-${side}`, materials.hair,
      side * (feature.faceWidth + .7), long ? 35 : 39.8, 2.5,
      [2.65, long ? 16.7 : 9.8, 4.3], hair);
  }
  ball('player-face', materials.skin, 0, 42, 4.5, [feature.faceWidth, feature.faceHeight, 7.3], body);
  for (const side of [-1, 1]) ball(`ear-${side}`, materials.skin,
    side * feature.faceWidth, 42, 2, [1.45, 2.4, 1.95], body);
  [-8, -4, .5, 5.5, 9].forEach((x, i) => ball(`hair-fringe-${i}`, materials.hair,
    x * feature.faceWidth / 10.8, 51 - (i % 2) * 1.4, 9,
    [4.05, avatar.hairStyle === 'short' ? 4.9 : 4.2, 3.2], hair));

  for (const [label, side] of [['left', -1], ['right', 1]]) {
    const eye = new THREE.Group(); eye.name = `eye-${label}`;
    eye.position.set(side * feature.eyeDistance, 43, 11.65); body.add(eye);
    if (avatar.eyeShape === 'smile') {
      const r = feature.eyeRadius;
      stroke('eye-smile', [[-r, 0, 0], [0, r * .55, .07], [r, 0, 0]], .25, materials.face, eye);
    } else {
      const almond = avatar.eyeShape === 'almond';
      ball(`eye-${avatar.eyeShape}`, materials.face, 0, 0, 0,
        [feature.eyeRadius * (almond ? 1.3 : .8), feature.eyeRadius * (almond ? .65 : 1.15), .36], eye);
      ball('eye-light', materials.stripe, -.2, .35, .32, [.18, .21, .08], eye);
    }
    const brow = stroke(`brow-${label}`, [[-1.7, 0, 0], [0, .3, .05], [1.7, 0, 0]], .24, materials.hair, body);
    brow.position.set(side * feature.eyeDistance, 46.2, 11.15);
    brow.rotation.z = side * feature.browTilt;
  }
  ball('player-nose', materials.skin, 0, 40.6, 11.8,
    [.85 * feature.noseScale, 1.1 * feature.noseScale, 1.25 * feature.noseScale], body);
  for (const side of [-1, 1]) ball(`cheek-${side}`, materials.cheeks,
    side * 6.2, 39.6, 11.1, [2.05, .9, .15], body);
  const mouth = new THREE.Group(); mouth.name = `mouth-${avatar.mouthStyle}`;
  mouth.position.set(0, 37.7, 11.25); body.add(mouth);
  const half = feature.mouthWidth / 2;
  if (avatar.mouthStyle === 'open') {
    ball('mouth-opening', materials.mouth, 0, 0, 0, [half, 1.55, .26], mouth);
    ball('mouth-teeth', materials.stripe, 0, .72, .22, [half * .7, .35, .12], mouth);
  } else {
    stroke('mouth-line', [[-half, 0, 0], [0, avatar.mouthStyle === 'smile' ? -1 : -.05, .1], [half, 0, 0]], .23, materials.mouth, mouth);
  }
  const shadow = new THREE.Mesh(new THREE.CircleGeometry(16, 28), new THREE.MeshBasicMaterial({ color: '#625c43', transparent: true, opacity: .13, depthWrite: false }));
  shadow.rotation.x = -Math.PI / 2; shadow.scale.y = .65; shadow.position.y = .7; player.add(shadow);
  player.userData.parts = { leftLeg, rightLeg, body, leftArm, rightArm };
  return player;
}

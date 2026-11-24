import test from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from 'three';
import { DEFAULT_AVATAR, AVATAR_OPTIONS, normalizeAvatar } from './avatar.js';
import { createInitialState, normalizeState, reduceGame } from './game.js';
import { renderPlayerPortrait, renderCharacterPreview, renderPlayer } from './character.js';
import { createCharacter3D } from './character3d.js';

function part(model, name) { const found=model.getObjectByName(name);assert.ok(found,name);return found; }
function bounds(model) { model.updateMatrixWorld(true);return new THREE.Box3().setFromObject(model); }

test('avatar normalization bounds sliders, validates choices and keeps Unicode names intact',()=>{
  for(const invalid of [null, [], false, 'name', 3])assert.deepEqual(normalizeAvatar(invalid),DEFAULT_AVATAR);
  const avatar=normalizeAvatar({name:' \u0000阿蓝 '+ '🐱'.repeat(30),hairStyle:'script',skinTone:'<red>',eyeSize:Infinity,eyeSpacing:-20,browAngle:150,noseSize:'90',mouthWidth:12.8});
  assert.equal(Array.from(avatar.name).length,20);
  assert.ok(!avatar.name.includes('\u0000'));
  assert.equal(avatar.hairStyle,DEFAULT_AVATAR.hairStyle);
  assert.equal(avatar.skinTone,DEFAULT_AVATAR.skinTone);
  assert.equal(avatar.eyeSize,50);assert.equal(avatar.eyeSpacing,0);
  assert.equal(avatar.browAngle,100);assert.equal(avatar.noseSize,50);assert.equal(avatar.mouthWidth,13);
  assert.notEqual(normalizeAvatar(),DEFAULT_AVATAR,'default results can be edited independently');
  for(const [key,options] of Object.entries(AVATAR_OPTIONS))for(const option of options)assert.equal(normalizeAvatar({[key]:option.id})[key],option.id);
});

test('save character persists through unrelated gameplay and does not overwrite memories',()=>{
  const state=createInitialState();assert.equal(state.character,null);
  state.memories.push({id:'mine',title:'A day',description:'Keep this.',day:1,kind:'home',theme:'home'});
  const draft={...DEFAULT_AVATAR,name:'小禾',hairStyle:'long',eyeShape:'almond',eyeSize:79,shirtColor:'rose'};
  const result=reduceGame(state,{type:'SAVE_CHARACTER',character:draft});
  assert.equal(result.success,true);assert.deepEqual(result.state.character,draft);
  assert.equal(state.character,null,'saving does not mutate input state');
  const next=reduceGame(result.state,{type:'NEXT_DAY'}).state;
  assert.deepEqual(next.character,draft);
  const restored=normalizeState(JSON.parse(JSON.stringify(next)));
  assert.deepEqual(restored.character,draft);assert.equal(restored.memories[0].id,'mine');
  assert.equal(normalizeState({character:'bad'}).character,null);
  assert.equal(reduceGame(state,{type:'SAVE_CHARACTER',character:null}).success,false);
  assert.deepEqual(normalizeState({character:{hairStyle:'bad'}}).character,DEFAULT_AVATAR);
});

test('portrait and large preview show choices and escape player text',()=>{
  const dangerous={...DEFAULT_AVATAR,name:'<script>&"x',hairStyle:'long',faceShape:'round'};
  for(const render of [renderPlayerPortrait,renderCharacterPreview]){
    const svg=render(dangerous);
    assert.ok(!svg.includes('<script>'));
    assert.ok(svg.includes('&lt;script&gt;&amp;&quot;x'));
    assert.ok(svg.includes('data-hair="long"'));
    assert.ok(svg.includes('data-face="round"'));
    assert.ok(svg.includes('<title>'));
    assert.ok(!svg.includes('NaN'));
    assert.notEqual(svg,render(DEFAULT_AVATAR));
  }
  assert.ok(renderPlayer().includes('id="player"'),'legacy SVG remains available');
});

test('hair, face and outfit choices change actual room geometry and materials',()=>{
  const short=createCharacter3D(DEFAULT_AVATAR);
  const bob=createCharacter3D({...DEFAULT_AVATAR,hairStyle:'bob'});
  const long=createCharacter3D({...DEFAULT_AVATAR,hairStyle:'long',faceShape:'slim',skinTone:'deep',hairColor:'black',shirtColor:'blue'});
  const shortHair=bounds(part(short,'hair-short')),bobHair=bounds(part(bob,'hair-bob')),longHair=bounds(part(long,'hair-long'));
  assert.ok(longHair.min.y<bobHair.min.y&&bobHair.min.y<shortHair.min.y,'each haircut has a different visible length');
  const round=createCharacter3D({...DEFAULT_AVATAR,faceShape:'round'});
  assert.ok(part(round,'player-face').scale.x>part(long,'player-face').scale.x);
  assert.ok(part(round,'player-face').scale.y<part(long,'player-face').scale.y);
  assert.equal(part(long,'player-face').material.color.getHexString(),'855d46');
  assert.equal(part(long,'hair-crown').material.color.getHexString(),'383634');
  assert.equal(part(long,'player-shirt').material.color.getHexString(),'839da7');
  assert.ok(long.userData.parts.leftLeg&&long.userData.parts.rightArm,'walking pivots remain available');
});

test('facial sliders and styles alter eyes, eyebrows, nose and mouth meshes',()=>{
  const narrow=createCharacter3D({...DEFAULT_AVATAR,eyeSpacing:0,eyeSize:0,browAngle:0,noseSize:0,mouthWidth:0});
  const wide=createCharacter3D({...DEFAULT_AVATAR,eyeSpacing:100,eyeSize:100,browAngle:100,noseSize:100,mouthWidth:100});
  assert.ok(part(wide,'eye-right').position.x>part(narrow,'eye-right').position.x);
  assert.ok(part(wide,'eye-round').scale.y>part(narrow,'eye-round').scale.y);
  assert.ok(part(wide,'brow-right').rotation.z>part(narrow,'brow-right').rotation.z);
  assert.ok(part(wide,'player-nose').scale.z>part(narrow,'player-nose').scale.z);
  assert.ok(bounds(part(wide,'mouth-smile')).getSize(new THREE.Vector3()).x>bounds(part(narrow,'mouth-smile')).getSize(new THREE.Vector3()).x);
  for(const eyeShape of ['smile','almond'])assert.ok(createCharacter3D({...DEFAULT_AVATAR,eyeShape}).getObjectByName(`eye-${eyeShape}`));
  for(const mouthStyle of ['neutral','open'])assert.ok(createCharacter3D({...DEFAULT_AVATAR,mouthStyle}).getObjectByName(`mouth-${mouthStyle}`));
  for(const model of [narrow,wide])model.traverse(object=>{
    assert.ok(object.position.toArray().every(Number.isFinite));
    assert.ok(object.scale.toArray().every(Number.isFinite));
  });
});

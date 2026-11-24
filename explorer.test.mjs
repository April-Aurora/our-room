import test from 'node:test';
import assert from 'node:assert/strict';
import { HOTSPOTS, OBSTACLES, PLAYER_RADIUS, isWalkable, findPath, moveWithCollision, nearestHotspot } from './explorer.js';

const spawn = {x:905,y:430};
function verifyRoute(start,route) {
  let previous=start;
  for(const point of route){
    const steps=Math.max(1,Math.ceil(Math.hypot(point.x-previous.x,point.y-previous.y)/2));
    for(let i=0;i<=steps;i++)assert.ok(isWalkable(previous.x+(point.x-previous.x)*i/steps,previous.y+(point.y-previous.y)*i/steps),'route segment stays on walkable floor');
    previous=point;
  }
}

test('all furniture interaction points can be reached from the main-room spawn',()=>{
  assert.ok(isWalkable(spawn.x,spawn.y));
  for(const hotspot of Object.values(HOTSPOTS)){
    assert.ok(isWalkable(hotspot.x,hotspot.y),`${hotspot.id} has a usable standing position`);
    const path=findPath(spawn,hotspot);
    assert.ok(path.length,`${hotspot.id} has a route`);
    assert.deepEqual(path.at(-1),{x:hotspot.x,y:hotspot.y});
    verifyRoute(spawn,path);
  }
});

test('all 169 hotspot pairs retain collision-safe routes in both directions',()=>{
  const hotspots=Object.values(HOTSPOTS);
  let checked=0;
  for(const start of hotspots)for(const target of hotspots){
    const route=findPath(start,target);
    if(start.id===target.id){
      // Already standing at a destination is valid with or without a route.
      assert.ok(isWalkable(start.x,start.y));
    }else{
      assert.ok(route.length,`${start.id} reaches ${target.id}`);
      assert.deepEqual(route.at(-1),{x:target.x,y:target.y});
      verifyRoute(start,route);
    }
    checked++;
  }
  assert.equal(checked,169);
});

test('balcony, bathroom and toilet use separate exterior doorways',()=>{
  const points=[{x:176,y:244},{x:135,y:350},{x:294,y:330},{x:236,y:400},{x:230,y:560},{x:117,y:395},{x:120,y:580}];
  for(const point of points){const route=findPath(spawn,point);assert.ok(route.length);assert.deepEqual(route.at(-1),point);verifyRoute(spawn,route);}
  assert.equal(isWalkable(292,430),false,'main dividing wall stays solid between doors');
  for(let y=406;y<=634;y+=2)assert.equal(isWalkable(166,y),false,'toilet and bathroom have a continuous shared wall');
  assert.equal(isWalkable(291,550),false,'the annotated former bathroom opening is a solid wall');
  assert.equal(isWalkable(236,400),true,'bathroom entrance faces the balcony');
  const toilet={x:120,y:580},bathroom={x:230,y:560};
  const detour=findPath(toilet,bathroom);
  assert.ok(detour.length,'both rooms remain reachable through their own entrances');
  assert.ok(detour.some(point=>point.y<400),'route leaves through the balcony, never crosses the shared wall');
  assert.ok(detour.every(point=>point.x<285),'both wet rooms are reached from the balcony without crossing the solid partition');
  verifyRoute(toilet,detour);
});

test('bookshelf and balcony share a continuous wall with the balcony entrance north of it',()=>{
  for(let y=355;y<=641;y+=2)assert.equal(isWalkable(291,y),false,'shared bookshelf wall has no middle opening');
  const balcony={x:176,y:270},shelf=HOTSPOTS.bookshelf;
  const route=findPath(balcony,shelf);
  assert.ok(route.length);
  let crossing=null,previous=balcony;
  for(const point of route){if(previous.x<=291&&point.x>=291){const t=(291-previous.x)/(point.x-previous.x);crossing=previous.y+(point.y-previous.y)*t;}previous=point;}
  assert.ok(crossing!==null&&crossing<350,'route crosses the wall at the separate north entrance');
  verifyRoute(balcony,route);
});

test('corrected balcony objects leave floor between laundry, sink and vertical flower stand',()=>{
  const stand=OBSTACLES.find(rect=>rect.id==='balcony-stand');
  const sink=OBSTACLES.find(rect=>rect.id==='sink');
  const washer=OBSTACLES.find(rect=>rect.id==='washer');
  assert.ok(stand.width<stand.height,'flower stand footprint follows the left wall vertically');
  assert.ok(sink.x>washer.x+washer.width+30,'sink remains beside the washer in its own north-wall area');
  assert.ok(stand.y-(washer.y+washer.height)>80,'moved washer leaves more floor before the flower stand');
  assert.ok(isWalkable(176,270),'floor between laundry and sink remains usable');
  assert.ok(isWalkable(HOTSPOTS.plants.x,HOTSPOTS.plants.y));
  assert.ok(HOTSPOTS.puzzle.y>610,'puzzle interaction is at the south wall behind the sofa');
});

test('the doubled balcony doorway allows crossings across its full clear width',()=>{
  const washer=OBSTACLES.find(rect=>rect.id==='washer');
  assert.equal(isWalkable(washer.x+washer.width/2,washer.y+washer.height/2),false,'moved washer remains solid');
  assert.ok(isWalkable(110,260),'old washer position is now usable floor');
  for(const y of [275,305,340]){
    const start={x:325,y},target={x:260,y};
    assert.ok(isWalkable(291,y),'widened aperture is passable at this depth');
    const route=findPath(start,target);assert.deepEqual(route.at(-1),target);verifyRoute(start,route);
  }
  assert.equal(isWalkable(240,259),false,'the open door leaf has a matching collision barrier');
  assert.equal(isWalkable(291,230),false,'shortened window wall remains solid');
});

test('furniture centres and the outside of the apartment cannot be walked through',()=>{
  for(const rect of OBSTACLES)assert.equal(isWalkable(rect.x+rect.width/2,rect.y+rect.height/2),false,rect.id);
  for(const point of [{x:10,y:200},{x:1100,y:400},{x:500,y:700},{x:600,y:125},{x:-100,y:-100},{x:-Infinity,y:430},{x:905,y:Infinity},{x:NaN,y:430}])assert.equal(isWalkable(point.x,point.y),false);
});

test('filled north floor is usable while the moved desk, shallow shoe cabinet and railing block movement',()=>{
  for(const point of [{x:980,y:170},{x:536,y:232},{x:358,y:232},{x:176,y:210}]){
    assert.ok(isWalkable(point.x,point.y));
    const route=findPath(spawn,point);assert.deepEqual(route.at(-1),point);verifyRoute(spawn,route);
  }
  assert.equal(isWalkable(520,178),false,'desk tabletop is solid at the new north position');
  const shoe=OBSTACLES.find(rect=>rect.id==='shoe-cabinet');assert.equal(shoe.width,36);
  const end=moveWithCollision({x:176,y:210},-500,0);assert.ok(end.x>=71,'balcony railing boundary cannot be crossed');
});

test('long movement deltas cannot tunnel through the bed or outside walls',()=>{
  const left=moveWithCollision({x:905,y:430},-1000,0);
  assert.ok(left.x>=855+PLAYER_RADIUS);
  assert.ok(isWalkable(left.x,left.y));
  const right=moveWithCollision(spawn,10000,0);
  assert.ok(right.x<=1097-PLAYER_RADIUS);
  assert.ok(isWalkable(right.x,right.y));
});

test('walking slides alongside furniture and paths turn around the bed',()=>{
  const before={x:864,y:450};
  const after=moveWithCollision(before,-30,30);
  assert.ok(after.y>before.y);
  assert.ok(after.x>=861);
  const route=findPath(spawn,HOTSPOTS.switch);
  assert.ok(route.some(point=>point.y<360),'route goes above the bed instead of cutting through it');
  verifyRoute(spawn,route);
});

test('blocked destinations snap to real floor and invalid targets fail safely',()=>{
  const route=findPath(spawn,{x:750,y:500});
  assert.ok(route.length);
  assert.ok(isWalkable(route.at(-1).x,route.at(-1).y));
  assert.notDeepEqual(route.at(-1),{x:750,y:500});
  assert.deepEqual(findPath(spawn,{x:NaN,y:0}),[]);
  assert.deepEqual(findPath(spawn,{x:Infinity,y:0}),[]);
  assert.deepEqual(findPath({x:-Infinity,y:430},spawn),[]);
  assert.deepEqual(findPath(null,spawn),[]);
});

test('nearby interactions select the closest object and empty floor has no prompt',()=>{
  assert.equal(nearestHotspot(HOTSPOTS.fridge).id,'fridge');
  assert.equal(nearestHotspot(HOTSPOTS.switch).id,'switch');
  assert.equal(nearestHotspot({x:920,y:485}),null);
});

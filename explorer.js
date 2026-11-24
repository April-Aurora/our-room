import { createRoom3D } from './scene3d.js';

// Navigation keeps the floor-plan coordinates: x is horizontal and y maps to
// the 3D world's z axis. Collision bounds describe furniture feet.
export const PLAYER_RADIUS = 6;
export const GRID_STEP = 6;
export const WORLD = Object.freeze({ x: 25, y: 75, width: 1115, height: 610 });
export const WALK_REGIONS = [
  { x: 304, y: 145, width: 793, height: 493 },
  { x: 65, y: 145, width: 212, height: 243 },
  { x: 268, y: 255, width: 46, height: 100 },
  { x: 65, y: 406, width: 212, height: 228 },
  { x: 208, y: 378, width: 56, height: 40 },
  { x: 90, y: 378, width: 55, height: 40 },
];
export const OBSTACLES = [
  { id: 'bookshelf-balcony-wall', x: 285.5, y: 355, width: 11, height: 286.5 },
  { id: 'computer-window', x: 285.5, y: 135, width: 11, height: 120 },
  { id: 'balcony-door-open', x: 193.5, y: 257, width: 92, height: 4 },
  { id: 'balcony-door-north-jamb', x: 284.5, y: 255, width: 13, height: 4 },
  { id: 'balcony-door-south-jamb', x: 284.5, y: 351, width: 13, height: 4 },
  { id: 'bathroom-door-open', x: 259, y: 402, width: 4, height: 52 },
  { id: 'toilet-door-open', x: 83, y: 402, width: 8, height: 52 },
  { id: 'toilet-door-jamb-left', x: 90, y: 394, width: 3, height: 12 },
  { id: 'toilet-door-jamb-right', x: 142, y: 394, width: 3, height: 12 },
  { id: 'bathroom-door-jamb-left', x: 208, y: 394, width: 3, height: 12 },
  { id: 'bathroom-door-jamb-right', x: 261, y: 394, width: 3, height: 12 },
  { id: 'desk', x: 323.5, y: 149.5, width: 391, height: 57 },
  { id: 'desk-left-chair', x: 393, y: 233, width: 42, height: 37.5 },
  { id: 'desk-right-chair', x: 608, y: 233, width: 42, height: 37.5 },
  { id: 'fridge', x: 739.5, y: 139.5, width: 81, height: 72 },
  { id: 'shelf', x: 844, y: 141.5, width: 90, height: 65 },
  { id: 'shoe-cabinet', x: 1064, y: 270, width: 36, height: 82 },
  { id: 'bed', x: 650, y: 366, width: 205, height: 267 },
  { id: 'sofa', x: 296.5, y: 520.5, width: 187, height: 121 },
  { id: 'coffee-table', x: 327, y: 399.5, width: 132, height: 77 },
  { id: 'bookshelf', x: 296.5, y: 480.5, width: 35, height: 40 },
  { id: 'nightstand', x: 565, y: 506, width: 65, height: 86 },
  { id: 'projector', x: 574, y: 448, width: 42, height: 43 },
  { id: 'lamp', x: 573, y: 599, width: 34, height: 34 },
  { id: 'wardrobe', x: 919, y: 529, width: 178, height: 109 },
  { id: 'storage', x: 855, y: 533, width: 64, height: 76 },
  { id: 'balcony-stand', x: 78, y: 320, width: 37, height: 65 },
  { id: 'washer', x: 73.5, y: 141, width: 69, height: 81 },
  { id: 'sink', x: 187.5, y: 137.5, width: 75, height: 55 },
  { id: 'toilet-divider', x: 161, y: 406, width: 10, height: 235.5 },
  { id: 'shower', x: 196, y: 432, width: 65, height: 111 },
  { id: 'toilet', x: 92, y: 447, width: 41, height: 70 },
];

export const HOTSPOTS = {
  plants: { id: 'plants', name: '给小花浇浇水', x: 135, y: 350, radius: 40 },
  balcony: { id: 'balcony', name: '在阳台吹吹风', x: 176, y: 270, radius: 35 },
  desk: { id: 'desk', name: '坐下来写一点今天', x: 536, y: 232, radius: 44 },
  cooking: { id: 'cooking', name: '今天做点好吃的', x: 358, y: 232, radius: 36 },
  vase: { id: 'vase', name: '看看桌角的花', x: 501, y: 232, radius: 34 },
  fridge: { id: 'fridge', name: '看看冰箱上的回忆', x: 780, y: 240, radius: 34 },
  tickets: { id: 'tickets', name: '打开旅行纪念票盒', x: 1044, y: 359, radius: 37 },
  bookshelf: { id: 'bookshelf', name: '翻翻书架里的故事', x: 355, y: 502, radius: 31 },
  puzzle: { id: 'puzzle', name: '看看沙发墙上的拼图', x: 500, y: 624, radius: 34 },
  plush: { id: 'plush', name: '看看沙发上的小家伙', x: 500, y: 570, radius: 32 },
  bed: { id: 'bed', name: '收好今天，睡个好觉', x: 877, y: 470, radius: 38 },
  switch: { id: 'switch', name: '插上卡带，一起玩吧', x: 640, y: 520, radius: 31 },
  door: { id: 'door', name: '出门走走', x: 1034, y: 415, radius: 43 },
};

const inRect = (x, y, r) => x >= r.x && y >= r.y && x <= r.x + r.width && y <= r.y + r.height;
export function isWalkable(x, y, radius = PLAYER_RADIUS) {
  if (!Number.isFinite(x) || !Number.isFinite(y)) return false;
  const samples = [[x,y],[x-radius,y],[x+radius,y],[x,y-radius],[x,y+radius]];
  if (samples.some(([px,py])=>!WALK_REGIONS.some(region=>inRect(px,py,region)))) return false;
  return !OBSTACLES.some(rect=>x+radius>rect.x && x-radius<rect.x+rect.width && y+radius>rect.y && y-radius<rect.y+rect.height);
}

export function moveWithCollision(position, dx, dy) {
  const result = { x: position.x, y: position.y };
  // Subdivide even unusually long deltas so a low frame rate cannot tunnel
  // through the furniture or the narrow doorway walls.
  const steps = Math.max(1, Math.ceil(Math.hypot(dx,dy) / 3));
  for (let i=0;i<steps;i++) {
    if (isWalkable(result.x + dx/steps,result.y)) result.x += dx/steps;
    if (isWalkable(result.x,result.y + dy/steps)) result.y += dy/steps;
  }
  return result;
}

const GRID_ORIGIN = {x:64,y:142};
const GRID_COLS = 173;
const GRID_ROWS = 84;
let navGrid;
function grid() {
  if (navGrid) return navGrid;
  navGrid = new Uint8Array(GRID_COLS*GRID_ROWS);
  for (let row=0;row<GRID_ROWS;row++) for(let col=0;col<GRID_COLS;col++) {
    navGrid[row*GRID_COLS+col] = Number(isWalkable(GRID_ORIGIN.x+col*GRID_STEP,GRID_ORIGIN.y+row*GRID_STEP));
  }
  return navGrid;
}
function pointAt(index) {return {x:GRID_ORIGIN.x+(index%GRID_COLS)*GRID_STEP,y:GRID_ORIGIN.y+Math.floor(index/GRID_COLS)*GRID_STEP};}
function closestCell(point) {
  const cells=grid();let best=-1;let distance=Infinity;
  for(let index=0;index<cells.length;index++)if(cells[index]){const p=pointAt(index);const d=(p.x-point.x)**2+(p.y-point.y)**2;if(d<distance){distance=d;best=index;}}
  return best;
}
function straightWalkable(from,to) {
  // Test the whole swept segment against furniture. Sampling alone can miss
  // the short portion of a diagonal that clips a chair or door-frame corner.
  for(const rect of OBSTACLES){
    let enter=0,leave=1;
    for(const [axis,origin,length] of [['x',rect.x,rect.width],['y',rect.y,rect.height]]){
      const low=origin-PLAYER_RADIUS+1e-7,high=origin+length+PLAYER_RADIUS-1e-7;
      const delta=to[axis]-from[axis];
      if(Math.abs(delta)<1e-9){if(from[axis]<low||from[axis]>high){enter=Infinity;break;}}
      else {const a=(low-from[axis])/delta,b=(high-from[axis])/delta;enter=Math.max(enter,Math.min(a,b));leave=Math.min(leave,Math.max(a,b));}
    }
    if(enter<=leave)return false;
  }
  const steps=Math.max(1,Math.ceil(Math.hypot(to.x-from.x,to.y-from.y)));
  for(let i=1;i<=steps;i++)if(!isWalkable(from.x+(to.x-from.x)*i/steps,from.y+(to.y-from.y)*i/steps))return false;
  return true;
}
export function findPath(start, target) {
  if(!start||!target||![start.x,start.y,target.x,target.y].every(Number.isFinite))return [];
  const cells=grid(),from=closestCell(start),goal=closestCell(target);
  if(from<0||goal<0)return [];
  const previous=new Int32Array(cells.length).fill(-1),queue=new Int32Array(cells.length);
  let head=0,tail=1;queue[0]=from;previous[from]=from;
  while(head<tail&&previous[goal]===-1){
    const current=queue[head++],col=current%GRID_COLS,row=Math.floor(current/GRID_COLS);
    for(const [dx,dy] of [[1,0],[-1,0],[0,1],[0,-1],[1,1],[1,-1],[-1,1],[-1,-1]]){
      const nx=col+dx,ny=row+dy;if(nx<0||ny<0||nx>=GRID_COLS||ny>=GRID_ROWS)continue;
      const next=ny*GRID_COLS+nx;if(!cells[next]||previous[next]!==-1)continue;
      if(dx&&dy&&(!cells[row*GRID_COLS+nx]||!cells[ny*GRID_COLS+col]))continue;
      previous[next]=current;queue[tail++]=next;
    }
  }
  if(previous[goal]===-1)return [];
  const reversed=[];for(let current=goal;current!==from;current=previous[current])reversed.push(pointAt(current));
  reversed.push(pointAt(from));const raw=reversed.reverse();
  // Greedy line-of-sight smoothing preserves all collision checks and avoids
  // the zig-zag movement that comes from following every grid centre.
  const smooth=[];let anchor=start;let index=0;
  while(index<raw.length){let next=index;while(next+1<raw.length&&straightWalkable(anchor,raw[next+1]))next++;smooth.push(raw[next]);anchor=raw[next];index=next+1;}
  if(isWalkable(target.x,target.y)&&straightWalkable(anchor,target))smooth.push({x:target.x,y:target.y});
  return smooth.filter((p,i)=>i||Math.hypot(p.x-start.x,p.y-start.y)>1);
}
export function nearestHotspot(position) {
  let nearest=null,distance=Infinity;
  for(const hotspot of Object.values(HOTSPOTS)){
    const d=Math.hypot(position.x-hotspot.x,position.y-hotspot.y);
    if(d<=hotspot.radius&&d<distance){distance=d;nearest=hotspot;}
  }
  return nearest;
}

let lastPosition={x:905,y:430};
const MOVE_KEYS={ArrowUp:[0,-1],w:[0,-1],W:[0,-1],ArrowDown:[0,1],s:[0,1],S:[0,1],ArrowLeft:[-1,0],a:[-1,0],A:[-1,0],ArrowRight:[1,0],d:[1,0],D:[1,0]};
const PAD_KEYS={up:[0,-1],down:[0,1],left:[-1,0],right:[1,0]};
export function createExplorer({container,state={},onInteract=()=>{},onNearby=()=>{},onMove=()=>{},onViewChange=()=>{},onError=()=>{}}) {
  let room3D=null,frame=0,previousTime=0,position={...lastPosition},path=[],destinationId=null,nearbyId='',keys=new Set(),padDirection=null,padPointer=null,mounted=false,paused=false,moving=false,facing='down';
  const abort=new AbortController();
  const listening={signal:abort.signal};
  const isSuspended=()=>paused||!mounted||Boolean(document.querySelector('dialog[open]'));
  function notifyNearby() {
    const nearby=nearestHotspot(position);const id=nearby?.id||'';
    if(id!==nearbyId){nearbyId=id;container.dataset.nearby=id;room3D?.setNearby(id||null);onNearby(nearby);}
    return nearby;
  }
  function cancelWalking(){keys.clear();padDirection=null;padPointer=null;path=[];destinationId=null;moving=false;document.querySelectorAll('[data-move][data-pressed]').forEach(button=>button.removeAttribute('data-pressed'));room3D?.setDestination(null);}
  function interact() {if(isSuspended())return false;const nearby=notifyNearby();if(nearby){cancelWalking();onInteract(nearby.id);return true;}return false;}
  function walkTo(point) {
    if(isSuspended())return false;
    const route=findPath(position,point);if(!route.length)return false;
    path=route;destinationId=null;keys.clear();room3D?.setDestination(route.at(-1));return true;
  }
  function walkToHotspot(id){const hotspot=HOTSPOTS[id];if(!hotspot||isSuspended())return false;if(Math.hypot(position.x-hotspot.x,position.y-hotspot.y)<12){cancelWalking();onInteract(id);return true;}if(!walkTo(hotspot))return false;destinationId=id;return true;}
  function screenDirection(dx,dy){return room3D?.screenDirection?.(dx,dy)||{x:dx,y:dy};}
  function paint(time=0) {
    container.dataset.playerX=position.x.toFixed(2);container.dataset.playerY=position.y.toFixed(2);container.dataset.playerFacing=facing;container.dataset.playerMoving=String(moving);
    room3D?.setPlayer(position,facing,moving,time);notifyNearby();room3D?.render(time);
  }
  function tick(time) {
    if(!mounted)return;
    const dt=previousTime?Math.min(.04,(time-previousTime)/1000):0;previousTime=time;moving=false;
    if(!isSuspended()){
      let dx=0,dy=0;
      for(const key of keys){const movement=MOVE_KEYS[key];if(movement){dx+=movement[0];dy+=movement[1];}}
      if(padDirection){dx+=padDirection[0];dy+=padDirection[1];}
      if(dx||dy){path=[];destinationId=null;room3D?.setDestination(null);const direction=screenDirection(dx,dy);dx=direction.x;dy=direction.y;const size=Math.hypot(dx,dy)||1;dx=dx/size*126*dt;dy=dy/size*126*dt;}
      else if(path.length){const waypoint=path[0],distance=Math.hypot(waypoint.x-position.x,waypoint.y-position.y),step=126*dt;if(distance<=step+1){dx=waypoint.x-position.x;dy=waypoint.y-position.y;path.shift();}else{dx=(waypoint.x-position.x)/distance*step;dy=(waypoint.y-position.y)/distance*step;}}
      if(dx||dy){const next=moveWithCollision(position,dx,dy);moving=Math.hypot(next.x-position.x,next.y-position.y)>.05;if(moving){facing=Math.abs(dx)>Math.abs(dy)?dx>0?'right':'left':dy>0?'down':'up';position=next;lastPosition={...position};onMove({...position});}else if(path.length){path=[];destinationId=null;}}
      if(!path.length){room3D?.setDestination(null);if(destinationId){const id=destinationId;destinationId=null;if(Math.hypot(position.x-HOTSPOTS[id].x,position.y-HOTSPOTS[id].y)<14){paint(time);onInteract(id);}}}
    }else{keys.clear();padDirection=null;}
    paint(time);frame=requestAnimationFrame(tick);
  }
  function mount() {
    if(mounted)return;
    mounted=true;if(!isWalkable(position.x,position.y))position={x:905,y:430};
    try {
      room3D=createRoom3D({container,state,onFloorClick:walkTo,onHotspotClick:walkToHotspot,onViewChange,onError});
      if(room3D.mount()===false){mounted=false;room3D.destroy?.();room3D=null;return;}
    } catch(error) {
      mounted=false;room3D?.destroy?.();room3D=null;container.dataset.renderError='true';onError(error);return;
    }
    document.addEventListener('keydown',event=>{if(event.target.closest('input,textarea,select,[contenteditable=true]')||isSuspended()||event.ctrlKey||event.metaKey||event.altKey)return;if(MOVE_KEYS[event.key]){event.preventDefault();keys.add(event.key);}else if((event.key==='e'||event.key==='E'||event.key===' ')&&!event.repeat){if(event.key===' '&&event.target.closest('button,[data-hotspot],a[href]'))return;event.preventDefault();interact();}},listening);
    document.addEventListener('keyup',event=>{keys.delete(event.key);},listening);
    window.addEventListener('blur',cancelWalking,listening);
    window.addEventListener('resize',()=>room3D?.resize(),listening);
    document.addEventListener('visibilitychange',()=>{if(document.hidden)cancelWalking();},listening);
    document.addEventListener('pointerdown',event=>{const button=event.target.closest('[data-move]');if(!button||isSuspended())return;const movement=PAD_KEYS[button.dataset.move];if(!movement)return;event.preventDefault();path=[];destinationId=null;padDirection=movement;padPointer=event.pointerId;button.setAttribute('data-pressed','true');button.setPointerCapture?.(event.pointerId);},listening);
    document.addEventListener('click',event=>{const button=event.target.closest('[data-move]');if(!button||event.detail!==0||isSuspended())return;const direction=PAD_KEYS[button.dataset.move];if(!direction)return;const mapped=screenDirection(direction[0],direction[1]);const magnitude=Math.hypot(mapped.x,mapped.y)||1;const target=moveWithCollision(position,mapped.x/magnitude*22,mapped.y/magnitude*22);if(Math.hypot(target.x-position.x,target.y-position.y)>1)walkTo(target);},listening);
    const stopPad=event=>{if(padPointer===event.pointerId){padDirection=null;padPointer=null;document.querySelectorAll('[data-move][data-pressed]').forEach(button=>button.removeAttribute('data-pressed'));}};
    document.addEventListener('pointerup',stopPad,listening);document.addEventListener('pointercancel',stopPad,listening);
    nearbyId='__initial__';paint();frame=requestAnimationFrame(tick);
  }
  return {
    mount,
    destroy(){mounted=false;cancelAnimationFrame(frame);abort.abort();lastPosition={...position};room3D?.destroy();room3D=null;onNearby(null);},
    getPosition:()=>({...position}),walkTo,walkToHotspot,interact,
    pause(){paused=true;cancelWalking();},resume(){paused=false;previousTime=0;},
    resize(){room3D?.resize();},setView(name){return room3D?.setView(name);},getView:()=>room3D?.getView()||'home',
    getDiagnostics:()=>({...room3D?.getDiagnostics?.(),player:{...position,facing,moving},nearby:nearbyId,pathLength:path.length}),
  };
}

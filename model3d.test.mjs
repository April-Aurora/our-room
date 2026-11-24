import test from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from 'three';
import { buildRoomModel } from './model3d.js';

const model=buildRoomModel({});
model.group.updateMatrixWorld(true);
function required(name){const part=model.group.getObjectByName(name);assert.ok(part,`${name} exists`);return part;}
function bounds(part){return new THREE.Box3().setFromObject(part);}
function size(part){return bounds(part).getSize(new THREE.Vector3());}
function centre(part){return bounds(part).getCenter(new THREE.Vector3());}
function descendantOf(part,parent){for(let item=part;item;item=item.parent)if(item===parent)return true;return false;}
function approximately(value,expected,tolerance=.01){assert.ok(Math.abs(value-expected)<=tolerance,`${value} is near ${expected}`);}

test('apartment has one rectangular foundation and four aligned outside edges',()=>{
  const base=bounds(required('base-apartment')),north=bounds(required('north-outer-wall')),south=bounds(required('south-outer-wall'));
  approximately(size(required('base-apartment')).x,1056);approximately(size(required('base-apartment')).z,522);
  approximately(north.min.x,south.min.x);approximately(north.max.x,south.max.x);
  approximately(north.min.z,128.5);approximately(south.max.z,650.5);
  const east=bounds(required('east-outer-wall-north'));
  assert.ok(east.min.z<=north.max.z,'east and north wall volumes overlap at the corner');
  const floorCovers=(x,z)=>model.floors.some(part=>{const b=bounds(part);return x>=b.min.x&&x<=b.max.x&&z>=b.min.z&&z<=b.max.z;});
  for(const x of [70,170,280,300,500,900,1090])for(const z of [145,190,250,390,405,520,637])assert.ok(floorCovers(x,z),`rectangular floor covers ${x},${z}`);
  assert.ok(base.min.x<north.min.x&&base.max.x>north.max.x,'base supports both aligned wall ends');
});

test('bathroom and toilet rear edges close against the full south wall',()=>{
  const back=bounds(required('south-outer-wall')),west=bounds(required('west-outer-wall')),shared=bounds(required('toilet-divider')),east=bounds(required('bookshelf-balcony-wall'));
  assert.ok(back.min.x<west.max.x&&back.max.x>=east.max.x,'rear wall meets the west side and spans both wet rooms');
  approximately(back.max.y,210);approximately(west.max.z,646);
  approximately(shared.max.z,back.min.z);approximately(east.max.z,back.min.z);
});

test('bed headboard and both pillows are south of the quilt, facing the projection wall',()=>{
  const head=required('bed-headboard'),quilt=required('bed-quilt'),bed=required('object-bed');
  const headBox=bounds(head),quiltBox=bounds(quilt);
  assert.ok(headBox.min.z>quiltBox.max.z,'headboard is at the south end of the bed');
  assert.ok(headBox.max.z>=630,'headboard stays beside the south room wall');
  const pillows=bed.children.filter(part=>part.isMesh&&part.geometry.parameters?.width===80&&part.geometry.parameters?.height===15&&part.geometry.parameters?.depth===49);
  assert.equal(pillows.length,2,'both full-size pillows are present');
  for(const pillow of pillows){const b=bounds(pillow);assert.ok(b.min.z>quiltBox.max.z,'pillow is south of the quilt');assert.ok(b.max.z<headBox.min.z,'pillow stays in front of its headboard');}
});

test('sofa back faces south with the seating and coffee table toward north',()=>{
  const backBox=bounds(required('sofa-back'));
  const sofa=required('object-plush');
  const seats=sofa.children.filter(part=>part.isMesh&&part.geometry.parameters?.width===73&&part.geometry.parameters?.depth===87);
  assert.equal(seats.length,2);
  for(const seat of seats)assert.ok(bounds(seat).max.z<backBox.min.z,'seat is north of the backrest');
  assert.ok(bounds(required('coffee-table')).max.z<backBox.min.z,'coffee table remains in front of the north-facing sofa');
  assert.ok(backBox.min.z>600,'backrest is at the south wall end');
});

test('puzzle is mounted above the sofa on the actual south wall',()=>{
  const frame=required('puzzle-frame'),frameBox=bounds(frame),backBox=bounds(required('sofa-back'));
  assert.ok(descendantOf(frame,model.walls.south),'wall visibility includes the frame and its picture');
  assert.ok(frameBox.max.z>=backBox.max.z-1&&frameBox.max.z<644,'frame sits on the wall directly behind the flush sofa');
  assert.ok(frameBox.min.y>backBox.max.y,'entire frame clears the sofa back');
  approximately(centre(frame).x,centre(required('sofa-back')).x,.1);
  assert.ok(frameBox.max.x-frameBox.min.x>140,'the large framed puzzle is retained');
  assert.ok(new THREE.Vector3(0,0,1).applyQuaternion(frame.getWorldQuaternion(new THREE.Quaternion())).z<-.99,'picture faces north into the room');
});

test('four low plant shelves keep even mature foliage below the balcony window',()=>{
  const stand=required('plant-stand');
  const shelves=stand.children.filter(part=>/^plant-tier-[1-4]$/.test(part.name));
  assert.equal(shelves.length,4,'four distinct shelves are present');
  for(const shelf of shelves){const extent=size(shelf),box=bounds(shelf);assert.ok(extent.z>extent.x*1.7,'each shelf runs north/south instead of spanning the balcony');assert.ok(box.max.x<116&&box.min.x>=74,'shelf sits against the left window');assert.ok(box.min.z>=310&&box.max.z<=386,'shelf stays in the lower balcony');}
  assert.equal(new Set(shelves.map(shelf=>centre(shelf).y)).size,4,'the tiers have four different heights');
  const grown=buildRoomModel({growth:4});grown.group.updateMatrixWorld(true);
  const matureStand=bounds(grown.group.getObjectByName('plant-stand'));
  const windowBottom=bounds(grown.group.getObjectByName('plant-window')).min.y;
  assert.ok(matureStand.max.y<windowBottom-5,'fully grown plants and supports leave the entire window clear');
  assert.ok(shelves.every(shelf=>bounds(shelf).max.y<65),'all four shelves are at low cabinet height');
});

test('laundry hangs directly above the washer while the washbasin is separate',()=>{
  const washer=bounds(required('washing-machine')),laundry=bounds(required('laundry-rack')),sink=bounds(required('sink'));
  assert.ok(laundry.min.y>washer.max.y,'shirts and rack are above the appliance');
  assert.ok(laundry.min.x>=washer.min.x&&laundry.max.x<=washer.max.x,'rack shares the washer left/right footprint');
  assert.ok(laundry.min.z>=washer.min.z&&laundry.max.z<=washer.max.z,'rack shares the washer north/south footprint');
  assert.ok(sink.min.x>washer.max.x+30,'basin has its own separate area to the right');
  assert.ok(sink.min.z<washer.max.z&&sink.max.z>washer.min.z,'washer and basin now share the north-wall row');
  const unit=bounds(required('washer-unit')),north=bounds(required('north-outer-wall')),plants=bounds(required('plant-stand'));
  assert.ok(unit.min.z>=north.max.z&&unit.min.z-north.max.z<5,'washer is tucked against the north wall');
  assert.ok(plants.min.z-unit.max.z>80,'washer moves away from the flower stand');
});

test('open balcony edge has a half-height railing and the washbasin has a mirror',()=>{
  const rail=bounds(required('balcony-railing')),west=bounds(required('west-outer-wall'));
  assert.ok(rail.max.y>=100&&rail.max.y<=110,'railing is half the 210-unit wall height');
  assert.ok(rail.max.z<=west.min.z+.1,'full-height side wall starts beyond the railing');
  assert.ok(rail.max.x<68&&rail.min.z<=137,'railing occupies the marked outside edge');
  const mirror=required('basin-mirror-surface'),m=bounds(mirror),sink=bounds(required('sink'));
  assert.ok(m.min.y>sink.max.y,'mirror is above the basin');
  assert.ok(Math.abs(centre(mirror).x-centre(required('sink')).x)<1,'mirror aligns with the washbasin');
  assert.equal(mirror.material.transparent,false,'mirror is opaque, not a glazed window');
  assert.ok(mirror.material.metalness>=.6,'mirror has a reflective surface');
  assert.equal(model.group.getObjectByName('balcony-north'),undefined,'old basin window has been removed');
});

test('the bathroom and toilet have one uninterrupted solid wall between them',()=>{
  const divider=required('toilet-divider'),b=bounds(divider),extent=size(divider);
  assert.ok(divider.isMesh,'divider is a solid mesh instead of separate wall stubs');
  approximately(b.min.x,161);approximately(b.max.x,171);approximately(b.min.z,406);approximately(b.max.z,641.5);
  assert.ok(extent.y>=160,'wall has full interior height');
  assert.ok(divider.geometry.parameters.depth>=228,'wall covers the whole shared edge without an interior doorway');
});

test('the wall between the bookshelf and balcony is one continuous solid part',()=>{
  const wall=required('bookshelf-balcony-wall'),b=bounds(wall),extent=size(wall);
  assert.ok(wall.isMesh,'shared wall is a single mesh');
  approximately(b.min.x,285.5);approximately(b.max.x,296.5);
  approximately(b.min.z,355);approximately(b.max.z,641.5);
  approximately(extent.y,210);
  assert.ok(b.min.y<=0&&b.max.y>=210,'both annotated wall sections are filled from floor to top');
  const shelf=required('object-bookshelf'),shelfBox=bounds(shelf);
  assert.ok(b.min.z<shelfBox.min.z&&b.max.z>shelfBox.max.z,'wall covers the full shared bookshelf edge');
});

test('wall objects and floor retain their own interaction semantics after the 3D rebuild',()=>{
  const ids=new Set(model.interactables.map(part=>part.userData.hotspot));
  for(const id of ['plants','balcony','desk','cooking','vase','fridge','tickets','bookshelf','puzzle','plush','bed','switch','door'])assert.ok(ids.has(id),`${id} is clickable`);
  assert.ok(model.floors.length>=5);
  for(const floor of model.floors)assert.equal(floor.userData.floor,true);
  assert.ok(descendantOf(required('ticket-box'),model.walls.east),'ticket box stays attached to the entrance wall');
});

test('computer partition has a lower solid wall and an upper window beside the balcony door',()=>{
  const window=bounds(required('desk-window-glass')),frame=bounds(required('desk-window'));
  const wall=bounds(required('bookshelf-balcony-wall')),door=bounds(required('balcony-door')),lower=bounds(required('computer-wall-lower'));
  approximately(lower.min.y,0);approximately(lower.max.y,102);approximately(frame.max.y,wall.max.y);
  assert.ok(frame.min.y<=lower.max.y+.1,'upper window frame joins the lower solid wall');
  assert.ok(window.min.y>=108&&window.max.y<=204,'glazing occupies only the upper half');
  assert.ok(window.max.z-window.min.z>100,'window remains a broad upper pane beside the wider doorway');
  approximately(lower.max.z,door.min.z);
  approximately(door.max.z,wall.min.z);
  assert.ok(required('balcony-door-leaf').children.length>0,'door has its own open leaf');
  const lintel=bounds(required('balcony-door-lintel'));
  approximately(lintel.max.y,wall.max.y);
  assert.ok(lintel.min.y>=198,'passage remains beneath the lintel');
  assert.ok(descendantOf(required('desk-window'),required('computer-window-wall')));
  assert.equal(required('desk-window-glass').material.transparent,true);
});

test('balcony doorway doubles its width and parks the open leaf at its north edge',()=>{
  const lintel=bounds(required('balcony-door-lintel')),threshold=bounds(required('balcony-door-threshold'));
  approximately(lintel.min.z,255);approximately(lintel.max.z,355);
  approximately(threshold.max.z-threshold.min.z,92);
  const northJamb=bounds(required('balcony-door-north-jamb')),southJamb=bounds(required('balcony-door-south-jamb'));
  approximately(southJamb.min.z-northJamb.max.z,92);
  const leaf=bounds(required('balcony-door-leaf'));
  approximately(leaf.max.x-leaf.min.x,92);
  assert.ok(leaf.max.z<=northJamb.max.z+3,'open leaf stays against the north edge, outside the walking aperture');
  assert.ok(leaf.min.x>bounds(required('washing-machine')).max.x,'open leaf stays clear of the moved washer');
});

test('sofa and narrow bookshelf touch the continuous partition and each other',()=>{
  const sofa=bounds(required('object-plush')),shelf=bounds(required('object-bookshelf')),wall=bounds(required('bookshelf-balcony-wall'));
  approximately(sofa.min.x,wall.max.x,.1);
  approximately(shelf.min.x,wall.max.x,.1);
  approximately(shelf.max.z,sofa.min.z,.1);
  approximately(sofa.max.z,641.5,.1);
  assert.ok(bounds(required('coffee-table')).max.z<sofa.min.z,'table remains in front of moved seating');
});

test('floor lamp stands behind the bedside table close to the south wall',()=>{
  const lamp=bounds(required('floor-lamp')),bedside=bounds(required('object-switch'));
  assert.ok(centre(required('floor-lamp')).z>bedside.max.z,'lamp base is behind the nightstand');
  assert.ok(lamp.max.z>=638&&lamp.max.z<=644,'shade stays near the south wall');
  assert.ok(lamp.min.x<centre(required('object-switch')).x&&lamp.max.x>centre(required('object-switch')).x);
});

test('the seven-tier bookshelf is one book wide with flat stacks and two cameras above',()=>{
  const shelf=bounds(required('object-bookshelf'));
  assert.ok(shelf.max.z-shelf.min.z<=41,'shelf occupies a single book width');
  const tiers=[];
  for(let level=1;level<=7;level++)tiers.push(bounds(required(`bookshelf-tier-${level}`)));
  for(let level=1;level<=6;level++){
    const stack=required('object-bookshelf').children.filter(part=>part.name.startsWith(`flat-book-${level}-`));
    assert.ok(stack.length===4||stack.length===5,'each lower tier has four or five flat books');
    for(const book of stack){const extent=size(book);assert.ok(extent.y<5&&extent.x>25&&extent.z>25,'books lie flat');}
  }
  for(const name of ['personal-camera','personal-ccd'])assert.ok(bounds(required(name)).max.y>tiers.at(-1).max.y,'cameras sit above the upper shelf');
  assert.ok(centre(required('personal-camera')).z<centre(required('personal-ccd')).z,'two distinct cameras are present');
});

test('shallow shoe cabinet has three pairs per level, closed sides and no front doors',()=>{
  const shoe=required('shoe-cabinet');
  const shelves=shoe.children.filter(part=>/^shoe-shelf-[123]$/.test(part.name));
  assert.equal(shelves.length,3);
  const extent=size(shoe);assert.ok(extent.y<=82);approximately(extent.x,36);approximately(extent.z,82);
  const left=bounds(required('shoe-side-left')),right=bounds(required('shoe-side-right')),back=bounds(required('shoe-cabinet-back'));
  assert.ok(left.max.y>=78&&right.max.y>=78,'both sides are solid full-height panels');
  approximately(left.min.x,bounds(shoe).min.x);approximately(right.max.x,bounds(shoe).max.x);
  for(let level=1;level<=3;level++){
    const pairs=shoe.children.filter(part=>part.name.startsWith(`shoe-pair-${level}-`));
    assert.equal(pairs.length,3,'each shelf holds three side-by-side pairs');
    for(const pair of pairs){const b=bounds(pair);assert.ok(b.min.x>bounds(shoe).min.x&&b.max.x<back.min.x,'single shoe depth stays inside the cabinet');assert.ok(b.min.z>left.max.z&&b.max.z<right.min.z,'shoes remain between the side panels');}
  }
  required('shoe-cabinet-top');
  const frame=bounds(required('ticket-box'));
  assert.ok(frame.min.y>bounds(shoe).max.y,'ticket frame is above the shoe shelves');
  assert.ok(Math.abs(centre(required('ticket-box')).z-centre(shoe).z)<2,'frame and cabinet are vertically aligned');
  const glass=required('ticket-box-glass');assert.equal(glass.material.transparent,true);assert.ok(glass.material.opacity<.2);
  assert.ok(required('ticket-black-frame-left').material.color.getHex()<0x444444,'frame is dark');
  const mapLines=required('world-map-lines').getObjectByProperty('isLine',true);
  assert.ok(mapLines,'world map has continental outlines');
  assert.ok(mapLines.geometry.attributes.position.count>=40,'world map retains several outline segments after static batching');
});

test('double-width wardrobe and bed-side cupboard form a touching cabinet line',()=>{
  const wardrobe=bounds(required('wardrobe-body')),cupboard=bounds(required('bed-side-cupboard-body')),bed=bounds(required('object-bed'));
  approximately(wardrobe.max.x-wardrobe.min.x,178,.01);
  assert.ok(Math.abs(cupboard.min.x-bed.max.x)<3,'cupboard touches bed edge');
  approximately(cupboard.max.x,wardrobe.min.x,.01);
  for(let level=1;level<=5;level++)required(`bed-side-cupboard-front-${level}`);
});

test('the full-length mirror is mounted on the wall opposite the wardrobe',()=>{
  const mirror=bounds(required('wall-mirror')),wardrobe=bounds(required('wardrobe-body'));
  assert.ok(mirror.max.y-mirror.min.y>=175,'mirror is full-length');
  assert.ok(mirror.max.z-mirror.min.z<8,'mirror is flush-mounted');
  assert.ok(mirror.max.z<250&&wardrobe.min.z>520,'mirror faces wardrobe from the opposite wall');
  approximately(centre(required('wall-mirror')).x,centre(required('wardrobe-body')).x,.01);
});

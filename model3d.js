import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { drawWorldMapArt } from './worldmap.js';

function compactRoomStatics(root) {
  const removedGeometries=new Set(),removedMaterials=new Set();
  const drawLeaves=()=>{let count=0;root.traverse(part=>{if(part.isMesh||part.isLine)count++;});return count;};
  const before=drawLeaves();
  function compact(parent) {
    for(const child of [...parent.children])compact(child);
    const meshBuckets=new Map(),lineBuckets=new Map();
    for(const child of parent.children) {
      if(child.name||child.children.length||Object.keys(child.userData).length||!child.visible||Array.isArray(child.material))continue;
      if(child.isMesh) {
        const key=[child.material.uuid,child.castShadow,child.receiveShadow,child.renderOrder].join(':');
        if(!meshBuckets.has(key))meshBuckets.set(key,[]);meshBuckets.get(key).push(child);
      } else if(child.isLine&&!child.material.vertexColors) {
        const material=child.material;
        const key=[material.type,material.color?.getHex(),material.opacity,material.transparent,material.depthTest,material.depthWrite,material.blending,material.linewidth,material.toneMapped,child.renderOrder].join(':');
        if(!lineBuckets.has(key))lineBuckets.set(key,[]);lineBuckets.get(key).push(child);
      }
    }
    for(const siblings of meshBuckets.values()) {
      if(siblings.length<2)continue;
      const prepared=siblings.map(part=>{part.updateMatrix();const geometry=part.geometry.index?part.geometry.toNonIndexed():part.geometry.clone();geometry.applyMatrix4(part.matrix);return geometry;});
      const geometry=mergeGeometries(prepared,false);
      prepared.forEach(part=>part.dispose());
      if(!geometry)continue;
      geometry.computeBoundingBox();geometry.computeBoundingSphere();
      const first=siblings[0],merged=new THREE.Mesh(geometry,first.material);merged.castShadow=first.castShadow;merged.receiveShadow=first.receiveShadow;merged.renderOrder=first.renderOrder;
      for(const child of siblings){removedGeometries.add(child.geometry);removedMaterials.add(child.material);parent.remove(child);}
      parent.add(merged);
    }
    for(const siblings of lineBuckets.values()) {
      if(siblings.length<2)continue;
      const points=[],point=new THREE.Vector3();
      function append(part,index){point.fromBufferAttribute(part.geometry.attributes.position,index).applyMatrix4(part.matrix);points.push(point.x,point.y,point.z);}
      for(const part of siblings){
        part.updateMatrix();const geometry=part.geometry,index=geometry.index,count=index?index.count:geometry.attributes.position.count;
        const at=i=>index?index.getX(i):i;
        if(part.isLineSegments){for(let i=0;i+1<count;i+=2){append(part,at(i));append(part,at(i+1));}}
        else {for(let i=0;i+1<count;i++){append(part,at(i));append(part,at(i+1));}if(part.isLineLoop&&count>2){append(part,at(count-1));append(part,at(0));}}
      }
      if(!points.length)continue;
      const geometry=new THREE.BufferGeometry().setAttribute('position',new THREE.Float32BufferAttribute(points,3));geometry.computeBoundingBox();geometry.computeBoundingSphere();
      const merged=new THREE.LineSegments(geometry,siblings[0].material);merged.renderOrder=siblings[0].renderOrder;
      for(const child of siblings){removedGeometries.add(child.geometry);removedMaterials.add(child.material);parent.remove(child);}
      parent.add(merged);
    }
  }
  compact(root);
  // Rounded boxes share geometry, so release only resources no live part uses.
  const liveGeometries=new Set(),liveMaterials=new Set();
  root.traverse(part=>{if(part.geometry)liveGeometries.add(part.geometry);if(part.material)for(const material of Array.isArray(part.material)?part.material:[part.material])liveMaterials.add(material);});
  for(const geometry of removedGeometries)if(!liveGeometries.has(geometry))geometry.dispose();
  for(const material of removedMaterials)if(!liveMaterials.has(material))material.dispose();
  root.userData.staticBatching={before,after:drawLeaves()};
}

// Geometry follows the supplied plan: X is left/right, Z is north/south.
// Heights are deliberately shallow, like painted paper in an architectural model.
export function buildRoomModel(state = {}) {
  const group = new THREE.Group();
  group.name = 'our-paper-home';
  const interactables = [], floors = [];
  const walls = { north:new THREE.Group(), south:new THREE.Group(), west:new THREE.Group(), east:new THREE.Group() };
  for (const [name,wall] of Object.entries(walls)) {wall.name=`wall-${name}`;group.add(wall);}
  const materials = new Map(), geometries = new Map();
  const palette = {paper:'#f1e6ce',trim:'#bbaa89',wood:'#c8ad87',woodLight:'#ddc9a8',sage:'#9eaf8b',green:'#7e9572',peach:'#d2a18d',fabric:'#e4b9a3',cream:'#f2ead6',ink:'#7e725c',tile:'#d7dfd1',blue:'#a9c3b9'};
  function mat(color, options={}) {
    const key=color+JSON.stringify(options);
    if(!materials.has(key))materials.set(key,new THREE.MeshStandardMaterial({color,roughness:1,metalness:0,flatShading:true,...options}));
    return materials.get(key);
  }
  function box(parent,x,y,z,w,h,d,color,radius=0,name='') {
    const key=[w,h,d,radius].join(',');
    if(!geometries.has(key))geometries.set(key,radius?new RoundedBoxGeometry(w,h,d,2,Math.min(radius,w/3,h/3,d/3)):new THREE.BoxGeometry(w,h,d));
    const mesh=new THREE.Mesh(geometries.get(key),typeof color==='string'?mat(color):color);
    mesh.position.set(x,y,z);mesh.castShadow=true;mesh.receiveShadow=true;if(name)mesh.name=name;parent.add(mesh);return mesh;
  }
  function cylinder(parent,x,y,z,top,bottom,height,color,segments=14,name='') {
    const mesh=new THREE.Mesh(new THREE.CylinderGeometry(top,bottom,height,segments),mat(color));mesh.position.set(x,y,z);mesh.castShadow=true;mesh.receiveShadow=true;if(name)mesh.name=name;parent.add(mesh);return mesh;
  }
  function sphere(parent,x,y,z,rx,ry,rz,color,name='') {
    const mesh=new THREE.Mesh(new THREE.SphereGeometry(1,12,8),mat(color));mesh.position.set(x,y,z);mesh.scale.set(rx,ry,rz);mesh.castShadow=true;if(name)mesh.name=name;parent.add(mesh);return mesh;
  }
  function line(parent,points,color=palette.ink,opacity=.4) {
    const geo=new THREE.BufferGeometry().setFromPoints(points.map(p=>new THREE.Vector3(...p)));
    const mesh=new THREE.Line(geo,new THREE.LineBasicMaterial({color,transparent:true,opacity}));parent.add(mesh);return mesh;
  }
  function outlined(mesh,opacity=.18) {
    const edge=new THREE.LineSegments(new THREE.EdgesGeometry(mesh.geometry,35),new THREE.LineBasicMaterial({color:palette.ink,transparent:true,opacity}));mesh.add(edge);return mesh;
  }
  function hot(id,parent=group) {const part=new THREE.Group();part.name=`object-${id}`;part.userData.hotspot=id;parent.add(part);interactables.push(part);return part;}
  function floor(x,z,w,d,color,wood=false) {
    const mesh=box(group,x,-4,z,w,8,d,color,2);mesh.userData.floor=true;mesh.name=wood?'wood-floor':'tile-floor';floors.push(mesh);
    if(wood){for(let zz=z-d/2+29;zz<z+d/2;zz+=29){line(group,[[x-w/2,.4,zz],[x+w/2,.4,zz]],'#aa9473',.22);const row=Math.round(zz/29);for(let xx=x-w/2+(row%2?75:0);xx<x+w/2;xx+=150){line(group,[[xx,.5,zz-29],[xx,.5,zz]],'#aa9473',.19);}}}
    else{for(let xx=x-w/2;xx<x+w/2;xx+=30)line(group,[[xx,.3,z-d/2],[xx,.3,z+d/2]],'#a6b6a1',.24);for(let zz=z-d/2;zz<z+d/2;zz+=30)line(group,[[x-w/2,.3,zz],[x+w/2,.3,zz]],'#a6b6a1',.24);}
    return mesh;
  }
  function canvasTexture(draw,w=512,h=320) {
    if(typeof document==='undefined')return null;
    const canvas=document.createElement('canvas');canvas.width=w;canvas.height=h;const ctx=canvas.getContext('2d');draw(ctx,w,h);
    const tex=new THREE.CanvasTexture(canvas);tex.colorSpace=THREE.SRGBColorSpace;return tex;
  }
  function landscape(projecting=false) {
    return canvasTexture((ctx,w,h)=>{ctx.fillStyle=projecting?'#f3dbb1':'#eee2bd';ctx.fillRect(0,0,w,h);ctx.fillStyle='#dfb983';ctx.beginPath();ctx.arc(w*.78,h*.22,h*.11,0,Math.PI*2);ctx.fill();ctx.fillStyle='#adbc9f';ctx.beginPath();ctx.moveTo(0,h*.62);ctx.lineTo(w*.18,h*.25);ctx.lineTo(w*.36,h*.55);ctx.lineTo(w*.55,h*.12);ctx.lineTo(w*.8,h*.58);ctx.lineTo(w,h*.3);ctx.lineTo(w,h);ctx.lineTo(0,h);ctx.fill();ctx.fillStyle='#8fa99a';ctx.beginPath();ctx.moveTo(0,h*.65);ctx.lineTo(w*.28,h*.46);ctx.lineTo(w*.52,h*.7);ctx.lineTo(w*.75,h*.47);ctx.lineTo(w,h*.66);ctx.lineTo(w,h);ctx.lineTo(0,h);ctx.fill();ctx.fillStyle='#b4cec5';ctx.fillRect(0,h*.73,w,h*.27);ctx.strokeStyle='#f4eedb';ctx.lineWidth=3;for(let i=0;i<5;i++){const y=h*(.77+i*.045);ctx.beginPath();ctx.moveTo(w*(.04+(i%2)*.13),y);ctx.bezierCurveTo(w*.3,y-8,w*.6,y+8,w*.95,y);ctx.stroke();}ctx.fillStyle='#decfa5';ctx.beginPath();ctx.moveTo(0,h*.93);ctx.quadraticCurveTo(w*.28,h*.84,w*.62,h);ctx.lineTo(0,h);ctx.fill();if(!state.puzzleSolved&&!projecting){ctx.fillStyle='#e8ddc0';ctx.fillRect(w*.54,h*.47,w*.13,h*.22);ctx.fillRect(w*.13,h*.72,w*.13,h*.21);}ctx.fillStyle='#665e45';ctx.globalAlpha=.06;for(let i=0;i<1000;i++){const x=(i*67)%w,y=(i*173)%h;ctx.fillRect(x,y,1,1);}},512,320);
  }
  function label(parent,text,x,y,z,width,height,rotation=0,color='#666651',background='#f4ecd8') {
    const tex=canvasTexture((ctx,w,h)=>{ctx.fillStyle=background;ctx.fillRect(0,0,w,h);ctx.fillStyle=color;ctx.font=`${Math.round(h*.39)}px KaiTi, STKaiti, serif`;ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText(text,w/2,h/2,w*.92);},512,128);
    if(!tex)return null;const mesh=new THREE.Mesh(new THREE.PlaneGeometry(width,height),new THREE.MeshBasicMaterial({map:tex,side:THREE.DoubleSide}));mesh.position.set(x,y,z);mesh.rotation.y=rotation;parent.add(mesh);return mesh;
  }
  function artPlane(parent,texture,x,y,z,w,h,rotation=0) {
    const face=new THREE.Mesh(new THREE.PlaneGeometry(w,h),texture?new THREE.MeshBasicMaterial({map:texture,side:THREE.DoubleSide}):mat(palette.sage));face.position.set(x,y,z);face.rotation.y=rotation;parent.add(face);return face;
  }
  function savedPhotoTexture() {
    if(typeof document==='undefined')return null;
    const photoIds=state.photos||[];
    const memory=(state.memories||[]).slice().reverse().find(item=>typeof item.image==='string'&&/^data:image\/(?:png|jpeg|webp|gif);base64,[A-Za-z0-9+/=\r\n]+$/.test(item.image)&&(photoIds.includes(item.id)||photoIds.some(id=>id.startsWith('photo-')&&item.id.startsWith(`outing-${id.slice(6)}-day-`))));
    if(!memory)return null;
    const texture=new THREE.TextureLoader().load(memory.image);
    texture.colorSpace=THREE.SRGBColorSpace;return texture;
  }
  function potted(parent,x,base,z,scale=1,growth=2,bloom=false,bloomColor=palette.peach) {
    cylinder(parent,x,base+8*scale,z,10*scale,7*scale,16*scale,'#be9275');cylinder(parent,x,base+16*scale,z,11*scale,11*scale,3*scale,'#d5ac8b');cylinder(parent,x,base+18*scale,z,8*scale,8*scale,1*scale,'#8d7658');
    const plantHeight=(19+growth*9)*scale;cylinder(parent,x,base+18*scale+plantHeight/2,z,1.1*scale,1.3*scale,plantHeight,palette.green,6);
    for(let j=0;j<Math.min(5,growth+2);j++){const side=j%2?1:-1;const yy=base+(25+j*7)*scale;const leaf=sphere(parent,x+side*7*scale,yy,z+(j%3-1)*2*scale,10*scale,2.4*scale,4*scale,j%2?'#9cad83':'#82996f');leaf.rotation.z=side*.42;}
    if(bloom){const yy=base+18*scale+plantHeight;for(let j=0;j<6;j++){const angle=j*Math.PI/3;sphere(parent,x+Math.cos(angle)*5*scale,yy+Math.sin(angle)*5*scale,z,4*scale,5*scale,2.5*scale,bloomColor);}sphere(parent,x,yy,z+2*scale,3*scale,3*scale,2*scale,'#d7b66a');}
  }
  function bookRow(parent,x,y,z,count=5,direction='x') {
    const colors=['#a5b89b','#d7b395','#c7bc9e','#8ea698','#c3a590'];
    for(let i=0;i<count;i++){const height=20+(i*7)%13;box(parent,x+(direction==='x'?i*9:0),y+height/2,z+(direction==='z'?i*9:0),direction==='x'?7:18,height,direction==='x'?17:7,colors[i%colors.length],.7);}
  }
  function frame(parent,x,y,z,width,height,texture,rotation=0,name='') {
    const part=new THREE.Group();part.position.set(x,y,z);part.rotation.y=rotation;if(name)part.name=name;parent.add(part);
    outlined(box(part,0,0,0,width+10,height+10,6,palette.wood,1.5));box(part,0,0,3.3,width+2,height+2,1,palette.cream);artPlane(part,texture,0,0,4.1,width-5,height-5);return part;
  }

  // A single rectangular foundation keeps the balcony and main room aligned.
  outlined(box(group,582,-13,389,1056,20,522,'#c3b18e',2,'base-apartment'),.25);
  floor(701,387,798,506,'#e3cfaa',true);
  floor(171,263,214,258,'#dce0ce');
  floor(171,520,214,228,'#d3ddcf');
  floor(171,399,214,14,'#d8ddcb');
  floor(290,387,24,506,'#e4dac0');floor(171,637,214,6,'#d3ddcf');
  // North projection wall, south memory wall, and the sides hide independently.
  outlined(box(walls.north,583,105,133,1044,210,9,palette.paper,0,'north-outer-wall'),.21);box(walls.north,583,5,139,1044,10,4,palette.trim);
  outlined(box(walls.south,583,105,646,1044,210,9,palette.paper,0,'south-outer-wall'),.21);box(walls.south,583,5,640,1044,10,4,palette.trim);
  outlined(box(walls.west,61,105,469,9,210,354,palette.paper,0,'west-outer-wall'),.22);
  const balconyRail=new THREE.Group();balconyRail.name='balcony-railing';group.add(balconyRail);
  box(balconyRail,61,3,213,9,6,158,palette.trim,.5);
  for(const zz of [137,174,211,248,289])box(balconyRail,61,53,zz,5,106,5,palette.trim,.6);
  for(const yy of [20,62,105])box(balconyRail,61,yy,213,7,4,158,palette.woodLight,.6);
  outlined(box(walls.east,1105,105,242,9,210,217,palette.paper,0,'east-outer-wall-north'),.22);outlined(box(walls.east,1105,105,555,9,210,178,palette.paper),.22);
  box(walls.east,1105,195,411,9,20,120,palette.paper);box(walls.east,1101,6,555,6,12,178,palette.trim);
  // The balcony and the two wet rooms keep their own solid dividing walls.
  const dividers=new THREE.Group();dividers.name='interior-walls';group.add(dividers);
  // Only the framed balcony doorway interrupts this partition. The former
  // east bathroom opening is solid; wet-room entrances face the balcony.
  const computerWall=new THREE.Group();computerWall.name='computer-window-wall';dividers.add(computerWall);
  outlined(box(dividers,291,105,498.25,11,210,286.5,palette.paper,0,'bookshelf-balcony-wall'),.2);
  box(dividers,297,5,498.25,2,10,286.5,palette.trim);
  outlined(box(dividers,166,105,523.75,10,210,235.5,'#e5e4d1',0,'toilet-divider'),.25);
  for(const [start,end] of [[65,90],[145,208],[264,296.5]])box(dividers,(start+end)/2,105,400,end-start,210,8,'#e5e4d1');
  for(const [start,end] of [[90,145],[208,264]])box(dividers,(start+end)/2,204,400,end-start,12,8,'#e5e4d1');
  // Bathroom and toilet doors open inward, keeping both balcony routes clear.
  box(dividers,261,98,428,4,196,52,'#d8c5a2',1,'bathroom-door');
  for(const xx of [209.5,262.5])box(dividers,xx,99,400,3,198,12,palette.woodLight,.5);
  box(dividers,236,197,400,56,4,12,palette.woodLight,.5);
  sphere(dividers,258,94,448,2,2,2,'#8b9878');
  const toiletDoor=box(dividers,87,98,428,4,196,52,'#ddd0b3',1);toiletDoor.rotation.y=-.08;
  for(const xx of [91.5,143.5])box(dividers,xx,99,400,3,198,12,palette.woodLight,.5);
  box(dividers,117.5,197,400,55,4,12,palette.woodLight,.5);

  const balconyDoor=new THREE.Group();balconyDoor.name='balcony-door';dividers.add(balconyDoor);
  for(const [name,zz] of [['north',257],['south',353]])box(balconyDoor,291,99,zz,13,198,4,palette.woodLight,.5,`balcony-door-${name}-jamb`);
  outlined(box(balconyDoor,291,204,305,11,12,100,palette.paper,0,'balcony-door-lintel'),.18);
  box(balconyDoor,291,198,305,13,4,100,palette.woodLight,.5);
  box(balconyDoor,291,1,305,14,2,92,'#c9c5ae',.4,'balcony-door-threshold');
  // The doubled doorway opens toward the north, leaving the route to the
  // plants and wet rooms clear along its south side.
  const balconyLeaf=new THREE.Group();balconyLeaf.name='balcony-door-leaf';balconyLeaf.position.set(285.5,0,259);balconyLeaf.rotation.y=Math.PI/2;balconyDoor.add(balconyLeaf);
  for(const zz of [-1.5,-90.5])box(balconyLeaf,0,98,zz,4,196,3,palette.woodLight,.5);
  for(const yy of [2,84,194])box(balconyLeaf,0,yy,-46,4,4,92,palette.woodLight,.5);
  box(balconyLeaf,0,43,-46,3,78,86,'#d6c8a8',.6);
  box(balconyLeaf,0,139,-46,1,106,86,mat('#c8d9cb',{transparent:true,opacity:.3,depthWrite:false}),0,'balcony-door-glass');
  box(balconyLeaf,1.5,93,-86,1.5,12,2,'#809084',.5);

  // Windows are inset paper panes, with a proper vertical window beside the stand.
  function windowPane(parent,x,y,z,w,h,rotation=0) {
    const win=new THREE.Group();win.position.set(x,y,z);win.rotation.y=rotation;parent.add(win);box(win,0,0,0,w+12,h+12,5,palette.woodLight,1);box(win,0,0,3,w,h,2,'#c5d8c2');box(win,0,0,5,4,h,2,'#f4ecd9');box(win,0,0,5,w,4,2,'#f4ecd9');box(win,0,-h/2-6,8,w+21,5,19,palette.woodLight,1);line(win,[[-w*.4,-h*.28,5.5],[-w*.1,h*.3,5.5]],'#eef3e1',.8);return win;
  }
  const plantWindow=windowPane(walls.west,67,136,332,85,90,Math.PI/2);plantWindow.name='plant-window';
  // The basin has a mirror on the north wall; laundry stays above the washer.
  const balcony=hot('balcony');
  const washerUnit=new THREE.Group();washerUnit.name='washer-unit';washerUnit.position.set(-3,0,-81);balcony.add(washerUnit);
  const washer=outlined(box(washerUnit,111,35,260,67,70,74,'#ecebdd',3,'washing-machine'),.22);
  box(washerUnit,111,72,260,69,5,76,'#f5f0df',1);box(washerUnit,111,62,299,58,10,2,'#dcdcc9',1);
  const washerRim=cylinder(washerUnit,111,32,299.5,23,23,3,'#bbc9b7',24);washerRim.rotation.x=Math.PI/2;
  const washerGlass=cylinder(washerUnit,111,32,302,17,17,2,'#96afa3',24);washerGlass.rotation.x=Math.PI/2;
  box(washerUnit,134,62,301,4,4,2,palette.green,1);
  const laundry=new THREE.Group();laundry.name='laundry-rack';balcony.add(laundry);
  laundry.position.set(-3,0,-81);
  for(const xx of [85,137])cylinder(laundry,xx,149,260,1.2,1.2,100,palette.trim,6);
  for(const zz of [236,260,283])line(laundry,[[82,194,zz],[140,194,zz]],'#a2957b',.8);
  // Three small shirts share the washer footprint, not the sink footprint.
  for(const [xx,zz,color] of [[101,239,'#ede0cb'],[125,260,'#bacab7'],[101,281,'#dab49c']]){
    line(laundry,[[xx-8,179,zz],[xx,188,zz],[xx+8,179,zz],[xx-8,179,zz]],'#a19174',.8);
    const shirt=box(laundry,xx,159,zz,17,31,2,color,1);box(laundry,xx-11,168,zz,9,10,2,color,1);box(laundry,xx+11,168,zz,9,10,2,color,1);
    for(let yy=150;yy<171;yy+=6)line(laundry,[[xx-7,yy,zz+1.3],[xx+7,yy,zz+1.3]],'#9ca08a',.28);
  }
  const sink=new THREE.Group();sink.name='sink';group.add(sink);
  sink.position.z=-16.5;
  outlined(box(sink,225,33,181,70,66,50,'#ccbea0',2),.2);box(sink,225,68,181,75,7,54,'#e9e6d7',2);
  const basin=cylinder(sink,225,73,182,23,19,4,'#aebfb2',24);basin.scale.z=.7;
  cylinder(sink,246,82,165,1.8,1.8,24,'#9cab9c',8);box(sink,239,94,165,15,3,3,'#9cab9c',1);
  box(sink,225,30,208,60,48,2,'#d7ccae',1);cylinder(sink,225,33,210,2,2,3,'#8c977a',8).rotation.x=Math.PI/2;

  const basinMirror=new THREE.Group();basinMirror.name='basin-mirror';walls.north.add(basinMirror);
  outlined(box(basinMirror,225,145,139,67,87,3,'#b9af94',1.5,'basin-mirror-frame'),.18);
  box(basinMirror,225,145,141,59,79,1,new THREE.MeshPhysicalMaterial({color:'#c0d4cd',metalness:.65,roughness:.16,envMapIntensity:.5}),.8,'basin-mirror-surface');
  line(basinMirror,[[203,115,142],[242,166,142]],'#f0f4e9',.75);
  line(basinMirror,[[205,131,142],[238,174,142]],'#f0f4e9',.35);

  // A solid lower half and upper window share the full partition height.
  outlined(box(computerWall,291,51,195,11,102,120,palette.paper,0,'computer-wall-lower'),.2);
  const deskWindow=new THREE.Group();deskWindow.name='desk-window';computerWall.add(deskWindow);
  deskWindow.position.set(291,156,195);deskWindow.rotation.y=Math.PI/2;
  for(const xx of [-57,57])box(deskWindow,xx,0,0,6,108,11,'#d8d8ca',.5);
  for(const yy of [-51,51])box(deskWindow,0,yy,0,120,6,11,'#d8d8ca',.5);
  const windowGlass=new THREE.MeshPhysicalMaterial({color:'#d6e6dc',roughness:.24,metalness:0,transparent:true,opacity:.33,side:THREE.DoubleSide,depthWrite:false});
  box(deskWindow,0,0,0,108,96,1.1,windowGlass,0,'desk-window-glass');
  box(deskWindow,0,0,2,3,102,3,'#f1eee1',.4);
  box(deskWindow,0,0,2,108,3,3,'#f1eee1',.3);
  line(deskWindow,[[-44,-36,3],[-22,37,3]],'#f8faf0',.9);
  line(deskWindow,[[20,-32,3],[43,40,3]],'#f8faf0',.8);
  box(deskWindow,0,-51,0,124,5,15,palette.woodLight,.7,'desk-window-sill');
  box(deskWindow,8,-7,5,2,10,2,'#8d9e92',.5);

  // Four low tiers and small pots keep even mature plants below the window.
  const plants=hot('plants');plants.name='plant-stand';
  for(const xx of [78,111])for(const zz of [318,380])box(plants,xx,32,zz,3,64,3,'#93a17b',.5);
  for(const [i,yy] of [5,23,41,59].entries()){
    outlined(box(plants,94.5,yy,349,39,3,70,'#c2ad88',1,`plant-tier-${i+1}`),.13);
    potted(plants,93,yy+2,333,.19,Math.max(0,Number(state.growth||0)),Number(state.growth)>=4&&i===2);
    potted(plants,96,yy+2,365,.17,Math.max(0,Number(state.growth||0)-1),Number(state.growth)>=4&&i===0);
  }
  const watering=cylinder(plants,132,8,367,8,7,16,'#afc5b5',10);line(plants,[[136,10,366],[148,19,362],[151,18,361]],'#7e9883',.9);

  // Two dedicated wet rooms share a solid divider and enter from the balcony.
  const toilet=new THREE.Group();toilet.name='toilet';group.add(toilet);
  box(toilet,112,35,460,33,43,20,'#e9eddf',3);sphere(toilet,112,18,483,22,13,29,'#edf0e3');sphere(toilet,112,29,486,15,2,20,'#bbcaba');box(toilet,112,58,460,34,5,22,'#f0f0e3',1);
  const bath=new THREE.Group();bath.name='bathroom';group.add(bath);
  box(bath,228,2,484,67,4,111,'#b9cec0',2);box(bath,197,60,483,3,120,110,mat('#d0ddce',{transparent:true,opacity:.36}),0);box(bath,228,60,539,63,120,3,mat('#d0ddce',{transparent:true,opacity:.26}),0);
  cylinder(bath,252,117,447,1.5,1.5,115,'#8eab99',8);box(bath,243,174,447,20,3,3,'#8eab99',1);sphere(bath,232,173,447,10,2,8,'#afc6b6');box(bath,228,2,594,75,3,31,'#9db89f',1);

  // Shared north desk and cooking corner.
  const desk=hot('desk');
  desk.position.z=-96;
  outlined(box(desk,519,77,274,391,8,57,palette.woodLight,2),.22);
  for(const xx of [338,696])for(const zz of [253,293])box(desk,xx,37,zz,7,74,7,palette.wood,1);
  box(desk,412,107,265,77,44,5,'#a1b4a6',2);artPlane(desk,landscape(true),412,107,268,69,36);box(desk,412,85,267,4,12,5,'#a0aa95');box(desk,412,81,275,31,3,17,'#b6bda8',1);
  outlined(box(desk,414,83,288,65,3,17,'#ece7d6',1),.12);
  for(let row=0;row<3;row++)line(desk,[[386,85,283+row*4],[442,85,283+row*4]],'#bfb39b',.55);
  sphere(desk,465,84,283,4,2,6,'#e6ddc7');box(desk,570,83,279,32,1.5,24,'#f7f0df');line(desk,[[559,84.1,274],[582,84.1,274]],'#a29d83',.5);cylinder(desk,615,89,278,6,6,14,'#d5c09c',12);
  function chair(x,z){for(const xx of [-15,15])for(const zz of [-14,14])box(desk,x+xx,21,z+zz,3,42,3,palette.wood);box(desk,x,43,z,42,7,36,'#a8b89a',3);box(desk,x,64,z+17,42,40,5,'#a8b89a',3);}
  chair(414,347);chair(629,347);
  const cooking=hot('cooking');box(cooking,351,84,276,41,4,31,'#dadac8',1);cylinder(cooking,351,95,276,15,14,20,'#b6c4a4',14);cylinder(cooking,351,106,276,16,16,3,'#d3ddbd',14);box(cooking,351,109,276,10,3,4,palette.green,1);for(const xx of [331,371])box(cooking,xx,100,276,8,4,5,palette.green,1);
  const vase=hot('vase');sphere(vase,520,94,275,11,14,11,'#e4dfc4');cylinder(vase,520,107,275,5,6,11,'#e4dfc4',12);
  if(state.flower){const col=state.flower==='sunflower'?'#d4b45c':state.flower==='daisy'?'#f6eed2':'#d9a08a';for(const [i,xx] of [512,520,531].entries()){const yy=135+i%2*10;line(vase,[[520,110,275],[xx,yy,274]],'#7c956d',1);for(let p=0;p<7;p++){const a=p*Math.PI*2/7;sphere(vase,xx+Math.cos(a)*5,yy+Math.sin(a)*5,274,3,4,2,col);}sphere(vase,xx,yy,277,3,3,1.5,state.flower==='sunflower'?'#8e7049':'#d5b66c');}}
  cooking.position.z=-96;vase.position.z=-96;
  // Roll-down projection screen lives on the actual wall above the shared desk.
  const projectorScreen=hot('projection',walls.north);projectorScreen.userData.hotspot='switch';
  projectorScreen.position.z=-96;
  const screenCloth=outlined(box(projectorScreen,600,166,236,212,89,3,new THREE.MeshBasicMaterial({color:'#f2edd9'}),1,'projection-cloth'),.14);screenCloth.castShadow=false;
  box(projectorScreen,600,214,238,222,5,7,'#b3a48a',1);box(projectorScreen,600,119,239,216,4,5,'#bdaf91',1);
  if(state.projectorOn){artPlane(projectorScreen,landscape(true),600,166,238,202,80);label(projectorScreen,'一起玩吧',600,163,240,77,20,0,'#57684c','#e2d9b8');}
  else label(projectorScreen,'今晚看点什么？',600,164,238,141,28,0,'#9a927b','#f2edd9');

  const fridge=hot('fridge');outlined(box(fridge,780,78,269,81,156,67,'#dbe1c9',4),.2);box(fridge,780,112,304,75,2,2,'#9eac8e');box(fridge,811,130,306,3,20,3,'#8b9d80',1);box(fridge,811,71,306,3,31,3,'#8b9d80',1);
  if((state.photos||[]).length){box(fridge,761,129,305,28,33,1,'#faf5e6',1);artPlane(fridge,savedPhotoTexture()||landscape(),761,131,306,23,23);sphere(fridge,762,145,307,3,3,2,'#b4836d');}
  for(let i=0;i<Math.min(6,(state.magnets||[]).length);i++){const x=755+i%3*21,y=81-Math.floor(i/3)*25;box(fridge,x,y,307,14,18,2,i%2?'#cbaa84':'#90a889',1);}
  for(const xx of [749,810])box(fridge,xx,3,269,5,6,32,'#8d987b');
  fridge.position.z=-96;

  const shelving=new THREE.Group();shelving.name='four-tier-room-shelf';group.add(shelving);
  shelving.position.z=-96;
  for(const xx of [850,928])for(const zz of [241,298])box(shelving,xx,80,zz,4,160,4,palette.wood);
  for(const yy of [15,57,99,141])box(shelving,889,yy,270,90,5,65,palette.woodLight,1);
  bookRow(shelving,858,101,268,5);potted(shelving,866,145,265,.7,2);potted(shelving,905,61,267,.64,2);box(shelving,886,31,274,69,27,47,'#d6c6a4',2);box(shelving,904,76,274,29,27,37,'#b4b99c',2);

  const tickets=hot('tickets',walls.east);
  tickets.position.x=60;
  // A transparent black frame with a simple world-map line drawing sits above
  // the open shoe shelves by the entrance.
  const ticketFrame=new THREE.Group();ticketFrame.name='ticket-box';ticketFrame.position.set(1038,144,311);ticketFrame.rotation.y=-Math.PI/2;tickets.add(ticketFrame);
  box(ticketFrame,0,0,-2.5,63,67,1.5,'#d8cfb9',.4,'ticket-box-back');
  for(const xx of [-32,32])outlined(box(ticketFrame,xx,0,1.5,3,71,9,'#30332f',.35,xx<0?'ticket-black-frame-left':'ticket-black-frame-right'),.22);
  for(const yy of [-34,34])box(ticketFrame,0,yy,1.5,67,3,9,'#30332f',.35);
  const ticketGlass=box(ticketFrame,0,0,6.2,61,65,.6,new THREE.MeshPhysicalMaterial({color:'#e9eee7',roughness:.12,metalness:0,transparent:true,opacity:.12,side:THREE.DoubleSide,depthWrite:false}),0,'ticket-box-glass');ticketGlass.castShadow=false;
  line(ticketFrame,[[-27,-27,6.8],[-7,27,6.8]],'#f5f6e9',.4);
  const mapLines=new THREE.Group();mapLines.name='world-map-lines';ticketFrame.add(mapLines);
  const continents=[
    [[-27,12],[-23,19],[-17,21],[-13,17],[-9,17],[-7,12],[-13,7],[-15,2],[-19,3],[-22,9],[-27,12]],
    [[-14,1],[-9,-2],[-6,-7],[-7,-12],[-11,-20],[-13,-17],[-15,-8],[-14,1]],
    [[-5,12],[-1,17],[4,17],[6,21],[13,21],[18,17],[25,18],[29,12],[26,7],[20,7],[18,2],[14,4],[12,-1],[8,2],[6,8],[2,10],[-1,8],[-5,12]],
    [[-1,8],[5,7],[9,2],[8,-4],[3,-14],[-1,-11],[-4,-2],[-1,8]],
    [[17,-12],[21,-9],[27,-11],[28,-16],[21,-18],[17,-15],[17,-12]],
    [[-18,24],[-14,25],[-12,22],[-16,21],[-18,24]]
  ];
  for(const outline of continents)line(mapLines,outline.map(([x,y])=>[x,y,7]),'#393e37',.9);
  for(let yy=-22;yy<=22;yy+=11)line(mapLines,[[-28,yy,6.9],[28,yy,6.9]],'#929985',.12);
  if((state.tickets||[]).length){const ticketColor=['#c1cbb1','#ddb89a'];for(let i=0;i<Math.min(3,state.tickets.length);i++){const t=box(ticketFrame,-8+i*8,-21+i*7,2,24,9,.6,ticketColor[i%2],.2);t.rotation.z=.12*(i-1);}}
  const shoe=new THREE.Group();shoe.name='shoe-cabinet';group.add(shoe);
  shoe.position.set(1082,0,311);
  // The shallow cabinet sits beneath the ticket box, with its open face
  // toward the room and closed panels at both sides and the back.
  for(const [i,yy] of [6,30,54].entries()){
    outlined(box(shoe,0,yy,0,36,4,82,'#c9b18e',.8,`shoe-shelf-${i+1}`),.2);
    line(shoe,[[-14,yy+4,-34],[14,yy+4,-34]],'#dac39c',.55);
  }
  box(shoe,0,40,-39.5,36,80,3,'#b79d78',.8,'shoe-side-left');
  box(shoe,0,40,39.5,36,80,3,'#b79d78',.8,'shoe-side-right');
  box(shoe,17,40,0,2,80,82,'#b79d78',.8,'shoe-cabinet-back');
  box(shoe,0,79,0,36,4,82,'#c9b18e',.8,'shoe-cabinet-top');
  for(const [level,yy] of [11,35,59].entries())for(const [slot,zz] of [-24,0,24].entries()){
    const color=['#8f9e85','#c1a38d','#aaa99d'][level];
    const pair=new THREE.Group();pair.name=`shoe-pair-${level+1}-${slot+1}`;shoe.add(pair);
    for(const offset of [-5,5]){
      box(pair,-1,yy,zz+offset,28,5,8,'#e5dfcb',2);
      box(pair,-2,yy+3,zz+offset,22,6,7.5,color,2);
      box(pair,-10,yy+5,zz+offset,7,5,7.2,color,1);
      for(let n=0;n<3;n++)line(pair,[[-5+n*2,yy+6.3,zz+offset-2.6],[-5+n*2,yy+6.3,zz+offset+2.6]],'#efead8',.9);
    }
  }
  const mirror=new THREE.Group();mirror.name='wall-mirror';walls.north.add(mirror);
  mirror.position.z=-96;
  // Full-length, flush-mounted mirror opposite the wardrobe rather than a
  // small picture-sized mirror above the shoes.
  box(mirror,1008,98,235,56,180,4,'#9b8b72',1.5,'mirror-frame');
  box(mirror,1008,98,238,48,172,1.5,new THREE.MeshPhysicalMaterial({color:'#bed3ce',metalness:.65,roughness:.13,envMapIntensity:.5}),.8,'mirror-surface');
  line(mirror,[[990,33,239],[1023,142,239]],'#edf3e6',.72);
  line(mirror,[[992,70,239],[1020,160,239]],'#edf3e6',.36);
  const door=hot('door');door.position.x=60;const doorLeaf=box(door,1021,83,413,5,166,83,'#d4bd98',2);doorLeaf.rotation.y=-.56;sphere(door,1000,78,432,3,3,3,'#8b9878');box(door,956,1.3,434,39,2.5,67,'#adb99a',2);label(door,'WELCOME',956,3,434,55,11,0,'#708160','#adb99a')?.rotateX(-Math.PI/2);

  // Reverse the sofa: its back is against the south memory wall, facing north.
  const plush=hot('plush');
  plush.position.set(-61,0,25);
  for(const xx of [368,531])for(const zz of [501,604])box(plush,xx,11,zz,7,22,7,'#987e62',1);
  outlined(box(plush,451,25,554,184,24,115,'#bd8f7d',7),.16);
  box(plush,451,64,609,187,79,15,'#cfa18c',6,'sofa-back');
  box(plush,367,47,553,19,54,115,'#d5aa94',6);box(plush,535,47,553,19,54,115,'#d5aa94',6);
  box(plush,410,43,548,73,17,87,'#e0b6a1',7,'sofa-seat-left');box(plush,491,43,548,73,17,87,'#e0b6a1',7,'sofa-seat-right');
  const cushion=box(plush,399,69,586,34,34,12,'#a7b59b',4);cushion.rotation.x=-.15;cushion.rotation.z=.12;
  line(plush,[[386,59,593],[412,81,593]],'#dce1c8',.8);line(plush,[[387,81,593],[411,59,593]],'#dce1c8',.8);
  const blanket=box(plush,505,55,552,31,3,84,'#e8d9b6',2);for(let j=0;j<8;j++)line(plush,[[492,57,518+j*9],[518,57,518+j*9]],'#b6b48d',.65);
  if((state.plushies||[]).length){const bear=new THREE.Group();bear.name='collected-bear';plush.add(bear);sphere(bear,454,67,552,15,19,12,'#b99b70');sphere(bear,454,88,551,14,13,12,'#c7ad7d');for(const xx of [443,465])sphere(bear,xx,99,552,6,6,4,'#b3946b');for(const xx of [449,459])sphere(bear,xx,90,540,1.3,1.5,1,'#685d48');sphere(bear,454,84,539,3,2,1.5,'#927b56');for(const xx of [444,465])sphere(bear,xx,53,542,6,5,8,'#b99b70');}
  // The large puzzle belongs to the south wall directly behind this sofa.
  const puzzle=hot('puzzle',walls.south);frame(puzzle,390,156,639,145,91,canvasTexture((ctx,w,h)=>drawWorldMapArt(ctx,w,h,{solved:state.puzzleSolved}),1000,600),Math.PI,'puzzle-frame');

  const coffee=new THREE.Group();coffee.name='coffee-table';group.add(coffee);
  coffee.position.set(-61,0,-15);
  box(coffee,451,.8,443,178,1.5,150,'#d7d3b3',8);for(let j=0;j<7;j++)line(coffee,[[372,1.8,380+j*19],[530,1.8,380+j*19]],'#ece6cb',.75);
  for(const xx of [406,500])for(const zz of [433,473])box(coffee,xx,17,zz,5,34,5,palette.wood);
  const top=cylinder(coffee,454,36,453,66,66,7,palette.woodLight,32);top.scale.z=.58;
  box(coffee,437,41,447,27,1,31,'#f3ead4');line(coffee,[[428,42,440],[445,42,440]],'#a7a08b',.5);cylinder(coffee,480,47,460,6,6,12,'#d2b48c',12);

  // Bed's headboard and pillows are on the south end, opposite the projection.
  const bed=hot('bed');outlined(box(bed,752,19,500,205,30,267,'#b9a582',4),.18);box(bed,752,39,500,197,21,258,'#f1e7ce',6);
  box(bed,752,61,628,210,82,10,palette.wood,3,'bed-headboard');
  box(bed,752,53,462,195,10,174,'#a9bc92',5,'bed-quilt');
  box(bed,752,60,544,195,5,17,'#c8d6b4',2);
  for(const xx of [704,800]){const pillow=box(bed,xx,57,593,80,15,49,'#f6efdb',6,xx<750?'bed-pillow-left':'bed-pillow-right');pillow.rotation.y=(xx<750?-.025:.025);line(bed,[[xx-32,65,576],[xx+31,65,576]],'#dcd2b9',.6);}
  for(const xx of [663,841])box(bed,xx,7,500,7,14,223,'#a18a69');
  for(let j=0;j<5;j++)line(bed,[[669+j*39,59,382],[669+j*39,59,530]],'#d2ddbe',.35);
  const bedside=hot('switch');outlined(box(bedside,597,27,548,65,54,85,'#cbb58e',2),.22);box(bedside,597,56,548,71,5,90,palette.woodLight,2);box(bedside,597,33,592,55,29,2,'#d9c39d',1);box(bedside,597,37,595,11,2,2,palette.ink,1);
  box(bedside,596,64,545,52,6,26,'#535d50',3,'switch-console');box(bedside,575,65,545,10,7,27,'#a7c0ac',3);box(bedside,617,65,545,10,7,27,'#c49a85',3);box(bedside,596,68,545,29,1,20,'#9db7a4',1);for(const xx of [575,617])sphere(bedside,xx,70,543,2.5,1,2.5,'#4f5d4c');
  const projector=new THREE.Group();projector.name='floor-projector';group.add(projector);cylinder(projector,595,18,469,20,22,6,'#c4c6ac',20);cylinder(projector,595,33,469,3,3,30,'#8f9e80',8);outlined(box(projector,595,54,469,44,24,34,'#dddcc4',3),.2);const lens=cylinder(projector,595,54,450,7,7,4,state.projectorOn?'#f4e7b9':'#88a49b',16);lens.rotation.x=Math.PI/2;
  if(state.projectorOn){const beamLength=321,beam=new THREE.Mesh(new THREE.ConeGeometry(56,beamLength,24,1,true),new THREE.MeshBasicMaterial({color:'#f3e7b7',transparent:true,opacity:.055,side:THREE.DoubleSide,depthWrite:false}));beam.rotation.x=Math.PI/2;beam.position.set(595,99,295.5);projector.add(beam);}
  const lamp=new THREE.Group();lamp.name='floor-lamp';group.add(lamp);
  // Tucked behind the bedside table and against the south wall, with only the
  // shade rising above the nightstand in the room's normal view.
  cylinder(lamp,590,3,616,17,17,6,'#b9b89a',24);cylinder(lamp,590,71,616,2,2,140,'#a9997b',8);cylinder(lamp,590,148,616,18,25,25,'#e8dfbf',18);
  const books=hot('bookshelf');books.name='object-bookshelf';
  books.position.set(-7,0,56.5);
  // A single-book-width column: the books lie flat in small, slightly uneven
  // stacks, instead of an aisle-long bookcase full of upright spines.
  for(const zz of [426,462])box(books,321,80,zz,34,164,2.8,'#b8a587',.5);
  box(books,305,80,444,2.5,164,39,'#c4b393',.5);
  const bookColors=['#9bad94','#c7a28b','#d7c79f','#7f9e91','#bca9a0'];
  for(const [level,yy] of [8,32,56,80,104,128,152].entries()){
    outlined(box(books,321,yy,444,35,3,40,palette.woodLight,.6,`bookshelf-tier-${level+1}`),.22);
    if(level<6){
      const count=level%2?5:4;
      for(let n=0;n<count;n++){
        const stack=new THREE.Group();stack.name=`flat-book-${level+1}-${n+1}`;books.add(stack);
        const bx=321+(n%3-1)*.8,bz=444+(n%2?.7:-.6),base=yy+3+n*3.8;
        box(stack,bx,base,bz,29,3.2,31,bookColors[(level+n)%bookColors.length],.4);
        box(stack,bx+.4,base+.12,bz,27.4,2.15,28.9,'#ece3c9',.15);
        box(stack,bx+14.2,base,bz,1.3,3.4,31,bookColors[(level+n)%bookColors.length],.15);
        line(stack,[[bx+14.95,base-.4,bz-11],[bx+14.95,base-.4,bz+11]],'#e7dfc8',.75);
      }
    }
  }
  function shelfCamera(name,z,color,compact=false){
    const cameraBody=new THREE.Group();cameraBody.name=name;books.add(cameraBody);
    box(cameraBody,323,160,z,compact?10:12,compact?8:10,compact?13:17,color,1.1);
    box(cameraBody,323,166,z,7,2.5,compact?8:10,color,.7);
    const lens=cylinder(cameraBody,331,160,z,compact?3:4.1,compact?3:4.1,compact?3:6,'#393c37',18);lens.rotation.z=Math.PI/2;
    const glass=cylinder(cameraBody,compact?333:335,160,z,compact?2:2.8,compact?2:2.8,1,'#6c9596',18);glass.rotation.z=Math.PI/2;
    box(cameraBody,329.5,163,z+4,1,2,3,'#e6e8dc',.3);
    sphere(cameraBody,324,compact?164.5:165.5,z-4,1.4,.7,1.4,'#343b36');
    line(cameraBody,[[318,159,z-6],[314,156,z-8],[315,151,z-5]],'#655f4f',.85);
  }
  shelfCamera('personal-camera',434,'#454d43');shelfCamera('personal-ccd',453,'#c7cbc2',true);
  const wardrobe=new THREE.Group();wardrobe.name='wardrobe';group.add(wardrobe);
  // The south-wall cabinet line touches edge to edge: bed -> five-level
  // cupboard -> the wardrobe, which is twice the previous 89-unit width.
  outlined(box(wardrobe,1008,91,584,178,182,108,'#cbb28e',2,'wardrobe-body'),.26);
  box(wardrobe,1008,184,584,180,5,112,palette.woodLight,1,'wardrobe-cornice');
  for(const [i,xx] of [964,1052].entries()){
    outlined(box(wardrobe,xx,92,528.8,85,174,3,'#d5bd98',1.1,`wardrobe-door-${i+1}`),.21);
    box(wardrobe,xx+(i?-33:33),96,525.7,2.3,27,3,'#817760',.5);
    for(const gx of [-30,26])line(wardrobe,[[xx+gx,14,526.8],[xx+gx+.5,168,526.8]],'#b99c73',.16);
  }
  const storage=new THREE.Group();storage.name='five-level-cupboard';group.add(storage);
  box(storage,887,67,571,64,134,76,'#c6b18c',.7,'bed-side-cupboard-body');
  box(storage,887,136,571,64,4,78,palette.woodLight,.5);
  for(let j=0;j<5;j++){outlined(box(storage,887,13+j*25,532,58,21,2,'#dbc69e',.3,`bed-side-cupboard-front-${j+1}`),.18);box(storage,887,16+j*25,530,12,2,2,palette.ink,.3);}
  // Some small domestic details give scale without adding interface noise.
  for(const xx of [900,930]){const slipper=box(group,xx,3,624,17,6,28,'#c0a487',4);slipper.rotation.y=-.12;}
  label(walls.south,'一点一点，把日子填满。',893,174,639,164,24,Math.PI,'#8c9278',palette.paper);
  group.userData.layoutVersion='plan-corrected-3d';
  compactRoomStatics(group);
  return {group,interactables,floors,walls};
}

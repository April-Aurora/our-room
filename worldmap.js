// One hand-drawn atlas for the puzzle pieces and the picture on the wall.
// Coordinates are deliberately simplified coastlines, not political borders.
const WIDTH = 1000, HEIGHT = 600;
const PALETTE = Object.freeze({paper:'#eadbbc',edge:'#d7c29c',ocean:'#e7d6b2',land:'#b78e61',landLight:'#c19c73',ink:'#735338',pencil:'#896847',grid:'#aa8b62'});
const COASTLINES = [
  {id:'north-america',points:[[-168,71],[-159,70],[-151,72],[-143,69],[-135,69],[-129,71],[-121,73],[-115,72],[-107,73],[-100,76],[-91,76],[-84,73],[-79,69],[-70,65],[-61,61],[-56,53],[-62,48],[-68,46],[-67,43],[-72,41],[-76,35],[-81,25],[-84,26],[-82,30],[-87,30],[-91,29],[-97,26],[-97,22],[-90,20],[-86,21],[-88,18],[-86,16],[-83,15],[-80,9],[-77,8],[-80,7],[-84,11],[-88,13],[-94,16],[-99,17],[-105,20],[-109,24],[-112,29],[-115,30],[-117,33],[-120,37],[-124,42],[-125,49],[-130,54],[-136,58],[-139,60],[-145,60],[-151,58],[-155,56],[-162,55],[-166,58],[-161,61],[-164,64],[-168,66]]},
  {id:'south-america',points:[[-81,10],[-76,11],[-72,12],[-67,10],[-63,10],[-59,8],[-53,5],[-50,1],[-48,-2],[-42,-3],[-36,-6],[-35,-10],[-38,-15],[-39,-19],[-42,-23],[-48,-28],[-50,-31],[-53,-34],[-57,-38],[-61,-40],[-64,-45],[-67,-50],[-69,-55],[-74,-54],[-75,-49],[-74,-43],[-74,-38],[-72,-33],[-72,-29],[-71,-24],[-70,-19],[-74,-15],[-77,-11],[-79,-6],[-81,-3],[-80,2],[-78,5]]},
  {id:'eurasia',points:[[-10,36],[-9,43],[-4,44],[-1,47],[-5,49],[0,51],[4,52],[8,55],[9,58],[7,59],[5,62],[8,65],[14,68],[20,71],[27,71],[31,69],[30,66],[36,67],[42,66],[43,69],[50,69],[56,68],[61,70],[69,72],[78,72],[85,75],[94,76],[104,77],[111,74],[121,73],[130,71],[140,72],[147,70],[155,71],[166,68],[175,67],[179,64],[174,62],[168,64],[164,60],[161,57],[158,52],[156,50],[155,56],[150,60],[143,59],[141,54],[139,49],[135,45],[131,43],[129,39],[126,40],[124,39],[121,36],[119,31],[122,30],[121,24],[117,23],[112,21],[109,20],[108,16],[109,12],[107,10],[104,10],[103,5],[104,1],[101,2],[99,7],[99,13],[95,16],[93,20],[90,22],[87,21],[85,18],[82,16],[80,10],[77,7],[74,12],[72,20],[69,23],[66,25],[61,25],[58,23],[54,25],[51,24],[49,28],[46,30],[43,29],[43,25],[40,19],[39,17],[35,28],[33,30],[33,34],[36,36],[32,36],[28,40],[26,40],[24,37],[21,37],[20,40],[17,41],[15,39],[16,38],[15,37],[13,38],[12,42],[8,44],[6,43],[3,41],[0,40],[-1,37],[-5,36]]},
  {id:'africa',points:[[-17,21],[-16,26],[-13,28],[-10,30],[-9,32],[-5,36],[1,36],[7,37],[11,36],[15,32],[20,32],[25,31],[31,31],[33,28],[35,23],[39,18],[43,12],[51,12],[48,6],[44,1],[42,-4],[40,-11],[37,-17],[35,-20],[35,-24],[32,-28],[28,-33],[23,-35],[18,-34],[16,-29],[14,-24],[12,-17],[13,-11],[11,-5],[9,1],[7,4],[2,5],[-3,5],[-7,5],[-11,7],[-15,11],[-17,15]]},
  {id:'australia',points:[[113,-22],[114,-26],[114,-31],[118,-34],[123,-35],[130,-32],[135,-35],[139,-37],[145,-39],[150,-37],[153,-29],[151,-24],[149,-20],[146,-17],[144,-11],[141,-12],[139,-17],[136,-15],[132,-12],[128,-14],[124,-16],[120,-18],[116,-20]]},
  {id:'greenland',points:[[-52,60],[-45,61],[-39,66],[-31,69],[-24,75],[-21,80],[-31,83],[-43,83],[-54,81],[-61,76],[-59,70],[-53,66]]},
  {id:'antarctica',points:[[-179,-73],[-162,-75],[-143,-73],[-124,-73],[-110,-75],[-95,-73],[-77,-70],[-65,-65],[-60,-64],[-58,-67],[-67,-73],[-49,-76],[-30,-78],[-11,-75],[10,-71],[29,-69],[50,-67],[70,-69],[92,-67],[113,-66],[135,-68],[153,-68],[174,-71],[180,-74],[180,-79],[-180,-79]]},
  {id:'great-britain',points:[[-6,58],[-3,59],[-1,56],[-2,54],[1,52],[0,50],[-5,50],[-5,53],[-3,55]]},
  {id:'ireland',points:[[-10,55],[-7,55],[-6,52],[-9,51],[-10,53]]},
  {id:'iceland',points:[[-24,65],[-21,67],[-15,66],[-13,64],[-20,63]]},
  {id:'madagascar',points:[[49,-12],[50,-16],[48,-21],[46,-25],[44,-24],[44,-20],[46,-16]]},
  {id:'japan',points:[[142,45],[145,44],[143,42],[141,41],[140,37],[136,34],[132,33],[130,31],[129,33],[133,35],[137,37],[139,40]]},
  {id:'taiwan',points:[[122,25],[122,23],[120,21],[120,24]]},
  {id:'sri-lanka',points:[[80,10],[82,8],[81,6],[80,7]]},
  {id:'cuba',points:[[-85,22],[-81,23],[-77,21],[-74,20],[-78,20],[-82,22]]},
  {id:'hispaniola',points:[[-74,19],[-70,20],[-68,18],[-72,18]]},
  {id:'sumatra',points:[[95,6],[99,2],[103,-5],[105,-6],[101,-5],[98,-1]]},
  {id:'java',points:[[105,-6],[111,-7],[115,-8],[113,-9],[107,-8]]},
  {id:'borneo',points:[[110,7],[116,7],[119,3],[117,-3],[112,-4],[109,0]]},
  {id:'sulawesi',points:[[120,2],[124,2],[125,1],[122,0],[124,-4],[122,-5],[120,-2],[119,-3],[119,0]]},
  {id:'new-guinea',points:[[131,-1],[137,-3],[143,-3],[148,-6],[150,-10],[146,-9],[141,-8],[136,-5],[132,-4]]},
  {id:'philippines',points:[[120,19],[122,17],[121,14],[125,12],[126,7],[124,6],[122,10],[119,10],[120,13]]},
  {id:'new-zealand-north',points:[[173,-35],[176,-38],[178,-39],[176,-41],[174,-40],[172,-37]]},
  {id:'new-zealand-south',points:[[173,-41],[171,-44],[168,-47],[166,-46],[168,-43],[171,-41]]},
  {id:'tasmania',points:[[145,-41],[148,-41],[148,-43],[146,-44],[144,-43]]},
];

const project = ([longitude, latitude]) => [50 + (longitude + 180) * 2.5, 98 + (85 - latitude) * 2.46];
const continentPaths = COASTLINES.map(({id,points})=>({id,d:points.map((point,index)=>`${index?'L':'M'}${project(point).map(v=>v.toFixed(2)).join(' ')}`).join(' ')+' Z'}));
const ridgePaths = [
  'M 169 158 l 5 -8 6 10 6 -7 6 11 6 -6 7 10',
  'M 283 299 l 4 -7 5 12 3 -5 5 13 3 -5 6 13',
  'M 594 236 l 5 -8 6 9 5 -7 6 8 5 -9 6 9 6 -7 6 9',
  'M 577 179 l 4 -6 5 7 5 -5 6 7',
];

function paperMarks() {
  return Array.from({length:170},(_,i)=>({x:22+(i*137)%955,y:20+(i*83)%559,length:1+(i%4),opacity:.08+(i%3)*.015}));
}

// Each path is repeated with a slight pencil offset rather than a heavy outline.
export function worldMapArt({solved=true}={}) {
  const latitudeLines = [60,30,0,-30,-60].map(lat=>{const y=project([0,lat])[1];return `<path d="M50 ${y} H950"${lat===0?' stroke-dasharray="4 6"':''}/>`;}).join('');
  const longitudeLines = [-120,-60,0,60,120].map(lon=>{const x=project([lon,0])[0];return `<path d="M${x} 98 V501"/>`;}).join('');
  const lands=continentPaths.map(({id,d},i)=>`<path data-land="${id}" d="${d}" fill="${i%3===0?PALETTE.landLight:PALETTE.land}"/><path d="${d}" fill="none" transform="translate(.7 -.45)" stroke="${PALETTE.pencil}" stroke-width=".65" opacity=".5"/>`).join('');
  const marks=paperMarks().map(({x,y,length,opacity})=>`<path d="M${x} ${y} h${length}" opacity="${opacity}"/>`).join('');
  return `<svg class="world-map-art" xmlns="http://www.w3.org/2000/svg" width="1000" height="600" viewBox="0 0 1000 600" role="img" aria-label="棕色手绘世界地图"><rect width="1000" height="600" fill="${PALETTE.paper}"/><path d="M18 17 L980 21 L984 581 L20 578 Z" fill="none" stroke="${PALETTE.edge}" stroke-width="2"/><path d="M26 25 L973 27 L974 572 L28 570 Z" fill="none" stroke="${PALETTE.pencil}" stroke-width=".6" opacity=".4"/><g stroke="${PALETTE.grid}" stroke-width=".65" opacity=".24">${latitudeLines}${longitudeLines}</g><g stroke="${PALETTE.ink}" stroke-width="1.4" stroke-linejoin="round">${lands}</g><g fill="none" stroke="${PALETTE.pencil}" stroke-width="1" opacity=".65">${ridgePaths.map(d=>`<path d="${d}"/>`).join('')}</g><g fill="none" stroke="${PALETTE.ink}" stroke-width="1">${marks}</g><g transform="translate(901 74)" stroke="${PALETTE.ink}" stroke-width="1.2"><path d="M0 -24 L6 -4 L0 0 L-6 -4 Z" fill="${PALETTE.ink}"/><path d="M0 24 L6 4 L0 0 L-6 4 Z" fill="none"/><path d="M-20 0 H20 M0 -24 V24"/><circle r="11" fill="none" opacity=".45"/></g><g fill="${PALETTE.ink}" font-family="KaiTi,STKaiti,serif" text-anchor="middle"><text x="500" y="65" font-size="30" letter-spacing="12">世界地图</text><text x="903" y="40" font-family="Georgia,serif" font-size="11">N</text><text x="500" y="554" font-size="15" letter-spacing="5">${solved?'把走过的地方，慢慢拼在一起':'一块一块，拼出整个世界'}</text></g></svg>`;
}

export function drawWorldMapArt(ctx,width,height,{solved=true}={}) {
  if (!ctx) return;
  ctx.save();
  ctx.scale(width/WIDTH,height/HEIGHT);
  ctx.fillStyle=PALETTE.paper;ctx.fillRect(0,0,WIDTH,HEIGHT);
  ctx.strokeStyle=PALETTE.edge;ctx.lineWidth=2;ctx.strokeRect(19,19,963,561);
  ctx.strokeStyle=PALETTE.pencil;ctx.globalAlpha=.4;ctx.lineWidth=.6;ctx.strokeRect(27,27,947,544);ctx.globalAlpha=1;
  ctx.save();ctx.strokeStyle=PALETTE.grid;ctx.lineWidth=.65;ctx.globalAlpha=.24;
  for(const lat of [60,30,0,-30,-60]){const y=project([0,lat])[1];ctx.beginPath();ctx.setLineDash(lat===0?[4,6]:[]);ctx.moveTo(50,y);ctx.lineTo(950,y);ctx.stroke();}
  ctx.setLineDash([]);
  for(const lon of [-120,-60,0,60,120]){const x=project([lon,0])[0];ctx.beginPath();ctx.moveTo(x,98);ctx.lineTo(x,501);ctx.stroke();}
  ctx.restore();ctx.lineJoin='round';ctx.lineWidth=1.4;
  for(let i=0;i<COASTLINES.length;i++){
    const {points}=COASTLINES[i];ctx.beginPath();points.forEach((point,index)=>{const [x,y]=project(point);index?ctx.lineTo(x,y):ctx.moveTo(x,y);});ctx.closePath();
    ctx.fillStyle=i%3===0?PALETTE.landLight:PALETTE.land;ctx.fill();ctx.strokeStyle=PALETTE.ink;ctx.stroke();
    ctx.save();ctx.translate(.7,-.45);ctx.strokeStyle=PALETTE.pencil;ctx.globalAlpha=.5;ctx.lineWidth=.65;
    ctx.beginPath();points.forEach((point,index)=>{const [x,y]=project(point);index?ctx.lineTo(x,y):ctx.moveTo(x,y);});ctx.closePath();ctx.stroke();ctx.restore();
  }
  if(typeof Path2D!=='undefined'){ctx.save();ctx.strokeStyle=PALETTE.pencil;ctx.lineWidth=1;ctx.globalAlpha=.65;ridgePaths.forEach(d=>ctx.stroke(new Path2D(d)));ctx.restore();}
  ctx.save();ctx.strokeStyle=PALETTE.ink;ctx.lineWidth=1;
  paperMarks().forEach(({x,y,length,opacity})=>{ctx.globalAlpha=opacity;ctx.beginPath();ctx.moveTo(x,y);ctx.lineTo(x+length,y);ctx.stroke();});ctx.restore();
  ctx.save();ctx.translate(901,74);ctx.strokeStyle=PALETTE.ink;ctx.fillStyle=PALETTE.ink;ctx.lineWidth=1.2;
  ctx.beginPath();ctx.moveTo(0,-24);ctx.lineTo(6,-4);ctx.lineTo(0,0);ctx.lineTo(-6,-4);ctx.closePath();ctx.fill();ctx.stroke();
  ctx.beginPath();ctx.moveTo(0,24);ctx.lineTo(6,4);ctx.lineTo(0,0);ctx.lineTo(-6,4);ctx.closePath();ctx.stroke();
  ctx.beginPath();ctx.moveTo(-20,0);ctx.lineTo(20,0);ctx.moveTo(0,-24);ctx.lineTo(0,24);ctx.stroke();ctx.globalAlpha=.45;ctx.beginPath();ctx.arc(0,0,11,0,Math.PI*2);ctx.stroke();ctx.restore();
  ctx.fillStyle=PALETTE.ink;ctx.textAlign='center';ctx.font='30px KaiTi, STKaiti, serif';ctx.fillText('世界地图',500,65);
  ctx.font='11px Georgia, serif';ctx.fillText('N',903,40);
  ctx.font='15px KaiTi, STKaiti, serif';ctx.fillText(solved?'把走过的地方，慢慢拼在一起':'一块一块，拼出整个世界',500,554);
  ctx.restore();
}

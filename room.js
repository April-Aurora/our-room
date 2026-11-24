const ink = '#776b56';

function object(id, label, body, marker) {
  return `<g class="room-object" data-hotspot="${id}" role="button" tabindex="0" aria-label="${label}"><title>${label}</title>${body}${marker ? dot(...marker) : ''}</g>`;
}

function dot(x, y) {
  return `<g class="hotspot-dot" transform="translate(${x} ${y})"><circle r="9" fill="#fffdf5" stroke="#8b8468" stroke-width="1.2"/><path d="M-3 0h6M0-3v6" stroke="#8b8468" stroke-width="1.2"/></g>`;
}

function plant(x, y, scale = 1, color = '#98a47c', growth = 3, bloom = false) {
  let leaves = '';
  const height = 17 + Math.max(0, growth) * 5;
  for (let n = 0; n < Math.min(6, growth + 2); n++) {
    const ly = -10 - n * 6;
    const side = n % 2 ? 1 : -1;
    leaves += `<path d="M0 ${ly + 5}q${side * 20} -21 ${side * 19} -7Q${side * 15} ${ly + 9} 0 ${ly + 5}" fill="${color}"/><path d="M0 ${ly + 5}l${side * 12} -7" fill="none" stroke="#758264" stroke-width=".65"/>`;
  }
  return `<g transform="translate(${x} ${y}) scale(${scale})"><path d="M0 1q3 -${height / 2} 0 -${height}" fill="none" stroke="#7f8b68" stroke-width="1.7"/>${leaves}${bloom ? flower(0, -height - 2, 0.6) : ''}<path d="M-15 -1l4 24q11 5 22 0l4-24z" fill="#c99579" stroke="#987e65" stroke-width="1.2"/><ellipse cy="-1" rx="15" ry="4" fill="#e3b89c" stroke="#987e65" stroke-width="1"/><ellipse cy="0" rx="11" ry="2" fill="#9a8066"/><path d="M-8 6l2 13M-4 7l1 13" stroke="#ecd0b5" opacity=".7" stroke-width="1"/></g>`;
}

function flower(x, y, scale = 1, color = '#e1b4a3') {
  return `<g transform="translate(${x} ${y}) scale(${scale})">${[0, 60, 120, 180, 240, 300].map(a => `<ellipse transform="rotate(${a})" cy="-7" rx="4" ry="7" fill="${color}" stroke="#b89983" stroke-width=".7"/>`).join('')}<circle r="4" fill="#d9bd76" stroke="#ac955f" stroke-width=".6"/></g>`;
}

function bouquetFlower(type, x, y, scale = 1) {
  if (type === 'tulip') {
    return `<g transform="translate(${x} ${y}) scale(${scale})"><path d="M-10-12l6 5 4-8 5 8 6-5q2 20-11 22-13-1-10-22z" fill="#d69b84" stroke="#ad806a" stroke-width="1.2"/><path d="M-4-7Q-8 7 0 10M5-7Q8 6 0 10" fill="none" stroke="#be8a73" stroke-width=".8"/><path d="M-8-8q-1 8 4 12" fill="none" stroke="#e5b59c" stroke-width="1.3"/></g>`;
  }
  const sunflower = type === 'sunflower';
  const petals = sunflower ? 12 : 10;
  return `<g transform="translate(${x} ${y}) scale(${scale})">${Array.from({length:petals},(_,i)=>`<ellipse transform="rotate(${i*360/petals})" cy="-8" rx="${sunflower?3.2:2.8}" ry="${sunflower?8:7}" fill="${sunflower?'#d6b258':'#f7edd2'}" stroke="${sunflower?'#b1944a':'#c4b797'}" stroke-width=".8"/>`).join('')}<circle r="${sunflower?6:4.5}" fill="${sunflower?'#9a7750':'#d8b758'}" stroke="${sunflower?'#836748':'#b99a4c'}" stroke-width=".9"/>${sunflower?'<path d="M-3-2h6m-6 3h6m-5 3h4" stroke="#b99765" stroke-width=".8"/>':''}</g>`;
}

function safeImageData(value) {
  return typeof value === 'string' && /^data:image\/(?:png|jpeg|gif|webp|avif);base64,[A-Za-z0-9+/=\r\n]+$/.test(value) ? value.replace(/[\r\n]/g, '') : null;
}

function book(x, y, color, height = 31, angle = 0) {
  return `<g transform="translate(${x} ${y}) rotate(${angle})"><path d="M0 0h11v${height}H0z" fill="${color}" stroke="#978570" stroke-width=".8"/><path d="M3 3v${height - 6}M3 7h6M3 ${height - 6}h6" stroke="#f4ead7" stroke-width="1.2"/></g>`;
}

function miniLandscape(x, y, w, h, sunset = false) {
  return `<svg x="${x}" y="${y}" width="${w}" height="${h}" viewBox="0 0 140 90"><rect width="140" height="90" fill="${sunset ? '#e7d3bc' : '#d8e1d5'}"/><circle cx="102" cy="25" r="13" fill="#edd49c"/><path d="M0 64L37 28l44 37 29-26 30 26v25H0z" fill="#9da88d"/><path d="M0 75l40-23 40 29 60-22v31H0z" fill="#7f957c"/><path d="M67 72c14-8 22 0 24 18H57z" fill="#e8d4b0"/><path d="M13 66l8-22 7 22m-11-10h8" fill="none" stroke="#6d826b" stroke-width="2"/><path d="M0 87q40-6 67 1t73-2" fill="none" stroke="#ede1ba" stroke-width="2" opacity=".6"/></svg>`;
}

function coastalLandscape(x, y, w, h) {
  return `<svg x="${x}" y="${y}" width="${w}" height="${h}" viewBox="0 0 140 90"><rect width="140" height="90" fill="#eee1bd"/><circle cx="107" cy="21" r="10" fill="#e3bc80"/><path d="M0 50l24-25 26 23 23-33 33 31 34-23v67H0z" fill="#b0bca1"/><path d="M0 59l34-16 27 18 29-21 50 16v34H0z" fill="#8fa99d"/><path d="M0 62q25-8 52 0t46 0 42 0v28H0z" fill="#b6ceca"/><path d="M0 72q25-8 54 0t46 0 40-2M9 82h28m16-15h15m31 14h35" fill="none" stroke="#f3edda" stroke-width="1.2"/><path d="M0 83q35-7 88 7H0z" fill="#e9d9b0"/><path d="M8 89q4-16 6-28m0 11Q2 62 7 55q10 4 7 17m0 9q14-4 11-13-11 2-11 13" fill="#849472" stroke="#6e7f61" stroke-width=".6"/></svg>`;
}

export function renderRoom(state = {}) {
  const growth = Number(state.growth || 0);
  const hasFlowers = Boolean(state.flower);
  const magnets = state.magnets || [];
  const memories = state.memories || [];
  const photos = state.photos || [];
  const collectedTickets = state.tickets || [];
  const latestRealPhoto = memories.slice().reverse().find(memory => safeImageData(memory.image) && (photos.includes(memory.id) || photos.some(id => id.startsWith('photo-') && memory.id.startsWith(`outing-${id.slice(6)}-day-`))));
  const realPhotoData = latestRealPhoto ? safeImageData(latestRealPhoto.image) : null;
  const plushies = state.plushies || [];
  const solved = Boolean(state.puzzleSolved);
  const projection = Boolean(state.projectorOn);

  const balcony = object('balcony', '去阳台，看看晾着的衣服', `
    <path d="M54 133l224-2v230H54z" fill="#e5e4d3" pointer-events="none"/>
    <path d="M60 136h212v79H60z" fill="#dae3d4" pointer-events="none"/>
    <path d="M62 214h211v146H62z" fill="url(#tilePattern)" pointer-events="none"/>
    <path d="M64 139h208M65 150h207M67 136v74m47-75v76m48-75v76m49-75v76m48-75v76" fill="none" stroke="#9ea998" stroke-width="3"/>
    <path d="M65 138h205" stroke="#fbf8e9" stroke-width="5"/>
    <path d="M77 222h68v77H77z" fill="#eae8dc" stroke="#b1ae96" stroke-width="1.4"/>
    <path d="M79 224h64v15H79z" fill="#f8f3e5"/>
    <circle cx="112" cy="267" r="22" fill="#c4cfc6" stroke="#a3aa9c" stroke-width="3"/><circle cx="112" cy="267" r="15" fill="#b4c3b8"/><path d="M102 274q13-17 21-2" fill="none" stroke="#e3e4d5" stroke-width="5"/>
    <circle cx="135" cy="231" r="2" fill="#8c947d"/>
    <path d="M184 209v56m58-56v56M167 212h89" stroke="#a29579" stroke-width="2"/>
    <path d="M196 213l-12 11 8 12 6-5v34h24v-34l6 5 8-12-13-11-9 6z" fill="#efdfcf" stroke="#b4a48a" stroke-width="1.1"/>
    <path d="M198 239h24m-24 7h24m-24 7h24" stroke="#c3ad97" stroke-width="2"/>
    <path d="M160 284h91v41h-91z" fill="#d0c4a7" stroke="#a99a7d"/>
    <ellipse cx="205" cy="292" rx="33" ry="12" fill="#e9e6d7" stroke="#a99a7d"/>
    <ellipse cx="205" cy="292" rx="24" ry="7" fill="#c7d1c4"/><path d="M223 280v-12q-2-9-11-5v7" fill="none" stroke="#a4a692" stroke-width="3"/>
    <path d="M70 342q55-7 94 0" stroke="#c6bf9e" stroke-width="3"/>
    <text x="189" y="348" class="room-handwriting" font-size="14" fill="#81886b">有风的阳台</text>
  `);

  const plants = object('plants', growth ? '四层花架，给植物浇水' : '四层花架，给小苗浇水', `
    <path d="M80 381h161v-25H80z" fill="#c8b595" stroke="#a28c6e" stroke-width="1.1"/>
    <g transform="translate(100 354)">
      <path d="M0 0V-133M111 0v-133" stroke="#8c9879" stroke-width="5"/>
      ${[0, -36, -72, -108].map((y, i) => `<path d="M-6 ${y}h124v7H-6z" fill="#baa482" stroke="#a18e70" stroke-width="1"/>${plant(17 + i % 2 * 13, y - 19, .58, '#9daa81', growth + 1, growth >= 3 && i === 0)}${plant(80 - i % 2 * 8, y - 18, .5, i % 2 ? '#b1b28b' : '#819779', growth, growth >= 4 && i === 2)}`).join('')}
    </g>
    <path d="M252 331l10 1 4 20-20-1z" fill="#b1c4b7" stroke="#829381"/><path d="M262 333q14-7 14 6l-9 6m-20-7-11-9-3 3 14 14" fill="none" stroke="#829381" stroke-width="2"/>
  `, [226, 239]);

  const desk = object('desk', '长桌，坐下来写一点今天', `
    <path d="M331 265h378v20H331z" fill="#9b896a" opacity=".14"/>
    <path d="M324 247l384-3 7 56-387 2z" fill="#cab18c" stroke="#9a856a" stroke-width="2"/>
    <path d="M328 250l378-3 5 45-382 3z" fill="url(#deskGrain)"/>
    <path d="M336 303v25m360-28v25" stroke="#a08b6d" stroke-width="7"/>
    <path d="M377 211l76-1 2 48-80 1z" fill="#c6c5b7" stroke="#8c917e" stroke-width="1.5"/>
    <path d="M381 216l68-1 1 35-70 1z" fill="#b6c9bf"/><path d="M383 243l13-13 15 10 20-18 16 20v7h-64z" fill="#96ad9d"/>
    <path d="M411 259v9m-14 0h29" stroke="#8d927f" stroke-width="3"/>
    <path d="M382 274l68-1 4 10-76 1z" fill="#ede5d3" stroke="#b1a58f"/>
    <path d="M385 277h60m-63 3h66" stroke="#c8bba4" stroke-dasharray="3 2" stroke-width="1"/>
    <ellipse cx="467" cy="278" rx="5" ry="7" fill="#e5ddc9" stroke="#b1a58f"/>
    <path d="M562 262l31-2 3 26-33 2z" fill="#f7eedb" stroke="#b8a58a"/><path d="M568 267l19-1m-19 6h20m-20 6 14-1" stroke="#d0bfa5" stroke-width="1.2"/>
    <path d="M600 269l5 13" stroke="#8a9a79" stroke-width="3"/>
    <path d="M610 262h14v16h-14z" fill="#e6d2af" stroke="#ad9876"/><path d="M623 265q12-1 10 7-1 5-10 3" fill="none" stroke="#ad9876" stroke-width="2"/>
    ${book(662, 258, '#9ba98c', 23, 82)}${book(666, 266, '#d4b79d', 27, 84)}
    <path d="M390 326q24-12 48 0l-3 33q-23 10-44 0z" fill="#b0baa0" stroke="#849175" stroke-width="1.3"/>
    <path d="M397 357l-2 17m34-17 3 17" stroke="#9b8b70" stroke-width="3"/>
    <path d="M605 326q24-12 48 0l-3 33q-23 10-44 0z" fill="#b0baa0" stroke="#849175" stroke-width="1.3"/>
    <path d="M612 357l-2 17m34-17 3 17" stroke="#9b8b70" stroke-width="3"/>
  `);

  const cooking = object('cooking', '小锅，买些食材做一道菜', `
    <path d="M330 265h42v24h-42z" fill="#e7e2ce" stroke="#a7a48d" stroke-width="1"/>
    <ellipse cx="351" cy="276" rx="15" ry="9" fill="#c6c5b2"/>
    <path d="M336 257v18q16 11 30-1v-17z" fill="#c2caaf" stroke="#89937a" stroke-width="1.4"/>
    <ellipse cx="351" cy="257" rx="15" ry="6" fill="#dce0ca" stroke="#89937a" stroke-width="1.2"/>
    <path d="M345 253q5-7 11 0m-21 7h-7v7h8m30-7h7v7h-8" fill="none" stroke="#89937a" stroke-width="2"/>
    <path d="M344 244q-5-5 0-10m10 8q6-6 1-13" fill="none" stroke="#c7bc9f" stroke-width="1.1" stroke-linecap="round"/>
  `, [332, 239]);

  const vase = object('vase', hasFlowers ? '花瓶，今天的花也很好看' : '空花瓶，下次去集市带一束花回来', `
    <path d="M514 258l-2 8q-12 17-5 24 17 8 26-1 6-8-5-23l-1-8z" fill="#e6ddc3" stroke="#b5a78b" stroke-width="1.2"/>
    <ellipse cx="520" cy="258" rx="7" ry="2.5" fill="#c5c5a8"/>
    ${hasFlowers ? `<path d="M520 268l-7-36m8 36 12-39m-12 39-3-48" fill="none" stroke="#81936c" stroke-width="1.8"/><path d="M518 254q-14-16-14-4 5 8 14 4m5-6q15-14 15-2-6 8-15 2" fill="#9daa80" stroke="#87936e" stroke-width=".8"/>${bouquetFlower(state.flower,512,231,.85)}${bouquetFlower(state.flower,533,230,.7)}${bouquetFlower(state.flower,517,218,.8)}` : `<path d="M520 263l-1 14" stroke="#f6f0df" stroke-width="2"/>`}
  `, [539, 263]);

  const fridge = object('fridge', '冰箱，看看照片和旅行带回的冰箱贴', `
    <path d="M741 204h80v125h-80z" fill="#b8b6a2" opacity=".25" transform="translate(5 8)"/>
    <path d="M737 196q40-4 83 0l3 130-85 2z" fill="#e1e3ce" stroke="#9b9f87" stroke-width="1.7"/>
    <path d="M741 199h76v125h-76z" fill="url(#fridgeTone)"/>
    <path d="M739 243h81M810 211v18m0 28v23" stroke="#a0a58e" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M749 328v6m61-6v6" stroke="#8d927a" stroke-width="4"/>
    ${photos.length ? `<g transform="rotate(-7 764 221)"><path d="M747 204h35v36h-35z" fill="#fbf5e6" stroke="#b6a98e" stroke-width="1.2"/>${realPhotoData ? `<image x="751" y="209" width="27" height="23" href="${realPhotoData}" preserveAspectRatio="xMidYMid slice" clip-path="url(#fridgeRealPhotoClip)"/>` : coastalLandscape(751,209,27,23)}<circle cx="765" cy="207" r="3" fill="#c58f77"/></g>` : ''}
    ${magnets.slice(0, 6).map((_, i) => {const x=751+(i%3)*22,y=258+Math.floor(i/3)*29; return i%2 ? `<g transform="translate(${x} ${y}) rotate(${i*3-5})"><path d="M0 0h16v22H0z" fill="#d0b494" stroke="#ac9070"/><path d="M3 6h10M3 10h10M3 14h7" stroke="#f7ead0" stroke-width="1.5"/></g>` : `<g transform="translate(${x} ${y}) rotate(${i*4-9})"><path d="M1 19L4 3l10 1 4 15z" fill="#94ac96" stroke="#78907b"/><circle cx="9" cy="9" r="3" fill="#e8d5a0"/><path d="M4 15l5-5 6 6" fill="none" stroke="#ecdfbf" stroke-width="1.5"/></g>`;}).join('')}
    ${photos.length > 1 ? `<g transform="rotate(8 785 294)"><path d="M775 276h29v34h-29z" fill="#f9f1df" stroke="#b7ad92"/>${miniLandscape(779, 280, 21, 21)}<circle cx="788" cy="277" r="3" fill="#9da685"/></g>` : ''}
    <path d="M752 188h53l-5 9h-41z" fill="#c8b89a" stroke="#ac9b7f"/><path d="M759 185q18-9 37 0" stroke="#c7bba2" fill="none"/>
  `, [814, 249]);

  const shelf = `
    <g>
      <path d="M850 175v146m78-146v146" stroke="#a89171" stroke-width="5"/>
      ${[194,233,272,311].map(y=>`<path d="M842 ${y}h94v7h-94z" fill="#c4ae8c" stroke="#a18a69" stroke-width="1.1"/>`).join('')}
      ${plant(869,174,.63,'#93a47e',3)}
      <path d="M899 177h20v15h-20z" fill="#ead9b8" stroke="#b6a084"/><path d="M901 181h16m-16 4h16" stroke="#c8b28c"/>
      ${book(853,205,'#b7bfa7',27)}${book(866,207,'#dfc2a6',25)}${book(880,209,'#bdb6a0',23,8)}
      <path d="M904 213q-12 12 0 18h11q9-7-1-18z" fill="#d4c5a5" stroke="#ae9d7e"/>
      ${plant(868,252,.61,'#a9b18b',1)}
      <path d="M894 251h27v20h-27z" fill="#c7c2a9" stroke="#a9a28b"/><path d="M900 257h15" stroke="#ebe4cd" stroke-width="3"/>
      <path d="M851 288h75v21h-75z" fill="#dbcbab" stroke="#b2a080"/><path d="M856 294h65m-65 7h65" stroke="#c3b18e" stroke-width="1.3"/><path d="M884 291h10v5h-10z" fill="#ab9b7c"/>
    </g>`;

  const tickets = object('tickets', '门边的旅行票盒，打开回忆', `
    <path d="M958 181l60-1 1 65-62 1z" fill="#b7a187" stroke="#99836b" stroke-width="1.5"/>
    <path d="M963 186h50v54h-50z" fill="#e8ddc7" stroke="#bead91"/>
    <path d="M969 194h36v38h-36z" fill="#e1d2b6"/>
    ${collectedTickets.length ? `<g transform="rotate(-11 982 207)"><path d="M971 197h24v12h-24z" fill="#b9c5b0" stroke="#8c9b80" stroke-width=".9"/><path d="M975 201h12m-12 4h8" stroke="#7e8d74" stroke-width=".7"/></g>${collectedTickets.length > 1 ? '<g transform="rotate(9 991 221)"><path d="M977 214h27v13h-27z" fill="#dfb79e" stroke="#b48e74" stroke-width=".9"/><path d="M981 218h14m-14 4h10" stroke="#aa8169" stroke-width=".7"/></g>' : ''}` : `<path d="M977 207h23m-19 6h15" stroke="#baa98b" stroke-width="1"/><text x="989" y="229" text-anchor="middle" font-size="7" fill="#ac9c81">留给下一次远行</text>`}
    <path d="M955 281h67v52h-67z" fill="#c8b18e" stroke="#a48c6b" stroke-width="1.2"/>
    <path d="M958 286h61v16h-61zM958 306h61v21h-61z" fill="#d7c3a1" stroke="#af9876" stroke-width=".8"/>
    <circle cx="989" cy="295" r="1.8" fill="#a18866"/>
    <path d="M963 317q8-8 15 1v4h-20q-1-4 5-5m31-1q10-6 17 3v3h-22q-1-4 5-6" fill="#b3b59a" stroke="#8b967b" stroke-width=".8"/>
    <path d="M965 335v9m47-9v9" stroke="#a48c6b" stroke-width="3"/>
  `, [1017, 196]);

  const mirror = `
    <g transform="translate(983 122)"><path d="M-22 0a22 22 0 0 1 44 0v44h-44z" fill="#cab799" stroke="#a28e70" stroke-width="1.6"/><path d="M-17 0a17 17 0 0 1 34 0v38h-34z" fill="#d0dbce"/><path d="M-10 26l22-24m-18 31 18-20" stroke="#e9ede0" stroke-width="4"/></g>`;

  const door = object('door', '出门，去约会、旅行或逛集市', `
    <path d="M1045 354v112" stroke="#d7c7ac" stroke-width="14"/>
    <path d="M1041 355h10v108h-10z" fill="#c7ae8c" stroke="#a88f6f"/>
    <path d="M1047 358l-63 31v91l63-23z" fill="#d4bc98" stroke="#aa9270" stroke-width="1.6"/>
    <path d="M1042 367l-52 27v74l52-19z" fill="#ddc8a7" stroke="#b49c78" stroke-width=".8"/>
    <circle cx="995" cy="430" r="2.7" fill="#8a9276"/>
    <path d="M976 471q9-91 71-110" fill="none" stroke="#c2b294" stroke-width="1" stroke-dasharray="4 5"/>
    <path d="M936 401l38-1 1 71-39 2z" fill="#b8c0a1" stroke="#95a080"/><path d="M942 407h26v58h-26z" fill="none" stroke="#d3d7b8" stroke-width="2"/>
    <text transform="translate(959 454) rotate(-90)" font-size="12" letter-spacing="3" text-anchor="middle" fill="#7a8669">WELCOME</text>
  `, [1014, 400]);

  const books = object('bookshelf', '七层书架，翻一翻我们的故事', `
    <path d="M304 365h43v158h-43z" fill="#c4ab87" stroke="#9c8668" stroke-width="1.3"/>
    ${[383,407,431,455,479,503].map(y=>`<path d="M308 ${y}h35" stroke="#a38c6b" stroke-width="2"/>`).join('')}
    ${book(310,367,'#b6c2a7',14)}${book(323,366,'#d6bd9e',15)}
    ${book(311,388,'#d0b398',17)}${book(326,389,'#a4b49b',16,8)}
    ${book(311,412,'#c7c4a8',17)}${book(325,413,'#cfa995',16,-5)}
    ${book(311,436,'#a5b59e',17)}${book(325,436,'#d5c9ac',17)}
    <path d="M310 461h28v12h-28z" fill="#ded0b3"/><path d="M314 465h20m-20 4h20" stroke="#b6a182"/>
    ${book(310,484,'#c8ad92',17)}${book(325,486,'#b6bea5',15,-6)}
    <path d="M307 522v8m37-8v8" stroke="#9e8768" stroke-width="3"/>
  `);

  const puzzle = object('puzzle', solved ? '已经拼好的拼图，想起一起完成的晚上' : '大拼图，还差几片就完成了', `
    <g transform="rotate(-3 420 360)"><path d="M355 313l143-1 1 91-146 1z" fill="#bca385" stroke="#9b8166" stroke-width="1.4"/><path d="M361 319h131v78H361z" fill="#f4e8cf"/>
      ${coastalLandscape(365,323,123,70)}
      <g fill="none" stroke="#61775f" stroke-width=".55" opacity=".55"><path d="M389 324v17q8-4 7 2 0 5-7 2v18q-7-4-7 2 0 6 7 2v23M414 324v17q-7-4-7 2 0 5 7 2v18q7-4 7 2 0 6-7 2v23M440 324v17q7-4 7 2 0 5-7 2v18q-7-4-7 2 0 6 7 2v23M465 324v17q-7-4-7 2 0 5 7 2v18q7-4 7 2 0 6-7 2v23M366 345h18q-4-7 2-7 5 0 2 7h20q-4 7 2 7 5 0 2-7h20q-4-7 2-7 5 0 2 7h20q-4 7 2 7 5 0 2-7h24M366 367h18q-4 7 2 7 5 0 2-7h20q-4-7 2-7 5 0 2 7h20q-4 7 2 7 5 0 2-7h20q-4-7 2-7 5 0 2 7h24"/></g>
      ${!solved ? `<path d="M440 346h23v18q8-4 8 2 0 6-8 2v21h-23v-20q-8 4-8-2 0-6 8-2z" fill="#e8dcc2" stroke="#b5a489" stroke-width=".8"/><path d="M368 369h20v17h-20z" fill="#e8dcc2"/>` : ''}
    </g>
    ${!solved ? `<g transform="translate(485 407) rotate(15)"><path d="M0 0h13v7q7-3 6 2 0 4-6 2v10H0v-8q-7 3-6-2 0-5 6-3z" fill="#adc8c4" stroke="#7d9c96" stroke-width=".8"/></g>` : ''}
  `, [493, 325]);

  const coffee = `
    <g>
      <path d="M360 408q94-12 192 1l9 101q-103 17-212-1z" fill="#d5c9a9" stroke="#bdb18e" stroke-width="1.4"/>
      <path d="M367 418q94-10 179 0l6 82q-92 12-194 0z" fill="#e7dbc0"/>
      <path d="M366 425l181 1m-183 13h184m-184 13h185m-187 13h188m-188 13h189m-191 13h192" stroke="#d5c7a4" stroke-width="1.2"/>
      <path d="M355 415l-6 1m5 9-6 1m5 10-6 1m5 11-6 1m5 11-6 1m5 11-6 1m5 11-6 1m5 11-6 1m5 11-6 1m213-90 6 1m-5 10 6 1m-5 10 6 1m-5 10 6 1m-5 10 6 1m-5 10 6 1m-5 10 6 1m-5 10 6 1" stroke="#c0b28f" stroke-width="1"/>
      <ellipse cx="455" cy="471" rx="66" ry="30" fill="#a7987a" opacity=".13"/>
      <path d="M405 448l-6 42m105-42 8 42" stroke="#a18b6b" stroke-width="5"/>
      <ellipse cx="454" cy="447" rx="67" ry="33" fill="#d2ba94" stroke="#a68f6d" stroke-width="1.6"/>
      <ellipse cx="454" cy="444" rx="65" ry="30" fill="url(#tableTone)" stroke="#dcc8a5" stroke-width="1"/>
      <path d="M438 429l27-3 5 25-27 4z" fill="#e6e7d2" stroke="#afaf91" stroke-width="1"/><path d="M443 434l17-2m-16 7 17-2m-16 7 10-1" stroke="#b5b89a"/>
      <ellipse cx="483" cy="447" rx="10" ry="5" fill="#f0e6cd" stroke="#b7a183"/><path d="M476 436h13v9q-7 5-13 0z" fill="#d4b69a" stroke="#ad8c70"/><ellipse cx="482" cy="436" rx="6" ry="2.5" fill="#9d7b5d"/><path d="M489 438q9-1 7 5-1 3-7 1" fill="none" stroke="#ad8c70" stroke-width="1.2"/>
    </g>`;

  const plush = object('plush', plushies.length ? '沙发上的玩偶，是一起抓到的小家伙' : '柔软的沙发，给未来的玩偶留个位置', `
    <path d="M360 525q96-12 190 1l4 103q-102 14-203-1z" fill="#9b846e" opacity=".12"/>
    <path d="M360 505q7-17 25-17h134q24 0 29 18l-2 96-189-1z" fill="#d9b6a0" stroke="#a68a75" stroke-width="2"/>
    <path d="M373 496q76-9 157 1l-1 52-157-2z" fill="#e6cbb6" stroke="#c5a68f" stroke-width="1.1"/>
    <path d="M451 497v49" fill="none" stroke="#c5a78f" stroke-width="1.1"/>
    <path d="M373 552q36-5 77 0v45h-78zM454 552q34-4 76 1v44h-76z" fill="#e3c4ad" stroke="#bf9e87" stroke-width="1.2"/>
    <path d="M356 523q8-8 19 0l-1 81q-10 6-20-1zM530 522q9-8 19 0l-1 81q-9 6-19-1z" fill="#d6ad96" stroke="#ae907a" stroke-width="1.3"/>
    <path d="M362 608v11m174-11v11" stroke="#947d63" stroke-width="5"/>
    <g transform="rotate(-10 403 527)"><path d="M386 510q16-5 31 0l1 33q-18 4-34-1z" fill="#aab59b" stroke="#8d9b7d"/><path d="M390 515l22 23m-20-24 20 21m-21-10 13-13" stroke="#cdd2b8" stroke-width="1"/></g>
    <path d="M478 539l38 4-1 49-39-5z" fill="#e9dec2" stroke="#c8b89a"/>
    <path d="M481 546l32 3m-33 6 33 3m-33 6 32 3m-33 6 32 3m-32 6 31 3" stroke="#c2bca0" stroke-width="2"/>
    <path d="M478 589l-2 6m8-5-1 6m8-4-1 6m8-4-1 6m8-4-1 6m8-4-1 6" stroke="#c1b294"/>
    ${plushies.length ? `<g transform="translate(445 553)"><ellipse cy="15" rx="18" ry="22" fill="#d2bb91" stroke="#ac9273"/><circle cx="-12" cy="-12" r="9" fill="#d2bb91" stroke="#ac9273"/><circle cx="12" cy="-12" r="9" fill="#d2bb91" stroke="#ac9273"/><circle cy="-3" r="17" fill="#dcc8a7" stroke="#ac9273"/><ellipse cy="4" rx="9" ry="6" fill="#eee2c9"/><circle cx="-6" cy="-5" r="1.7" fill="#75644f"/><circle cx="6" cy="-5" r="1.7" fill="#75644f"/><path d="M-2 1l4 0-2 3z" fill="#97745d"/><path d="M-7 20h14" stroke="#bf9f7d" stroke-width="2"/><ellipse cx="-13" cy="31" rx="8" ry="5" fill="#c6aa80"/><ellipse cx="13" cy="31" rx="8" ry="5" fill="#c6aa80"/></g>` : ''}
  `, [544, 534]);

  const bed = object('bed', '好好睡一觉，明天又是新的一天', `
    <path d="M653 379q100-6 200 0l7 254q-103 12-213 0z" fill="#b5a080" opacity=".17"/>
    <path d="M648 363l209 2 2 255-213 1z" fill="#bda585" stroke="#988165" stroke-width="2.2"/>
    <path d="M652 364q100-10 200 1v44H652z" fill="#d6c1a0" stroke="#a88f70" stroke-width="1.4"/>
    <path d="M661 382q92-6 181 1l3 225-187 1z" fill="#f3ead6" stroke="#c0b296" stroke-width="1.4"/>
    <path d="M672 389q31-8 66 0l-1 48q-35 7-66-1z" fill="#f7f0df" stroke="#c6b89d" stroke-width="1.1"/>
    <path d="M764 390q31-7 65 1l1 46q-34 8-67-1z" fill="#f7f0df" stroke="#c6b89d" stroke-width="1.1"/>
    <path d="M679 394q24-3 52 1m40-1q25-2 51 2" fill="none" stroke="#e0d5bb" stroke-width="1.3"/>
    <path d="M655 444q96 5 193-1l5 161q-97 12-201 1z" fill="#aab79a" stroke="#819172" stroke-width="1.9"/>
    <path d="M655 445q95 6 193-1l1 27q-99 6-195 0z" fill="#c3ccaf" stroke="#9daa8b" stroke-width="1"/>
    <path d="M661 477q11 48 1 115m177-113q-10 64 1 112M742 481q-5 45 1 110" fill="none" stroke="#92a185" stroke-width="1.2" opacity=".55"/>
    ${Array.from({length:8},(_,i)=>`<path d="M${675+i*23} 481v117" fill="none" stroke="#d0d7ba" stroke-width=".9" stroke-dasharray="2 7" opacity=".55"/>`).join('')}
    <path d="M654 608q99 11 199-1v15q-101 10-200 0z" fill="#c4ceb0" stroke="#97a487" stroke-width="1"/>
    <path d="M653 626v12m196-12v12" stroke="#a28a6b" stroke-width="5"/>
    <path d="M887 536l36-1 2 75-40 1z" fill="#d7c5a2" stroke="#b5a17f"/><path d="M892 541h25v64h-25z" fill="none" stroke="#e6d8b9"/><path d="M894 547h20m-20 6h20m-20 6h20m-20 6h20m-20 6h20m-20 6h20m-20 6h20m-20 6h20m-20 6h20" stroke="#c2b08b" stroke-width="1"/>
  `, [838, 476]);

  const switchBody = object('switch', '床头的 Switch，插上卡带打开投影', `
    <path d="M565 522h65v66h-65z" fill="#c9b18d" stroke="#a58e6c" stroke-width="1.3"/>
    <path d="M561 512l73-1-2 24-70 1z" fill="#dec9a5" stroke="#ae9571" stroke-width="1.3"/>
    <path d="M570 548h54v28h-54z" fill="#d3bf9a" stroke="#b09a76"/><path d="M591 559h12" stroke="#a28e6c" stroke-width="2" stroke-linecap="round"/>
    <path d="M568 588v7m54-7v7" stroke="#a68e6d" stroke-width="3"/>
    <g transform="translate(570 511) rotate(-6)"><rect width="54" height="25" rx="5" fill="#a9b5a1" stroke="#7e8d7a" stroke-width="1.2"/><path d="M10 2h34v21H10z" fill="#52675e"/><path d="M13 5h28v15H13z" fill="${projection ? '#b4c6aa' : '#73847a'}"/><circle cx="5" cy="8" r="2" fill="#647662"/><path d="M3 16h4m-2-2v4m43-6h3m-1.5-1.5v3" stroke="#667561" stroke-width="1"/><path d="M49 5h1v1h-1z" fill="#d4ddd0"/></g>
    <path d="M618 501l12-1 1 13-12 1z" fill="#bcad8b" stroke="#9c8c6c"/><path d="M621 504h6v4h-6z" fill="#e4d4b2"/>
  `, [622, 514]);

  const projector = `
    <g>
      ${projection ? `<path d="M594 465L508 133h191L606 465z" fill="#f5e7bb" opacity=".23"/><path d="M594 465L508 133M606 465l93-332" fill="none" stroke="#ead8a5" opacity=".35" stroke-width="1"/>` : ''}
      <ellipse cx="590" cy="489" rx="23" ry="8" fill="#b9b49a" opacity=".4"/>
      <path d="M589 418v70" stroke="#a89575" stroke-width="3"/><ellipse cx="589" cy="488" rx="17" ry="5" fill="#c4b397" stroke="#a18e71"/>
      <path d="M569 397q20-9 40 0l-4 23h-32z" fill="#eadbc0" stroke="#b9a489" stroke-width="1.1"/>
      <path d="M571 398q19-6 36 0" stroke="#f7edd7" stroke-width="3"/>
      <path d="M573 456h44v24h-44z" fill="#dedac4" stroke="#a8ab92" stroke-width="1.2"/>
      <path d="M572 455l43-1 4 8h-46z" fill="#ece7d3" stroke="#b8b79e" stroke-width="1"/>
      <ellipse cx="596" cy="458" rx="7" ry="4" fill="${projection ? '#eee0ae' : '#859484'}" stroke="#7e8b77" stroke-width="1.2"/>
      <path d="M578 468h6m-6 3h6m22-4h7m-7 3h7" stroke="#a4a98f" stroke-width=".8"/>
    </g>`;

  const wardrobe = `
    <g>
      <path d="M939 526h95v117h-95z" fill="#c4ae8b" stroke="#a28c6c" stroke-width="1.4"/>
      <path d="M944 532h39v104h-39zM987 532h41v104h-41z" fill="#d7c3a1" stroke="#af9674" stroke-width="1"/>
      <path d="M977 571v22m16-22v22" stroke="#9f8e6e" stroke-width="2.4" stroke-linecap="round"/>
      <path d="M947 536h33v96m10-96h34v96" fill="none" stroke="#e0ceb0" stroke-width="1"/>
      <path d="M945 645v9m82-9v9" stroke="#9d8666" stroke-width="3"/>
      <path d="M929 548h-41v-18h41z" fill="#d2bd9b" stroke="#ad9674"/>
      <path d="M891 536h34" stroke="#ead9b8"/>
    </g>`;

  return `<svg class="room-illustration" xmlns="http://www.w3.org/2000/svg" viewBox="25 75 1055 610" role="group" aria-labelledby="roomTitle roomDescription">
    <title id="roomTitle">我们的小房间</title>
    <desc id="roomDescription">温暖的剪纸房间。左侧是阳台和浴室，长桌在上方，床和沙发在下方。使用方向键、WASD 或点击地面，让小人自由走动。走近花架、拼图、床头 Switch、花瓶、冰箱、旅行票盒、小锅和门，发现生活里的小惊喜。</desc>
    <defs>
      <clipPath id="fridgeRealPhotoClip"><rect x="751" y="209" width="27" height="23"/></clipPath>
      <pattern id="floorPattern" width="150" height="70" patternUnits="userSpaceOnUse"><rect width="150" height="70" fill="#e8d9b9"/><path d="M0 0h150M0 35h150M75 0v35M0 35v35M150 35v35" fill="none" stroke="#d1be98" stroke-width="1"/><path d="M8 9q23-3 53 0m21 17q30-4 58 0M5 46q25 3 55 0m26 13q24-3 55 0" fill="none" stroke="#d9c6a0" stroke-width=".7" opacity=".65"/></pattern>
      <pattern id="tilePattern" width="36" height="36" patternUnits="userSpaceOnUse"><rect width="36" height="36" fill="#dfe0cf"/><path d="M0 0h36v36" fill="none" stroke="#c8cebc" stroke-width="1"/></pattern>
      <pattern id="bathTiles" width="26" height="26" patternUnits="userSpaceOnUse"><rect width="26" height="26" fill="#d6ded2"/><path d="M0 0h26v26" fill="none" stroke="#bfccbf" stroke-width="1"/></pattern>
      <pattern id="deskGrain" width="100" height="55" patternUnits="userSpaceOnUse"><rect width="100" height="55" fill="#d8c29e"/><path d="M4 8q38-5 90-1M0 23q50-5 100-1M4 42q39 4 92 0" stroke="#c6ad86" stroke-width=".6" fill="none" opacity=".65"/></pattern>
      <linearGradient id="tableTone" x2="0" y2="1"><stop stop-color="#dec9a4"/><stop offset="1" stop-color="#d6be98"/></linearGradient>
      <linearGradient id="fridgeTone" x2="1" y2="0"><stop stop-color="#e9ead6"/><stop offset="1" stop-color="#dcdfc8"/></linearGradient>
      <filter id="paperEdge" x="-5%" y="-5%" width="110%" height="115%"><feDropShadow dx="0" dy="6" stdDeviation="3" flood-color="#776544" flood-opacity=".11"/></filter>
    </defs>
    <style>.room-illustration{overflow:visible}.room-illustration .room-handwriting{font-family:KaiTi,STKaiti,FangSong,serif}.room-illustration .room-object{cursor:pointer;outline:none}.room-illustration .hotspot-dot{opacity:.8;transition:opacity .15s}.room-illustration .room-object:hover .hotspot-dot,.room-illustration .room-object:focus-visible .hotspot-dot{opacity:1}.room-illustration .room-object:focus-visible .hotspot-dot circle{stroke:#566348;stroke-width:2.5}@media(prefers-reduced-motion:reduce){.room-illustration .hotspot-dot{transition:none}}</style>
    <g stroke-linejoin="round" stroke-linecap="round">
      <ellipse cx="560" cy="665" rx="479" ry="16" fill="#c7b998" opacity=".13"/>
      <path d="M51 112l226-3 1-19 772 2 4 556-1000 1z" fill="#c7b89c" opacity=".15" transform="translate(4 9)"/>
      <g filter="url(#paperEdge)">
        <path d="M51 112l228-3V90l772 1 1 557-1000 1z" fill="#e5d8bc" stroke="#c8b89a" stroke-width="1.6"/>
        <path d="M60 210h218v429H60z" fill="url(#tilePattern)"/>
        <path d="M292 230h748v408H292z" fill="url(#floorPattern)"/>
        <path d="M288 100l750 2v140l-748 2z" fill="#f1e7cf" stroke="#cdbf9f" stroke-width="1.3"/>
        <path d="M290 235h752v11H290z" fill="#d7c7a7" stroke="#bcaa87" stroke-width=".8"/>
        <path d="M275 333h31v54h-31zM275 500h31v75h-31z" fill="url(#tilePattern)"/>
        <path d="M289 100h14v233h-14zM289 387h14v113h-14zM289 575h14v60h-14z" fill="#e0d3b6" stroke="#c4b391" stroke-width="1.1"/>
        <path d="M289 334h14m-14 52h14M289 501h14m-14 73h14" fill="none" stroke="#b6a487" stroke-width="2"/>
        <path d="M1041 105h10v249h-10zM1041 468h11v177h-11z" fill="#dfcfb0" stroke="#bfae8e" stroke-width="1.2"/>
        <path d="M54 640h993v13H54z" fill="#d8c8a7" stroke="#bfae8d" stroke-width="1.2"/>
        <path d="M54 114v529h10V120" fill="#d7cfb4" stroke="#bbae91" stroke-width="1.1"/>
      </g>
      <path d="M302 247l265 1-94 169-169 24z" fill="#f6edce" opacity=".45"/>
      <path d="M304 249h120l-48 82-72 22z" fill="#fbf3d8" opacity=".55"/>

      <!-- The balcony and the two separate small rooms follow the supplied plan. -->
      ${balcony}
      <g>
        <path d="M66 401h95v231H66z" fill="url(#tilePattern)"/>
        <path d="M172 401h106v231H172z" fill="url(#bathTiles)"/>
        <path d="M63 392h216v12H63zM160 402h12v146h-12zM160 606h12v32h-12z" fill="#e8e2cc" stroke="#c4c4ac" stroke-width="1.2"/>
        <path d="M160 548h12v58h-12z" fill="url(#tilePattern)"/>
        <path d="M275 387h15v113h-15zM275 575h15v66h-15z" fill="#e2d7bb" stroke="#c1b393" stroke-width="1.1"/>
        <path d="M278 500l-8-64 8-2 8 66z" fill="#e4d8bd" stroke="#b8aa8d" stroke-width="1"/><path d="M274 447l4 1" stroke="#9a9d84" stroke-width="2"/>
        <path d="M278 500q-42 0-42 54" fill="none" stroke="#c6b99d" stroke-width=".8" stroke-dasharray="3 5" opacity=".65"/>
        <path d="M160 548l-41-16 3-7 42 16z" fill="#e3d8bd" stroke="#b8aa8d" stroke-width="1"/><path d="M126 532l1-3" stroke="#9a9d84" stroke-width="1.8"/>
        <path d="M94 445h36v32H94z" fill="#f0eee0" stroke="#b5bbaa" stroke-width="1.2"/>
        <ellipse cx="112" cy="490" rx="23" ry="30" fill="#eeeee0" stroke="#b4bcaa" stroke-width="1.5"/><ellipse cx="112" cy="491" rx="14" ry="20" fill="#cbd5c8" stroke="#b3bead"/><path d="M97 449h29" stroke="#d5d8c8"/>
        <path d="M194 430h69v115h-69z" fill="#c9d7cb" fill-opacity=".58" stroke="#a8beae" stroke-width="1.5"/>
        <path d="M199 433v105m59-105v105" stroke="#eaf0e3" stroke-width="2"/>
        <path d="M226 437v28m0-28q-7-12-17-1" fill="none" stroke="#91a799" stroke-width="2.2"/><ellipse cx="209" cy="437" rx="8" ry="3" fill="#b4c5b5" stroke="#8da493"/>
        <path d="M202 454l-2 15m8-15-1 15m7-14v14" stroke="#a7c4b3" stroke-width=".9" stroke-dasharray="2 3"/>
        <path d="M185 575h79v37h-79z" fill="#b8c8b7" stroke="#94ac99"/><path d="M190 581h69v25h-69z" fill="none" stroke="#d1ddca"/>
        <text x="111" y="589" text-anchor="middle" class="room-handwriting" font-size="14" fill="#8c9781">小小洗手间</text>
      </g>
      ${plants}
      <g class="balcony-doorway" pointer-events="none">
        <path d="M278 333l-7-55 8-2 7 57z" fill="#e4d8bd" stroke="#b8aa8d" stroke-width="1"/>
        <path d="M273 292l4-1" stroke="#9a9d84" stroke-width="2"/>
        <path d="M278 334q-32 4-32 43" fill="none" stroke="#b8b59b" stroke-width=".8" stroke-dasharray="3 5" opacity=".7"/>
        <path d="M277 384h25" stroke="#d4c6a7" stroke-width="1.2"/>
      </g>

      <!-- The window sits beside the long shared desk. -->
      <g>
        <path d="M316 117h129v100H316z" fill="#c8b89a" stroke="#ad9979" stroke-width="1.6"/>
        <path d="M322 122h117v88H322z" fill="#dce3cf"/>
        <path d="M323 168q35-17 60-8 27-19 55-5v55H323z" fill="#becdb4"/>
        <path d="M323 184q35-13 58 0 30-14 57-7v33H323z" fill="#aabda1"/>
        <path d="M380 122v88m-58-45h117" stroke="#f8f0dc" stroke-width="5"/>
        <path d="M313 212h135v7H313z" fill="#d9c7a5" stroke="#bba584"/>
        <path d="M310 114h141" stroke="#b6a181" stroke-width="3"/>
        <path d="M311 118q12 35 0 83l19-1q-8-41 4-82zM432 118q10 41-1 82l21 2q-11-45-1-84z" fill="#eadac0" stroke="#c5b396" stroke-width="1"/>
        <path d="M316 121q10 36 0 75m129-75q-7 38 1 75" stroke="#d5c2a4" fill="none" stroke-width="1"/>
      </g>
      <g>
        <path d="M490 116h218" stroke="#b6a88b" stroke-width="4"/>
        <path d="M497 119h204v104H497z" fill="${projection ? '#ece4c6' : '#efe9d7'}" stroke="#c6baa0" stroke-width="1.1"/>
        ${projection ? `${miniLandscape(504,126,190,89,true)}<path d="M573 154h52v35h-52z" fill="#e1d1ae" opacity=".8"/><text x="599" y="174" text-anchor="middle" class="room-handwriting" fill="#647c67" font-size="12">一起玩吧</text>` : `<path d="M510 135h178m-178 70h178" stroke="#e1d9c2" stroke-width=".8"/><text x="599" y="179" text-anchor="middle" class="room-handwriting" fill="#c0b59b" font-size="14">今晚看点什么？</text>`}
        <path d="M495 225h209" stroke="#b9ab8d" stroke-width="3"/><path d="M599 226v7" stroke="#b9ab8d" stroke-width="1.2"/>
      </g>
      <g><circle cx="772" cy="142" r="24" fill="#c9b390" stroke="#a48e70" stroke-width="1.3"/><circle cx="772" cy="142" r="20" fill="#f3ead5"/><path d="M772 128v15l10 5" fill="none" stroke="#958f73" stroke-width="1.7"/>${Array.from({length:12},(_,i)=>`<path d="M772 125v2" transform="rotate(${i*30} 772 142)" stroke="#b9ad90"/>`).join('')}</g>
      ${mirror}
      ${desk}${cooking}${vase}${fridge}${shelf}${tickets}
      ${books}${puzzle}${coffee}${plush}${bed}${projector}${switchBody}${wardrobe}${door}
      <g class="pencil-contours" fill="none" stroke="#8e7b61" stroke-width=".7" opacity=".44" pointer-events="none"><path d="M330 251l156-1m-155 47 192-1m155-48 30-1 5 46M365 506q5-14 23-14h126m-137 108 67 2m91-76-1 64M650 371l1 66m203-64 2 60m-203 190 64 1m-61-143q-4 57-2 109M944 534v77m46-75h32v66m-66-309h59m-58 35h26M746 202v37m74 19 1 54"/><path d="M361 597l12-5m-10 9 13-6m162-65 8-6m-8 11 8-6M652 610l8-5m-8 10 9-6m184-164 6-4m-6 10 7-5M329 287l9-4m-8 9 9-5M742 315l7-4m-7 8 7-4" opacity=".7"/></g>
      <g fill="none" stroke="#b6a489" stroke-width=".7" opacity=".6"><path d="M320 627l12 1m-6-8 8 3m198 15 25-1m324-145 28-1m-32 5 13 1M875 365l19-2m-14 7 8-1M310 564l20-1m-18 7 10-1"/></g>
      <g transform="translate(885 646) rotate(-4)"><path d="M0 0q14-6 28 0l-1 9H0z" fill="#d1b899" stroke="#a89070"/><path d="M35 0q15-6 28 0l-1 9H35z" fill="#d1b899" stroke="#a89070"/><path d="M3 2h21m15 0h20" stroke="#ebd6b6" stroke-width="2"/></g>
    </g>
  </svg>`;
}

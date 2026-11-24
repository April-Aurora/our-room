const paths = {
  home:'<path d="M4 12 16 3l12 9v16H5V12m8 16V17h7v11M9 11h3m9 0h3"/>',
  book:'<path d="M16 8C10 3 3 6 3 6v21s7-3 13 1c6-4 13-1 13-1V6s-7-3-13 2Zm0 0v20M7 11l5 1m-5 5 5 1m8-6 5-1m-5 7 5-1"/>',
  collection:'<path d="M5 11h22v17H5zM3 5h26v7H3zm13 7v16M11 5c-7 0-5-7-1-5l6 5c5-9 12-4 6 0"/>',
  bag:'<path d="M7 10h18l3 18H4L7 10Zm4 0V7c0-7 10-7 10 0v3M10 16v2m12-2v2M12 23c2 2 6 2 8 0"/>',
  door:'<path d="M7 28V4l18-2v26H7Zm2 0h20M19 15v3M3 28h4"/>',
  sun:'<circle cx="16" cy="16" r="6"/><path d="M16 2v4m0 20v4M2 16h4m20 0h4M6 6l3 3m14 14 3 3M6 26l3-3M23 9l3-3"/>',
  moon:'<path d="M25 22A12 12 0 0 1 10 4a12 12 0 1 0 15 18Z"/>',
  leaf:'<path d="M6 26C3 9 18 5 28 4c1 14-8 23-18 20M5 29 22 10m-9 10-1-6m6 1h6"/>',
  water:'<path d="m16 3-8 12a10 10 0 1 0 16 0L16 3ZM11 20c0 3 2 5 5 5"/>',
  puzzle:'<path d="M4 5h9c-2 7 8 7 6 0h9v9c-7-2-7 8 0 6v9h-9c2-7-8-7-6 0H4v-9c7 2 7-8 0-6V5Z"/>',
  flower:'<path d="M16 18v12m0-4c-7 0-9-6-9-6 6-1 9 2 9 6Zm0-4c7 0 9-5 9-5-6-1-9 2-9 5Z"/><path d="M16 6c-7-9-14 1-7 5-8 5 0 13 6 6 5 8 15 1 8-5 8-5 0-14-7-6Z"/><circle cx="16" cy="11" r="3"/>',
  pot:'<path d="M6 13h20v9c0 9-20 9-20 0v-9Zm-3 1h3m20 0h3M4 10h24M13 7h6m-6-3c-4-3 2-4 0-6m7 8c-3-3 2-4 0-6"/>',
  camera:'<path d="M3 10h7l3-5h8l3 5h5v18H3V10Z"/><circle cx="16" cy="18" r="6"/><path d="M25 13h1"/>',
  ticket:'<path d="m4 8 23-4 4 20-23 5-1-7c6-1 4-7-1-6L4 8Zm17-2 4 19"/>',
  music:'<path d="M13 24V5l14-3v19M13 10l14-3"/><ellipse cx="8" cy="25" rx="5" ry="4"/><ellipse cx="22" cy="22" rx="5" ry="4"/>',
  mute:'<path d="M13 24V5l14-3v16M13 10l14-3M3 3l26 26"/><ellipse cx="8" cy="25" rx="5" ry="4"/>',
  settings:'<path d="m12 3 1 4-4 2-4-1-3 6 4 2v4l-3 3 4 5 4-2 4 2 1 4h7l1-4 4-2 4 1 3-6-4-2v-4l3-3-4-5-4 2-4-2-1-4Z" transform="translate(0 -1) scale(.88)"/><circle cx="16" cy="15" r="5"/>',
  close:'<path d="m8 8 16 16M24 8 8 24"/>',
  check:'<path d="m7 16 6 6L26 8"/>',
  arrow:'<path d="M4 16h24m-8-7 8 7-8 7"/>',
  plus:'<path d="M16 6v20M6 16h20"/>',
  heart:'<path d="M16 28 4 16C-5 5 10-3 16 7c7-10 21-2 12 9L16 28Z"/>',
  coin:'<circle cx="16" cy="16" r="12"/><path d="M16 7v18m5-15c-11-5-13 7-5 6 9-1 7 10-5 5"/>',
  switch:'<rect x="2" y="6" width="28" height="20" rx="6"/><path d="M9 6v20M23 6v20M14 11h5v10h-5Z"/><circle cx="6" cy="12" r="1"/><circle cx="26" cy="20" r="1"/>',
  fridge:'<rect x="5" y="2" width="22" height="28" rx="3"/><path d="M5 13h22M9 7v3m0 8v5m6-4 5-1 1 5-5 1Z"/>',
  bear:'<circle cx="8" cy="7" r="5"/><circle cx="24" cy="7" r="5"/><ellipse cx="16" cy="17" rx="13" ry="12"/><path d="M10 14v1m12-1v1m-8 5h4m-2 0v3m-3 0 3-1 3 1"/>',
  edit:'<path d="m8 22-3 7 7-3L29 9l-4-5L8 22Zm0 0 4 4M21 8l4 5"/>',
  download:'<path d="M16 3v19m-7-7 7 7 7-7M4 23v6h24v-6"/>',
  shelf:'<path d="M5 3v27M27 3v27M5 10h22M5 19h22M5 28h22M9 10V4h5v6m5 9v-6h4v6"/>',
};
export function icon(name, cls='') { return `<svg class="icon ${cls}" viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.65" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths[name] || paths.heart}</svg>`; }

export function postcard(theme='seaside', className='') {
  const city = /kyoto|japan|京都|train/.test(theme);
  const lake = /hangzhou|lake|杭州|west/.test(theme);
  const shop = /book|market|arcade|花|书|street/.test(theme);
  return `<svg class="postcard-art ${className}" viewBox="0 0 420 260" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <defs><pattern id="hatch-${theme.replace(/[^a-z]/g,'')}" patternUnits="userSpaceOnUse" width="7" height="7"><path d="m0 7 7-7" stroke="#776f59" stroke-width=".4" opacity=".15"/></pattern></defs>
    <path fill="#dfebdf" d="M0 0h420v260H0z"/><path fill="#f6e9c4" d="M0 0h420v109L0 137Z"/><circle cx="321" cy="58" r="27" fill="#e8bb80"/>
    <path fill="#b7c4a8" d="m0 140 70-70 80 65 68-93 102 90 100-65v193H0Z"/>
    <path fill="#8eaa9e" d="m0 163 100-43 82 52 91-59 147 43v104H0Z"/>
    ${shop ? `<path d="M59 103h291v136H59Z" fill="#f1dfbe" stroke="#796b51" stroke-width="2"/><path d="m46 100 22-24h270l27 24Z" fill="#b97765" stroke="#796b51" stroke-width="2"/><path d="M72 114h268v23H72Z" fill="#f5ead6"/><path d="M72 114h27v23H72zm54 0h27v23h-27zm54 0h27v23h-27zm54 0h27v23h-27zm54 0h27v23h-27z" fill="#879376"/><path d="M87 150h72v71H87zm114-8h58v97h-58zm80 8h45v71h-45z" fill="#b7c9c1" stroke="#796b51" stroke-width="2"/><path d="M94 157h56m-56 13h56m-56 13h56m58-27h44m-44 16h44" stroke="#f6ead2" stroke-width="5"/><path d="M31 241h358" stroke="#776f59" stroke-width="2"/>` : `<path fill="#b9d0cb" d="M0 172c70-19 125 19 209 0s163 12 211-2v90H0Z"/><path d="M0 205c79-27 138 26 215 4s135 16 205-6M20 229h92m33-44h52m93 42h110" stroke="#f6f1dd" stroke-width="3" stroke-linecap="round"/><path fill="#ede0b7" d="M0 239c103-22 189-3 263 21H0Z"/>`}
    ${city ? `<path d="M130 168h150v65H130Z" fill="#e8d6ad" stroke="#74634d" stroke-width="2"/><path d="m110 170 35-31h120l35 31Z" fill="#7d8b71" stroke="#74634d" stroke-width="2"/><path d="M160 139v-36h90v36" fill="#e8d6ad" stroke="#74634d" stroke-width="2"/><path d="m142 107 38-28h49l38 28Z" fill="#7d8b71" stroke="#74634d" stroke-width="2"/><path d="M196 187h22v46" stroke="#74634d" stroke-width="3"/>` : ''}
    ${lake ? `<path d="M70 179q150-75 287 0" stroke="#efe5cb" stroke-width="12"/><path d="M74 180q148-73 280-1m-219-25v15m48-26v17m48-18v18m48-7v17" stroke="#796f57" stroke-width="2"/>` : ''}
    <path d="M25 260c8-34 2-72 16-101m-1 33c-25-18-28-37-19-50 23 10 26 30 19 50m1 22c29-10 37-25 32-40-23 0-34 15-32 40" fill="#839572" stroke="#6a775a" stroke-width="1.5"/>
    <path d="M0 0h420v260H0z" fill="url(#hatch-${theme.replace(/[^a-z]/g,'')})"/>
  </svg>`;
}

export function plantArt(stage=2) {
  return `<svg class="plant-art" viewBox="0 0 200 210" fill="none" aria-hidden="true"><ellipse cx="100" cy="191" rx="64" ry="7" fill="#b0aa95" opacity=".15"/><path d="m70 143 10 45q20 12 41 0l11-45" fill="#c69579" stroke="#766853" stroke-width="2"/><path d="M66 140q34-10 70 0v10q-35 10-70 0Z" fill="#dfb496" stroke="#766853" stroke-width="2"/><path d="M99 140q-8-31 4-63" stroke="#6c7b58" stroke-width="3"/><path d="M99 127c-30 0-43-23-36-32 23 0 36 14 36 32Zm0-15c27-2 35-22 29-29-24 3-30 16-29 29Z" fill="#899b74" stroke="#6c7b58" stroke-width="1.5"/>${stage>1?'<path d="M102 91c-26-5-32-28-25-34 24 5 30 22 25 34Zm2-8c24-9 26-29 19-34-21 10-25 23-19 34Z" fill="#9bad83" stroke="#6c7b58" stroke-width="1.5"/>':''}${stage>2?'<path d="M104 77q-5-19 1-31" stroke="#6c7b58" stroke-width="3"/><path d="M105 47c-24-9-11-31 0-19 12-16 29 5 11 15 8 21-18 25-11 4Z" fill="#d2a08d" stroke="#967761" stroke-width="1.5"/><circle cx="109" cy="39" r="5" fill="#e5c77e"/>':''}<path d="m88 160 3 16m22-17-3 22" stroke="#ae7c65" stroke-width="1.5"/></svg>`;
}

export function vaseArt(flowerId = null) {
  const kind = ['tulip', 'daisy', 'sunflower'].includes(flowerId) ? flowerId : null;
  const bloom = (x, y, scale = 1, angle = 0) => {
    const transform = `translate(${x} ${y}) rotate(${angle}) scale(${scale})`;
    if (kind === 'tulip') {
      return `<g transform="${transform}"><path d="M-14-16l8 7 6-12 7 12 9-7q2 24-16 29-19-4-14-29Z" fill="#d79d88" stroke="#99765e" stroke-width="1.5"/><path d="M-6-9q-6 17 6 22M7-9q7 16-7 22" stroke="#b7836e" stroke-width="1.2"/><path d="M-10-7q-2 10 4 15M11-7q2 9-3 15" stroke="#e8bca3" stroke-width="1.5"/><path d="m-13-9 2 12m24-14-1 9" stroke="#9c7961" stroke-width=".6" opacity=".4"/></g>`;
    }
    const sunflower = kind === 'sunflower';
    const petalCount = sunflower ? 13 : 11;
    return `<g transform="${transform}">${Array.from({length:petalCount},(_,i)=>`<ellipse transform="rotate(${i*360/petalCount})" cy="${sunflower ? -11 : -10}" rx="${sunflower ? 4.4 : 3.8}" ry="${sunflower ? 11 : 9}" fill="${sunflower ? '#d4b05a' : '#f9f1dc'}" stroke="${sunflower ? '#a88c48' : '#bcae91'}" stroke-width="1"/>`).join('')}<circle r="${sunflower ? 9 : 6}" fill="${sunflower ? '#987951' : '#d9b85e'}" stroke="${sunflower ? '#7f6547' : '#ad904a'}" stroke-width="1.1"/>${sunflower ? '<path d="M-5-4h10m-11 4h12m-10 4h8M-3-6v12m5-12v12" stroke="#bb9861" stroke-width=".9" opacity=".75"/>' : '<circle cx="-2" cy="-2" r="1" fill="#ebd08b"/><circle cx="2" cy="1" r="1.2" fill="#c6a64f"/>'}</g>`;
  };
  const stems = kind ? `<g stroke-linecap="round" stroke-linejoin="round"><path d="M99 137q-4-41-26-70m28 71q11-41 32-68M100 139q3-46 2-92" stroke="#78865f" stroke-width="2.5"/><path d="M96 120q-25-5-28-29 24 4 28 29ZM106 111q22-1 28-24-23 1-28 24Z" fill="#9daa7f" stroke="#7c8863" stroke-width="1.3"/><path d="M94 118 73 97m35 11 21-16" stroke="#b8c29a" stroke-width="1.1"/>${kind === 'daisy' ? '<path d="M99 138q-14-34-42-39m45 39q25-29 48-23" stroke="#78865f" stroke-width="2"/>' : ''}${bloom(72,65,kind === 'sunflower' ? .8 : .95,-19)}${bloom(134,68,kind === 'sunflower' ? .76 : .85,21)}${bloom(102,45,kind === 'sunflower' ? .96 : 1.05,4)}${kind === 'daisy' ? bloom(55,97,.65,-20)+bloom(151,112,.67,15) : ''}</g>` : '';
  return `<svg class="plant-art vase-art" viewBox="0 0 200 210" width="200" height="210" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><g stroke-linecap="round" stroke-linejoin="round"><ellipse cx="101" cy="193" rx="51" ry="7" fill="#aba48a" opacity=".14"/><path d="M58 195q44-5 88 0" stroke="#cfc3a7" stroke-width="1" opacity=".55"/>${stems}<path d="M88 122q1 14-8 24-18 21-8 35 9 17 30 16 23 0 31-18 8-15-9-34-10-12-10-24Z" fill="#d8deca" stroke="#8f9981" stroke-width="1.7"/><path d="M93 126q1 14-8 25-13 16-7 29 7 12 20 13" fill="#e8e9d6"/><path d="M118 145q17 16 12 31-4 15-20 18" stroke="#bdc8b0" stroke-width="4"/><ellipse cx="101" cy="122" rx="13" ry="4.2" fill="#e6e7d3" stroke="#8f9981" stroke-width="1.5"/><ellipse cx="101" cy="122" rx="8.5" ry="2" fill="#a1af96"/>${kind ? '<path d="M99 123v-10m3 10 3-11" stroke="#7f8d68" stroke-width="2"/>' : ''}<path d="M78 156q23 7 48 0M77 160q24 7 50 0" stroke="#aebba2" stroke-width=".8" opacity=".5"/><path d="M82 173q-2 9 6 13m2 3 5 1M117 137l5 7m5 35-3 7" stroke="#7f8c73" stroke-width=".65" opacity=".45"/><path d="M80 153q-7 15-1 24" stroke="#f3f1dc" stroke-width="2"/></g></svg>`;
}

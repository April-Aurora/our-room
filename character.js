import { normalizeAvatar, avatarPalette, avatarFeatures } from './avatar.js';

// The position of this paper-cut character is its feet, at (0, 0).
// Movement updates only #player's transform and data-facing/data-walking.

function playerFrontDrawing() {
  return `<g class="player-arm player-arm-left"><path d="M-8-26q-6 3-7 14l5 1 5-12" fill="#a5b18e" stroke="#756d59" stroke-width=".85"/><path d="M-15-13q-1 6 2 6 4-1 3-5" fill="#e9c6a4" stroke="#8a715a" stroke-width=".7"/><path d="m-13-20 5 2m-6 3 5 2" stroke="#ece6cb" stroke-width="1.8"/></g>
    <g class="player-arm player-arm-right"><path d="M8-26q6 3 7 14l-5 1-5-12" fill="#a5b18e" stroke="#756d59" stroke-width=".85"/><path d="M15-13q1 6-2 6-4-1-3-5" fill="#e9c6a4" stroke="#8a715a" stroke-width=".7"/><path d="m13-20-5 2m6 3-5 2" stroke="#ece6cb" stroke-width="1.8"/></g>
    <path d="M-8-28q8-4 16 0l3 17q-10 5-22 0Z" fill="#9ca986" stroke="#756d59" stroke-width="1"/>
    <path d="M-8-24h16m-17 5h18m-19 5h20" stroke="#ede7ce" stroke-width="2.25"/>
    <path d="m-5-29 5 4 5-4M-9-10q9 2 18 0" fill="none" stroke="#71805e" stroke-width="1.1"/>
    <path d="M-3-33v6q3 3 6 0v-6" fill="#dfb491" stroke="#96765c" stroke-width=".6"/>
    <path d="M-12-36q-1-12 12-12 14 0 13 13l-2 9q-4 5-9 3-11 3-14-7Z" fill="#7c604d" stroke="#655240" stroke-width="1"/>
    <ellipse cx="-11.5" cy="-32" rx="2" ry="3" fill="#e7bea0" stroke="#96765c" stroke-width=".6"/>
    <ellipse cx="11.5" cy="-32" rx="2" ry="3" fill="#e7bea0" stroke="#96765c" stroke-width=".6"/>
    <path d="M-10-38q9-7 20 0v7q-1 10-10 10-9 0-10-10Z" fill="#efd1ad" stroke="#96765c" stroke-width=".85"/>
    <path d="M-12-36q-1-11 11-11 13 0 14 11l-5 1-1-6-3 6-5-3-5 4-2-5-2 5Z" fill="#80634e" stroke="#655240" stroke-width=".85"/>
    <path d="M-8-42q5-5 12-2m-1 3 5 3" fill="none" stroke="#a18268" stroke-width=".7" opacity=".8"/>
    <path d="M-4.7-31v1.3m9.4-1.3v1.3" stroke="#655440" stroke-width="1.5" stroke-linecap="round"/>
    <ellipse cx="-7" cy="-27.4" rx="2.2" ry="1.15" fill="#dba896" opacity=".8"/>
    <ellipse cx="7" cy="-27.4" rx="2.2" ry="1.15" fill="#dba896" opacity=".8"/>
    <path d="M-2.3-25.8q2.3 1.7 4.6 0" fill="none" stroke="#a17862" stroke-width=".8" stroke-linecap="round"/>
    <path d="m-5-39-2 1m13-1 2 1" stroke="#bca084" stroke-width=".6"/>`;
}

function playerBackDrawing() {
  return `<path d="M-8-26q-6 3-7 15l5 1 5-13m13-3q6 3 7 15l-5 1-5-13" fill="#a0ad88" stroke="#756d59" stroke-width=".85"/>
    <path d="M-15-12q-1 6 2 6 4-1 3-5m25-1q1 6-2 6-4-1-3-5" fill="#e7c3a0" stroke="#8a715a" stroke-width=".7"/>
    <path d="M-8-29q8-3 16 0l3 18q-10 5-22 0Z" fill="#9ca986" stroke="#756d59" stroke-width="1"/>
    <path d="M-8-24h16m-17 5h18m-19 5h20" stroke="#e9e4ca" stroke-width="2.25"/>
    <path d="M-9-10q9 2 18 0" fill="none" stroke="#71805e" stroke-width="1.1"/>
    <path d="M-12-35q-2-13 12-13t13 14l-1 9q-12 7-23 0Z" fill="#80634e" stroke="#655240" stroke-width="1"/>
    <path d="M-9-39q1-7 8-7m3 0q8 1 9 7m-20 9q10 3 19 0m-16-10-1 6m15-5 1 6" fill="none" stroke="#a18268" stroke-width=".7" opacity=".8"/>
    <path d="m-9-26 3 1 2-2 4 2 3-2 3 2 3-2" fill="none" stroke="#6f5442" stroke-width=".8"/>`;
}

function playerSideDrawing() {
  return `<path d="M-7-28q6-3 12 0l4 17q-8 4-16 0Z" fill="#9da987" stroke="#756d59" stroke-width="1"/>
    <path d="M-6-24H5m-11 5H7m-13 5H8" stroke="#e9e4cc" stroke-width="2.2"/>
    <path d="M-1-26q5 4 5 14l-5 1-3-11" fill="#acb695" stroke="#756d59" stroke-width=".85"/>
    <path d="M-1-12q0 6 3 5 3-1 2-6" fill="#e9c6a4" stroke="#8a715a" stroke-width=".7"/>
    <path d="M-2-21h5m-4 5h5" stroke="#e9e4cc" stroke-width="1.8"/>
    <path d="M-3-32v5q3 3 6 0v-6" fill="#dfb491" stroke="#96765c" stroke-width=".6"/>
    <path d="M-11-35q-1-13 11-13 13 0 12 13v8q-4 5-10 4-13 2-13-12Z" fill="#80634e" stroke="#655240" stroke-width="1"/>
    <path d="M-2-41q11-2 12 7l4 3-4 2v3q-1 6-8 5l-6-6Z" fill="#efd1ad" stroke="#96765c" stroke-width=".85"/>
    <path d="M-11-35q-2-12 10-13 13 0 13 12l-6-2-1-5-6 6-1 9-6-1Z" fill="#80634e" stroke="#655240" stroke-width=".85"/>
    <path d="M-8-41q4-5 10-4m-9 7v6" fill="none" stroke="#a18268" stroke-width=".7"/>
    <ellipse cx="-1" cy="-31.5" rx="2.1" ry="2.8" fill="#e9c5a3" stroke="#a48064" stroke-width=".6"/>
    <path d="M7.7-32v1.2" stroke="#655440" stroke-width="1.4" stroke-linecap="round"/>
    <ellipse cx="7.1" cy="-27" rx="1.7" ry="1" fill="#dba896" opacity=".8"/>
    <path d="m9-24 2-.8" stroke="#a17862" stroke-width=".75" stroke-linecap="round"/>`;
}

export function renderPlayer() {
  return `<g id="player" data-facing="down" data-walking="false" role="img" aria-label="正在小屋里探索的你" pointer-events="none">
    <title>正在小屋里探索的你</title><desc>穿着鼠尾草绿条纹毛衣的小人，走走停停，发现生活里的小惊喜。</desc>
    <style>
      #player .player-view-back,#player .player-view-side{display:none}
      #player[data-facing="up"] .player-view-front,#player[data-facing="left"] .player-view-front,#player[data-facing="right"] .player-view-front{display:none}
      #player[data-facing="up"] .player-view-back{display:inline}
      #player[data-facing="left"] .player-view-side,#player[data-facing="right"] .player-view-side{display:inline}
      #player[data-facing="left"] .player-view-side{transform:scaleX(-1)}
      #player #player-left-leg,#player #player-right-leg{transform-box:fill-box;transform-origin:50% 5%}
      #player[data-walking="true"] #player-left-leg{animation:little-days-step .38s ease-in-out infinite alternate}
      #player[data-walking="true"] #player-right-leg{animation:little-days-step .38s ease-in-out -.38s infinite alternate}
      #player[data-walking="true"] #player-body{animation:little-days-bob .19s ease-in-out infinite alternate}
      #player[data-walking="true"] #player-shadow{animation:little-days-shadow .19s ease-in-out infinite alternate;transform-box:fill-box;transform-origin:center}
      @keyframes little-days-step{from{transform:translateY(-.6px) rotate(-11deg)}to{transform:translateY(.6px) rotate(11deg)}}
      @keyframes little-days-bob{from{transform:translateY(0)}to{transform:translateY(-1.3px)}}
      @keyframes little-days-shadow{from{opacity:.22;transform:scaleX(1)}to{opacity:.17;transform:scaleX(.94)}}
      @media(prefers-reduced-motion:reduce){#player #player-left-leg,#player #player-right-leg,#player #player-body,#player #player-shadow{animation:none!important}}
    </style>
    <ellipse id="player-shadow" cx="0" cy="-.5" rx="14.5" ry="4" fill="#75694f" opacity=".22"/>
    <g id="player-left-leg"><path d="m-8-13 7 .2-.8 10-6-.2Z" fill="#8c9d98" stroke="#687872" stroke-width=".9"/><path d="M-8-4q3-1 6 .2L-2 0q-5 2-9 .2l.6-2.8Z" fill="#796954" stroke="#5e5544" stroke-width=".85"/><path d="m-9-.6 5 .2" stroke="#a99880" stroke-width=".75"/></g>
    <g id="player-right-leg"><path d="m1-13 7-.2-.2 10-6 .2Z" fill="#8c9d98" stroke="#687872" stroke-width=".9"/><path d="M2-4q3-1 6-.2l2.4 1.6.6 2.8Q7 2 2 0Z" fill="#796954" stroke="#5e5544" stroke-width=".85"/><path d="m4-.4 5-.2" stroke="#a99880" stroke-width=".75"/></g>
    <g id="player-body" stroke-linejoin="round" stroke-linecap="round"><g class="player-view-front">${playerFrontDrawing()}</g><g class="player-view-back">${playerBackDrawing()}</g><g class="player-view-side">${playerSideDrawing()}</g></g>
  </g>`;
}

const escapeXml = value => String(value).replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]));

function avatarDrawing(input, fullBody = false) {
  const avatar = normalizeAvatar(input), p = avatarPalette(avatar), f = avatarFeatures(avatar);
  const fw = f.faceWidth, fh = f.faceHeight;
  const hairBottom = avatar.hairStyle === 'long' ? -11 : avatar.hairStyle === 'bob' ? -26 : -32;
  const backHair = `<path d="M${-fw-2}-40 Q${-fw-3}-56 0-56 Q${fw+4}-56 ${fw+2}-40 L${fw+2} ${hairBottom} Q0 ${hairBottom+6} ${-fw-2} ${hairBottom}Z" fill="${p.hairColor}" stroke="#625342" stroke-width=".8"/>`;
  const clothes = `<path d="M-4-29v9h8v-9" fill="${p.skinTone}" stroke="#8b715a" stroke-width=".6"/>
    <path d="M-9-22q-7 3-9 20l5 1 5-14m17-7q7 3 9 20l-5 1-5-14" fill="${p.shirtColor}" stroke="#756d59" stroke-width=".8"/>
    <path d="M-18-2q-1 6 2 6 4-1 3-5m31-1q1 6-2 6-4-1-3-5" fill="${p.skinTone}" stroke="#8b715a" stroke-width=".6"/>
    <path d="M-10-23q10-4 20 0l3 27q-13 4-26 0Z" fill="${p.shirtColor}" stroke="#756d59" stroke-width=".9"/>
    <path d="M-10-15h20m-21 6h22m-22 6h22" stroke="#eee6cc" stroke-width="2"/>
    <path d="m-5-24 5 4 5-4" fill="none" stroke="#746f57" stroke-width=".8"/>`;
  const legs = fullBody ? `<path d="M-10 5h9l-1 15h-7Zm11 0h9l-1 15H2Z" fill="#7c897d" stroke="#657565" stroke-width=".7"/>
    <path d="M-9 18h7l2 5q-7 3-13 0Zm11 0h7l4 5q-7 3-13 0Z" fill="#655b4b" stroke="#534c40" stroke-width=".7"/>` : '';
  const ears = [-1, 1].map(side => `<ellipse cx="${side*fw}" cy="-40" rx="1.9" ry="2.8" fill="${p.skinTone}" stroke="#8b715a" stroke-width=".6"/>`).join('');
  const face = `<ellipse data-part="face" cx="0" cy="-40" rx="${fw}" ry="${fh}" fill="${p.skinTone}" stroke="#8b715a" stroke-width=".8"/>`;
  const fringe = `<path d="M${-fw-1}-42 Q${-fw-3}-56 0-56 Q${fw+3}-56 ${fw+1}-42 L${fw-3}-43l-2-5-3 5-4-3-4 4-3-4-2 5Z" fill="${p.hairColor}" stroke="#625342" stroke-width=".8"/>
    <path d="M-7-51q6-4 12-1" fill="none" stroke="#d7bc94" stroke-width=".65" opacity=".5"/>`;
  const sides = avatar.hairStyle === 'short' ? '' : [-1, 1].map(side => `<path d="M${side*(fw-1)}-44 Q${side*(fw+3)}-36 ${side*(fw+1)} ${hairBottom} L${side*(fw-3)} ${hairBottom-2} Q${side*fw}-35 ${side*(fw-1)}-44Z" fill="${p.hairColor}" stroke="#625342" stroke-width=".65"/>`).join('');
  const eyes = [-1, 1].map(side => {
    const x = side * f.eyeDistance, r = f.eyeRadius;
    const eye = avatar.eyeShape === 'smile'
      ? `<path d="M${x-r}-40q${r} ${-r*.9} ${r*2} 0" fill="none" stroke="#493d35" stroke-width=".65"/>`
      : `<ellipse cx="${x}" cy="-40" rx="${r*(avatar.eyeShape==='almond'?1.3:.8)}" ry="${r*(avatar.eyeShape==='almond'?.65:1.15)}" fill="#493d35"/><circle cx="${x-.25}" cy="-40.35" r=".18" fill="#fff8e9"/>`;
    const brow = `<path d="M-1.7 0q1.7-.65 3.4 0" transform="translate(${x} -44) rotate(${side*f.browTilt*180/Math.PI})" fill="none" stroke="${p.hairColor}" stroke-width=".75"/>`;
    return eye + brow;
  }).join('');
  const nose = `<path data-part="nose" d="M${-.45*f.noseScale} -38.5l${-.2*f.noseScale} ${1.9*f.noseScale}q${.7*f.noseScale} ${.7*f.noseScale} ${1.3*f.noseScale} 0" fill="none" stroke="#a17257" stroke-width=".65"/>`;
  const half = f.mouthWidth/2;
  const mouth = avatar.mouthStyle === 'open'
    ? `<ellipse cx="0" cy="-33.5" rx="${half}" ry="1.7" fill="#8f594b"/><path d="M${-half*.65} -34h${half*1.3}" stroke="#fff2d9" stroke-width=".7"/>`
    : `<path d="M${-half} -34q${half} ${avatar.mouthStyle==='smile'?2:0} ${half*2} 0" fill="none" stroke="#8f594b" stroke-width=".75"/>`;
  const cheeks = `<ellipse cx="-6.6" cy="-36.5" rx="1.9" ry=".85" fill="#d48f79" opacity=".5"/><ellipse cx="6.6" cy="-36.5" rx="1.9" ry=".85" fill="#d48f79" opacity=".5"/>`;
  return `<g data-hair="${avatar.hairStyle}" data-face="${avatar.faceShape}" stroke-linejoin="round" stroke-linecap="round">${backHair}${legs}${clothes}${ears}${face}${fringe}${sides}${eyes}${nose}${cheeks}${mouth}</g>`;
}

export function renderPlayerPortrait(input) {
  const avatar = normalizeAvatar(input), name = escapeXml(avatar.name);
  return `<svg class="player-portrait" viewBox="-24 -59 48 48" width="46" height="46" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${name}的小人头像"><title>${name}的小人头像</title>${avatarDrawing(avatar)}</svg>`;
}

export function renderCharacterPreview(input) {
  const avatar = normalizeAvatar(input), name = escapeXml(avatar.name);
  return `<svg class="character-preview-art" viewBox="-32 -64 64 94" width="256" height="376" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${name}的角色预览"><title>${name}的角色预览</title><ellipse cx="0" cy="24" rx="19" ry="3.5" fill="#796b52" opacity=".12"/>${avatarDrawing(avatar,true)}</svg>`;
}

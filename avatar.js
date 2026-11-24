// One schema drives saved characters, the editor portrait and the room model.
export const AVATAR_OPTIONS = Object.freeze({
  skinTone: [
    { id: 'fair', label: '浅暖', color: '#f2d4b5' },
    { id: 'peach', label: '蜜桃', color: '#e8bd94' },
    { id: 'tan', label: '小麦', color: '#bf8d67' },
    { id: 'deep', label: '深棕', color: '#855d46' },
  ],
  hairStyle: [
    { id: 'short', label: '短发' }, { id: 'bob', label: '齐耳发' }, { id: 'long', label: '长发' },
  ],
  hairColor: [
    { id: 'chestnut', label: '栗棕', color: '#775a42' },
    { id: 'black', label: '墨黑', color: '#383634' },
    { id: 'honey', label: '蜂蜜', color: '#b68c50' },
    { id: 'silver', label: '银灰', color: '#a6a49b' },
  ],
  shirtColor: [
    { id: 'sage', label: '鼠尾草绿', color: '#9da988' },
    { id: 'rose', label: '陶土粉', color: '#c28c7d' },
    { id: 'blue', label: '雾蓝', color: '#839da7' },
    { id: 'oat', label: '燕麦', color: '#d7c5a5' },
  ],
  faceShape: [
    { id: 'soft', label: '柔和' }, { id: 'round', label: '圆脸' }, { id: 'slim', label: '长脸' },
  ],
  eyeShape: [
    { id: 'round', label: '圆眼' }, { id: 'smile', label: '弯弯眼' }, { id: 'almond', label: '杏眼' },
  ],
  mouthStyle: [
    { id: 'smile', label: '微笑' }, { id: 'neutral', label: '平静' }, { id: 'open', label: '开怀' },
  ],
});
for (const options of Object.values(AVATAR_OPTIONS)) {
  options.forEach(Object.freeze); Object.freeze(options);
}

export const DEFAULT_AVATAR = Object.freeze({
  name: '小住客', skinTone: 'peach', hairStyle: 'short', hairColor: 'chestnut',
  shirtColor: 'sage', faceShape: 'soft', eyeShape: 'round', eyeSize: 50,
  eyeSpacing: 50, browAngle: 50, noseSize: 50, mouthStyle: 'smile', mouthWidth: 50,
});

const sliders = ['eyeSize', 'eyeSpacing', 'browAngle', 'noseSize', 'mouthWidth'];
export function normalizeAvatar(input) {
  const source = input && typeof input === 'object' && !Array.isArray(input) ? input : {};
  const result = { ...DEFAULT_AVATAR };
  if (typeof source.name === 'string') {
    const name = source.name.replace(/[\u0000-\u001f\u007f]/g, '').trim();
    result.name = Array.from(name).slice(0, 20).join('') || DEFAULT_AVATAR.name;
  }
  for (const [key, options] of Object.entries(AVATAR_OPTIONS)) {
    if (options.some(option => option.id === source[key])) result[key] = source[key];
  }
  for (const key of sliders) {
    if (typeof source[key] === 'number' && Number.isFinite(source[key])) {
      result[key] = Math.round(Math.min(100, Math.max(0, source[key])));
    }
  }
  return result;
}

export function avatarPalette(input) {
  const avatar = normalizeAvatar(input);
  return Object.fromEntries(['skinTone', 'hairColor', 'shirtColor'].map(key => [key,
    AVATAR_OPTIONS[key].find(option => option.id === avatar[key]).color,
  ]));
}

export function avatarFeatures(input) {
  const a = normalizeAvatar(input);
  return {
    faceWidth: { soft: 10.8, round: 11.9, slim: 9.5 }[a.faceShape],
    faceHeight: { soft: 11.1, round: 10.7, slim: 12.1 }[a.faceShape],
    eyeRadius: .65 + a.eyeSize * .012,
    eyeDistance: 3.1 + a.eyeSpacing * .027,
    browTilt: (a.browAngle - 50) * .009,
    noseScale: .55 + a.noseSize * .012,
    mouthWidth: 2.8 + a.mouthWidth * .055,
  };
}

import { createInitialState, normalizeState, reduceGame, getCollectionCount, RECIPES, FLOWERS, DESTINATIONS } from './game.js';
import { icon, postcard, plantArt, vaseArt } from './art.js';
import { createExplorer } from './explorer.js';
import { renderPlayerPortrait, renderCharacterPreview } from './character.js';
import { DEFAULT_AVATAR, AVATAR_OPTIONS, normalizeAvatar } from './avatar.js';
import { worldMapArt } from './worldmap.js';

const STORAGE_KEY = 'little-days-save-v1';
const app = document.getElementById('app');
const dialog = document.getElementById('game-dialog');
const dialogContent = document.getElementById('dialog-content');
let state = createInitialState();
let storageError = '';
try {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved) state = normalizeState(JSON.parse(saved));
} catch { storageError = '上次的存档暂时没有打开。可以在设置中导入备份，或先逛逛房间。'; }
let page = 'home';
let collectionFilter = 'all';
let avatarDraft = null;
let avatarTab = 'shape';
let activeModal = '';
let outingKind = 'date';
let marketTab = 'flowers';
let puzzle = [3, 1, 6, 0, 7, 5, 2, 4, 8];
let selectedPiece = -1;
let puzzleReference = false;
let selectedCartridge = 'island';
let toastTimer;
let previousFocus;
let musicPlaying = false;
let audioContext;
let musicTimer;
let noteStep = 0;
let uploadedImage = null;
let editingMemory = null;
let explorer = null;
const puzzleImage = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(worldMapArt());
const escapeHTML = (value='') => String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));

function persist() {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); storageError = ''; return true; }
  catch { storageError = '浏览器暂时无法保存。请在设置里导出存档，留下今天的回忆。'; return false; }
}
function toast(message) {
  const el = document.getElementById('toast');
  clearTimeout(toastTimer);
  el.textContent = message;
  el.classList.add('visible');
  toastTimer = setTimeout(() => el.classList.remove('visible'), 4500);
}
function act(action, refreshModal) {
  const result = reduceGame(state, action);
  if (result.success) { state = result.state; persist(); render(); }
  toast(storageError || result.message);
  if (refreshModal && result.success) openModal(refreshModal);
  return result.success;
}
function header() {
  return `<header class="site-header">
    <button class="wordmark" data-page="home" aria-label="回到房间">${icon('home')}<span>我们的房间</span></button>
    <nav class="main-nav" aria-label="主要导航">${[['home','回到房间','home'],['collection','收藏图鉴','collection']].map(([id,label,i])=>`<button class="nav-link ${page===id?'active':''}" data-page="${id}" ${page===id?'aria-current="page"':''}>${icon(i)}<span>${label}</span></button>`).join('')}</nav>
    <div class="header-tools"><span class="coin-count" aria-label="${state.coins} 枚生活币">${icon('coin')}<span>${state.coins}</span></span><button class="icon-button music-button ${musicPlaying?'on':''}" data-action="music" aria-label="${musicPlaying?'暂停背景音乐':'播放背景音乐'}" title="${musicPlaying?'暂停音乐':'播放轻柔的背景音乐'}">${icon(musicPlaying?'music':'mute')}</button><button class="icon-button" data-modal="settings" aria-label="设置与存档">${icon('settings')}</button></div>
  </header>`;
}
function home() {
  return `<main class="exploration-scene" aria-label="全屏探索我们的小屋">
    <h1 class="sr-only">我们的房间</h1>
    <div class="exploration-map ${state.projectorOn?'projecting':''}" id="room-canvas" aria-label="立体房间地图，拖动平移，点击地面行走；方向键或 WASD 移动小人"><p class="scene-loading" role="status">正在打开立体小屋…</p></div>
    <header class="scene-hud scene-top"><div class="room-presence"><button class="resident-profile" data-modal="avatar" aria-label="${state.character?'编辑人物':'创建人物'}">${renderPlayerPortrait(state.character)}<span><strong>${escapeHTML(state.character?.name||'创建人物')}</strong><small id="scene-location">我们的房间</small></span><span class="profile-edit" aria-hidden="true">${icon('edit')}</span></button><span class="room-day">${icon('sun')}<span>第 ${state.day} 天<small>初夏 · 晴</small></span></span></div>
      <nav class="scene-tools" aria-label="房间菜单"><button class="hud-button" data-modal="today" aria-label="今日的小事">${icon('edit')}<span>今日</span></button><button class="hud-button" data-page="collection" aria-label="收藏图鉴">${icon('collection')}<span>收藏</span></button><button class="hud-button" data-modal="settings" aria-label="设置与存档">${icon('settings')}<span>设置</span></button></nav>
    </header>
    <footer class="scene-hud scene-bottom"><div class="walk-help"><small class="desktop-movement-hint"><kbd>W</kbd><kbd>A</kbd><kbd>S</kbd><kbd>D</kbd><span>移动 · 点击物件互动</span></small><small class="touch-movement-hint">点击地面走走</small></div>
      <nav class="room-view-controls" aria-label="房间视角"><div class="room-camera-controls" role="group" aria-label="移动房间视角"><button data-camera-mode="pan" aria-pressed="true" title="拖动平移房间"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3v18M3 12h18M9 6l3-3 3 3M9 18l3 3 3-3M6 9l-3 3 3 3M18 9l3 3-3 3"/></svg><span>平移</span></button><button data-camera-mode="rotate" aria-pressed="false" title="拖动旋转房间"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19.5 8a8 8 0 1 0 .2 7M19.5 3.5V8H15M8 12l4-3 4 3-4 3Z"/></svg><span>旋转</span></button><button data-camera-action="reset" title="完整查看房间"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 3H3v5M16 3h5v5M3 16v5h5M21 16v5h-5M8 13l4-4 4 4v5H8Z"/></svg><span>看全屋</span></button><span class="sr-only" id="camera-help">拖动平移 · 滚轮或双指缩放</span></div></nav>
      <div class="nearby-interaction" id="nearby-interaction"><span class="exploration-hint" id="exploration-hint">点击地面走走，点击物件靠近</span><button class="nearby-button" id="nearby-button" data-action="interact" disabled><kbd>E</kbd><span id="nearby-name">走近看看</span>${icon('arrow')}</button></div>
      <nav class="scene-pocket" aria-label="随身物品"><button class="hud-button" data-modal="guide">${icon('puzzle')}<span>物件</span></button><button class="hud-button" data-modal="bag">${icon('bag')}<span>背包</span></button><button class="hud-button leave-home" data-explore="door">${icon('door')}<span>出门</span></button></nav>
    </footer>
    <div class="touch-directions" role="group" aria-label="控制小人移动"><button data-move="up" aria-label="向上走"><span class="direction-chevron up" aria-hidden="true"></span></button><button data-move="left" aria-label="向左走"><span class="direction-chevron left" aria-hidden="true"></span></button><span class="direction-center" aria-hidden="true"></span><button data-move="right" aria-label="向右走"><span class="direction-chevron right" aria-hidden="true"></span></button><button data-move="down" aria-label="向下走"><span class="direction-chevron down" aria-hidden="true"></span></button></div>
    <div class="sr-only" id="explorer-announcement" role="status" aria-live="polite"></div>
  </main>`;
}

function getItems() {
  const items = [];
  for (const place of DESTINATIONS) {
    const linkedMemory = state.memories.findLast(m=>m.id.startsWith(`outing-${place.id}-day-`));
    for (const [key,attr,type] of [['photos','photo','照片'],['tickets','ticket','票券'],['magnets','magnet','冰箱贴'],['plushies','plush','玩偶']]) {
      const obj = place[attr];
      if (obj && state[key].includes(obj.id)) items.push({...obj, category:key, type, theme:place.theme, place:place.name, ...(linkedMemory?{memoryId:linkedMemory.id,description:linkedMemory.description}:{}), ...(key==='photos' && linkedMemory?.image?{image:linkedMemory.image,name:linkedMemory.title}:{} )});
    }
  }
  for (const recipe of RECIPES) if (state.recipes.includes(recipe.id)) items.push({...recipe,category:'recipes',type:'菜谱',theme:'food'});
  if (state.puzzleSolved) items.push({id:'completed-puzzle',name:'手绘世界地图',description:'把想去的地方，一块一块拼完整。',category:'other',type:'拼图',theme:'world-map'});
  if (state.flower) { const f = FLOWERS.find(x=>x.id===state.flower); items.push({...f,category:'other',type:'花束',theme:'flower'}); }
  if (state.growth===4) items.push({id:'first-bloom',name:'亲手养开的第一朵花',description:'耐心也会开花。',category:'other',type:'植物',theme:'flower'});
  for (const m of state.memories) if (m.image && state.photos.includes(m.id)) items.push({...m,name:m.title,category:'photos',type:'真实照片'});
  return items;
}
function collection() {
  const items = getItems().filter(i=>collectionFilter==='all'||i.category===collectionFilter);
  return `<main class="album-main"><div class="album-heading"><div><span class="pencil-label">把喜欢的，留在身边</span><h1>家的收藏图鉴</h1><p>每一件带回家的小东西，都藏着一段故事。</p></div><div class="collected-counter">${getCollectionCount(state)}<span>件小美好</span></div></div><div class="filter-row" role="group" aria-label="收藏分类">${[['all','全部收藏'],['photos','照片'],['magnets','冰箱贴'],['tickets','纪念票'],['plushies','玩偶'],['recipes','菜谱']].map(([id,label])=>`<button class="filter-button ${collectionFilter===id?'selected':''}" data-collection-filter="${id}" aria-pressed="${collectionFilter===id}">${label}</button>`).join('')}</div>${items.length?`<div class="collection-grid">${items.map(item=>`<button class="collectible" data-item="${escapeHTML(item.id)}"><div class="collectible-art ${item.category}">${item.category==='tickets'?`<div class="paper-ticket"><small>旅行纪念</small><strong>${escapeHTML(item.place)}</strong><span>一张票，一段好时光</span><i></i></div>`:item.category==='plushies'?icon('bear'):item.theme==='flower'?plantArt(4):item.theme==='world-map'?worldMapArt():item.category==='recipes'?foodArt(item.id):item.image?`<img src="${escapeHTML(item.image)}" width="420" height="260" alt="${escapeHTML(item.name)}">`:postcard(item.theme)}</div><span class="collectible-type">${item.type}</span><h2>${escapeHTML(item.name)}</h2><p>${escapeHTML(item.description)}</p></button>`).join('')}</div>`:`<div class="empty-album">${icon('collection')}<h2>给回忆，留一点位置。</h2><p>旅行的票根、冰箱上的照片、沙发上的小熊，都会在这里相遇。</p><button class="secondary-button" data-modal="outing">去收集第一份小美好</button></div>`}<div class="album-bottom">${icon('heart')} 房间会一点一点，被生活填满。</div></main>`;
}
function render() {
  explorer?.destroy(); explorer = null;
  document.body.classList.toggle('is-exploring',page==='home');
  const warning=storageError?`<div class="storage-warning" role="alert">${escapeHTML(storageError)}<button data-modal="settings">打开存档设置</button></div>`:'';
  app.innerHTML = page==='home'?home()+warning:header()+warning+collection();
  document.title = page==='home'?'我们的房间':'我们的房间 · 收藏图鉴';
  if(page==='home') {
    explorer=createExplorer({container:document.getElementById('room-canvas'),state,onInteract:interactWithRoom,onNearby:updateNearby,onMove:updateExplorerLocation,onViewChange:updateRoomView,onError:showSceneError});
    explorer.mount();
    updateExplorerLocation(explorer.getPosition());
    updateRoomView(explorer.getView?.()||'home');
  }
}
function interactWithRoom(id) { openModal(id==='door'?'outing':id==='bed'?'rest':id); }
function updateRoomView(view) { document.querySelectorAll('[data-room-view]').forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.roomView===view))); }
function showSceneError(message) {
  const container=document.getElementById('room-canvas');if(!container)return;
  const error=document.createElement('div');error.className='scene-render-error';error.setAttribute('role','alert');error.innerHTML=`${icon('home')}<h2>立体小屋暂时没有打开</h2><p>${escapeHTML(message||'请使用支持 WebGL 的现代浏览器，或开启浏览器硬件加速后再试一次。')}</p><button class="secondary-button" data-action="retry-scene">重新打开小屋</button>`;
  container.querySelector('.scene-loading')?.remove();container.append(error);
}
function updateExplorerLocation(position) {
  const label=document.getElementById('scene-location');if(!label)return;
  const name=position.x<294?(position.y<400?'有风的阳台':position.x<166?'小小洗手间':'阳光里的浴室'):'我们的房间';
  if(label.textContent!==name)label.textContent=name;
}
function updateNearby(target) {
  const button=document.getElementById('nearby-button');if(!button)return;
  button.disabled=!target;
  document.getElementById('nearby-name').textContent=target?target.name:'走近看看';
  const prompt=document.getElementById('nearby-interaction');
  prompt.classList.toggle('has-target',Boolean(target));
  document.getElementById('exploration-hint').textContent=target?'停下来，看看身边的小美好':'点击地面走走，点击物件靠近';
  document.getElementById('explorer-announcement').textContent=target?`靠近${target.name}，按 E 或点击互动按钮。`:'';
}

function foodArt(id) {
  return `<svg class="food-art" viewBox="0 0 200 140" fill="none" aria-hidden="true"><ellipse cx="100" cy="117" rx="72" ry="10" fill="#b5a38a" opacity=".15"/><path d="M32 70c0 70 136 70 136 0" fill="#ece6d3" stroke="#85775f" stroke-width="2"/><ellipse cx="100" cy="70" rx="68" ry="30" fill="#fcf7e7" stroke="#85775f" stroke-width="2"/><ellipse cx="100" cy="69" rx="57" ry="23" fill="${id==='curry-rice'?'#c3a064':id==='rice-ball'?'#e9e0c5':'#dbb278'}"/>${id==='rice-ball'?'<path d="m67 80 28-39q7-6 13 1l27 40q0 9-12 10H78q-14-1-11-12" fill="#f8f1da" stroke="#8b816a" stroke-width="2"/><path d="M88 69h24v23H88Z" fill="#78826a"/>':'<path d="M57 71c18-18 29 12 47-3s31 4 37-5M62 79c17-14 25 9 39-1s26 1 30-5" stroke="#f8e7b6" stroke-width="5"/><path d="m70 58 12-4 7 12-12 5Zm39 16 12-4 9 12-12 4Z" fill="#c47e60"/><path d="m108 51 8 6-3 11-12-5Z" fill="#80906b"/>'}<path d="M78 28c-9-9 8-12 0-21m29 21c-9-9 8-12 0-21m24 24c-9-9 8-12 0-21" stroke="#aba18c" stroke-width="2" stroke-linecap="round"/></svg>`;
}
function modalShell(title,subtitle,body,cls='') {
  return `<div class="modal-paper ${cls}"><button class="icon-button modal-close" data-action="close" aria-label="关闭弹窗">${icon('close')}</button><div class="modal-heading"><h2 id="dialog-title">${title}</h2>${subtitle?`<p>${subtitle}</p>`:''}</div>${body}</div>`;
}
function avatarChoices(key, label) {
  const options = AVATAR_OPTIONS[key];
  return `<fieldset class="avatar-field"><legend>${label}</legend><div class="avatar-options ${options[0].color?'color-options':''}">${options.map(option=>`<button type="button" data-avatar-key="${key}" data-avatar-value="${option.id}" aria-pressed="${avatarDraft[key]===option.id}" ${option.color?`style="--swatch:${option.color}"`:''}>${option.color?'<i aria-hidden="true"></i>':''}<span>${option.label}</span></button>`).join('')}</div></fieldset>`;
}
function avatarSlider(key, label, left, right) {
  return `<label class="avatar-slider" for="avatar-${key}"><span>${label}<output id="value-${key}">${avatarDraft[key]}</output></span><input id="avatar-${key}" data-avatar-slider="${key}" type="range" min="0" max="100" value="${avatarDraft[key]}"><small><span>${left}</span><span>${right}</span></small></label>`;
}
function avatarEditor() {
  const appearance = avatarChoices('hairStyle','发型') + avatarChoices('skinTone','肤色') + avatarChoices('hairColor','发色') + avatarChoices('shirtColor','衣服颜色');
  const face = avatarChoices('faceShape','脸型') + avatarChoices('eyeShape','眼睛') + avatarSlider('eyeSize','眼睛大小','小','大') + avatarSlider('eyeSpacing','眼距','近','远') + avatarSlider('browAngle','眉毛角度','温和','上扬') + avatarSlider('noseSize','鼻子大小','小','大') + avatarChoices('mouthStyle','嘴型') + avatarSlider('mouthWidth','嘴巴宽度','窄','宽');
  return modalShell(state.character?'调整人物':'创建你的人物','',`<form id="avatar-form" novalidate><div class="avatar-editor-layout"><aside class="avatar-preview-panel"><div id="avatar-preview">${renderCharacterPreview(avatarDraft)}</div><strong id="avatar-preview-name">${escapeHTML(avatarDraft.name||'你的新室友')}</strong><span>人物预览</span></aside><section class="avatar-fields"><label class="avatar-name-field" for="avatar-name">怎么称呼你？<input id="avatar-name" name="name" maxlength="20" autocomplete="off" placeholder="给人物起个名字" value="${escapeHTML(avatarDraft.name)}" required></label><div class="avatar-tabs" role="tablist" aria-label="人物设置"><button type="button" role="tab" id="avatar-tab-shape" aria-controls="avatar-panel" aria-selected="${avatarTab==='shape'}" data-avatar-tab="shape">外观</button><button type="button" role="tab" id="avatar-tab-face" aria-controls="avatar-panel" aria-selected="${avatarTab==='face'}" data-avatar-tab="face">五官</button></div><div class="avatar-fields-scroll" id="avatar-panel" role="tabpanel" aria-labelledby="avatar-tab-${avatarTab}">${avatarTab==='shape'?appearance:face}</div></section></div><div class="avatar-form-footer"><button type="button" class="text-button" data-action="new-character">新建人物</button><p id="avatar-error" class="form-error" role="alert"></p><button class="primary-button" type="submit">${state.character?'保存人物':'住进房间'}</button></div></form>`,'avatar-modal');
}
function refreshAvatarPreview() {
  const target = document.getElementById('avatar-preview');
  if(target) target.innerHTML = renderCharacterPreview(avatarDraft);
  const name = document.getElementById('avatar-preview-name');
  if(name) name.textContent = avatarDraft.name || '你的新室友';
}
function openModal(type,options={}) {
  activeModal = type;
  explorer?.pause();
  let html = '';
  if (type==='avatar') {
    if(!options.keepDraft){avatarDraft={...normalizeAvatar(state.character),name:state.character?.name||''};avatarTab='shape';}
    html=avatarEditor();
  } else if (type==='today') {
    const tasks = [[state.wateredDay===state.day||state.growth===4,'给阳台的花浇浇水','plants','等一颗小芽，慢慢长大'],[state.puzzleSolved,'拼一幅世界地图','puzzle','把想去的地方拼完整'],[!!state.flower,'带一束花回家','vase','给今天添一点颜色']];
    html=modalShell('今日的小事','不用着急，在小屋里慢慢发现。',`<div class="exploration-daily-tasks">${tasks.map(([done,title,id,sub])=>`<button class="task ${done?'complete':''}" data-explore="${id}"><span class="task-check">${done?icon('check'):''}</span><span>${title}<small>${sub}</small></span>${icon('arrow')}</button>`).join('')}</div><div class="daily-scene-count">${icon('collection')} 已经收藏 ${getCollectionCount(state)} 件小美好<span>${icon('coin')} ${state.coins} 枚生活币</span></div><button class="secondary-button full-button" data-explore="bed">${icon('moon')}收好今天，睡个好觉</button>`);
  } else if (type==='plants') {
    const done = state.wateredDay===state.day || state.growth===4;
    html = modalShell('阳台上的小小期待','每天一点照顾，等一朵花慢慢开。',`<div class="plant-preview">${plantArt(Math.max(1,state.growth))}<div><span class="pencil-label">${['还在土里做梦','冒出了一颗小芽','长出新的叶子','悄悄有了花苞','第一朵花开了'][state.growth]}</span><p>成长的第 ${state.growth} / 4 步</p><div class="growth-dots">${[1,2,3,4].map(i=>`<span class="${i<=state.growth?'grown':''}">${i<=state.growth?icon('leaf'):i}</span>`).join('')}</div><p class="muted">${state.growth===4?'把这朵小花，收进回忆里。':done?'今天喝饱水啦，明天再来看看。':'今天的阳光很好，它在等你浇水。'}</p></div></div><button class="primary-button full-button" data-game="WATER" data-refresh="plants" ${done?'disabled':''}>${icon('water')}${done?state.growth===4?'花已经盛开啦':'今天已经浇过水':'给小花浇浇水'}</button><button class="text-button centered" data-modal="rest">${icon('moon')} 休息一下，等明天</button>`);
  } else if (type==='puzzle') {
    html = modalShell(state.puzzleSolved?'拼好的世界地图':'手绘世界地图',state.puzzleSolved?'把想去的地方，挂在每天看得到的墙上。':'点选两块地图，交换它们的位置。',state.puzzleSolved?`<div class="finished-puzzle">${worldMapArt()}</div><p class="centered muted">已经挂在沙发背后的墙上。</p><button class="primary-button full-button" data-action="close">回房间看看</button>`:`<div class="puzzle-board" aria-label="九块世界地图拼图">${puzzle.map((v,i)=>`<button class="puzzle-tile ${selectedPiece===i?'selected':''} ${v===i?'correct':''}" data-piece="${i}" aria-label="第 ${i+1} 格，画面的第 ${v+1} 块" aria-pressed="${selectedPiece===i}" style="background-image:url('${puzzleImage}');background-size:300% 300%;background-position:${v%3*50}% ${Math.floor(v/3)*50}%"><span>${v+1}</span></button>`).join('')}</div><div class="puzzle-actions"><span>${puzzle.filter((v,i)=>v===i).length} / 9 块归位</span><button class="text-button" data-action="puzzle-reference">${puzzleReference?'收起原图':'查看完整地图'}</button></div>${puzzleReference?`<div class="puzzle-reference">${worldMapArt()}</div>`:''}`,'puzzle-modal');
  } else if (type==='switch') {
    html = modalShell('今晚，一起玩会儿吧','插上卡带，投影就在床对面的墙上亮起来。',`<div class="console-art"><span class="joycon left"></span><div class="console-screen">${postcard(selectedCartridge==='island'?'sea':'mountain')}</div><span class="joycon right"></span></div><div class="cartridge-options" role="group" aria-label="选择游戏卡带">${[['island','一起造个小岛','leaf'],['pixel','像素大冒险','puzzle']].map(([id,label,i])=>`<button class="cartridge ${selectedCartridge===id?'selected':''}" data-cartridge="${id}" aria-pressed="${selectedCartridge===id}">${icon(i)}${label}</button>`).join('')}</div><button class="primary-button full-button" data-game="TOGGLE_PROJECTOR" data-refresh="switch">${icon('switch')}${state.projectorOn?'关闭投影，休息一会儿':'插上卡带，打开投影'}</button><p class="muted centered">${state.projectorOn?'投影已经亮起，回房间就能看见。':'卡带已经放在小背包里。'}</p>`);
  } else if (type==='vase') {
    const f = FLOWERS.find(x=>x.id===state.flower);
    html = modalShell('给桌角，留一点春天',f?`花瓶里是今天的${f.name}。`:'花瓶还空着。下次路过集市，带一束花回来吧。',`<div class="vase-preview">${vaseArt(f?.id)}</div><button class="primary-button full-button" data-modal="market">${icon('flower')}${f?'去集市挑一束新的':'去集市买束花'}</button>`);
  } else if (type==='outing') {
    html = modalShell('今天，想一起去哪里？','把一点新鲜的快乐，带回我们的小屋。',`<div class="outing-tabs" role="group" aria-label="出门方式"><button class="${outingKind==='date'?'selected':''}" data-outing-kind="date">${icon('heart')}去约会</button><button class="${outingKind==='travel'?'selected':''}" data-outing-kind="travel">${icon('ticket')}去旅行</button><button data-modal="market">${icon('flower')}逛集市</button></div><div class="destination-grid">${DESTINATIONS.filter(p=>p.kind===outingKind && p.id!=='market').map(place=>`<button class="destination" data-destination="${place.id}">${postcard(place.theme)}<span><strong>${place.name}</strong><small>${place.description}</small></span>${icon('arrow')}</button>`).join('')}</div><p class="muted centered small-text">这些是示例旅程。带回的照片和纪念票，可以换成你们自己的故事。</p>`,'outing-modal');
  } else if (type==='market') {
    html = modalShell('路过周末的小集市',`口袋里有 ${state.coins} 枚生活币，挑一点喜欢的带回家。`,`<div class="outing-tabs market-tabs" role="group" aria-label="集市摊位"><button class="${marketTab==='flowers'?'selected':''}" data-market-tab="flowers">${icon('flower')}街角花摊</button><button class="${marketTab==='food'?'selected':''}" data-market-tab="food">${icon('bag')}新鲜食材</button></div>${marketTab==='flowers'?`<div class="flower-shop">${FLOWERS.map(f=>`<button class="flower-choice" data-buy-flower="${f.id}" ${state.flower===f.id||state.coins<f.price?'disabled':''}><div class="flower-sketch">${vaseArt(f.id)}</div><strong>${f.name}</strong><span>${f.description}</span><small>${state.flower===f.id?'已经放进花瓶':`${f.price} 枚生活币 · 带回家`}</small></button>`).join('')}</div>`:`<div class="ingredient-shop">${icon('bag')}<h3>今晚的食材包</h3><p>番茄、鸡蛋、米饭，还有一点新鲜蔬菜。<br>一包可以做 3 顿喜欢的饭。</p><button class="primary-button" data-game="BUY_INGREDIENTS" data-refresh="market" ${state.coins<20?'disabled':''}>20 枚生活币 · 买一包</button><p class="muted">背包里还有 ${state.inventory.ingredients} 份食材</p></div>`}<div class="modal-bottom-actions"><button class="text-button" data-modal="outing">再去别处逛逛</button><button class="secondary-button" data-action="close">回家看看</button></div>`,'market-modal');
  } else if (type==='cooking') {
    html = modalShell('今天，做点好吃的','有烟火气的小屋，也是被好好照顾的日常。',`<div class="ingredient-balance">${icon('bag')} 新鲜食材 ${state.inventory.ingredients} 份<button class="text-button" data-action="food-market">去买食材</button></div><div class="recipe-list">${RECIPES.map(r=>`<div class="recipe-row">${foodArt(r.id)}<div><h3>${r.name}${state.recipes.includes(r.id)?`<span class="recipe-collected">${icon('check')}已收录</span>`:''}</h3><p>${r.ingredientLabel}</p><span>需要 ${r.ingredients} 份食材</span></div><button class="secondary-button" data-cook="${r.id}" ${state.inventory.ingredients<r.ingredients?'disabled':''}>做这道菜</button></div>`).join('')}</div><p class="muted centered small-text">每一道第一次做的菜，都会自动收进菜谱图鉴。</p>`,'cooking-modal');
  } else if (type==='fridge' || type==='tickets' || type==='plush') {
    const key = type==='fridge'?'photos':type==='tickets'?'tickets':'plushies';
    const items = getItems().filter(i=>type==='fridge'?['photos','magnets'].includes(i.category):i.category===key);
    const titles = {fridge:['冰箱上的小小世界','照片和冰箱贴，把去过的远方带到每天。'],tickets:['一张票，一段好时光','每次出发，都值得留一张纪念。'],plush:['沙发上的新室友','一起抓到的那只小熊，会一直等我们回家。']};
    html = modalShell(...titles[type],items.length?`<div class="souvenir-list">${items.map(item=>`<button data-item="${escapeHTML(item.id)}">${icon(item.category==='photos'?'camera':item.category==='tickets'?'ticket':item.category==='plushies'?'bear':'fridge')}<span><strong>${escapeHTML(item.name)}</strong><small>${escapeHTML(item.description)}</small></span>${icon('arrow')}</button>`).join('')}</div>${type==='fridge'?'<button class="secondary-button full-button" data-action="new-memory">贴一张真实的照片</button>':''}<button class="text-button centered" data-modal="outing">再带一些回忆回家</button>`:`<div class="empty-modal">${icon(type==='fridge'?'fridge':type==='tickets'?'ticket':'bear')}<p>${type==='fridge'?'这里还空着，等一次出发，或贴上你们的真实照片。':type==='tickets'?'票盒还空着。下次旅行，记得带一张票回来。':'沙发上还没有玩偶。一起去抓娃娃吧。'}</p><button class="primary-button" data-modal="outing">一起出门走走</button>${type==='fridge'?'<button class="text-button centered" data-action="new-memory">贴一张真实的照片</button>':''}</div>`);
  } else if (type==='bag') {
    html = modalShell('出门时的小背包','不必装很多，带上好心情就够了。',`<div class="bag-items"><button data-modal="switch">${icon('switch')}<span><strong>游戏卡带 × 2</strong><small>今晚一起造个小岛吧</small></span>${icon('arrow')}</button><button data-modal="cooking">${icon('bag')}<span><strong>新鲜食材 × ${state.inventory.ingredients}</strong><small>给自己做一顿热乎的饭</small></span>${icon('arrow')}</button><button data-modal="plants">${icon('water')}<span><strong>一只小水壶</strong><small>照顾每天的一点小期待</small></span>${icon('arrow')}</button></div>`);
  } else if (type==='rest') {
    html = modalShell('把今天，好好收起来','小屋会在这里，等明天的你。',`<div class="rest-illustration">${icon('moon')}<span>晚安，今天也辛苦啦。</span></div><div class="rest-summary"><span>${state.wateredDay===state.day?'小花已经喝过水了':'小花今天还没有喝水'}</span><span>房间里已经收藏 ${getCollectionCount(state)} 件小美好</span></div><button class="primary-button full-button" data-action="next-day">睡个好觉，迎接第 ${state.day+1} 天</button><p class="muted centered small-text">每个新日子，会收到 30 枚生活币。这是游戏内的一天。</p>`);
  } else if (type==='desk' || type==='bookshelf' || type==='balcony') {
    const text = {desk:['并肩坐着的长桌','一人一个位置，偶尔抬头说一句：你看。','book'],bookshelf:['书架里藏着慢慢的日子','喜欢的书和没看完的故事，都放在伸手就能碰到的地方。','book'],balcony:['阳光晒进来的地方','衣服在慢慢晾干，花在慢慢长大。今天也可以慢一点。','sun']}[type];
    html = modalShell(text[0],'',`<div class="quiet-moment">${icon(text[2])}<p>${text[1]}</p></div>${type==='balcony'?'<button class="secondary-button full-button" data-modal="plants">看看小花</button>':'<button class="secondary-button full-button" data-action="close">回到房间</button>'}`);
  } else if (type==='guide') {
    html = modalShell('每一件小东西，都有故事','选一件小物，小人会走过去。也可以用 WASD 或方向键自由探索。',`<div class="room-guide">${[['plants','water','阳台花架','每天浇水，等花开'],['puzzle','puzzle','沙发背墙的拼图','拼好后，挂起风景'],['switch','switch','床头的 Switch','插上卡带，亮起投影'],['vase','flower','桌角的花瓶','从集市带一束花回来'],['fridge','fridge','冰箱上的回忆','照片与旅行冰箱贴'],['plush','bear','沙发上的玩偶','一起去抓娃娃'],['tickets','ticket','门旁的纪念票盒','把每次出发收起来'],['cooking','pot','长桌旁的小锅','做一顿饭，留一页菜谱']].map(([id,i,title,desc])=>`<button data-explore="${id}">${icon(i)}<span><strong>${title}</strong><small>${desc}</small></span></button>`).join('')}</div>`);
  } else if (type==='settings') {
    html = modalShell('房间设置','人物、声音和存档都在这里。',`<div class="settings-row"><span><strong>我的人物</strong><small>${state.character?escapeHTML(state.character.name):'创建一个自己的角色，调整外观和五官'}</small></span><button class="secondary-button" data-modal="avatar">${state.character?'调整人物':'创建人物'}</button></div><div class="settings-row"><span><strong>背景音乐</strong><small>一小段轻柔的琴声，由浏览器演奏</small></span><button class="secondary-button" data-action="music">${icon(musicPlaying?'music':'mute')}${musicPlaying?'暂停':'播放'}</button></div><div class="settings-row"><span><strong>导出存档</strong><small>下载备份，包含人物、收藏和照片故事</small></span><button class="secondary-button" data-action="export">${icon('download')}导出备份</button></div><div class="settings-row"><span><strong>导入存档</strong><small>恢复备份会替换这个浏览器的房间进度</small></span><label class="secondary-button file-control" for="import-save">选择备份<input class="file-input" type="file" id="import-save" accept="application/json,.json"></label></div><div class="settings-info"><p>出游地点、故事和风景为示例。点击冰箱可以贴上自己的照片，也可以修改照片和纪念票背后的故事。</p><p>进度保存在当前浏览器。照片不会上传到网络，换设备前请先导出备份。</p></div>`);
  } else if (type==='memory-editor') {
    if (options.memory) { editingMemory = options.memory; uploadedImage = options.memory.image||null; }
    const m = editingMemory;
    html = modalShell(m?'修改照片与故事':'往冰箱上贴一张照片','把你们的照片和物件背后的故事留在房间里。',`<form id="memory-form"><div class="memory-form-fields"><label>照片或物件的名字<input name="title" maxlength="120" required placeholder="例如：第一次一起去看海" value="${escapeHTML(m?.title||'')}"></label><label>想记住的日子<input name="date" type="date" value="${m?.date&&/^\d{4}-\d{2}-\d{2}$/.test(m.date)?m.date:''}"></label><label>那天发生的小事<textarea name="description" maxlength="600" rows="3" required placeholder="记下一句话、一个小细节，或只有你们才懂的暗号。">${escapeHTML(m?.description||'')}</textarea></label><div class="photo-field"><span class="field-label">贴一张真实照片 <small>${m?'选填':'新照片需要选择图片'}</small></span><label class="photo-upload" for="memory-photo">${uploadedImage?`<img src="${uploadedImage}" width="420" height="260" alt="已选择的照片">`:`${icon('camera')}<span>从相册里挑一张</span>`}<input class="file-input" id="memory-photo" type="file" accept="image/png,image/jpeg,image/webp,image/gif" aria-label="从相册里挑一张"></label><span id="upload-status" class="small-text muted" role="status">照片只留在这个浏览器里。</span>${uploadedImage?'<button class="text-button" type="button" data-action="remove-photo">移除照片</button>':''}</div></div><p id="form-error" role="alert" class="form-error"></p><button class="primary-button full-button" type="submit">${icon('camera')}保存照片与故事</button></form>`,'editor-modal');
  }
  if (!html) return;
  dialogContent.innerHTML = html;
  if (!dialog.open) { previousFocus = document.activeElement; dialog.showModal(); }
  if (type==='memory-editor') requestAnimationFrame(()=>dialog.querySelector('input[name=title]')?.focus());
  if (type==='avatar'&&!options.keepDraft) requestAnimationFrame(()=>document.getElementById('avatar-name')?.focus());
}
function closeModal() { dialog.close(); activeModal=''; explorer?.resume(); previousFocus?.focus?.(); }
function openMemory(memory) { editingMemory=memory||null; uploadedImage=memory?.image||null; openModal('memory-editor'); }
function showReward(place) {
  activeModal='reward';
  dialogContent.innerHTML=modalShell('把这一天，带回家',`从${place.name.replace(/^去/,'')}回来，口袋里多了一点回忆。`,`<div class="reward-postcard">${postcard(place.theme)}<span class="picture-tape"></span><p>${place.photo.name}</p></div><div class="reward-items">${[[place.photo,'camera'],[place.ticket,'ticket'],[place.magnet,'fridge'],[place.plush,'bear']].filter(([item])=>item).map(([item,i])=>`<span>${icon(i)}${item.name}</span>`).join('')}</div><p class="muted centered">${place.photo.description}</p><div class="modal-bottom-actions"><button class="text-button" data-action="edit-latest">写成我们的故事</button><button class="primary-button" data-action="close">回家放好</button></div>`);
}
function showItem(id) {
  const item=getItems().find(i=>i.id===id);
  if(!item) return;
  activeModal='item';
  const memoryId=item.memoryId||(item.category==='photos'&&state.memories.some(memory=>memory.id===item.id)?item.id:null);
  dialogContent.innerHTML=modalShell(escapeHTML(item.name),item.type,`<div class="item-preview">${item.category==='plushies'?icon('bear'):item.theme==='flower'?vaseArt(item.id):item.theme==='world-map'?worldMapArt():item.category==='recipes'?foodArt(item.id):item.image?`<img src="${escapeHTML(item.image)}" width="420" height="260" alt="${escapeHTML(item.name)}">`:postcard(item.theme)}</div><p class="item-story">${escapeHTML(item.description)}</p>${memoryId?`<button class="secondary-button full-button" data-memory="${escapeHTML(memoryId)}">修改照片与故事</button>`:'<button class="secondary-button full-button" data-action="close">收好这件收藏</button>'}`);
  if(!dialog.open){previousFocus=document.activeElement;dialog.showModal();}
}
function music() {
  if(musicPlaying) { musicPlaying=false;clearInterval(musicTimer);audioContext?.suspend(); }
  else {
    audioContext ||= new (window.AudioContext||window.webkitAudioContext)();
    audioContext.resume(); musicPlaying=true;
    const notes=[261.63,329.63,392,329.63,293.66,349.23,440,349.23,261.63,329.63,392,523.25,440,392,329.63,293.66];
    const play=()=>{ if(!musicPlaying)return;const oscillator=audioContext.createOscillator(); const gain=audioContext.createGain(); oscillator.type='sine';oscillator.frequency.value=notes[noteStep++%notes.length]; gain.gain.setValueAtTime(0,audioContext.currentTime);gain.gain.linearRampToValueAtTime(.035,audioContext.currentTime+.04);gain.gain.exponentialRampToValueAtTime(.001,audioContext.currentTime+1.7);oscillator.connect(gain);gain.connect(audioContext.destination);oscillator.start();oscillator.stop(audioContext.currentTime+1.8); }; play(); musicTimer=setInterval(play,850);
  }
  render();if(activeModal==='settings')openModal('settings');
}

document.addEventListener('click',event=>{
  const b=event.target.closest('button,[data-hotspot],label[for]');if(!b||b.disabled)return;
  if(b.dataset.page){page=b.dataset.page==='collection'?'collection':'home';closeModal();render();window.scrollTo({top:0,behavior:'instant'});return;}
  if(b.dataset.avatarTab){avatarTab=b.dataset.avatarTab;openModal('avatar',{keepDraft:true});document.getElementById(`avatar-tab-${avatarTab}`)?.focus();return;}
  if(b.dataset.avatarKey){avatarDraft[b.dataset.avatarKey]=b.dataset.avatarValue;dialog.querySelectorAll(`[data-avatar-key="${b.dataset.avatarKey}"]`).forEach(button=>button.setAttribute('aria-pressed',String(button===b)));refreshAvatarPreview();return;}
  if(b.dataset.hotspot){explorer?.walkToHotspot(b.dataset.hotspot);return;}
  if(b.dataset.explore){const id=b.dataset.explore;closeModal();if(page!=='home'){page='home';render();}explorer?.walkToHotspot(id);return;}
  if(b.dataset.modal){if(b.dataset.modal==='memory-editor')openMemory();else openModal(b.dataset.modal);return;}
  if(b.dataset.game){act({type:b.dataset.game},b.dataset.refresh);return;}
  if(b.dataset.outingKind){outingKind=b.dataset.outingKind;openModal('outing');return;}
  if(b.dataset.marketTab){marketTab=b.dataset.marketTab;openModal('market');return;}
  if(b.dataset.cartridge){selectedCartridge=b.dataset.cartridge;openModal('switch');return;}
  if(b.dataset.buyFlower){act({type:'BUY_FLOWER',id:b.dataset.buyFlower},'market');return;}
  if(b.dataset.cook){act({type:'COOK',id:b.dataset.cook},'cooking');return;}
  if(b.dataset.destination){const place=DESTINATIONS.find(p=>p.id===b.dataset.destination);if(act({type:'OUTING',destinationId:place.id}))showReward(place);return;}
  if(b.dataset.collectionFilter){collectionFilter=b.dataset.collectionFilter;render();return;}
  if(b.dataset.memory){openMemory(state.memories.find(m=>m.id===b.dataset.memory));return;}
  if(b.dataset.item){showItem(b.dataset.item);return;}
  if(b.dataset.piece!==undefined){const index=Number(b.dataset.piece);if(selectedPiece<0)selectedPiece=index;else{[puzzle[selectedPiece],puzzle[index]]=[puzzle[index],puzzle[selectedPiece]];selectedPiece=-1;if(puzzle.every((v,i)=>v===i))act({type:'SOLVE_PUZZLE'});}openModal('puzzle');return;}
  switch(b.dataset.action){
    case 'close':closeModal();break;
    case 'interact':explorer?.interact();break;
    case 'retry-scene':render();break;
    case 'fullscreen':{if(document.fullscreenElement)document.exitFullscreen?.().catch(()=>toast('请用浏览器的全屏按钮退出。'));else if(document.documentElement.requestFullscreen)document.documentElement.requestFullscreen().catch(()=>toast('地图已经铺满窗口，也可以使用浏览器全屏。'));else toast('地图已经铺满窗口，可以使用浏览器的全屏模式。');break;}
    case 'music':music();break;
    case 'puzzle-reference':puzzleReference=!puzzleReference;openModal('puzzle');break;
    case 'next-day':act({type:'NEXT_DAY'});closeModal();break;
    case 'food-market':marketTab='food';openModal('market');break;
    case 'new-memory':openMemory();break;
    case 'new-character':avatarDraft={...DEFAULT_AVATAR,name:''};avatarTab='shape';openModal('avatar',{keepDraft:true});document.getElementById('avatar-name')?.focus();break;
    case 'edit-latest':openMemory(state.memories.at(-1));break;
    case 'remove-photo':{uploadedImage=null;dialog.querySelector('.photo-upload').innerHTML=`${icon('camera')}<span>从相册里挑一张</span><input class="file-input" id="memory-photo" type="file" accept="image/png,image/jpeg,image/webp,image/gif" aria-label="从相册里挑一张">`;document.getElementById('upload-status').textContent='照片已移除，保存后生效。';b.remove();break;}
    case 'export':{const blob=new Blob([JSON.stringify(state,null,2)],{type:'application/json'});const link=document.createElement('a');link.href=URL.createObjectURL(blob);link.download=`我们的房间-第${state.day}天.json`;link.click();setTimeout(()=>URL.revokeObjectURL(link.href),1000);toast('人物和房间进度已经存入备份。');break;}
  }
});
document.addEventListener('keydown',event=>{const obj=event.target.closest('[data-hotspot]');if(obj&&(event.key==='Enter'||event.key===' ')){event.preventDefault();obj.dispatchEvent(new MouseEvent('click',{bubbles:true}));}});
dialog.addEventListener('click',event=>{if(event.target===dialog){const rect=dialog.getBoundingClientRect();if(event.clientX<rect.left||event.clientX>rect.right||event.clientY<rect.top||event.clientY>rect.bottom)closeModal();}});
dialog.addEventListener('cancel',()=>{activeModal='';explorer?.resume();});
dialog.addEventListener('close',()=>{activeModal='';explorer?.resume();previousFocus?.focus?.();});
document.addEventListener('fullscreenchange',()=>{const button=document.querySelector('[data-action=fullscreen]');if(button)button.setAttribute('aria-label',document.fullscreenElement?'退出全屏':'进入全屏');explorer?.resize();});
document.addEventListener('input',event=>{
  if(activeModal!=='avatar'||!avatarDraft)return;
  if(event.target.id==='avatar-name'){avatarDraft.name=event.target.value;document.getElementById('avatar-error').textContent='';refreshAvatarPreview();}
  const key=event.target.dataset.avatarSlider;
  if(key){avatarDraft[key]=Number(event.target.value);document.getElementById(`value-${key}`).textContent=event.target.value;refreshAvatarPreview();}
});
document.addEventListener('keydown',event=>{
  const tab=event.target.closest('[data-avatar-tab]');
  if(!tab||!['ArrowLeft','ArrowRight'].includes(event.key))return;
  event.preventDefault();avatarTab=avatarTab==='shape'?'face':'shape';openModal('avatar',{keepDraft:true});document.getElementById(`avatar-tab-${avatarTab}`)?.focus();
});
document.addEventListener('submit',event=>{
  if(event.target.id==='avatar-form'){
    event.preventDefault();
    if(!avatarDraft.name.trim()){document.getElementById('avatar-error').textContent='先给人物起个名字吧。';document.getElementById('avatar-name').focus();return;}
    const result=reduceGame(state,{type:'SAVE_CHARACTER',character:normalizeAvatar(avatarDraft)});
    if(result.success){state=result.state;persist();closeModal();render();toast(storageError||`${state.character.name}，欢迎回家。`);}
    return;
  }
  if(event.target.id!=='memory-form')return;event.preventDefault();const data=new FormData(event.target);const title=data.get('title').trim();const description=data.get('description').trim();
  if(!title||!description){document.getElementById('form-error').textContent='请填写名字和这件物品背后的故事。';return;}
  if(!editingMemory&&!uploadedImage){document.getElementById('form-error').textContent='请先选择一张照片，再保存到冰箱。';return;}
  const memory={...(editingMemory||{}),id:editingMemory?.id||`personal-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,title,description,date:data.get('date'),day:editingMemory?.day||state.day,kind:editingMemory?.kind||'home',theme:editingMemory?.theme||'home'};
  if(uploadedImage)memory.image=uploadedImage;else delete memory.image;
  const existing=state.memories.findIndex(m=>m.id===memory.id);if(existing>=0)state.memories[existing]=memory;else state.memories.push(memory);
  const sourcePlace=DESTINATIONS.find(p=>memory.id.startsWith(`outing-${p.id}-day-`));
  if(sourcePlace){state.photos=state.photos.filter(id=>id!==memory.id);if(!state.photos.includes(sourcePlace.photo.id))state.photos.push(sourcePlace.photo.id);}
  else if(memory.image&&!state.photos.includes(memory.id))state.photos.push(memory.id);else if(!memory.image)state.photos=state.photos.filter(id=>id!==memory.id);
  state=normalizeState(state);persist();page='collection';collectionFilter='all';render();closeModal();toast(storageError || '照片与故事已保存，可以在收藏和房间物件中查看。');
});
document.addEventListener('change',async event=>{
  if(event.target.id==='memory-photo'){
    const file=event.target.files[0];if(!file)return;const status=document.getElementById('upload-status');
    if(!/^image\/(png|jpeg|webp|gif)$/.test(file.type)){status.textContent='请选择 JPG、PNG、WebP 或 GIF 照片。';return;}
    if(file.size>15*1024*1024){status.textContent='这张照片有点大，请选择 15MB 以内的照片。';return;}
    const submit=dialog.querySelector('button[type=submit]');submit.disabled=true;status.textContent='正在整理照片…';document.getElementById('form-error').textContent='';
    try{const bitmap=await createImageBitmap(file);const ratio=Math.min(1,900/Math.max(bitmap.width,bitmap.height));const canvas=document.createElement('canvas');canvas.width=Math.round(bitmap.width*ratio);canvas.height=Math.round(bitmap.height*ratio);canvas.getContext('2d').drawImage(bitmap,0,0,canvas.width,canvas.height);uploadedImage=canvas.toDataURL('image/jpeg',.76);bitmap.close();const preview=document.createElement('img');preview.src=uploadedImage;preview.alt='已选择的回忆照片';preview.width=420;preview.height=260;const label=dialog.querySelector('.photo-upload');label.replaceChildren(preview,event.target);status.textContent='照片已经贴好，再写一点那天的小事吧。';if(!dialog.querySelector('[data-action=remove-photo]')){const remove=document.createElement('button');remove.type='button';remove.className='text-button';remove.dataset.action='remove-photo';remove.textContent='移除照片';status.after(remove);}}catch{status.textContent='这张照片暂时没有打开，请换一张再试试。';}finally{submit.disabled=false;}
  }
  if(event.target.id==='import-save'){
    const file=event.target.files[0];if(!file)return;
    try{if(file.size>16*1024*1024)throw Error();const imported=JSON.parse(await file.text());if(imported.version!==1||!Number.isInteger(imported.day)||!Array.isArray(imported.memories))throw Error();const candidate=normalizeState(imported);activeModal='confirm-import';dialogContent.innerHTML=modalShell('恢复之前的房间',`备份里是第 ${candidate.day} 天，${getCollectionCount(candidate)} 件收藏。`,`<p class="item-story">导入后，会用这份备份替换当前房间的进度。建议先导出当前存档。</p><div class="modal-bottom-actions"><button class="secondary-button" data-modal="settings">先不导入</button><button class="primary-button" id="confirm-import">确认恢复这份备份</button></div>`);document.getElementById('confirm-import').addEventListener('click',()=>{state=candidate;persist();page='home';render();closeModal();toast('熟悉的房间，又回来了。');},{once:true});}catch{toast('这份备份暂时无法读取。请选择从房间设置中导出的 JSON 存档。');}
  }
});
render();

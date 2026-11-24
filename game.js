import { normalizeAvatar } from './avatar.js';

/**
 * Local, deterministic game state. Day is a game day, never a real-world clock.
 *
 * State: {version, day, coins, growth, wateredDay, puzzleSolved, projectorOn,
 * flower: flower ID | null, character: Avatar | null, inventory: {ingredients, cartridge},
 * memories: [{id,title,description,day,kind,theme,image?,date?}],
 * plushies: plush IDs[], recipes: recipe IDs[], magnets: magnet IDs[],
 * photos: photo IDs[], tickets: ticket IDs[] }.
 *
 * All destination text is fictional sample content for the playable prototype.
 * Actions: WATER; NEXT_DAY; BUY_FLOWER {id}; BUY_INGREDIENTS; COOK {id};
 * OUTING {destinationId}; SOLVE_PUZZLE; TOGGLE_PROJECTOR; SAVE_CHARACTER {character}.
 * reduceGame never mutates its input and returns {state, message, success}.
 */

export const FLOWERS = [
  { id: 'tulip', name: '蜜桃郁金香', description: '把温柔的春天，放在桌角。', price: 15, color: '#cc8e79' },
  { id: 'daisy', name: '小雏菊', description: '一小束，就能让平凡的一天亮起来。', price: 10, color: '#f3e9cb' },
  { id: 'sunflower', name: '向日葵', description: '让家里多一颗小太阳。', price: 18, color: '#c7a150' },
];

export const RECIPES = [
  { id: 'tomato-noodles', name: '番茄鸡蛋面', description: '热气腾腾的一碗面，是回家的味道。', ingredients: 1, ingredientLabel: '番茄、鸡蛋、面条', color: '#c6785e' },
  { id: 'curry-rice', name: '暖暖咖喱饭', description: '土豆和胡萝卜一起，慢慢炖出一份期待。', ingredients: 1, ingredientLabel: '土豆、胡萝卜、咖喱', color: '#b8954f' },
  { id: 'rice-ball', name: '海苔小饭团', description: '捏成喜欢的形状，留一点给明天的野餐。', ingredients: 1, ingredientLabel: '米饭、海苔、芝麻', color: '#71806a' },
];

export const DESTINATIONS = [
  {
    id: 'seaside', kind: 'date', name: '去海边散步', description: '沿着海岸走一走，把晚霞带回家。',
    theme: 'sea', photoTheme: 'sea', souvenir: '海边合照与电车票',
    photo: { id: 'photo-seaside', name: '海边的晚霞', description: '风有一点大，但这张照片刚刚好。' },
    ticket: { id: 'ticket-seaside', name: '海边电车票', description: '终点站到了，我们还想再走一会儿。' },
  },
  {
    id: 'bookstore', kind: 'date', name: '逛一间旧书店', description: '在书架之间，找到同一本喜欢的书。',
    theme: 'books', photoTheme: 'books', souvenir: '书店合照与留言书签',
    photo: { id: 'photo-bookstore', name: '书页之间', description: '午后的光，刚好落在翻开的那一页。' },
    ticket: { id: 'ticket-bookstore', name: '旧书店的书签', description: '店主写着：下次还要一起再来。' },
  },
  {
    id: 'arcade', kind: 'date', name: '去抓娃娃', description: '再试一次，说不定这次就抓到了。',
    theme: 'arcade', photoTheme: 'arcade', souvenir: '一只软软的小熊',
    photo: { id: 'photo-arcade', name: '今天的幸运', description: '抓到小熊时的开心，都留在了这里。' },
    plush: { id: 'plush-bear', name: '奶茶小熊', description: '抓娃娃带回来的新室友，坐在沙发上等你。' },
  },
  {
    id: 'market', kind: 'date', name: '逛周末集市', description: '挑一束花，再买一点今晚的食材。',
    theme: 'market', photoTheme: 'market', souvenir: '集市随拍',
    photo: { id: 'photo-market', name: '集市的午后', description: '花摊和蔬菜摊之间，也藏着值得记住的小事。' },
  },
  {
    id: 'hangzhou', kind: 'travel', name: '杭州', description: '坐一班慢车，去看西湖边的树影。',
    theme: 'lake', photoTheme: 'lake', souvenir: '西湖冰箱贴、车票与旅行照片',
    photo: { id: 'photo-hangzhou', name: '西湖边的我们', description: '湖水很安静，散步可以走得慢一点。' },
    ticket: { id: 'ticket-hangzhou', name: '去杭州的车票', description: '靠窗的位置，窗外是一路向南的风景。' },
    magnet: { id: 'magnet-hangzhou', name: '西湖冰箱贴', description: '把一小片湖光山色，贴在每天经过的地方。' },
  },
  {
    id: 'dali', kind: 'travel', name: '大理', description: '去有风的地方，看看洱海和远处的山。',
    theme: 'mountain', photoTheme: 'mountain', souvenir: '苍山冰箱贴、船票与旅行照片',
    photo: { id: 'photo-dali', name: '洱海的风', description: '蓝色的湖水，白色的云，和想记住的这一天。' },
    ticket: { id: 'ticket-dali', name: '洱海的小船票', description: '晃晃悠悠的船上，把烦恼留在岸边。' },
    magnet: { id: 'magnet-dali', name: '苍山洱海冰箱贴', description: '远处的山和湖，变成了手心大小的纪念。' },
  },
  {
    id: 'japan', kind: 'travel', name: '京都', description: '沿着小巷慢慢走，听一听夏天的风铃。',
    theme: 'japan', photoTheme: 'japan', souvenir: '风铃冰箱贴、电车票与旅行照片',
    photo: { id: 'photo-japan', name: '小巷里的夏天', description: '绕过街角时，刚好听见一声风铃。' },
    ticket: { id: 'ticket-japan', name: '京都电车票', description: '那一天，连坐错一站都变成了小惊喜。' },
    magnet: { id: 'magnet-japan', name: '夏日风铃冰箱贴', description: '一只不会响的风铃，也能让人想起夏天。' },
  },
];

const collectionKeys = ['plushies', 'recipes', 'magnets', 'photos', 'tickets'];
const knownIds = {
  plushies: new Set(DESTINATIONS.flatMap((place) => place.plush ? [place.plush.id] : [])),
  recipes: new Set(RECIPES.map((recipe) => recipe.id)),
  magnets: new Set(DESTINATIONS.flatMap((place) => place.magnet ? [place.magnet.id] : [])),
  photos: new Set(DESTINATIONS.map((place) => place.photo.id)),
  tickets: new Set(DESTINATIONS.flatMap((place) => place.ticket ? [place.ticket.id] : [])),
};

export function createInitialState() {
  return {
    version: 1,
    day: 1,
    coins: 120,
    growth: 0,
    wateredDay: 0,
    puzzleSolved: false,
    projectorOn: false,
    flower: null,
    character: null,
    inventory: { ingredients: 0, cartridge: true },
    memories: [],
    plushies: [],
    recipes: [],
    magnets: [],
    photos: [],
    tickets: [],
  };
}

function safeInteger(value, fallback, minimum, maximum) {
  return typeof value === 'number' && Number.isFinite(value)
    ? Math.min(maximum, Math.max(minimum, Math.floor(value)))
    : fallback;
}

export function normalizeState(value) {
  const result = createInitialState();
  if (!value || typeof value !== 'object' || Array.isArray(value)) return result;
  result.day = safeInteger(value.day, 1, 1, 1000000);
  result.coins = safeInteger(value.coins, 120, 0, 1000000);
  result.growth = safeInteger(value.growth, 0, 0, 4);
  result.wateredDay = safeInteger(value.wateredDay, 0, 0, result.day);
  result.puzzleSolved = value.puzzleSolved === true;
  result.projectorOn = value.projectorOn === true;
  result.flower = FLOWERS.some((flower) => flower.id === value.flower) ? value.flower : null;
  if (value.character && typeof value.character === 'object' && !Array.isArray(value.character)) {
    result.character = normalizeAvatar(value.character);
  }
  result.inventory.ingredients = safeInteger(value.inventory?.ingredients, 0, 0, 999);
  result.inventory.cartridge = value.inventory?.cartridge !== false;
  if (!result.inventory.cartridge) result.projectorOn = false;
  for (const key of collectionKeys) {
    if (Array.isArray(value[key])) {
      result[key] = [...new Set(value[key].filter((id) => {
        if (typeof id !== 'string' || !id || id.length > 120 || /[\u0000-\u001f<>]/.test(id)) return false;
        return ['photos', 'magnets', 'tickets'].includes(key) || knownIds[key].has(id);
      }))];
    }
  }
  if (Array.isArray(value.memories)) {
    const ids = new Set();
    result.memories = value.memories.filter((memory) => {
      if (!memory || typeof memory !== 'object' || typeof memory.id !== 'string' || ids.has(memory.id)) return false;
      if (typeof memory.title !== 'string' || typeof memory.description !== 'string') return false;
      ids.add(memory.id);
      return true;
    }).slice(-1000).map((memory) => ({
      id: memory.id.slice(0, 120),
      title: memory.title.slice(0, 120),
      description: memory.description.slice(0, 600),
      day: safeInteger(memory.day, result.day, 1, result.day),
      kind: ['date', 'travel', 'home', 'recipe', 'plant'].includes(memory.kind) ? memory.kind : 'home',
      theme: typeof memory.theme === 'string' ? memory.theme.slice(0, 40) : 'home',
      ...(typeof memory.date === 'string' ? { date: memory.date.slice(0, 40) } : {}),
      ...(typeof memory.image === 'string' && memory.image.length <= 12000000 && /^data:image\/(?:png|jpeg|webp|gif);base64,[A-Za-z0-9+/=\r\n]+$/.test(memory.image) ? { image: memory.image } : {}),
    }));
  }
  return result;
}

function addUnique(array, id) {
  if (id && !array.includes(id)) array.push(id);
}

function addMemory(state, memory) {
  if (!state.memories.some((entry) => entry.id === memory.id)) {
    state.memories.push({ day: state.day, ...memory });
    if (state.memories.length > 1000) state.memories.shift();
  }
}

export function getCollectionCount(value) {
  const state = normalizeState(value);
  return collectionKeys.reduce((count, key) => count + state[key].length, 0)
    + Number(state.puzzleSolved) + Number(Boolean(state.flower)) + Number(state.growth === 4);
}

export function reduceGame(value, action) {
  const state = normalizeState(value);
  const fail = (message) => ({ state, message, success: false });
  const done = (message) => ({ state, message, success: true });
  if (!action || typeof action !== 'object') return fail('没有找到这个操作，请再试一次。');

  switch (action.type) {
    case 'SAVE_CHARACTER': {
      if (!action.character || typeof action.character !== 'object' || Array.isArray(action.character)) {
        return fail('请先选择小人的样子。');
      }
      state.character = normalizeAvatar(action.character);
      return done('小人的新样子已经保存。');
    }
    case 'WATER': {
      if (state.wateredDay === state.day) return fail('今天已经浇过水啦，明天再来看看它。');
      if (state.growth >= 4) return fail('花已经盛开了，谢谢你每天的照顾。');
      state.wateredDay = state.day;
      state.growth += 1;
      if (state.growth === 4) {
        addMemory(state, { id: 'first-bloom', title: '第一朵花开了', description: '四次认真照顾，换来了一朵小小的花。', kind: 'plant', theme: 'flower' });
        return done('花开了！你把一点耐心，养成了一份小惊喜。');
      }
      return done(['', '浇好水了，一颗小芽探出了头。', '新叶子长出来了，它正在好好长大。', '花苞出现了，明天再来看看吧。'][state.growth]);
    }
    case 'NEXT_DAY': {
      if (state.day === 1000000) return fail('今天还有好多值得慢慢发现的小事。');
      state.day += 1;
      state.coins = Math.min(1000000, state.coins + 30);
      state.projectorOn = false;
      return done(`第 ${state.day} 天，新的日子开始了。收到 30 枚生活币。`);
    }
    case 'BUY_FLOWER': {
      const flower = FLOWERS.find((item) => item.id === action.id);
      if (!flower) return fail('这束花还没有到货，换一束试试吧。');
      if (state.flower === flower.id) return fail('花瓶里已经是这束花了。');
      if (state.coins < flower.price) return fail('生活币不够了，睡一觉到明天可以再领取 30 枚。');
      state.coins -= flower.price;
      state.flower = flower.id;
      addMemory(state, { id: `flower-${flower.id}`, title: `带一束${flower.name}回家`, description: flower.description, kind: 'home', theme: 'flower' });
      return done(`把${flower.name}插进花瓶，家里多了一点春天。`);
    }
    case 'BUY_INGREDIENTS': {
      if (state.coins < 20) return fail('食材包需要 20 枚生活币，明天再来逛逛吧。');
      if (state.inventory.ingredients > 996) return fail('冰箱已经装得满满的，先做一顿饭吧。');
      state.coins -= 20;
      state.inventory.ingredients += 3;
      return done('买好了 3 份新鲜食材，回家就可以做饭了。');
    }
    case 'COOK': {
      const recipe = RECIPES.find((item) => item.id === action.id);
      if (!recipe) return fail('这道菜还没有写进菜单，换一道试试吧。');
      if (state.inventory.ingredients < recipe.ingredients) return fail('食材还不够，先去集市买一点吧。');
      state.inventory.ingredients -= recipe.ingredients;
      const isNew = !state.recipes.includes(recipe.id);
      addUnique(state.recipes, recipe.id);
      addMemory(state, { id: `recipe-${recipe.id}`, title: `第一次做${recipe.name}`, description: recipe.description, kind: 'recipe', theme: 'food' });
      return done(isNew ? `${recipe.name}做好了，已经收进菜谱图鉴。` : `${recipe.name}做好了，熟悉的味道又回来了。`);
    }
    case 'OUTING': {
      const place = DESTINATIONS.find((item) => item.id === action.destinationId);
      if (!place) return fail('还没有找到这个目的地，换一个地方试试吧。');
      const memoryId = `outing-${place.id}-day-${state.day}`;
      if (state.memories.some((entry) => entry.id === memoryId)) return fail('今天已经去过这里啦，换个地方，或者明天再来。');
      addUnique(state.photos, place.photo.id);
      if (place.ticket) addUnique(state.tickets, place.ticket.id);
      if (place.magnet) addUnique(state.magnets, place.magnet.id);
      if (place.plush) addUnique(state.plushies, place.plush.id);
      addMemory(state, {
        id: memoryId,
        title: place.photo.name,
        description: place.photo.description,
        kind: place.kind,
        theme: place.theme,
      });
      return done(`回到家啦，带回了${place.souvenir}。`);
    }
    case 'SOLVE_PUZZLE': {
      if (state.puzzleSolved) return fail('拼图已经完成啦，随时可以再看看它。');
      state.puzzleSolved = true;
      addMemory(state, { id: 'completed-puzzle', title: '最后一块拼图', description: '一块接着一块，终于把想看的风景拼成完整的样子。', kind: 'home', theme: 'puzzle' });
      return done('世界地图拼好了，已经挂到沙发背后的墙上。');
    }
    case 'TOGGLE_PROJECTOR': {
      if (!state.inventory.cartridge) return fail('还没有游戏卡带，找到卡带之后再来吧。');
      state.projectorOn = !state.projectorOn;
      if (state.projectorOn) {
        addMemory(state, { id: 'first-game-night', title: '今晚一起玩游戏', description: '插好卡带，关掉大灯，把快乐投在床对面的墙上。', kind: 'home', theme: 'game' });
      }
      return done(state.projectorOn ? '卡带插好了，投影亮起来了。今晚一起玩吧。' : '投影关好了，好好休息一会儿。');
    }
    default:
      return fail('没有找到这个操作，请再试一次。');
  }
}

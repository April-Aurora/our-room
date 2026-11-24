import assert from 'node:assert/strict';
import { createInitialState, normalizeState, reduceGame, getCollectionCount, RECIPES, DESTINATIONS, FLOWERS } from './game.js';
const apply = (state, type, extra = {}) => reduceGame(state, { type, ...extra });

let tests = 0;
function test(name, callback) {
  callback();
  tests += 1;
  console.log(`PASS ${name}`);
}

test('Each new game owns independent nested state', () => {
  const a = createInitialState();
  const b = createInitialState();
  a.inventory.ingredients = 50;
  a.photos.push('photo-seaside');
  assert.equal(b.inventory.ingredients, 0);
  assert.deepEqual(b.photos, []);
});

test('Malformed saves become bounded, safe state', () => {
  assert.deepEqual(normalizeState(null), createInitialState());
  assert.deepEqual(normalizeState([]), createInitialState());
  assert.deepEqual(normalizeState('broken-json'), createInitialState());
  const state = normalizeState({ day: -3, growth: 400, coins: NaN, wateredDay: 900, inventory: { ingredients: -4, cartridge: false }, projectorOn: true, flower: '__bad__', photos: [null, {}, 'photo-seaside', 'photo-seaside', '<script>'], memories: [null, {}, { id: 'ok', title: '一个标题', description: '说明', day: 999, kind: 'bad' }] });
  assert.equal(state.day, 1);
  assert.equal(state.growth, 4);
  assert.equal(state.wateredDay, 1);
  assert.equal(state.coins, 120);
  assert.equal(state.inventory.ingredients, 0);
  assert.equal(state.projectorOn, false);
  assert.equal(state.flower, null);
  assert.deepEqual(state.photos, ['photo-seaside']);
  assert.equal(state.memories.length, 1);
  assert.equal(state.memories[0].day, 1);
  assert.equal(state.memories[0].kind, 'home');
});

test('Water grows once per game day, then blooms on fourth day', () => {
  let state = createInitialState();
  const original = structuredClone(state);
  let result = apply(state, 'WATER');
  assert.equal(result.success, true);
  assert.equal(result.state.growth, 1);
  assert.deepEqual(state, original, 'Reducer must never mutate caller state');
  state = result.state;
  result = apply(state, 'WATER');
  assert.equal(result.success, false);
  assert.equal(result.state.growth, 1);
  for (let i = 0; i < 3; i += 1) {
    state = apply(state, 'NEXT_DAY').state;
    state = apply(state, 'WATER').state;
  }
  assert.equal(state.growth, 4);
  assert.equal(state.memories.filter((entry) => entry.id === 'first-bloom').length, 1);
  state = apply(state, 'NEXT_DAY').state;
  assert.equal(apply(state, 'WATER').success, false);
  assert.equal(state.coins, 240);
});

test('Buying food then cooking consumes stock and unlocks a unique recipe', () => {
  let state = createInitialState();
  assert.equal(apply(state, 'COOK', { id: RECIPES[0].id }).success, false);
  state = apply(state, 'BUY_INGREDIENTS').state;
  assert.equal(state.coins, 100);
  assert.equal(state.inventory.ingredients, 3);
  for (let i = 0; i < 3; i += 1) state = apply(state, 'COOK', { id: RECIPES[0].id }).state;
  assert.equal(state.inventory.ingredients, 0);
  assert.deepEqual(state.recipes, [RECIPES[0].id]);
  assert.equal(state.memories.length, 1);
  assert.equal(apply(state, 'COOK', { id: RECIPES[0].id }).success, false);
  assert.equal(apply({ ...state, coins: 0 }, 'BUY_INGREDIENTS').success, false);
  assert.equal(apply(state, 'COOK', { id: 'unknown' }).success, false);
});

test('Every outing grants only its corresponding collectibles and resists repeated grants', () => {
  let state = createInitialState();
  for (const place of DESTINATIONS) {
    const result = apply(state, 'OUTING', { destinationId: place.id });
    assert.equal(result.success, true, place.id);
    state = result.state;
    assert.ok(state.photos.includes(place.photo.id));
    if (place.ticket) assert.ok(state.tickets.includes(place.ticket.id));
    if (place.magnet) assert.ok(state.magnets.includes(place.magnet.id));
    if (place.plush) assert.ok(state.plushies.includes(place.plush.id));
    assert.equal(apply(state, 'OUTING', { destinationId: place.id }).success, false);
  }
  assert.equal(state.photos.length, DESTINATIONS.length);
  assert.equal(state.magnets.length, 3);
  assert.equal(state.plushies.length, 1);
  assert.equal(state.memories.length, DESTINATIONS.length);
  const photosBefore = [...state.photos];
  state = apply(state, 'NEXT_DAY').state;
  state = apply(state, 'OUTING', { destinationId: 'seaside' }).state;
  assert.deepEqual(state.photos, photosBefore);
  assert.equal(state.memories.length, DESTINATIONS.length + 1);
  assert.equal(apply(state, 'OUTING', { destinationId: 'missing' }).success, false);
});

test('Flower purchase updates vase, charges once, and prevents unaffordable purchases', () => {
  let state = createInitialState();
  state = apply(state, 'BUY_FLOWER', { id: FLOWERS[0].id }).state;
  assert.equal(state.flower, FLOWERS[0].id);
  assert.equal(state.coins, 120 - FLOWERS[0].price);
  const again = apply(state, 'BUY_FLOWER', { id: FLOWERS[0].id });
  assert.equal(again.success, false);
  assert.equal(again.state.coins, state.coins);
  assert.equal(apply({ ...state, coins: 0 }, 'BUY_FLOWER', { id: FLOWERS[1].id }).success, false);
});

test('Solving the puzzle is idempotent and projector respects the cartridge', () => {
  let state = createInitialState();
  state = apply(state, 'SOLVE_PUZZLE').state;
  assert.equal(state.puzzleSolved, true);
  assert.equal(apply(state, 'SOLVE_PUZZLE').success, false);
  assert.equal(state.memories.length, 1);
  state = apply(state, 'TOGGLE_PROJECTOR').state;
  assert.equal(state.projectorOn, true);
  state = apply(state, 'TOGGLE_PROJECTOR').state;
  assert.equal(state.projectorOn, false);
  assert.equal(state.memories.length, 2);
  state = apply(state, 'TOGGLE_PROJECTOR').state;
  state = apply(state, 'NEXT_DAY').state;
  assert.equal(state.projectorOn, false);
  state.inventory.cartridge = false;
  assert.equal(apply(state, 'TOGGLE_PROJECTOR').success, false);
});

test('Collection counter reflects actual unique discoveries; unknown actions fail safely', () => {
  let state = createInitialState();
  assert.equal(getCollectionCount(state), 0);
  state = apply(state, 'SOLVE_PUZZLE').state;
  state = apply(state, 'BUY_FLOWER', { id: FLOWERS[0].id }).state;
  state = apply(state, 'OUTING', { destinationId: 'hangzhou' }).state;
  assert.equal(getCollectionCount(state), 5);
  assert.equal(apply(state, 'UNSUPPORTED').success, false);
  assert.equal(reduceGame(state, null).success, false);
  assert.deepEqual(normalizeState(JSON.parse(JSON.stringify(state))), state);
});

test('Personal memories keep dates, safe photo data, and custom collectible IDs', () => {
  const image = 'data:image/jpeg;base64,/9j/4AAQSkZJRg==';
  const state = normalizeState({
    photos: ['custom-photo-123'], magnets: ['custom-magnet-123'], tickets: ['custom-ticket-123'],
    memories: [{ id: 'custom-123', title: '第一次一起旅行', description: '自己的真实回忆。', day: 1, kind: 'travel', theme: 'photo', date: '2026-04-10', image }],
  });
  assert.deepEqual(state.photos, ['custom-photo-123']);
  assert.deepEqual(state.magnets, ['custom-magnet-123']);
  assert.deepEqual(state.tickets, ['custom-ticket-123']);
  assert.equal(state.memories[0].image, image);
  assert.equal(state.memories[0].date, '2026-04-10');
  assert.deepEqual(normalizeState(JSON.parse(JSON.stringify(state))), state);
  state.memories[0].image = 'javascript:alert(1)';
  assert.equal(normalizeState(state).memories[0].image, undefined);
});

console.log(`\n${tests} state-engine tests passed.`);

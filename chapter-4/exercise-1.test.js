const exercise = require('./exercise-1');

test('range works as expected', () => {
  expect(exercise.range(1, 8)).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8]);
});

test('range works as expected (end > start)', () => {
  expect(exercise.range(8, 1)).toStrictEqual([8, 7, 6, 5, 4, 3, 2, 1]);
});

test('range works as expected with step', () => {
  expect(exercise.range(1, 8, +2)).toStrictEqual([1, 3, 5, 7]);
});

test('range works as expected with step (end > start)', () => {
  expect(exercise.range(8, 1, -2)).toStrictEqual([8, 6, 4, 2]);
});

test('range returns an empty array with an invalid start and/or end', () => {
  expect(exercise.range()).toStrictEqual([]);
  expect(exercise.range(8)).toStrictEqual([]);
  expect(exercise.range(-Infinity, +Infinity)).toStrictEqual([]);
  expect(exercise.range(+Infinity, -Infinity)).toStrictEqual([]);
  expect(exercise.range(8, NaN)).toStrictEqual([]);
  expect(exercise.range(NaN, 8)).toStrictEqual([]);
  expect(exercise.range('a', 'b')).toStrictEqual([]);
  expect(exercise.range(true, null)).toStrictEqual([]);
  expect(exercise.range(null, true)).toStrictEqual([]);
});

test('range returns an empty array with an invalid step', () => {
  expect(exercise.range(1, 8, -1)).toStrictEqual([]);
  expect(exercise.range(8, 1, +1)).toStrictEqual([]);
  expect(exercise.range(1, 8, +Infinity)).toStrictEqual([]);
  expect(exercise.range(8, 1, -Infinity)).toStrictEqual([]);
  expect(exercise.range(1, 8, NaN)).toStrictEqual([]);
  expect(exercise.range(1, 8, 'a')).toStrictEqual([]);
  expect(exercise.range(8, 1, true)).toStrictEqual([]);
});

test('sum works as expected', () => {
  expect(exercise.sum([1, 4, 7])).toBe(12);
});

test('sum ignores invalid elements in the array', () => {
  expect(exercise.sum([1, NaN, 'a', 4, null, true, 7, +Infinity, -Infinity, undefined])).toBe(12);
});

test('sum and range work together', () => {
  expect(exercise.sum(exercise.range(1, 10))).toBe(55);
});

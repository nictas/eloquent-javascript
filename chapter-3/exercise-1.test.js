const min = require('./exercise-1');

test('min returns the minimum value of 2 numbers', () => {
  expect(min(4, 2)).toBe(2);
  expect(min(2, 4)).toBe(2);
  expect(min(-2, -8)).toBe(-8);
  expect(min(-8, -2)).toBe(-8);
});

test('min returns the minimum value of 2 infinities', () => {
  expect(min(-Infinity, +Infinity)).toBe(-Infinity);
  expect(min(+Infinity, -Infinity)).toBe(-Infinity);
  expect(min(-Infinity, -Infinity)).toBe(-Infinity);
  expect(min(+Infinity, +Infinity)).toBe(+Infinity);
});

test('min discards values other than numbers', () => {
  expect(min(NaN, 2)).toBe(2);
  expect(min(2, NaN)).toBe(2);
  expect(min('a', 2)).toBe(2);
  expect(min(2, 'a')).toBe(2);
  expect(min(-Infinity, 'a')).toBe(-Infinity);
  expect(min(NaN, NaN)).toBe(NaN);
  expect(min('a', 'b')).toBe(NaN);
});

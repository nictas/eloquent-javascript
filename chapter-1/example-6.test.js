const arePreciselyEqual = require('./example-6');

test('0 is precisely equal to 0', () => {
  expect(arePreciselyEqual(0, 0)).toBe(true);
});

test('false is not precisely equal to 0', () => {
  expect(arePreciselyEqual(false, 0)).toBe(false);
});

test('false is not precisely equal to an empty string', () => {
  expect(arePreciselyEqual(false, '')).toBe(false);
});

test('null is not precisely equal to undefined', () => {
  expect(arePreciselyEqual(null, undefined)).toBe(false);
});

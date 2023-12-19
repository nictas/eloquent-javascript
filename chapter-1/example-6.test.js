const arePreciselyEqual = require('./example-6');

test('=== works as expected', () => {
  expect(arePreciselyEqual(0, 0)).toBe(true);
  expect(arePreciselyEqual(false, 0)).toBe(false);
  expect(arePreciselyEqual(false, '0')).toBe(false);
  expect(arePreciselyEqual(undefined, null)).toBe(false);
});

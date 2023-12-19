const areEqual = require('./example-4');

test('== works as expected', () => {
  expect(areEqual('Luke', 'Luke')).toBe(true);
  expect(areEqual('Luke', 'Leia')).toBe(false);
  expect(areEqual(NaN, NaN)).toBe(false);
  expect(areEqual(NaN, +Infinity)).toBe(false);
  expect(areEqual(NaN, -Infinity)).toBe(false);
  expect(areEqual(null, 0)).toBe(false);
  expect(areEqual(null, false)).toBe(false);
  expect(areEqual(null, undefined)).toBe(true);
  expect(areEqual(undefined, 0)).toBe(false);
  expect(areEqual(undefined, false)).toBe(false);
  expect(areEqual('test', new String('test'))).toBe(true);
});

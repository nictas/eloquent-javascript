const areEqual = require('./chapter-1-example-4');

test('Luke is equal to Luke', () => {
  expect(areEqual('Luke', 'Luke')).toBe(true);
});

test('Luke is not equal to Leia', () => {
  expect(areEqual('Luke', 'Leia')).toBe(false);
});

test('NaN is not equal to NaN', () => {
  expect(areEqual(NaN, NaN)).toBe(false);
});

test('undefined is equal to null', () => {
  expect(areEqual(undefined, null)).toBe(true);
});

test('null is not equal to 0', () => {
  expect(areEqual(null, 0)).toBe(false);
});

test('undefined is not equal to 0', () => {
  expect(areEqual(undefined, 0)).toBe(false);
});

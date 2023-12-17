const areEqual = require('./chapter-1-example-4');

test('Luke is equal to Luke', () => {
  expect(areEqual('Luke', 'Luke')).toBe(true);
});

test('Luke is not equal to Leia', () => {
  expect(areEqual('Luke', 'Leia')).toBe(false);
});

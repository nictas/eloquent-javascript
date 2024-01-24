const max = require('./example-8');

test('Max works with 5 numbers', () => {
  expect(max(1, 2, 5, 4, 3)).toBe(5);
});

test('Max works with 5 numbers (3 of which are from a spread array)', () => {
  let numbers = [2, 5, 4];
  expect(max(1, ...numbers, 3)).toBe(5);
});

test('Max works with 2 numbers', () => {
  expect(max(1, 2)).toBe(2);
});

test('Max works with 1 number', () => {
  expect(max(-123)).toBe(-123);
});

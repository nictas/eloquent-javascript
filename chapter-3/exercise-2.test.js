const isEven = require('./exercise-2');

test('isEven returns true for positive even numbers and false for odd ones', () => {
  expect(isEven(2)).toBe(true);
  expect(isEven(3)).toBe(false);
  expect(isEven(11112)).toBe(true);
  expect(isEven(11113)).toBe(false);
});

test('isEven returns true for negative even numbers and false for odd ones', () => {
  expect(isEven(-2)).toBe(true);
  expect(isEven(-3)).toBe(false);
  expect(isEven(-11112)).toBe(true);
  expect(isEven(-11113)).toBe(false);
});

test('isEven returns false for fractions', () => {
  expect(isEven(3.14)).toBe(false);
  expect(isEven(0.01)).toBe(false);
});

test('isEven return false for values other than numbers', () => {
  expect(isEven(+Infinity)).toBe(false);
  expect(isEven(-Infinity)).toBe(false);
  expect(isEven(NaN)).toBe(false);
  expect(isEven("a")).toBe(false);
  expect(isEven(true)).toBe(false);
  expect(isEven(null)).toBe(false);
  expect(isEven(undefined)).toBe(false);
});
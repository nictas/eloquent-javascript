const example = require('./example-1');

test('Function with optional parameter works', () => {
  expect(example.minus(4)).toBe(-4);
  expect(example.minus(4, 12)).toBe(-8);
});

test('Function held in a constant works', () => {
  expect(example.square(4)).toBe(16);
});

test('Function nested inside another function works', () => {
  expect(example.squareNested(4)).toBe(16);
});

test('Lambda with 2 parameters works', () => {
  expect(example.pow(4, 3)).toBe(64);
});

test('Lambda with 0 parameters works', () => {
  expect(example.answerToLifeUniverseEverything()).toBe(42);
});

test('Lambda with 2 parameters, one of which is optional works', () => {
  expect(example.pow(4)).toBe(16);
});

test('Lambda with 1 parameter works', () => {
  expect(example.squareLambda(4)).toBe(16);
});

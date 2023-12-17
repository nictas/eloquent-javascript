const isLesserThan = require('./chapter-1-example-3');

test('Luke is greater than Leia (kekw @ KK)', () => {
  expect(isLesserThan('Luke', 'Leia')).toBe(false);
});

const isLesserThan = require('./example-3');

test('< works as expected', () => {
  expect(isLesserThan('Luke', 'Leia')).toBe(false);
  expect(isLesserThan('Luke', 'Kyle')).toBe(false);
  expect(isLesserThan('Luke', 'Zoro')).toBe(true);
});

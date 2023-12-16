const templateLiteral = require('./chapter-1-example-1');

test('100 / 2 is computed in the template literal', () => {
  expect(templateLiteral()).toBe('The result is: 50');
});

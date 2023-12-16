const typeOfExample = require('./chapter-1-example-2');

test('typeof returns number and string', () => {
  const logSpy = jest.spyOn(console, 'log');
  typeOfExample();
  expect(logSpy).toHaveBeenCalledWith('number');
  expect(logSpy).toHaveBeenCalledWith('string');
});

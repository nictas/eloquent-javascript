const shortCircuitingExample = require('./example-7');

test('Short circuiting can be used for default values', () => {
  const logSpy = jest.spyOn(console, 'log');
  shortCircuitingExample();
  expect(logSpy).toHaveBeenNthCalledWith(1, 'Guest');
  expect(logSpy).toHaveBeenNthCalledWith(2, 'Guest');
  expect(logSpy).toHaveBeenNthCalledWith(3, 'Guest');
  expect(logSpy).toHaveBeenNthCalledWith(4, 'Guest');
  expect(logSpy).toHaveBeenNthCalledWith(5, 'Guest');
  expect(logSpy).toHaveBeenNthCalledWith(6, '     ');
  expect(logSpy).toHaveBeenNthCalledWith(7, 'Agnes');
});


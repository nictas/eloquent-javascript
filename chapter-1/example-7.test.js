const shortCircuitingExample = require('./example-7');

test('Short circuiting can be used for default values', () => {
  const logSpy = jest.spyOn(console, 'log');
  shortCircuitingExample();
  expect(logSpy).toHaveBeenNthCalledWith(1, "0 || 'Guest': Guest");
  expect(logSpy).toHaveBeenNthCalledWith(2, "'' || 'Guest': Guest");
  expect(logSpy).toHaveBeenNthCalledWith(3, "NaN || 'Guest': Guest");
  expect(logSpy).toHaveBeenNthCalledWith(4, "null || 'Guest': Guest");
  expect(logSpy).toHaveBeenNthCalledWith(5, "undefined || 'Guest': Guest");
  expect(logSpy).toHaveBeenNthCalledWith(6, "'     ' || 'Guest':      ");
  expect(logSpy).toHaveBeenNthCalledWith(7, "'Agnes' || 'Guest': Agnes");
  logSpy.mockRestore();
});

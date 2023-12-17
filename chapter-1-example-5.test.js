const typeConversionExample = require('./chapter-1-example-5');

test('Type conversion is weird in JavaScript', () => {
  const logSpy = jest.spyOn(console, 'log');
  typeConversionExample();
  expect(logSpy).toHaveBeenCalledWith(0);
  expect(logSpy).toHaveBeenCalledWith(4);
  expect(logSpy).toHaveBeenCalledWith('51');
  expect(logSpy).toHaveBeenCalledWith(NaN);
  expect(logSpy).toHaveBeenCalledWith(true);
});

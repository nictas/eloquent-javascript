const typeConversionExample = require('./example-5');

test('Type conversion is weird in JavaScript', () => {
  const logSpy = jest.spyOn(console, 'log');
  typeConversionExample();
  expect(logSpy).toHaveBeenCalledWith('8 * null: 0');
  expect(logSpy).toHaveBeenCalledWith("'5' - 1: 4");
  expect(logSpy).toHaveBeenCalledWith("'5' + 1: 51");
  expect(logSpy).toHaveBeenCalledWith("'five' * 2: NaN");
  expect(logSpy).toHaveBeenCalledWith('false == 0: true');
  logSpy.mockRestore();
});

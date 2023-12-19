const typeOfExample = require('./example-2');

test('typeof returns number and string', () => {
  const logSpy = jest.spyOn(console, 'log');
  typeOfExample();
  expect(logSpy).toHaveBeenCalledWith('number');
  expect(logSpy).toHaveBeenCalledWith('string');
});

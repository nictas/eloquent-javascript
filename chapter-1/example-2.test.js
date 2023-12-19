const typeOfExample = require('./example-2');

test('typeof works as expected', () => {
  const logSpy = jest.spyOn(console, 'log');
  typeOfExample();
  expect(logSpy).toHaveBeenCalledWith('typeof 4.5: number');
  expect(logSpy).toHaveBeenCalledWith("typeof 'x': string");
  expect(logSpy).toHaveBeenCalledWith('typeof NaN: number');
  expect(logSpy).toHaveBeenCalledWith('typeof true: boolean');
  expect(logSpy).toHaveBeenCalledWith('typeof null: object');
  expect(logSpy).toHaveBeenCalledWith('typeof undefined: undefined');
  expect(logSpy).toHaveBeenCalledWith('typeof +Infinity: number');
  expect(logSpy).toHaveBeenCalledWith('typeof -Infinity: number');
  expect(logSpy).toHaveBeenCalledWith("typeof new String('test'): object");
  logSpy.mockRestore();
});

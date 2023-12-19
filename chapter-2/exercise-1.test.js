const printTriangle = require('./exercise-1');

test('Printing a triangle on 2 lines works', () => {
  const logSpy = jest.spyOn(console, 'log');
  printTriangle(2);
  expect(logSpy).toHaveBeenNthCalledWith(1,'#');
  expect(logSpy).toHaveBeenNthCalledWith(2,'##');
  logSpy.mockRestore();
});

test('Printing a triangle on 7 lines works', () => {
  const logSpy = jest.spyOn(console, 'log');
  printTriangle(7);
  expect(logSpy).toHaveBeenNthCalledWith(1,'#');
  expect(logSpy).toHaveBeenNthCalledWith(2,'##');
  expect(logSpy).toHaveBeenNthCalledWith(3,'###');
  expect(logSpy).toHaveBeenNthCalledWith(4,'####');
  expect(logSpy).toHaveBeenNthCalledWith(5,'#####');
  expect(logSpy).toHaveBeenNthCalledWith(6,'######');
  expect(logSpy).toHaveBeenNthCalledWith(7,'#######');
  logSpy.mockRestore();
});

test("Passing something other than a number doesn't lead to an error", () => {
  const logSpy = jest.spyOn(console, 'log');
  printTriangle('ab');
  expect(logSpy).toHaveBeenCalledTimes(0);
  printTriangle(null);
  expect(logSpy).toHaveBeenCalledTimes(0);
  printTriangle(true);
  expect(logSpy).toHaveBeenCalledTimes(0);
  printTriangle(undefined);
  expect(logSpy).toHaveBeenCalledTimes(0);
  printTriangle(NaN);
  expect(logSpy).toHaveBeenCalledTimes(0);
  logSpy.mockRestore();
});

test("Passing infinity doesn't lead to an error or an infinite loop", () => {
  const logSpy = jest.spyOn(console, 'log');
  printTriangle(+Infinity);
  expect(logSpy).toHaveBeenCalledTimes(0);
  printTriangle(-Infinity);
  expect(logSpy).toHaveBeenCalledTimes(0);
  logSpy.mockRestore();
});

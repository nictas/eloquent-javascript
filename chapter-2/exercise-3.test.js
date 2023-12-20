const printChessBoard = require('./exercise-3');

test('Printing a 3x3 chess board works', () => {
  const logSpy = jest.spyOn(console, 'log');
  printChessBoard(3);
  expect(logSpy).toHaveBeenNthCalledWith(1, ' # ');
  expect(logSpy).toHaveBeenNthCalledWith(2, '# #');
  expect(logSpy).toHaveBeenNthCalledWith(3, ' # ');
  logSpy.mockRestore();
});

test('Printing a 8x8 chess board works', () => {
  const logSpy = jest.spyOn(console, 'log');
  printChessBoard(8);
  expect(logSpy).toHaveBeenNthCalledWith(1, ' # # # #');
  expect(logSpy).toHaveBeenNthCalledWith(2, '# # # # ');
  expect(logSpy).toHaveBeenNthCalledWith(3, ' # # # #');
  expect(logSpy).toHaveBeenNthCalledWith(4, '# # # # ');
  expect(logSpy).toHaveBeenNthCalledWith(5, ' # # # #');
  expect(logSpy).toHaveBeenNthCalledWith(6, '# # # # ');
  expect(logSpy).toHaveBeenNthCalledWith(7, ' # # # #');
  expect(logSpy).toHaveBeenNthCalledWith(8, '# # # # ');
  logSpy.mockRestore();
});

test("Passing non-numeric values doesn't lead to an error", () => {
  const logSpy = jest.spyOn(console, 'log');
  printChessBoard('ab');
  expect(logSpy).toHaveBeenCalledTimes(0);
  printChessBoard(null);
  expect(logSpy).toHaveBeenCalledTimes(0);
  printChessBoard(true);
  expect(logSpy).toHaveBeenCalledTimes(0);
  printChessBoard(undefined);
  expect(logSpy).toHaveBeenCalledTimes(0);
  printChessBoard(NaN);
  expect(logSpy).toHaveBeenCalledTimes(0);
  logSpy.mockRestore();
});

test("Passing infinity doesn't lead to an error", () => {
  const logSpy = jest.spyOn(console, 'log');
  printChessBoard(+Infinity);
  expect(logSpy).toHaveBeenCalledTimes(0);
  printChessBoard(-Infinity);
  expect(logSpy).toHaveBeenCalledTimes(0);
  logSpy.mockRestore();
});

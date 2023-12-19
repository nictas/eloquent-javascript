const fizzBuzz = require('./exercise-2');

test('FizzBuzz with a limit of 5', () => {
  const logSpy = jest.spyOn(console, 'log');
  fizzBuzz(5);
  expect(logSpy).toHaveBeenNthCalledWith(1, 1);
  expect(logSpy).toHaveBeenNthCalledWith(2, 2);
  expect(logSpy).toHaveBeenNthCalledWith(3, 'Fizz');
  expect(logSpy).toHaveBeenNthCalledWith(4, 4);
  expect(logSpy).toHaveBeenNthCalledWith(5, 'Buzz');
  logSpy.mockRestore();
});

test('FizzBuzz with a limit of 10', () => {
  const logSpy = jest.spyOn(console, 'log');
  fizzBuzz(15);
  expect(logSpy).toHaveBeenNthCalledWith(1, 1);
  expect(logSpy).toHaveBeenNthCalledWith(2, 2);
  expect(logSpy).toHaveBeenNthCalledWith(3, 'Fizz');
  expect(logSpy).toHaveBeenNthCalledWith(4, 4);
  expect(logSpy).toHaveBeenNthCalledWith(5, 'Buzz');
  expect(logSpy).toHaveBeenNthCalledWith(6, 'Fizz');
  expect(logSpy).toHaveBeenNthCalledWith(7, 7);
  expect(logSpy).toHaveBeenNthCalledWith(8, 8);
  expect(logSpy).toHaveBeenNthCalledWith(9, 'Fizz');
  expect(logSpy).toHaveBeenNthCalledWith(10, 'Buzz');
  expect(logSpy).toHaveBeenNthCalledWith(11, 11);
  expect(logSpy).toHaveBeenNthCalledWith(12, 'Fizz');
  expect(logSpy).toHaveBeenNthCalledWith(13, 13);
  expect(logSpy).toHaveBeenNthCalledWith(14, 14);
  expect(logSpy).toHaveBeenNthCalledWith(15, 'FizzBuzz');
  logSpy.mockRestore();
});

test("Passing something other than a number doesn't lead to an error", () => {
  const logSpy = jest.spyOn(console, 'log');
  fizzBuzz('ab');
  expect(logSpy).toHaveBeenCalledTimes(0);
  fizzBuzz(null);
  expect(logSpy).toHaveBeenCalledTimes(0);
  fizzBuzz(true);
  expect(logSpy).toHaveBeenCalledTimes(0);
  fizzBuzz(undefined);
  expect(logSpy).toHaveBeenCalledTimes(0);
  fizzBuzz(NaN);
  expect(logSpy).toHaveBeenCalledTimes(0);
  logSpy.mockRestore();
});

test("Passing infinity doesn't lead to an error or an infinite loop", () => {
  const logSpy = jest.spyOn(console, 'log');
  fizzBuzz(+Infinity);
  expect(logSpy).toHaveBeenCalledTimes(0);
  fizzBuzz(-Infinity);
  expect(logSpy).toHaveBeenCalledTimes(0);
  logSpy.mockRestore();
});

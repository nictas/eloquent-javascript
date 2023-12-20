const arraysExample = require('./example-1');

test('Arrays work as expected', () => {
  const logSpy = jest.spyOn(console, 'log');
  arraysExample();
  expect(logSpy).toHaveBeenNthCalledWith(1, 'numbers: 1,2,3,4,5');
  expect(logSpy).toHaveBeenNthCalledWith(2, 'numbers.length: 5');
  expect(logSpy).toHaveBeenNthCalledWith(3, 'numbers["length"]: 5');
  expect(logSpy).toHaveBeenNthCalledWith(4, 'numbers after pop(): 1,2,3,4');
  expect(logSpy).toHaveBeenNthCalledWith(5, 'numbers after pop(): 1,2,3');
  expect(logSpy).toHaveBeenNthCalledWith(6, 'numbers after push(6, 7): 1,2,3,6,7');
  expect(logSpy).toHaveBeenNthCalledWith(7, 'numbers after push(8, 9): 1,2,3,6,7,8,9');
  expect(logSpy).toHaveBeenNthCalledWith(8, 'numbers after shift(): 2,3,6,7,8,9');
  expect(logSpy).toHaveBeenNthCalledWith(9, 'numbers after shift(): 3,6,7,8,9');
  expect(logSpy).toHaveBeenNthCalledWith(10, 'numbers after unshift(3): 3,3,6,7,8,9');
  expect(logSpy).toHaveBeenNthCalledWith(11, 'numbers after unshift(2): 2,3,3,6,7,8,9');
  expect(logSpy).toHaveBeenNthCalledWith(12, 'numbers.indexOf(3): 1');
  expect(logSpy).toHaveBeenNthCalledWith(13, 'numbers.indexOf(9): 6');
  expect(logSpy).toHaveBeenNthCalledWith(14, 'numbers.lastIndexOf(3): 2');
  expect(logSpy).toHaveBeenNthCalledWith(15, 'numbers.slice(2, 5): 3,6,7');
  expect(logSpy).toHaveBeenNthCalledWith(16, 'numbers.slice(2): 3,6,7,8,9');
  expect(logSpy).toHaveBeenNthCalledWith(17, 'numbers.concat(10, 11): 2,3,3,6,7,8,9,10,11');
  logSpy.mockRestore();
});

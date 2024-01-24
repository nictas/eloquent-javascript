const objectsExample = require('./example-6');

test('Objects work as expected', () => {
  const logSpy = jest.spyOn(console, 'log');
  objectsExample();
  expect(logSpy).toHaveBeenNthCalledWith(1, 'let object1 = { value: 10 }');
  expect(logSpy).toHaveBeenNthCalledWith(2, 'let object2 = object1');
  expect(logSpy).toHaveBeenNthCalledWith(3, 'let object3 = { value: 10 }');
  expect(logSpy).toHaveBeenNthCalledWith(4, 'object1 == object2: true');
  expect(logSpy).toHaveBeenNthCalledWith(5, 'object1 == object3: false');
  expect(logSpy).toHaveBeenNthCalledWith(6, 'object1 === object2: true');
  expect(logSpy).toHaveBeenNthCalledWith(7, 'object1 === object3: false');
  expect(logSpy).toHaveBeenNthCalledWith(8, 'object2.value (after object1.value = 15): 15');
  logSpy.mockRestore();
});

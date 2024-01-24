const printInfo = require('./example-7');

test('Destructuring with name, age, sex, and other info', () => {
  const logSpy = jest.spyOn(console, 'log');
  printInfo({ name: "Nictas", age: 30, sex: 'male', location: 'Sofia' });
  expect(logSpy).toHaveBeenNthCalledWith(1, 'Name: Nictas; Age: 30; Sex: male; Other info: {"location":"Sofia"}');
  logSpy.mockRestore();
});

test('Destructuring with name, age, and other info', () => {
  const logSpy = jest.spyOn(console, 'log');
  printInfo({ name: "Quilge", age: 30, location: 'Sofia' });
  expect(logSpy).toHaveBeenNthCalledWith(1, 'Name: Quilge; Age: 30; Other info: {"location":"Sofia"}');
  logSpy.mockRestore();
});

test('Destructuring with name', () => {
  const logSpy = jest.spyOn(console, 'log');
  printInfo({ name: "Quilge" });
  expect(logSpy).toHaveBeenNthCalledWith(1, 'Name: Quilge; Other info: {}');
  logSpy.mockRestore();
});

test('Destructuring with an empty object', () => {
  const logSpy = jest.spyOn(console, 'log');
  printInfo({});
  expect(logSpy).toHaveBeenNthCalledWith(1, 'Other info: {}')
  logSpy.mockRestore();
});

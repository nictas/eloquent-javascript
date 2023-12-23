const objectsExample = require('./example-4');

test('Objects work as expected', () => {
  const logSpy = jest.spyOn(console, 'log');
  objectsExample();
  expect(logSpy).toHaveBeenNthCalledWith(1, 'JSON.stringify(object): ' + JSON.stringify({ a: 'foo', 'b c': 'bar', d: 1234, e: true, f: null }));
  expect(logSpy).toHaveBeenNthCalledWith(2, "JSON.stringify(object) (after Object.assign): " + JSON.stringify({ a: 'foo', 'b c': 'qux', d: 1234, e: true, f: null, g: 'new value' }));
  expect(logSpy).toHaveBeenNthCalledWith(3, 'object.a: foo');
  expect(logSpy).toHaveBeenNthCalledWith(4, "object['b c']: qux");
  expect(logSpy).toHaveBeenNthCalledWith(5, "object.d: 1234");
  expect(logSpy).toHaveBeenNthCalledWith(6, "object.e: true");
  expect(logSpy).toHaveBeenNthCalledWith(7, "object.g (after object.g = 'squirrel'): squirrel");
  expect(logSpy).toHaveBeenNthCalledWith(8, "object.g (after delete object.g): undefined");
  expect(logSpy).toHaveBeenNthCalledWith(9, "object.d (after delete object.d): undefined");
  expect(logSpy).toHaveBeenNthCalledWith(10, "'e' in object: true");
  expect(logSpy).toHaveBeenNthCalledWith(11, "'e' in object (after object.e = undefined): true");
  expect(logSpy).toHaveBeenNthCalledWith(12, "'e' in object (after delete object.e): false");
  expect(logSpy).toHaveBeenNthCalledWith(13, "Object.keys(object): a,b c,f");
  expect(logSpy).toHaveBeenNthCalledWith(14, "JSON.parse('{\"foo\": \"bar\", \"baz\": \"qux\"}').baz: qux");
  logSpy.mockRestore();
});

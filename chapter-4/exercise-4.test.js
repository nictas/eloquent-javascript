const deepEquals = require('./exercise-4');

test('deepEquals returns true for equal non-objects', () => {
  expect(deepEquals(1, 1)).toBe(true);
  expect(deepEquals(1.1, 1.1)).toBe(true);
  expect(deepEquals('a', 'a')).toBe(true);
  expect(deepEquals(true, true)).toBe(true);
  expect(deepEquals(null, null)).toBe(true);
  expect(deepEquals(+Infinity, +Infinity)).toBe(true);
  expect(deepEquals(-Infinity, -Infinity)).toBe(true);
  expect(deepEquals(undefined, undefined)).toBe(true);
});

test('deepEquals returns false for different non-objects', () => {
  expect(deepEquals(1, 2)).toBe(false);
  expect(deepEquals(1.1, 2.2)).toBe(false);
  expect(deepEquals('a', 'b')).toBe(false);
  expect(deepEquals(NaN, NaN)).toBe(false);
  expect(deepEquals(true, 1)).toBe(false);
  expect(deepEquals(true, false)).toBe(false);
  expect(deepEquals(null, false)).toBe(false);
  expect(deepEquals(+Infinity, -Infinity)).toBe(false);
  expect(deepEquals(undefined, -Infinity)).toBe(false);
});

test('deepEquals returns true for equal arrays', () => {
  expect(deepEquals([1, 2, 3, 4, 5], [1, 2, 3, 4, 5])).toBe(true);
  expect(deepEquals(['a', 'b', 'c'], ['a', 'b', 'c'])).toBe(true);
  expect(deepEquals(['a', 'b', 'c', 4, 5, true, null, -Infinity, +Infinity, undefined], ['a', 'b', 'c', 4, 5, true, null, -Infinity, +Infinity, undefined])).toBe(true);
});

test('deepEquals returns false for different arrays', () => {
  expect(deepEquals([1, 2, 3, 4, 5], [1, 2, 3, 5])).toBe(false);
  expect(deepEquals([1, 2, 3, 4, 5], [1, 2, 3, 5, 4])).toBe(false);
  expect(deepEquals(['a', 'b', 'c'], ['a', 'c', 'b'])).toBe(false);
  expect(deepEquals(['a', 'b', 'c', 4, 5, true, null, -Infinity, +Infinity, undefined], ['a', 'b', 'c', 4, 5, null, true, +Infinity, -Infinity, undefined])).toBe(false);
});

test('deepEquals returns true for equal simple objects', () => {
  expect(deepEquals({ foo: 1, bar: 1.1, baz: 'a', qux: true, quux: null }, { foo: 1, bar: 1.1, baz: 'a', qux: true, quux: null })).toBe(true);
});

test('deepEquals returns false for different simple objects', () => {
  expect(deepEquals({ foo: 1, bar: 1.1, baz: 'a', qux: true, quux: null }, { foo: 1, bar: 1.1, baz: 'b', qux: true, quux: undefined })).toBe(false);
});

test('deepEquals returns false when comparing an object to a non-object', () => {
  // This test mostly checks whether the deepEquals function tries to index a non-object (null or undefined, for example), thus leading to an error;
  expect(deepEquals({ foo: 1, bar: 1.1, baz: 'a', qux: true, quux: null }, 'a')).toBe(false);
  expect(deepEquals('a', { foo: 1, bar: 1.1, baz: 'a', qux: true, quux: null })).toBe(false);

  expect(deepEquals({ foo: 1, bar: 1.1, baz: 'a', qux: true, quux: null }, 1.1)).toBe(false);
  expect(deepEquals(1.1, { foo: 1, bar: 1.1, baz: 'a', qux: true, quux: null })).toBe(false);

  expect(deepEquals({ foo: 1, bar: 1.1, baz: 'a', qux: true, quux: null }, NaN)).toBe(false);
  expect(deepEquals(NaN, { foo: 1, bar: 1.1, baz: 'a', qux: true, quux: null })).toBe(false);

  expect(deepEquals({ foo: 1, bar: 1.1, baz: 'a', qux: true, quux: null }, null)).toBe(false);
  expect(deepEquals(null, { foo: 1, bar: 1.1, baz: 'a', qux: true, quux: null })).toBe(false);

  expect(deepEquals({ foo: 1, bar: 1.1, baz: 'a', qux: true, quux: null }, true)).toBe(false);
  expect(deepEquals(true, { foo: 1, bar: 1.1, baz: 'a', qux: true, quux: null })).toBe(false);

  expect(deepEquals({ foo: 1, bar: 1.1, baz: 'a', qux: true, quux: null }, +Infinity)).toBe(false);
  expect(deepEquals(+Infinity, { foo: 1, bar: 1.1, baz: 'a', qux: true, quux: null })).toBe(false);

  expect(deepEquals({ foo: 1, bar: 1.1, baz: 'a', qux: true, quux: null }, -Infinity)).toBe(false);
  expect(deepEquals(-Infinity, { foo: 1, bar: 1.1, baz: 'a', qux: true, quux: null })).toBe(false);

  expect(deepEquals({ foo: 1, bar: 1.1, baz: 'a', qux: true, quux: null }, undefined)).toBe(false);
  expect(deepEquals(undefined, { foo: 1, bar: 1.1, baz: 'a', qux: true, quux: null })).toBe(false);
});

test('deepEquals returns true for equal nested objects', () => {
  let object1 = {
    foo: 1,
    bar: {
      a: 'b',
      b: 'c',
      d: 'e',
      w: {
        o: {
          w: {
            soon: [-Infinity, +Infinity],
            tm: true
          },
          s: undefined
        }
      }
    },
    baz: [1.1, 2.2, 3.3, 4.4],
    qux: true
  };
  let object2 = { // Copy-pasta of object1
    foo: 1,
    bar: {
      a: 'b',
      b: 'c',
      d: 'e',
      w: {
        o: {
          w: {
            soon: [-Infinity, +Infinity],
            tm: true
          },
          s: undefined
        }
      }
    },
    baz: [1.1, 2.2, 3.3, 4.4],
    qux: true
  };
  expect(deepEquals(object1, object2)).toBe(true);
});

test('deepEquals returns true for different nested objects', () => {
  let object1 = {
    foo: 1,
    bar: {
      a: 'b',
      b: 'c',
      d: 'e',
      w: {
        o: {
          w: {
            soon: [-Infinity, +Infinity],
            tm: true
          },
          s: undefined
        }
      }
    },
    baz: [1.1, 2.2, 3.3, 4.4],
    qux: true
  };
  let object2 = {
    foo: 1,
    bar: {
      a: 'b',
      b: 'c',
      d: 'e',
      w: {
        o: {
          w: {
            soon: [0, +Infinity], // Different
            tm: true
          },
          s: null // Different
        }
      }
    },
    baz: [1.1, 2.2, 3.3, 4.4],
    qux: true
  };
  expect(deepEquals(object1, object2)).toBe(false);
});

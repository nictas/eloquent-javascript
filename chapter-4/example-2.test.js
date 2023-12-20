const removeElementAtIndex = require('./example-2');

test('removeElementAtIndex works as expected', () => {
  expect(removeElementAtIndex(["a", "b", "c", "d", "e"], 2)).toStrictEqual(["a", "b", "d", "e"]);
  expect(removeElementAtIndex(["a", "b", "c", "d", "e"], 0)).toStrictEqual(["b", "c", "d", "e"]);
  expect(removeElementAtIndex(["a", "b", "c", "d", "e"], 4)).toStrictEqual(["a", "b", "c", "d"]);
  expect(removeElementAtIndex([1, 2, 3, 4, 5], 2)).toStrictEqual([1, 2, 4, 5]);
});

test('removeElementAtIndex works as expected for strings', () => {
  expect(removeElementAtIndex("abc", 1)).toStrictEqual("ac");
  expect(removeElementAtIndex("abc", 0)).toStrictEqual("bc");
  expect(removeElementAtIndex("abc", 2)).toStrictEqual("ab");
});

test('removeElementAtIndex returns the same array if index is out of bounds', () => {
  expect(removeElementAtIndex(["a", "b", "c", "d", "e"], -1)).toStrictEqual(["a", "b", "c", "d", "e"]);
  expect(removeElementAtIndex(["a", "b", "c", "d", "e"], 9)).toStrictEqual(["a", "b", "c", "d", "e"]);
  expect(removeElementAtIndex(["a", "b", "c", "d", "e"], 5)).toStrictEqual(["a", "b", "c", "d", "e"]);
});

test('removeElementAtIndex returns null for non-array values', () => {
  expect(removeElementAtIndex(100, 0)).toBe(null);
  expect(removeElementAtIndex(NaN, 0)).toBe(null);
  expect(removeElementAtIndex(null, 0)).toBe(null);
  expect(removeElementAtIndex(true, 0)).toBe(null);
  expect(removeElementAtIndex(undefined, 0)).toBe(null);
  expect(removeElementAtIndex(+Infinity, 0)).toBe(null);
  expect(removeElementAtIndex(-Infinity, 0)).toBe(null);
});

test('removeElementAtIndex returns null for non-numeric index values', () => {
  expect(removeElementAtIndex([1, 2], 'a')).toBe(null);
  expect(removeElementAtIndex([1, 2], NaN)).toBe(null);
  expect(removeElementAtIndex([1, 2], null)).toBe(null);
  expect(removeElementAtIndex([1, 2], true)).toBe(null);
  expect(removeElementAtIndex([1, 2], undefined)).toBe(null);
});

const exercise = require('./exercise-2');

test('reverseArray works as expected', () => {
  expect(exercise.reverseArray([1, 2, 3, 4, 5])).toStrictEqual([5, 4, 3, 2, 1]);
  expect(exercise.reverseArray(['a', 'b', 'c'])).toStrictEqual(['c', 'b', 'a']);
  expect(exercise.reverseArray(['a', 'b', 'c', 4, 5, true, null, NaN, -Infinity, +Infinity, undefined])).toStrictEqual([undefined, +Infinity, -Infinity, NaN, null, true, 5, 4, 'c', 'b', 'a']);
});

test('reverseArray returns the original value for non-arrays', () => {
  expect(exercise.reverseArray(100)).toBe(100);
  expect(exercise.reverseArray('a')).toBe('a');
  expect(exercise.reverseArray(NaN)).toBe(NaN);
  expect(exercise.reverseArray(true)).toBe(true);
  expect(exercise.reverseArray(null)).toBe(null);
  expect(exercise.reverseArray(+Infinity)).toBe(+Infinity);
  expect(exercise.reverseArray(-Infinity)).toBe(-Infinity);
  expect(exercise.reverseArray(undefined)).toBe(undefined);
});

test('reverseArrayInPlace works as expected', () => {
  let array = [1, 2, 3, 4, 5];
  exercise.reverseArrayInPlace(array);
  expect(array).toStrictEqual([5, 4, 3, 2, 1]);
});

test('reverseArrayInPlace works as expected for non-numeric arrays', () => {
  let array = ['a', 'b', 'c', 4, 5, true, null, NaN, -Infinity, +Infinity, undefined];
  exercise.reverseArrayInPlace(array);
  expect(array).toStrictEqual([undefined, +Infinity, -Infinity, NaN, null, true, 5, 4, 'c', 'b', 'a']);
});

test('reverseArrayInPlace does nothing for non-arrays', () => {
  let input = 100;
  exercise.reverseArrayInPlace(input);
  expect(input).toBe(input);

  input = 'a';
  exercise.reverseArrayInPlace(input);
  expect(input).toBe(input);

  input = NaN;
  exercise.reverseArrayInPlace(input);
  expect(input).toBe(input);

  input = true;
  exercise.reverseArrayInPlace(input);
  expect(input).toBe(input);

  input = null;
  exercise.reverseArrayInPlace(input);
  expect(input).toBe(input);

  input = +Infinity;
  exercise.reverseArrayInPlace(input);
  expect(input).toBe(input);

  input = -Infinity;
  exercise.reverseArrayInPlace(input);
  expect(input).toBe(input);

  input = undefined;
  exercise.reverseArrayInPlace(input);
  expect(input).toBe(input);
});

const exercise = require('./chapter-3-exercise-3');

test('countBs returns the correct number of Bs in a string', () => {
  expect(exercise.countBs("Bobbing boats dotted the tranquil bay, bathed in the golden hues of the setting sun.")).toBe(6);
  expect(exercise.countBs("Beneath the blossoming cherry tree, a blanket lay, beckoning for a leisurely picnic.")).toBe(4);
  expect(exercise.countBs("Laughter echoed through the corridors, filling the room with contagious joy.")).toBe(0);
});

test('countBs returns 0 for non-string values', () => {
  expect(exercise.countBs(NaN)).toBe(0);
  expect(exercise.countBs(100)).toBe(0);
  expect(exercise.countBs(null)).toBe(0);
  expect(exercise.countBs(true)).toBe(0);
  expect(exercise.countBs(undefined)).toBe(0);
  expect(exercise.countBs(+Infinity)).toBe(0);
  expect(exercise.countBs(-Infinity)).toBe(0);
});

test('countCharacter returns the correct number of character occurrences in a string', () => {
  expect(exercise.countCharacter("Bobbing boats dotted the tranquil bay, bathed in the golden hues of the setting sun.", 'a')).toBe(4);
  expect(exercise.countCharacter("Bobbing boats dotted the tranquil bay, bathed in the golden hues of the setting sun.", 'e')).toBe(8);
  expect(exercise.countCharacter("Bobbing boats dotted the tranquil bay, bathed in the golden hues of the setting sun.", 'o')).toBe(5);
});

test('countCharacter returns 0 for non-string values', () => {
  expect(exercise.countCharacter(NaN, 'a')).toBe(0);
  expect(exercise.countCharacter(100, 'a')).toBe(0);
  expect(exercise.countCharacter(null, 'a')).toBe(0);
  expect(exercise.countCharacter(true, 'a')).toBe(0);
  expect(exercise.countCharacter(undefined, 'a')).toBe(0);
  expect(exercise.countCharacter(+Infinity, 'a')).toBe(0);
  expect(exercise.countCharacter(-Infinity, 'a')).toBe(0);
});

test('countCharacter returns 0 for non-character values', () => {
  expect(exercise.countCharacter('test', NaN)).toBe(0);
  expect(exercise.countCharacter('test', 100)).toBe(0);
  expect(exercise.countCharacter('test', 'ab')).toBe(0);
  expect(exercise.countCharacter('test', null)).toBe(0);
  expect(exercise.countCharacter('test', true)).toBe(0);
  expect(exercise.countCharacter('test', undefined)).toBe(0);
  expect(exercise.countCharacter('test', +Infinity)).toBe(0);
  expect(exercise.countCharacter('test', -Infinity)).toBe(0);
});

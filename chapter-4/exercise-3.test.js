const exercise = require('./exercise-3');

test('arrayToList works as expected', () => {
  expect(exercise.arrayToList([1, 2, 3, 4, 5])).toStrictEqual({
    value: 1,
    rest: {
      value: 2,
      rest: {
        value: 3,
        rest: {
          value: 4,
          rest: {
            value: 5,
            rest: null
          }
        }
      }
    }
  });

  expect(exercise.arrayToList(['a', 'b', 'c'])).toStrictEqual({
    value: 'a',
    rest: {
      value: 'b',
      rest: {
        value: 'c',
        rest: null
      }
    }
  });

  expect(exercise.arrayToList(['a', 'b', 'c', 4, 5, true, null, NaN, -Infinity, +Infinity, undefined])).toStrictEqual({
    value: 'a',
    rest: {
      value: 'b',
      rest: {
        value: 'c',
        rest: {
          value: 4,
          rest: {
            value: 5,
            rest: {
              value: true,
              rest: {
                value: null,
                rest: {
                  value: NaN,
                  rest: {
                    value: -Infinity,
                    rest: {
                      value: +Infinity,
                      rest: {
                        value: undefined,
                        rest: null
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  });
});

test('arrayToList returns the original value for non-arrays', () => {
  expect(exercise.arrayToList(100)).toBe(100);
  expect(exercise.arrayToList('a')).toBe('a');
  expect(exercise.arrayToList(NaN)).toBe(NaN);
  expect(exercise.arrayToList(true)).toBe(true);
  expect(exercise.arrayToList(null)).toBe(null);
  expect(exercise.arrayToList(+Infinity)).toBe(+Infinity);
  expect(exercise.arrayToList(-Infinity)).toBe(-Infinity);
  expect(exercise.arrayToList(undefined)).toBe(undefined);
});

test('listToArray works as expected', () => {
  expect(exercise.listToArray({
    value: 1,
    rest: {
      value: 2,
      rest: {
        value: 3,
        rest: {
          value: 4,
          rest: {
            value: 5,
            rest: null
          }
        }
      }
    }
  })).toStrictEqual([1, 2, 3, 4, 5]);

  expect(exercise.listToArray({
    value: 'a',
    rest: {
      value: 'b',
      rest: {
        value: 'c',
        rest: null
      }
    }
  })).toStrictEqual(['a', 'b', 'c']);

  expect(exercise.listToArray({
    value: 'a',
    rest: {
      value: 'b',
      rest: {
        value: 'c',
        rest: {
          value: 4,
          rest: {
            value: 5,
            rest: {
              value: true,
              rest: {
                value: null,
                rest: {
                  value: NaN,
                  rest: {
                    value: -Infinity,
                    rest: {
                      value: +Infinity,
                      rest: {
                        value: undefined,
                        rest: null
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  })).toStrictEqual(['a', 'b', 'c', 4, 5, true, null, NaN, -Infinity, +Infinity, undefined]);
});

test('listToArray returns the original value for non-objects', () => {
  expect(exercise.listToArray(100)).toBe(100);
  expect(exercise.listToArray('a')).toBe('a');
  expect(exercise.listToArray(NaN)).toBe(NaN);
  expect(exercise.listToArray(true)).toBe(true);
  expect(exercise.listToArray(null)).toBe(null);
  expect(exercise.listToArray(+Infinity)).toBe(+Infinity);
  expect(exercise.listToArray(-Infinity)).toBe(-Infinity);
  expect(exercise.listToArray(undefined)).toBe(undefined);
  expect(exercise.listToArray(['a', 'b', 'c'])).toStrictEqual(['a', 'b', 'c']);
});

test('prepend works as expected', () => {
  expect(exercise.prepend({
    value: 2,
    rest: {
      value: 3,
      rest: null
    }
  }, 1)).toStrictEqual({
    value: 1,
    rest: {
      value: 2,
      rest: {
        value: 3,
        rest: null
      }
    }
  });
  expect(exercise.prepend(null, 1)).toStrictEqual({
    value: 1,
    rest: null
  });
  expect(exercise.prepend(undefined, 1)).toStrictEqual({
    value: 1,
    rest: null
  });
});

test('prepend returns the original value for non-objects', () => {
  expect(exercise.prepend(100, 1)).toBe(100);
  expect(exercise.prepend('a', 1)).toBe('a');
  expect(exercise.prepend(NaN, 1)).toBe(NaN);
  expect(exercise.prepend(true, 1)).toBe(true);
  expect(exercise.prepend(+Infinity, 1)).toBe(+Infinity);
  expect(exercise.prepend(-Infinity, 1)).toBe(-Infinity);
  expect(exercise.prepend(['a', 'b', 'c'], 1)).toStrictEqual(['a', 'b', 'c']);
});

test('nth works as expected', () => {
  expect(exercise.nth({
    value: 1,
    rest: {
      value: 2,
      rest: {
        value: 3,
        rest: {
          value: 4,
          rest: {
            value: 5,
            rest: null
          }
        }
      }
    }
  }, 2)).toBe(3);
})

test('nth returns undefined for non-objects', () => {
  expect(exercise.nth(100, 1)).toBe(undefined);
  expect(exercise.nth('a', 1)).toBe(undefined);
  expect(exercise.nth(NaN, 1)).toBe(undefined);
  expect(exercise.nth(true, 1)).toBe(undefined);
  expect(exercise.nth(null, 1)).toBe(undefined);
  expect(exercise.nth(+Infinity, 1)).toBe(undefined);
  expect(exercise.nth(-Infinity, 1)).toBe(undefined);
  expect(exercise.nth(undefined, 1)).toBe(undefined);
  expect(exercise.nth(['a', 'b', 'c'], 1)).toBe(undefined);
});

test('nth returns undefined for non-integer indexes', () => {
  expect(exercise.nth({ value: 1, rest: null }, 3.1)).toBe(undefined);
  expect(exercise.nth({ value: 1, rest: null }, NaN)).toBe(undefined);
  expect(exercise.nth({ value: 1, rest: null }, true)).toBe(undefined);
  expect(exercise.nth({ value: 1, rest: null }, null)).toBe(undefined);
  expect(exercise.nth({ value: 1, rest: null }, +Infinity)).toBe(undefined);
  expect(exercise.nth({ value: 1, rest: null }, -Infinity)).toBe(undefined);
  expect(exercise.nth({ value: 1, rest: null }, undefined)).toBe(undefined);
  expect(exercise.nth({ value: 1, rest: null }, ['a', 'b', 'c'])).toBe(undefined);
  expect(exercise.nth({ value: 1, rest: null }, { index: 1 })).toBe(undefined);
});

test('nth returns undefined for out-of-bounds indexes', () => {
  expect(exercise.nth({ value: 1, rest: null }, 1)).toBe(undefined);
  expect(exercise.nth({ value: 1, rest: null }, 8)).toBe(undefined);
  expect(exercise.nth({ value: 1, rest: null }, -1)).toBe(undefined);
});

test('nthRecursive works as expected', () => {
  expect(exercise.nthRecursive({
    value: 1,
    rest: {
      value: 2,
      rest: {
        value: 3,
        rest: {
          value: 4,
          rest: {
            value: 5,
            rest: null
          }
        }
      }
    }
  }, 2)).toBe(3);
})

test('nthRecursive returns undefined for non-objects', () => {
  expect(exercise.nthRecursive(100, 1)).toBe(undefined);
  expect(exercise.nthRecursive('a', 1)).toBe(undefined);
  expect(exercise.nthRecursive(NaN, 1)).toBe(undefined);
  expect(exercise.nthRecursive(true, 1)).toBe(undefined);
  expect(exercise.nthRecursive(null, 1)).toBe(undefined);
  expect(exercise.nthRecursive(+Infinity, 1)).toBe(undefined);
  expect(exercise.nthRecursive(-Infinity, 1)).toBe(undefined);
  expect(exercise.nthRecursive(undefined, 1)).toBe(undefined);
  expect(exercise.nthRecursive(['a', 'b', 'c'], 1)).toBe(undefined);
});

test('nthRecursive returns undefined for non-integer indexes', () => {
  expect(exercise.nthRecursive({ value: 1, rest: null }, 3.1)).toBe(undefined);
  expect(exercise.nthRecursive({ value: 1, rest: null }, NaN)).toBe(undefined);
  expect(exercise.nthRecursive({ value: 1, rest: null }, true)).toBe(undefined);
  expect(exercise.nthRecursive({ value: 1, rest: null }, null)).toBe(undefined);
  expect(exercise.nthRecursive({ value: 1, rest: null }, +Infinity)).toBe(undefined);
  expect(exercise.nthRecursive({ value: 1, rest: null }, -Infinity)).toBe(undefined);
  expect(exercise.nthRecursive({ value: 1, rest: null }, undefined)).toBe(undefined);
  expect(exercise.nthRecursive({ value: 1, rest: null }, ['a', 'b', 'c'])).toBe(undefined);
  expect(exercise.nthRecursive({ value: 1, rest: null }, { index: 1 })).toBe(undefined);
});

test('nthRecursive returns undefined for out-of-bounds indexes', () => {
  expect(exercise.nthRecursive({ value: 1, rest: null }, 1)).toBe(undefined);
  expect(exercise.nthRecursive({ value: 1, rest: null }, 8)).toBe(undefined);
  expect(exercise.nthRecursive({ value: 1, rest: null }, -1)).toBe(undefined);
});

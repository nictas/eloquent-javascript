const flatten = require('./exercise-1');

test('flatten works as expected', () => {
    expect(flatten([[1, 2, 3], [4, 5], [6]])).toStrictEqual([1, 2, 3, 4, 5, 6]);
});

test('flatten works with empty arrays', () => {
    expect(flatten([[], [1], []])).toStrictEqual([1]);
    expect(flatten([])).toStrictEqual([]);
});

test('flatten returns undefined for non-arrays', () => {
    expect(flatten(100)).toBe(undefined);
    expect(flatten(1.1)).toBe(undefined);
    expect(flatten(NaN)).toBe(undefined);
    expect(flatten('a')).toBe(undefined);
    expect(flatten(true)).toBe(undefined);
    expect(flatten(null)).toBe(undefined);
    expect(flatten(undefined)).toBe(undefined);
    expect(flatten(+Infinity)).toBe(undefined);
    expect(flatten(-Infinity)).toBe(undefined);
});

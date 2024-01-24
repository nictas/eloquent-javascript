const example = require('./exercise-3');

const testEvery = function (every) {
    expect(every([2, 4, 6], n => n % 2 === 0)).toBe(true);
    expect(every([1, 3, 5], n => n % 2 === 1)).toBe(true);
    expect(every([1, 3, 5], n => n % 2 === 0)).toBe(false);
    expect(every([2, 4, 5], n => n % 2 === 0)).toBe(false);
    expect(every([2, 3, 6], n => n % 2 === 0)).toBe(false);
    expect(every([1, 4, 6], n => n % 2 === 0)).toBe(false);
};

const testEveryWithNonArrays = function (every) {
    expect(every(100, n => true)).toBe(undefined);
    expect(every(1.1, n => true)).toBe(undefined);
    expect(every(NaN, n => true)).toBe(undefined);
    expect(every('a', n => true)).toBe(undefined);
    expect(every(true, n => true)).toBe(undefined);
    expect(every(null, n => true)).toBe(undefined);
    expect(every(undefined, n => true)).toBe(undefined);
    expect(every(+Infinity, n => true)).toBe(undefined);
    expect(every(-Infinity, n => true)).toBe(undefined);
};

const testEveryWithNonFunctions = function (every) {
    expect(every([2, 4, 6], 100)).toBe(undefined);
    expect(every([2, 4, 6], 1.1)).toBe(undefined);
    expect(every([2, 4, 6], NaN)).toBe(undefined);
    expect(every([2, 4, 6], 'a')).toBe(undefined);
    expect(every([2, 4, 6], true)).toBe(undefined);
    expect(every([2, 4, 6], null)).toBe(undefined);
    expect(every([2, 4, 6], undefined)).toBe(undefined);
    expect(every([2, 4, 6], +Infinity)).toBe(undefined);
    expect(every([2, 4, 6], -Infinity)).toBe(undefined);
}

test('every works as expected', () => {
    testEvery(example.every);
});

test('everyWithSome works as expected', () => {
    testEvery(example.everyWithSome);
});

test('every returns undefined for non-arrays', () => {
    testEveryWithNonArrays(example.every);
});

test('everyWithSome returns undefined for non-arrays', () => {
    testEveryWithNonArrays(example.everyWithSome);
});

test('every returns undefined for non-functions', () => {
    testEveryWithNonFunctions(example.every);
});

test('everyWithSome returns undefined for non-functions', () => {
    testEveryWithNonFunctions(example.everyWithSome);
});

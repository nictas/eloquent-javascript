const greaterThan = require('./example-2');

test('greaterThan works as expected', () => {
    const greaterThan10 = greaterThan(10);
    const greaterThan20 = greaterThan(20);
    expect(greaterThan10(20)).toBe(true);
    expect(greaterThan20(15)).toBe(false);
    expect(greaterThan20(20)).toBe(false);
    expect(greaterThan20(21)).toBe(true);

    expect(greaterThan(10)(20)).toBe(true);
    expect(greaterThan(20)(15)).toBe(false);
    expect(greaterThan(20)(20)).toBe(false);
    expect(greaterThan(20)(21)).toBe(true);
});

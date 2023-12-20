const findPath = require('./example-3');

test('findPath works as expected', () => {
    expect(findPath(13)).toBe("(((1 * 3) + 5) + 5)");
    expect(findPath(24)).toBe("(((((1 * 3) * 3) + 5) + 5) + 5)");
    expect(findPath(4)).toBe(null);
});

test('findPath returns null for negative numbers and 0', () => {
    expect(findPath(-2)).toBe(null);
    expect(findPath(-3)).toBe(null);
    expect(findPath(0)).toBe(null);
});

test('findPath returns null for fractions', () => {
    expect(findPath(3.14)).toBe(null);
    expect(findPath(0.01)).toBe(null);
});

test('findPath returns null for non-numeric values', () => {
    expect(findPath(+Infinity)).toBe(null);
    expect(findPath(-Infinity)).toBe(null);
    expect(findPath(NaN)).toBe(null);
    expect(findPath("a")).toBe(null);
    expect(findPath(true)).toBe(null);
    expect(findPath(null)).toBe(null);
    expect(findPath(undefined)).toBe(null);
});

const ages = require('./example-5');

test('Map.has works as expected', () => {
    expect(ages.has('Sunny')).toBe(true);
    expect(ages.has('Maria')).toBe(true);
});

test('Map.get works as expected', () => {
    expect(ages.get('Sunny')).toBe(30);
    expect(ages.get('Maria')).toBe(24);
});

test('Map.set works as expected', () => {
    ages.set('Thrall', 32);
    ages.set('Arthas', 22);
    expect(ages.get('Thrall')).toBe(32);
    expect(ages.get('Arthas')).toBe(22);
});

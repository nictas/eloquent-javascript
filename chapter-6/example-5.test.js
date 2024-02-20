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

test('Objects extend Object.prototype and inherit their properties', () => {
    let test = {
        a: 1,
        b: 2,
        c: 3
    };
    expect('toString' in test).toBe(true);
    expect('a' in test).toBe(true);
    expect('b' in test).toBe(true);
    expect(test.hasOwnProperty('toString')).toBe(false);
    expect(test.hasOwnProperty('a')).toBe(true);
    expect(test.hasOwnProperty('b')).toBe(true);
});

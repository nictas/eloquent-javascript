const zoo = require('./example-8');

test('Dog works as expected', () => {
    let buba = new zoo.Dog('Buba');
    expect(buba.isHairless()).toBe(false);
    expect(buba.bark()).toBe('Buba: Woof woof!');
});

test('Cat works as expected', () => {
    let kaia = new zoo.Cat('Kaia');
    expect(kaia.isHairless()).toBe(false);
    expect(kaia.meow()).toBe('Kaia: Meeeeooww!');
});

test('HairlessCat works as expected', () => {
    let maia = new zoo.HairlessCat('Maia');
    expect(maia.isHairless()).toBe(true);
    expect(maia.meow()).toBe('Maia: Meeeeooww!');
});

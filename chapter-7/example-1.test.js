let frozenObject = require('./example-1');

test('Properties of frozen objects cannot be changed', () => {
    frozenObject.foo = 100;
    expect(frozenObject.foo).toBe(1);
    frozenObject.bar = 200;
    expect(frozenObject.bar).toBe(2);
});

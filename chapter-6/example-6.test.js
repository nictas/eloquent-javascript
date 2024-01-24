const object = require('./example-6');

test('__proto__ works as expected', () => {
    expect(object.a).toBe('foo');
    expect(object.b).toBe('bar');
    expect(object.c).toBe('baz');
    expect(object.d).toBe('qux');
    expect(object.e).toBe('jik');
    expect(object.f).toBe('yuk');
});

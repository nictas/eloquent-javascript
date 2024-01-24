let object = {
    a: 'foo',
    b: 'bar',
    __proto__: {
        c: 'baz',
        d: 'qux',
        __proto__: {
            e: 'jik',
            f: 'yuk'
        }
    }
}

module.exports = object;

if (require.main === module) {
    console.log(`object.a: ${object.a}`);
    console.log(`object.b: ${object.b}`);
    console.log(`object.c: ${object.c}`);
    console.log(`object.d: ${object.d}`);
    console.log(`object.e: ${object.e}`);
    console.log(`object.f: ${object.f}`);
}

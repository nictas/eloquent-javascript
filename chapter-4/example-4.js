const objectsExample = function () {
    let object = {
        a: "foo",
        "b c": "bar",
        d: 1234,
        e: true,
        f: null
    }
    console.log(`JSON.stringify(object): ${JSON.stringify(object)}`);
    Object.assign(object, { 'b c': 'qux', g: 'new value' });
    console.log(`JSON.stringify(object) (after Object.assign): ${JSON.stringify(object)}`);
    console.log(`object.a: ${object.a}`);
    console.log(`object['b c']: ${object['b c']}`);
    console.log(`object.d: ${object.d}`);
    console.log(`object.e: ${object.e}`);
    object.g = 'squirrel';
    console.log(`object.g (after object.g = 'squirrel'): ${object.g}`);
    delete object.g;
    console.log(`object.g (after delete object.g): ${object.g}`);
    delete object.d;
    console.log(`object.d (after delete object.d): ${object.d}`);
    console.log(`'e' in object: ${'e' in object}`);
    object.e = undefined;
    console.log(`'e' in object (after object.e = undefined): ${'e' in object}`);
    delete object.e;
    console.log(`'e' in object (after delete object.e): ${'e' in object}`);
    console.log(`Object.keys(object): ${Object.keys(object)}`);
    console.log(`JSON.parse('{"foo": "bar", "baz": "qux"}').baz: ${JSON.parse('{"foo": "bar", "baz": "qux"}').baz}`);
}

module.exports = objectsExample;

if (require.main === module) {
    objectsExample();
}

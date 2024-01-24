let object1 = {
    a: 'foo',
    b: 'bar',
}

let object2 = {
    c: 'baz',
    d: 'qux'
}

let object3 = {
    e: 'jik',
    f: 'yuk'
}

Object.setPrototypeOf(object1, object2); // Recommended over object1.__proto__ = object2
Object.setPrototypeOf(object2, object3);

module.exports = object1;

if (require.main === module) {
    console.log(`object1.a: ${object1.a}`);
    console.log(`object1.b: ${object1.b}`);
    console.log(`object1.c: ${object1.c}`);
    console.log(`object1.d: ${object1.d}`);
    console.log(`object1.e: ${object1.e}`);
    console.log(`object1.f: ${object1.f}`);
}

const frozenObject = {
    foo: 1,
    bar: 2
}
Object.freeze(frozenObject);

module.exports = frozenObject;

if (require.main === module) {
    console.log(`frozenObject.foo: ${frozenObject.foo}`);
    console.log(`frozenObject.bar: ${frozenObject.bar}`);
    frozenObject.foo = 100;
    console.log(`frozenObject.foo (after frozenObject.foo = 100): ${frozenObject.foo}`);
    frozenObject.bar = 200;
    console.log(`frozenObject.bar (after frozenObject.bar = 200): ${frozenObject.bar}`);
}

function areEqual(a, b) {
    return a == b;
}

module.exports = areEqual;

if (require.main === module) {
    console.log(`Luke is equal to Luke: ${areEqual('Luke', 'Luke')}`);
    console.log(`Luke is equal to Leia: ${areEqual('Luke', 'Leia')}`);

    console.log(`NaN is equal to NaN: ${areEqual(NaN, NaN)}`);
    console.log(`NaN is equal to +Infinity: ${areEqual(NaN, +Infinity)}`);
    console.log(`NaN is equal to -Infinity: ${areEqual(NaN, -Infinity)}`);

    console.log(`null is equal to 0: ${areEqual(null, 0)}`);
    console.log(`null is equal to false: ${areEqual(null, false)}`);
    console.log(`null is equal to undefined: ${areEqual(null, undefined)}`);

    console.log(`undefined is equal to 0: ${areEqual(undefined, 0)}`);
    console.log(`undefined is equal to false: ${areEqual(undefined, false)}`);

    console.log(`'test' is equal to new String('test'): ${areEqual('test', new String('test'))}`);
}

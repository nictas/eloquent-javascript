function typeOfExample() {
    console.log(`typeof 4.5: ${typeof 4.5}`);
    console.log(`typeof 'x': ${typeof 'x'}`);
    console.log(`typeof NaN: ${typeof NaN}`);
    console.log(`typeof true: ${typeof true}`);
    console.log(`typeof null: ${typeof null}`);
    console.log(`typeof undefined: ${typeof undefined}`);
    console.log(`typeof +Infinity: ${typeof +Infinity}`);
    console.log(`typeof -Infinity: ${typeof -Infinity}`);
    console.log(`typeof new String('test'): ${typeof new String('test')}`);
}

module.exports = typeOfExample;

if (require.main === module) {
    typeOfExample();
}

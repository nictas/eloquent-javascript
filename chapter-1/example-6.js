function arePreciselyEqual(a, b) {
    return a === b;
}

module.exports = arePreciselyEqual;

if (require.main === module) {
    console.log(`0 is precisely equal to 0: ${arePreciselyEqual(0, 0)}`);
    console.log(`false is precisely equal to 0: ${arePreciselyEqual(false, 0)}`);
    console.log(`false is precisely equal to '0': ${arePreciselyEqual(false, '0')}`);
    console.log(`undefined is precisely equal to null: ${arePreciselyEqual(undefined, null)}`);
}

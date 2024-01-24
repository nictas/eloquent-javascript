const greaterThan = function (n) {
    return m => m > n;
}

module.exports = greaterThan;

if (require.main === module) {
    console.log(`greaterThan(10)(20): ${greaterThan(10)(20)}`);
    console.log(`greaterThan(20)(15): ${greaterThan(20)(15)}`);
    console.log(`greaterThan(20)(20): ${greaterThan(20)(20)}`);
    console.log(`greaterThan(20)(21): ${greaterThan(20)(21)}`);
}

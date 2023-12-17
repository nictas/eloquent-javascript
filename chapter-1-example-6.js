function arePreciselyEqual(a, b) {
    return a === b;
}
module.exports = arePreciselyEqual;

console.log('0 is precisely equal to 0: ' + arePreciselyEqual(0, 0));
console.log('false is precisely equal to 0: ' + arePreciselyEqual(false, 0));
console.log('false is precisely equal to an empty string: ' + arePreciselyEqual(false, ''));
console.log('null is precisely equal to undefined: ' + arePreciselyEqual(null, undefined));

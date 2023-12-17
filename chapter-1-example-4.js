function isEqual(a, b) {
    return a == b;
}
module.exports = isEqual;

console.log('Luke is equal to Luke: ' + isEqual('Luke', 'Luke'));
console.log('Luke is equal to Leia: ' + isEqual('Luke', 'Leia'));
console.log('NaN is equal to NaN: ' + isEqual(NaN, NaN));
console.log('undefined is equal to null: ' + isEqual(undefined, null));
console.log('null is equal to 0: ' + isEqual(null, 0));
console.log('undefined is equal to 0: ' + isEqual(undefined, 0));

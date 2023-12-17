function isEqual(a, b) {
    return a == b;
}
module.exports = isEqual;

console.log('Luke is equal to Luke: ' + isEqual('Luke', 'Luke'))
console.log('Luke is equal to Leia: ' + isEqual('Luke', 'Leia'))

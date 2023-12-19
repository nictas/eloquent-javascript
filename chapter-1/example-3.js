function isLesserThan(a, b) {
    return a < b;
}
module.exports = isLesserThan;

if (require.main === module) {
    console.log('Luke is lesser than Leia: ' + isLesserThan('Luke', 'Leia'));
}
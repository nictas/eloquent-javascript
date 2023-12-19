function isLesserThan(a, b) {
    return a < b;
}

module.exports = isLesserThan;

if (require.main === module) {
    console.log(`Luke is lesser than Leia: ${isLesserThan('Luke', 'Leia')}`);
    console.log(`Luke is lesser than Kyle: ${isLesserThan('Luke', 'Kyle')}`);
    console.log(`Luke is lesser than Zoro: ${isLesserThan('Luke', 'Zoro')}`);
}

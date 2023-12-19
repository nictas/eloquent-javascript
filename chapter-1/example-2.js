function typeOfExample() {
    console.log(typeof 4.5);
    console.log(typeof 'x');
}
module.exports = typeOfExample;

if (require.main === module) {
    typeOfExample();
}
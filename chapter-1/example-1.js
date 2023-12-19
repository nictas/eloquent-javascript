function templateLiteralExample() {
    console.log(`The result is: ${100 / 2}`);
}
module.exports = templateLiteralExample;

if (require.main === module) {
    templateLiteralExample();
}

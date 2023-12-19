function templateLiteralExample() {
    console.log(`100 / 2 = ${100 / 2}`);
}

module.exports = templateLiteralExample;

if (require.main === module) {
    templateLiteralExample();
}

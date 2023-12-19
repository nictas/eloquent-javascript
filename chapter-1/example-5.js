function typeConversionExample() {
    console.log(`8 * null: ${8 * null}`);
    console.log(`'5' - 1: ${'5' - 1}`);
    console.log(`'5' + 1: ${'5' + 1}`);
    console.log(`'five' * 2: ${'five' * 2}`);
    console.log(`false == 0: ${false == 0}`);
}

module.exports = typeConversionExample;

if (require.main === module) {
    typeConversionExample();
}

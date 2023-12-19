function shortCircuitingExample() {
    console.log(`0 || 'Guest': ${0 || 'Guest'}`);
    console.log(`'' || 'Guest': ${'' || 'Guest'}`);
    console.log(`NaN || 'Guest': ${NaN || 'Guest'}`);
    console.log(`null || 'Guest': ${null || 'Guest'}`);
    console.log(`undefined || 'Guest': ${undefined || 'Guest'}`);
    console.log(`'     ' || 'Guest': ${'     ' || 'Guest'}`);
    console.log(`'Agnes' || 'Guest': ${'Agnes' || 'Guest'}`);
}

module.exports = shortCircuitingExample;

if (require.main === module) {
    shortCircuitingExample();
}

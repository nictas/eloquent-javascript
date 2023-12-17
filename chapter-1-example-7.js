function shortCircuitingExample() {
    console.log(0 || 'Guest');
    console.log('' || 'Guest');
    console.log(NaN || 'Guest');
    console.log(null || 'Guest');
    console.log(undefined || 'Guest');
    console.log('     ' || 'Guest');
    console.log('Agnes' || 'Guest');
}
module.exports = shortCircuitingExample;

shortCircuitingExample();

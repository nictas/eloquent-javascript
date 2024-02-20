const Matrix = require('./example-12');
const SymmetricalMatrix = require('./example-14');

const instanceofExample = function () {
    let symmetricalMatrix = new SymmetricalMatrix(2, 2, (x, y) => 0);
    let matrix = new Matrix(2, 2, (x, y) => 0);
    console.log(`new SymmetricalMatrix(...) instanceof SymmetricalMatrix: ${symmetricalMatrix instanceof SymmetricalMatrix}`);
    console.log(`new SymmetricalMatrix(...) instanceof Matrix: ${symmetricalMatrix instanceof Matrix}`);
    console.log(`new Matrix(...) instanceof SymmetricalMatrix: ${matrix instanceof SymmetricalMatrix}`);
    console.log(`new Matrix(...) instanceof Matrix: ${matrix instanceof Matrix}`);
    console.log(`[1] instanceof Array: ${[1] instanceof Array}`);
}

module.exports = instanceofExample;

if (require.main === module) {
    instanceofExample();
}

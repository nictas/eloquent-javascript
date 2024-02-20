const Matrix = require('./example-12');

class SymmetricalMatrix extends Matrix {
    constructor(xLimit, yLimit, valueProvider) {
        super(xLimit, yLimit, (x, y) => {
            return x > y ? valueProvider(y, x) : valueProvider(x, y);
        });
    }
    set(x, y, value) {
        super.set(x, y, value);
        if (x != y) {
            super.set(y, x, value);
        }
    }
}

module.exports = SymmetricalMatrix;

if (require.main === module) {
    let matrix = new SymmetricalMatrix(3, 3, (x, y) => `${x} ${y}`);
    console.log(matrix.content);
    for (let { x, y, value } of matrix) {
        console.log(`(${x}, ${y}): ${value}`);
    }
}

class Matrix {
    constructor(xLimit, yLimit, valueProvider) {
        this.xLimit = xLimit; // height
        this.yLimit = yLimit; // width
        this.content = [];
        for (let x = 0; x < xLimit; x++) {
            for (let y = 0; y < yLimit; y++) {
                this.content[x * yLimit + y] = valueProvider(x, y);
            }
        }
    }
    get(x, y) {
        return this.content[x * this.yLimit + y];
    }
    set(x, y, value) {
        this.content[x * this.yLimit + y] = value;
    }
    [Symbol.iterator]() {
        return new MatrixIterator(this);
    }
}

class MatrixIterator {
    constructor(matrix) {
        this.x = 0;
        this.y = 0;
        this.matrix = matrix;
    }
    next() {
        if (this.x >= this.matrix.xLimit) {
            return { done: true };
        }
        let value = {
            x: this.x,
            y: this.y,
            value: this.matrix.get(this.x, this.y++)
        };
        if (this.y >= this.matrix.yLimit) {
            this.y = 0;
            this.x++;
        }
        return { value, done: false };
    }
}

module.exports = Matrix;

if (require.main === module) {
    let i = 0;
    let matrix = new Matrix(2, 3, (x, y) => i++);
    console.log(matrix.content);
    for (let { x, y, value } of matrix) {
        console.log(`(${x}, ${y}): ${value}`);
    }
}

class Vector {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    plus(other) {
        return new Vector(this.x + other.x, this.y + other.y);
    }
    minus(other) {
        return new Vector(this.x - other.x, this.y - other.y);
    }
    toString() {
        return `(${this.x}, ${this.y})`;
    }
}

module.exports = Vector;

if (require.main === module) {
    let vector1 = new Vector(1, 1);
    let vector2 = new Vector(2, 8);
    let vector3 = new Vector(0, -7);
    console.log(`${vector1} + ${vector2}: ${vector1.plus(vector2)}`);
    console.log(`${vector1} + ${vector3}: ${vector1.plus(vector3)}`);
    console.log(`${vector1} - ${vector2}: ${vector1.minus(vector2)}`);
    console.log(`${vector1} - ${vector3}: ${vector1.minus(vector3)}`);
}

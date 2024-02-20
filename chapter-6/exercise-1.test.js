const Vector = require('./exercise-1');

test('Vector.plus works as expected', () => {
    let vector1 = new Vector(1, 3);
    expect(vector1.x).toBe(1);
    expect(vector1.y).toBe(3);

    let vector2 = vector1.plus(new Vector(1, -2));
    expect(vector2.x).toBe(2);
    expect(vector2.y).toBe(1);
});

test('Vector.minus works as expected', () => {
    let vector1 = new Vector(1, 3);
    expect(vector1.x).toBe(1);
    expect(vector1.y).toBe(3);

    let vector2 = vector1.minus(new Vector(1, -2));
    expect(vector2.x).toBe(0);
    expect(vector2.y).toBe(5);
});

let Matrix = require('./example-12');

test('Matrix iterator works as expected', () => {
    const logSpy = jest.spyOn(console, 'log');
    let i = 0;
    let matrix = new Matrix(2, 3, (x, y) => i++);
    for (let { x, y, value } of matrix) {
        console.log(`(${x}, ${y}): ${value}`);
    }
    expect(logSpy).toHaveBeenNthCalledWith(1, "(0, 0): 0");
    expect(logSpy).toHaveBeenNthCalledWith(2, "(0, 1): 1");
    expect(logSpy).toHaveBeenNthCalledWith(3, "(0, 2): 2");
    expect(logSpy).toHaveBeenNthCalledWith(4, "(1, 0): 3");
    expect(logSpy).toHaveBeenNthCalledWith(5, "(1, 1): 4");
    expect(logSpy).toHaveBeenNthCalledWith(6, "(1, 2): 5");
    logSpy.mockRestore();
});

test('Matrix getter and setter work as expected', () => {
    let i = 0;
    let matrix = new Matrix(2, 3, (x, y) => i++);
    expect(matrix.get(0, 2)).toBe(2);
    matrix.set(0, 2, 8);
    expect(matrix.get(0, 2)).toBe(8);

    expect(matrix.get(1, 2)).toBe(5);
    matrix.set(1, 2, 9);
    expect(matrix.get(1, 2)).toBe(9);
});

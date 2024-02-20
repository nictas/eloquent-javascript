let SymmetricalMatrix = require('./example-14');

test('SymmetricalMatrix iterator works as expected', () => {
    const logSpy = jest.spyOn(console, 'log');
    let matrix = new SymmetricalMatrix(2, 3, (x, y) => `${x} ${y}`);
    for (let { x, y, value } of matrix) {
        console.log(`(${x}, ${y}): ${value}`);
    }
    expect(logSpy).toHaveBeenNthCalledWith(1, "(0, 0): 0 0");
    expect(logSpy).toHaveBeenNthCalledWith(2, "(0, 1): 0 1");
    expect(logSpy).toHaveBeenNthCalledWith(3, "(0, 2): 0 2");
    expect(logSpy).toHaveBeenNthCalledWith(4, "(1, 0): 0 1"); // Swapped because it's under the main diagonal
    expect(logSpy).toHaveBeenNthCalledWith(5, "(1, 1): 1 1");
    expect(logSpy).toHaveBeenNthCalledWith(6, "(1, 2): 1 2");
    logSpy.mockRestore();
});

test('SymmetricalMatrix getter and setter work as expected', () => {
    let i = 0;
    let matrix = new SymmetricalMatrix(2, 3, (x, y) => i++);
    expect(matrix.get(1, 0)).toBe(3);
    matrix.set(1, 0, 8);
    expect(matrix.get(1, 0)).toBe(8);
    expect(matrix.get(0, 1)).toBe(8);

    matrix.set(0, 1, 9);
    expect(matrix.get(1, 0)).toBe(9);
    expect(matrix.get(0, 1)).toBe(9);
});

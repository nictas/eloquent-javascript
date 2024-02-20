let instanceofExample = require('./example-15');

test('instanceof works as expected', () => {
    const logSpy = jest.spyOn(console, 'log');
    instanceofExample();
    expect(logSpy).toHaveBeenNthCalledWith(1, "new SymmetricalMatrix(...) instanceof SymmetricalMatrix: true");
    expect(logSpy).toHaveBeenNthCalledWith(2, "new SymmetricalMatrix(...) instanceof Matrix: true");
    expect(logSpy).toHaveBeenNthCalledWith(3, "new Matrix(...) instanceof SymmetricalMatrix: false");
    expect(logSpy).toHaveBeenNthCalledWith(4, "new Matrix(...) instanceof Matrix: true");
    expect(logSpy).toHaveBeenNthCalledWith(5, "[1] instanceof Array: true");
    logSpy.mockRestore();
});

const logEach = require('./example-5');

test('logEach works as expected', () => {
    const logSpy = jest.spyOn(console, 'log');
    logEach(['a', 'b', 'c'], console.log);
    expect(logSpy).toHaveBeenNthCalledWith(1, 'a');
    expect(logSpy).toHaveBeenNthCalledWith(2, 'b');
    expect(logSpy).toHaveBeenNthCalledWith(3, 'c');
    logSpy.mockRestore();
});

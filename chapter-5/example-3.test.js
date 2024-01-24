const noisy = require('./example-3');

test('noisy works as expected', () => {
    const logSpy = jest.spyOn(console, 'log');
    noisy(Math.min)(1, 2, 3);
    expect(logSpy).toHaveBeenNthCalledWith(1, 'Called with arguments: 1,2,3');
    expect(logSpy).toHaveBeenNthCalledWith(2, 'Called with arguments: 1,2,3; Result: 1');
    logSpy.mockRestore();
});

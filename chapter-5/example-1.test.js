const repeatN = require('./example-1');

test('repeatN works as expected', () => {
    const logSpy = jest.spyOn(console, 'log');
    repeatN(5, console.log);
    expect(logSpy).toHaveBeenNthCalledWith(1, 0);
    expect(logSpy).toHaveBeenNthCalledWith(2, 1);
    expect(logSpy).toHaveBeenNthCalledWith(3, 2);
    expect(logSpy).toHaveBeenNthCalledWith(4, 3);
    expect(logSpy).toHaveBeenNthCalledWith(5, 4);
    logSpy.mockRestore();
});

test('repeatN works as expected with closures', () => {
    let sum = 0;
    repeatN(5, i => sum += i);
    expect(sum).toBe(10);
});

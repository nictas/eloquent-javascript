const unless = require('./example-4');

test('unless works as expected', () => {
    const logSpy = jest.spyOn(console, 'log');
    for (let i = 0; i < 5; i++) {
        unless(i % 2 === 0, () => {
            console.log(i);
        })
    }
    expect(logSpy).toHaveBeenNthCalledWith(1, 1);
    expect(logSpy).toHaveBeenNthCalledWith(2, 3);
    logSpy.mockRestore();
});

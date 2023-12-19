const templateLiteralExample = require('./example-1');

test('100 / 2 is computed in the template literal', () => {
    const logSpy = jest.spyOn(console, 'log');
    templateLiteralExample();
    expect(logSpy).toHaveBeenCalledWith('The result is: 50');
});

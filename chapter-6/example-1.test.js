const example = require('./example-1');

test('speak works as expected', () => {
    const logSpy = jest.spyOn(console, 'log');
    example.whiteRabbit.speak("Oh my ears and whiskers, how late it's getting!");
    example.blackRabbit.speak("I could use a carrot right now.");
    expect(logSpy).toHaveBeenNthCalledWith(1, "The white rabbit says 'Oh my ears and whiskers, how late it's getting!'");
    expect(logSpy).toHaveBeenNthCalledWith(2, "The black rabbit says 'I could use a carrot right now.'");
    logSpy.mockRestore();
});

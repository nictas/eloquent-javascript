const Rabbit = require('./example-3');

test('new works as expected', () => {
    const logSpy = jest.spyOn(console, 'log');
    let goodRabbit = new Rabbit('good');
    let evilRabbit = new Rabbit('evil');
    goodRabbit.speak('Hello!');
    evilRabbit.speak('SKREE!');
    expect(logSpy).toHaveBeenNthCalledWith(1, "The good rabbit says 'Hello!'");
    expect(logSpy).toHaveBeenNthCalledWith(2, "The evil rabbit says 'SKREE!'");
    logSpy.mockRestore();
});

test('Constructor prototypes work as expected', () => {
    let goodRabbit = new Rabbit('good');
    let evilRabbit = new Rabbit('evil');
    expect(Object.getPrototypeOf(Rabbit)).toBe(Function.prototype);
    // The constructor prototype 'extends' Object.prototype and not Function.prototype as one might expect.
    expect(Object.getPrototypeOf(Rabbit.prototype)).toBe(Object.prototype);
    expect(Object.getPrototypeOf(function () { }.prototype)).toBe(Object.prototype); // It's the same for all functions.
    expect(Object.getPrototypeOf(goodRabbit)).toBe(Rabbit.prototype);
    expect(Object.getPrototypeOf(evilRabbit)).toBe(Rabbit.prototype);
});

const protoRabbit = require('./example-2');

test('The great ancestral prototype works as expected', () => {
    expect(Object.getPrototypeOf({})).toBe(Object.prototype);
    expect(Object.getPrototypeOf(Object.prototype)).toBe(null);
    expect(Object.getPrototypeOf(Math.max)).toBe(Function.prototype);
    expect(Object.getPrototypeOf(Math.abs)).toBe(Function.prototype);
    expect(Object.getPrototypeOf([])).toBe(Array.prototype);
});

test('Object.create works as expected', () => {
    const logSpy = jest.spyOn(console, 'log');
    let goodRabbit = Object.create(protoRabbit);
    let evilRabbit = Object.create(protoRabbit);
    goodRabbit.type = 'good';
    evilRabbit.type = 'evil';
    goodRabbit.speak('Hello!');
    evilRabbit.speak('SKREE!');
    expect(logSpy).toHaveBeenNthCalledWith(1, "The good rabbit says 'Hello!'");
    expect(logSpy).toHaveBeenNthCalledWith(2, "The evil rabbit says 'SKREE!'");
    logSpy.mockRestore();
});

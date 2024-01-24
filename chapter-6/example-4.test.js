const Rabbit = require('./example-4');

test('new works with class declarations as expected', () => {
    const logSpy = jest.spyOn(console, 'log');
    let goodRabbit = new Rabbit('good');
    let evilRabbit = new Rabbit('evil');
    evilRabbit.teeth = 'long, sharp, and bloody';
    goodRabbit.speak('Hello!');
    goodRabbit.speak();
    evilRabbit.speak('SKREE!');
    expect(logSpy).toHaveBeenNthCalledWith(1, "The good rabbit with small teeth says 'Hello!'");
    expect(logSpy).toHaveBeenNthCalledWith(2, "The good rabbit with small teeth says 'Hello!'");
    expect(logSpy).toHaveBeenNthCalledWith(3, "The evil rabbit with long, sharp, and bloody teeth says 'SKREE!'");
    logSpy.mockRestore();
});

test('Constructor prototypes work as expected', () => {
    let goodRabbit = new Rabbit('good');
    let evilRabbit = new Rabbit('evil');
    expect(Object.getPrototypeOf(Rabbit)).toBe(Function.prototype);
    expect(Object.getPrototypeOf(goodRabbit)).toBe(Rabbit.prototype);
    expect(Object.getPrototypeOf(evilRabbit)).toBe(Rabbit.prototype);
});

test('class returns a constructor', () => {
    let object = new class { getWord() { return 'test'; } };
    expect(object.getWord()).toBe('test');
});

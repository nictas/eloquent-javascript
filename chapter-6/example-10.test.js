const zoo = require('./example-10');

let whiteRabbit = new zoo.Rabbit('Jake', 'white');
let blackRabbit = new zoo.Rabbit('Jill', 'black');

test('Symbols work as expected', () => {
    expect(whiteRabbit[zoo.name]).toBe('Jake');
    expect(blackRabbit[zoo.name]).toBe('Jill');
    expect(whiteRabbit[zoo.jump]()).toBe('The white rabbit named Jake jumps.');
    expect(blackRabbit[zoo.jump]()).toBe('The black rabbit named Jill jumps.');
});

test('Properties defined with symbols cannot be accessed without the symbol', () => {
    expect(whiteRabbit['name']).toBe(undefined);
    expect(blackRabbit['name']).toBe(undefined);
    expect(whiteRabbit.name).toBe(undefined);
    expect(blackRabbit.name).toBe(undefined);

    expect(whiteRabbit['furColor']).toBe('white');
    expect(blackRabbit['furColor']).toBe('black');
    expect(whiteRabbit.furColor).toBe('white');
    expect(blackRabbit.furColor).toBe('black');

    expect(blackRabbit[Symbol('name')]).toBe(undefined);
    expect(blackRabbit[Symbol(zoo.name.toString)]).toBe(undefined);
});

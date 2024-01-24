const loop = require('./exercise-2');

test('loop works as expected', () => {
    const logSpy = jest.spyOn(console, 'log');
    let array = ['a', 'b', 'c'];
    loop(0, i => i < array.length, i => i + 1, i => console.log(array[i]));
    expect(logSpy).toHaveBeenNthCalledWith(1, 'a');
    expect(logSpy).toHaveBeenNthCalledWith(2, 'b');
    expect(logSpy).toHaveBeenNthCalledWith(3, 'c');
    logSpy.mockRestore();
});

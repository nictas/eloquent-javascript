const randomness = require('./randomness');

test('getRandomNumber works as expected', () => {
    const randomSpy = jest.spyOn(global.Math, 'random');
    randomSpy.mockReturnValueOnce(0.11);
    expect(randomness.getRandomNumber(10)).toBe(1);
    randomSpy.mockReturnValueOnce(0.64);
    expect(randomness.getRandomNumber(10)).toBe(6);
    randomSpy.mockRestore();
});

test('getRandomMapKey works as expected', () => {
    const randomSpy = jest.spyOn(global.Math, 'random');

    let map = new Map();
    map.set('A', 'B');
    map.set('B', 'C');
    map.set('C', 'D');
    map.set('D', 'E');

    randomSpy.mockReturnValueOnce(0.11);
    expect(randomness.getRandomMapKey(map)).toBe('A');
    randomSpy.mockReturnValueOnce(0.64);
    expect(randomness.getRandomMapKey(map)).toBe('C');

    randomSpy.mockRestore();
});

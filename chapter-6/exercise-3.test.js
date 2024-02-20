const SetWannabe = require('./exercise-3');

test('SetWannabe can be for-eached', () => {
    let set = SetWannabe.from(['a', 'a', 'b', 'a', 'b', 'c']);
    let result = [];
    for (let element of set) {
        result.push(element);
    }
    expect(result).toStrictEqual(['a', 'b', 'c']);
});

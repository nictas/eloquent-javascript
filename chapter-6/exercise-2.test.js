const SetWannabe = require('./exercise-2');

test('SetWannabe works as expected', () => {
    let set = new SetWannabe();
    set.add('a');
    set.add('b');
    set.add(1);

    expect(set.has('a')).toBe(true);
    expect(set.has('b')).toBe(true);
    expect(set.has('c')).toBe(false);
    expect(set.has(1)).toBe(true);
    expect(set.content).toStrictEqual(['a', 'b', 1]);

    set.add('a');
    set.add('b');
    // Set hasn't changed by adding duplicate elements to it:
    expect(set.content).toStrictEqual(['a', 'b', 1]);

    set.remove(1);
    expect(set.content).toStrictEqual(['a', 'b']);
    expect(set.has(1)).toBe(false);
});

test('SetWannabe.from works as expected', () => {
    let set = SetWannabe.from(['a', 'a', 'b', 1, 'b']);
    expect(set.has('a')).toBe(true);
    expect(set.has('b')).toBe(true);
    expect(set.has('c')).toBe(false);
    expect(set.has(1)).toBe(true);
    expect(set.content).toStrictEqual(['a', 'b', 1]);
});

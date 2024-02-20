const ImmutableSetWannabe = require('./exercise-3');

test('ImmutableSetWannabe.add creates a new set', () => {
    let set1 = ImmutableSetWannabe.empty;

    let set2 = set1.add('a');
    expect(set1 === set2).toBe(false);
    expect(set1.has('a')).toBe(false);
    expect(set2.has('a')).toBe(true);

    let set3 = set2.add('b');
    expect(set2 === set3).toBe(false);
    expect(set2.has('a')).toBe(true);
    expect(set2.has('b')).toBe(false);
    expect(set3.has('a')).toBe(true);
    expect(set3.has('b')).toBe(true);
});

test('ImmutableSetWannabe.add returns the same set if the element already exist', () => {
    let set1 = ImmutableSetWannabe.empty;

    let set2 = set1.add('a');
    let set3 = set2.add('a');
    expect(set2 === set3).toBe(true);
});

test('ImmutableSetWannabe.remove creates a new set', () => {
    let set1 = ImmutableSetWannabe.empty.add('a').add('b').add('c').add('d').add('e');

    let set2 = set1.remove('c');
    expect(set1 === set2).toBe(false);
    expect(set1.has('c')).toBe(true);
    expect(set2.has('c')).toBe(false);

    let set3 = set2.remove('a');
    expect(set2 === set3).toBe(false);
    expect(set2.has('a')).toBe(true);
    expect(set2.has('c')).toBe(false);
    expect(set3.has('a')).toBe(false);
    expect(set3.has('c')).toBe(false);

    let set4 = set3.remove('e');
    expect(set3 === set4).toBe(false);
    expect(set3.has('e')).toBe(true);
    expect(set4.has('e')).toBe(false);
});

test('ImmutableSetWannabe.remove returns the same set if the element already exist', () => {
    let set1 = ImmutableSetWannabe.empty.add('a').add('b');

    let set2 = set1.remove('c');
    let set3 = set2.remove('d');
    expect(set1 === set2).toBe(true);
    expect(set2 === set3).toBe(true);
});

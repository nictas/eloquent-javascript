test('String iterator works as expected', () => {
    let okIterator = 'OK'[Symbol.iterator]();
    expect(okIterator.next()).toStrictEqual({value: 'O', done: false});
    expect(okIterator.next()).toStrictEqual({value: 'K', done: false});
    expect(okIterator.next()).toStrictEqual({value: undefined, done: true});
    expect(okIterator.next()).toStrictEqual({value: undefined, done: true});
});

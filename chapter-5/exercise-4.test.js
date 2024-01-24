const example = require('./exercise-4');

test('findCharacterScript works as expected', () => {
    expect(example.findCharacterScript('q'.codePointAt(0)).name).toBe('Latin');
    expect(example.findCharacterScript('ж'.codePointAt(0)).name).toBe('Cyrillic');
    expect(example.findCharacterScript('δ'.codePointAt(0)).name).toBe('Greek');
    expect(example.findCharacterScript('🐉'.codePointAt(0))).toBe(null);
});

test('countBy works as expected with numbers', () => {
    expect(example.countBy([1, 2, 3, 4, 5], n => n % 2 == 0 ? 'even' : 'odd')).toStrictEqual([
        { name: 'odd', count: 3 }, { name: 'even', count: 2 }
    ]);
});

test('countBy works as expected with strings', () => {
    expect(example.countBy('英国的狗说꩑꩒꩓꩔꩕꩖꩗꩘꩙', character => {
        return example.findCharacterScript(character.codePointAt(0)).name;
    }
    )).toStrictEqual([
        { name: 'Han', count: 5 }, { name: 'Cham', count: 9 }
    ]);
});

test('getDominantDirection works as expected', () => {
    expect(example.getDominantWritingDirection('英国的狗说"woof", 俄罗斯的狗说"тяв"')).toStrictEqual('ltr');
    expect(example.getDominantWritingDirection('"woof"ᠰᠠᠨ᠋ᠠᠨ ᠲᠠᠭᠤᠷᠠᠶ')).toStrictEqual('ttb');
    expect(example.getDominantWritingDirection('"woof"السلام عليكم')).toStrictEqual('rtl');
});

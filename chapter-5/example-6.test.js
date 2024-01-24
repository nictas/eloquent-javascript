const example = require('./example-6');

const livingScripts = [
    'Adlam',
    'Arabic',
    'Armenian',
    'Balinese',
    'Bamum',
    'Batak',
    'Bengali',
    'Bopomofo',
    'Braille',
    'Buginese',
    'Buhid',
    'Chakma',
    'Canadian Aboriginal',
    'Cham',
    'Cherokee',
    'Cyrillic',
    'Devanagari',
    'Deseret',
    'Duployan',
    'Ethiopic',
    'Georgian',
    'Masaram Gondi',
    'Greek',
    'Gujarati',
    'Gurmukhi',
    'Hangul',
    'Han',
    'Hanunoo',
    'Hebrew',
    'Hiragana',
    'Pahawh Hmong',
    'Javanese',
    'Kayah Li',
    'Katakana',
    'Khmer',
    'Kannada',
    'Tai Tham',
    'Lao',
    'Latin',
    'Lepcha',
    'Limbu',
    'Lisu',
    'Mandaic',
    'Mende Kikakui',
    'Malayalam',
    'Mro',
    'Meetei Mayek',
    'Myanmar',
    'Newa',
    'Nushu',
    'Ol Chiki',
    'Oriya',
    'Osage',
    'Osmanya',
    'Pau Cin Hau',
    'Miao',
    'Rejang',
    'Samaritan',
    'Saurashtra',
    'SignWriting',
    'Shavian',
    'Sharada',
    'Khudawadi',
    'Sinhala',
    'Sora Sompeng',
    'Sundanese',
    'Syloti Nagri',
    'Syriac',
    'Tagbanwa',
    'Takri',
    'Tai Le',
    'New Tai Lue',
    'Tamil',
    'Tai Viet',
    'Telugu',
    'Tifinagh',
    'Tagalog',
    'Thaana',
    'Thai',
    'Tirhuta',
    'Vai',
    'Warang Citi',
    'Yi'
];

const ttbScripts = ['Mongolian', 'Phags-pa', 'SignWriting'];

const SCRIPTS = require('./scripts');

test('filter works as expected', () => {
    let result = [];
    example.filter(SCRIPTS, script => script.living).forEach(script => result.push(script.name));
    expect(result).toStrictEqual(livingScripts);
});

test('filter (built-in) works as expected', () => {
    let result = [];
    SCRIPTS.filter(script => script.living).forEach(script => result.push(script.name));
    expect(result).toStrictEqual(livingScripts);
});

test('map works as expected', () => {
    let result = example.map(example.filter(SCRIPTS, script => script.direction === 'ttb'), script => script.name);
    expect(result).toStrictEqual(ttbScripts);
});

test('map (built-in) works as expected', () => {
    let result = SCRIPTS.filter(script => script.direction === 'ttb').map(script => script.name);
    expect(result).toStrictEqual(ttbScripts);
});

test('reduce works as expected', () => {
    const characterCount = script => {
        return example.reduce(script.ranges, (total, [from, to]) => total + (to - from), 0);
    }
    let result = example.reduce(SCRIPTS, (a, b) =>
        characterCount(a) > characterCount(b) ? a : b
    );
    expect(result.name).toStrictEqual('Han');
});

test('reduce (built-in) works as expected', () => {
    const characterCount = script => {
        return script.ranges.reduce((total, [from, to]) => total + (to - from), 0);
    }
    let result = SCRIPTS.reduce((a, b) =>
        characterCount(a) > characterCount(b) ? a : b
    );
    expect(result.name).toStrictEqual('Han');
});

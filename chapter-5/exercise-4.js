const SCRIPTS = require('./scripts');

const findCharacterScript = function (code) {
    for (let script of SCRIPTS) {
        if (script.ranges.some(([from, to]) => code >= from && code < to)) {
            return script;
        }
    }
    return null;
}

const countBy = function (array, groupName) {
    let counts = [];
    for (let element of array) {
        let name = groupName(element);
        let groupIndex = counts.findIndex(group => group.name === name);
        if (groupIndex == -1) {
            counts.push({ name, count: 1 });
        } else {
            counts[groupIndex].count++;
        }
    }
    return counts;
}

const getDominantWritingDirection = function (string) {
    let scriptCounts = countBy(string, character => {
        let script = findCharacterScript(character.codePointAt(0));
        return script != null ? script.direction : 'none';
    }).filter(({ name }) => name != 'none');

    return scriptCounts.reduce((directionA, directionB) => {
        return directionA.count > directionB.count ? directionA : directionB;
    }).name;
}

module.exports = { findCharacterScript, countBy, getDominantWritingDirection };

if (require.main === module) {
    console.log(`getDominantWritingDirection('英国的狗说"woof", 俄罗斯的狗说"тяв"'): ${getDominantWritingDirection('英国的狗说"woof", 俄罗斯的狗说"тяв"')}`);
    console.log(`getDominantWritingDirection('"woof"ᠰᠠᠨ᠋ᠠᠨ ᠲᠠᠭᠤᠷᠠᠶ'): ${getDominantWritingDirection('"woof"ᠰᠠᠨ᠋ᠠᠨ ᠲᠠᠭᠤᠷᠠᠶ')}`);
    console.log(`getDominantWritingDirection('"woof"السلام عليكم'): ${getDominantWritingDirection('"woof"السلام عليكم')}`);
}

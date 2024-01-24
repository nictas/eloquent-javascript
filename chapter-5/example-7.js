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

const characterScripts = function (string) {
    let scriptCounts = countBy(string, character => {
        let script = findCharacterScript(character.codePointAt(0));
        return script != null ? script.name : 'none';
    }).filter(({ name }) => name != 'none');

    let totalCharacters = scriptCounts.reduce((total, { count }) => total + count, 0);
    return scriptCounts.map(({ name, count }) => {
        return `${Math.round(count * 100 / totalCharacters)}% ${name}`;
    }).join(', ');
}

module.exports = { findCharacterScript, countBy, characterScripts };

if (require.main === module) {
    console.log(`characterScripts('英国的狗说"woof", 俄罗斯的狗说"тяв"'): ${characterScripts('英国的狗说"woof", 俄罗斯的狗说"тяв"')}`);
}

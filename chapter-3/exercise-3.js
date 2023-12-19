const countBs = string => {
    return countCharacter(string, 'b');
}

const countCharacter = (string, character) => {
    if (!isString(string) || !isString(character) || character.length != 1) {
        return 0;
    }
    character = character.toUpperCase();
    let count = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i].toUpperCase() === character) {
            count++;
        }
    }
    return count;
}

const isString = string => typeof string == 'string' || string instanceof String;

module.exports = { countBs, countCharacter };

if (require.main === module) {
    console.log(`countBs("bobbing"): ${countBs("bobbing")}`);
    console.log(`countBs("beneath"): ${countBs("beneath")}`);
    console.log(`countBs("laughter"): ${countBs("laughter")}`);
    console.log(`countCharacter("bobbing boats"): ${countCharacter("bobbing boats", 'o')}`);
    console.log(`countCharacter("bobbing boats"): ${countCharacter("bobbing boats", 'a')}`);
    console.log(`countCharacter("bobbing boats"): ${countCharacter("bobbing boats", 'e')}`);
    console.log(`countBs(NaN): ${countBs(NaN)}`);
    console.log(`countBs(100): ${countBs(100)}`);
    console.log(`countBs(true): ${countBs(true)}`);
    console.log(`countBs(null): ${countBs(null)}`);
    console.log(`countBs(undefined): ${countBs(undefined)}`);
    console.log(`countBs(+Infinity): ${countBs(+Infinity)}`);
    console.log(`countBs(-Infinity): ${countBs(-Infinity)}`);
    console.log(`countCharacter(NaN, 'a'): ${countCharacter(NaN, 'a')}`);
    console.log(`countCharacter(100, 'a'): ${countCharacter(100, 'a')}`);
    console.log(`countCharacter(true, 'a'): ${countCharacter(true, 'a')}`);
    console.log(`countCharacter(null, 'a'): ${countCharacter(null, 'a')}`);
    console.log(`countCharacter(undefined, 'a'): ${countCharacter(undefined, 'a')}`);
    console.log(`countCharacter(+Infinity, 'a'): ${countCharacter(+Infinity, 'a')}`);
    console.log(`countCharacter(-Infinity, 'a'): ${countCharacter(-Infinity, 'a')}`);
    console.log(`countCharacter('test', NaN): ${countCharacter('test', NaN)}`);
    console.log(`countCharacter('test', 100): ${countCharacter('test', 100)}`);
    console.log(`countCharacter('test', 'ab'): ${countCharacter('test', 'ab')}`);
    console.log(`countCharacter('test', true): ${countCharacter('test', true)}`);
    console.log(`countCharacter('test', null): ${countCharacter('test', null)}`);
    console.log(`countCharacter('test', undefined): ${countCharacter('test', undefined)}`);
    console.log(`countCharacter('test', +Infinity): ${countCharacter('test', +Infinity)}`);
    console.log(`countCharacter('test', -Infinity): ${countCharacter('test', -Infinity)}`);
}

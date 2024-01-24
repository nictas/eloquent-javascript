const typeUtils = require('../type-utils');

const arrayToList = function (input) {
    if (!Array.isArray(input)) {
        return input;
    }
    let list = null;
    for (let i = input.length - 1; i >= 0; i--) {
        list = prepend(list, input[i]);
    }
    return list;
}

const listToArray = function (input) {
    if (!typeUtils.isObject(input)) {
        return input;
    }
    let array = [];
    for (let i = 0; input != null; i++, input = input.rest) {
        array[i] = input.value;
    }
    return array;
}

const prepend = function (input = null, element) {
    if (input != null && !typeUtils.isObject(input)) {
        return input;
    }
    return {
        value: element,
        rest: input
    };
}

const nth = function (input, index) {
    if (!typeUtils.isObject(input) || !typeUtils.isInt(index) || index < 0) {
        return undefined;
    }
    for (let i = 0; input != null; i++) {
        if (i === index) {
            return input.value;
        }
        input = input.rest;
    }
    return undefined;
}

const nthRecursive = function (input, index) {
    if (!typeUtils.isObject(input) || !typeUtils.isInt(index) || index < 0) {
        return undefined;
    }
    return nthRecursiveImpl(input, index, 0);
}

const nthRecursiveImpl = function (input, index, currentIndex) {
    if (input == null) {
        return undefined;
    }
    if (index == currentIndex) {
        return input.value;
    }
    return nthRecursiveImpl(input.rest, index, currentIndex + 1);
}

module.exports = { arrayToList, listToArray, prepend, nth, nthRecursive };

if (require.main === module) {
    let list = arrayToList([1, 2, 3]);
    console.log(`arrayToList([1, 2, 3]): ${list}`);
    console.log(`nth(${JSON.stringify(list)}, 1): ${nth(list, 1)}`);
    console.log(`prepend(${JSON.stringify(list)}, 0): ${JSON.stringify(list = prepend(list, 0))}`);
    console.log(`nthRecursive(${JSON.stringify(list)}, 0): ${nth(list, 0)}`);
    console.log(`nthRecursive(${JSON.stringify(list)}, 1): ${nth(list, 1)}`);
}

const typeUtils = require("../type-utils");

const removeElementAtIndex = function (array, index) {
    if (!typeUtils.isString(array) && !Array.isArray(array)) {
        return null;
    }
    if (!typeUtils.isNumber(index)) {
        return null;
    }
    if (index < 0 || index >= array.length) {
        return array;
    }
    return array.slice(0, index).concat(array.slice(index + 1, array.length));
}

module.exports = removeElementAtIndex;

if (require.main === module) {
    console.log(`removeElementAtIndex(["a", "b", "c", "d", "e"], 2): ${removeElementAtIndex(["a", "b", "c", "d", "e"], 2)}`);
    console.log(`removeElementAtIndex(["a", "b", "c", "d", "e"], 0): ${removeElementAtIndex(["a", "b", "c", "d", "e"], 0)}`);
    console.log(`removeElementAtIndex(["a", "b", "c", "d", "e"], 4): ${removeElementAtIndex(["a", "b", "c", "d", "e"], 4)}`);
    console.log(`removeElementAtIndex("abc", 1): ${removeElementAtIndex("abc", 1)}`);
}

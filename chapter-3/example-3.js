const typeUtils = require('../type-utils');

const findPath = function (target) {
    if (!typeUtils.isInt(target)) {
        return null;
    }
    return findPathRecursive(1, target, '1');
}

const findPathRecursive = function (number, target, history) {
    if (number === target) {
        return history;
    }
    if (number > target) {
        return null;
    }
    return findPathRecursive(number * 3, target, `(${history} * 3)`) || findPathRecursive(number + 5, target, `(${history} + 5)`);
}

module.exports = findPath;

if (require.main === module) {
    console.log(`findPath(24): ${findPath(24)}`);
}

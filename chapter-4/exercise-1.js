const typeUtils = require('../type-utils');

const sum = function (numbers) {
    let result = 0;
    for (let number of numbers) {
        if (typeUtils.isFiniteNumber(number)) {
            result += number;
        }
    }
    return result;
}

const range = function (start, end, step) {
    if (step != null && !typeUtils.isFiniteNumber(step)) {
        return [];
    }
    if (!typeUtils.allMatch(typeUtils.isFiniteNumber, start, end)) {
        return [];
    }
    if (start <= end) {
        if (step < 0) {
            return [];
        }
        return rangeImpl(start, end, step || +1, (current, end) => current <= end);
    } else {
        if (step > 0) {
            return [];
        }
        return rangeImpl(start, end, step || -1, (current, end) => current >= end);
    }
}

const rangeImpl = function (start, end, step, condition) {
    let result = [];
    for (let i = 0, j = start; condition(j, end); i++, j += step) {
        result[i] = j;
    }
    return result;
}

module.exports = { sum, range };

if (require.main === module) {
    console.log(`sum(range(1, 10)) = ${sum(range(1, 10))}`);
}

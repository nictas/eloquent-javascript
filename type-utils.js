const isNumber = number => typeof number === 'number' && !Number.isNaN(number);

const isFiniteNumber = number => isNumber(number) && Number.isFinite(number);

const isInt = number => isNumber(number) && number % 1 === 0;

const isString = string => typeof string === 'string' || string instanceof String;

const isObject = object => typeof object === 'object' && !Array.isArray(object) && object !== null;

const allMatch = (predicate, ...candidates) => {
    for (let candidate of candidates) {
        if (!predicate(candidate)) {
            return false;
        }
    }
    return true;
};

module.exports = { isNumber, isFiniteNumber, isInt, isString, isObject, allMatch };

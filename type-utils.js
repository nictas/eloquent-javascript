const isNumber = number => typeof number == 'number' && !Number.isNaN(number);

const isFiniteNumber = number => isNumber(number) && Number.isFinite(number);

const isString = string => typeof string == 'string' || string instanceof String;

module.exports = { isNumber, isFiniteNumber, isString };

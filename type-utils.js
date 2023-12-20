const isNumber = number => typeof number == 'number' && !Number.isNaN(number);

const isInteger = number => isNumber(number) && number % 1 === 0;

const isFiniteNumber = number => isNumber(number) && Number.isFinite(number);

const isString = string => typeof string == 'string' || string instanceof String;

module.exports = { isNumber, isInteger, isFiniteNumber, isString };

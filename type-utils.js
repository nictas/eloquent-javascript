const isNumber = number => typeof number == 'number' && !Number.isNaN(number);
const isFiniteNumber = number => isNumber(number) && Number.isFinite(number);

module.exports = { isNumber, isFiniteNumber };

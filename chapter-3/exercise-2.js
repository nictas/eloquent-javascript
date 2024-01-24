const typeUtils = require('../type-utils');

const isEven = number => {
    if (!typeUtils.isInt(number)) {
        return false;
    }
    return isEvenRecursive(Math.abs(number));
}

const isEvenRecursive = number => {
    if (number === 0) {
        return true;
    }
    if (number === 1) {
        return false;
    }
    return isEvenRecursive(number - 2);
}

module.exports = isEven;

if (require.main === module) {
    console.log(`isEven(2): ${isEven(2)}`);
    console.log(`isEven(3): ${isEven(3)}`);
    console.log(`isEven(11112): ${isEven(11112)}`);
    console.log(`isEven(11113): ${isEven(11113)}`);
    console.log(`isEven(-2): ${isEven(-2)}`);
    console.log(`isEven(-3): ${isEven(-3)}`);
    console.log(`isEven(-11112): ${isEven(-11112)}`);
    console.log(`isEven(-11113): ${isEven(-11113)}`);
    console.log(`isEven(3.14): ${isEven(3.14)}`);
    console.log(`isEven(0.01): ${isEven(0.01)}`);
    console.log(`isEven(+Infinity): ${isEven(+Infinity)}`);
    console.log(`isEven(-Infinity): ${isEven(-Infinity)}`);
    console.log(`isEven(NaN): ${isEven(NaN)}`);
    console.log(`isEven("a"): ${isEven("a")}`);
    console.log(`isEven(true): ${isEven(true)}`);
    console.log(`isEven(null): ${isEven(null)}`);
    console.log(`isEven(undefined): ${isEven(undefined)}`);
}

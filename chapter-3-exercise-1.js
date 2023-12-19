const min = (a, b) => {
    const isNumber = number => typeof number == 'number' && !Number.isNaN(number);
    if (!isNumber(a) && !isNumber(b)) {
        return NaN;
    }
    if (!isNumber(a)) {
        return b;
    }
    if (!isNumber(b)) {
        return a;
    }
    return a < b ? a : b;
}

module.exports = min;

if (require.main === module) {
    console.log(`min(4, 2): ${min(4, 2)}`);
    console.log(`min(2, 4): ${min(2, 4)}`);
    console.log(`min(-2, -8): ${min(-2, -8)}`);
    console.log(`min(-8, -2): ${min(-8, -2)}`);
    console.log(`min(-Infinity, +Infinity): ${min(-Infinity, +Infinity)}`);
    console.log(`min(+Infinity, -Infinity): ${min(+Infinity, -Infinity)}`);
    console.log(`min(-Infinity, -Infinity): ${min(-Infinity, -Infinity)}`);
    console.log(`min(+Infinity, +Infinity): ${min(+Infinity, +Infinity)}`);
    console.log(`min(NaN, 2): ${min(NaN, 2)}`);
    console.log(`min(2, NaN): ${min(2, NaN)}`);
    console.log(`min('a', 2): ${min('a', 2)}`);
    console.log(`min(2, 'a'): ${min(2, 'a')}`);
    console.log(`min(-Infinity, 'a'): ${min(-Infinity, 'a')}`);
    console.log(`min(NaN, NaN): ${min(NaN, NaN)}`);
    console.log(`min('a', 'b'): ${min('a', 'b')}`);
}

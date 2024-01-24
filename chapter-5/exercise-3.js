const every = function (array, test) {
    if (!Array.isArray(array) || typeof test !== 'function') {
        return undefined;
    }
    for (let i = 0; i < array.length; i++) {
        if (!test(array[i])) {
            return false;
        }
    }
    return true;
}

const everyWithSome = function (array, test) {
    if (!Array.isArray(array) || typeof test !== 'function') {
        return undefined;
    }
    return !array.some(n => !test(n));
}

module.exports = { every, everyWithSome };

if (require.main === module) {
    console.log(`every([2, 4, 6], n => n % 2 === 0): ${every([2, 4, 6], n => n % 2 === 0)}`);
    console.log(`every([1, 3, 5], n => n % 2 === 1): ${every([1, 3, 5], n => n % 2 === 1)}`);
    console.log(`every([1, 3, 5], n => n % 2 === 0): ${every([1, 3, 5], n => n % 2 === 0)}`);
    console.log(`every([2, 4, 5], n => n % 2 === 0): ${every([2, 4, 5], n => n % 2 === 0)}`);
    console.log(`every([2, 3, 6], n => n % 2 === 0): ${every([2, 3, 6], n => n % 2 === 0)}`);
    console.log(`every([1, 4, 6], n => n % 2 === 0): ${every([1, 4, 6], n => n % 2 === 0)}`);

    console.log(`everyWithSome([2, 4, 6], n => n % 2 === 0): ${everyWithSome([2, 4, 6], n => n % 2 === 0)}`);
    console.log(`everyWithSome([1, 3, 5], n => n % 2 === 1): ${everyWithSome([1, 3, 5], n => n % 2 === 1)}`);
    console.log(`everyWithSome([1, 3, 5], n => n % 2 === 0): ${everyWithSome([1, 3, 5], n => n % 2 === 0)}`);
    console.log(`everyWithSome([2, 4, 5], n => n % 2 === 0): ${everyWithSome([2, 4, 5], n => n % 2 === 0)}`);
    console.log(`everyWithSome([2, 3, 6], n => n % 2 === 0): ${everyWithSome([2, 3, 6], n => n % 2 === 0)}`);
    console.log(`everyWithSome([1, 4, 6], n => n % 2 === 0): ${everyWithSome([1, 4, 6], n => n % 2 === 0)}`);
}

const reverseArray = function (array) {
    if (!Array.isArray(array)) {
        return array;
    }
    let result = [];
    for (let i = 0; i < array.length; i++) {
        result[i] = array[array.length - i - 1];
    }
    return result;
}

const reverseArrayInPlace = function (array) {
    if (!Array.isArray(array)) {
        return array;
    }
    for (let i = 0; i < array.length / 2; i++) {
        let temp = array[i];
        array[i] = array[array.length - i - 1];
        array[array.length - i - 1] = temp;
    }
}

module.exports = { reverseArray, reverseArrayInPlace };

if (require.main === module) {
    console.log(`reverseArray[1, 2, 3, 'a', 'b'] = ${reverseArray[1, 2, 3, 'a', 'b']}`);
}

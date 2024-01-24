const filter = function (array, predicate) {
    let result = [];
    for (let element of array) {
        if (predicate(element)) {
            result.push(element);
        }
    }
    return result;
}

const map = function (array, transform) {
    let result = [];
    for (let element of array) {
        result.push(transform(element));
    }
    return result;
}

const reduce = function (array, combine, start) {
    let result = start;
    for (let element of array) {
        if (result == null) {
            result = element;
            continue;
        }
        result = combine(result, element);
    }
    return result;
}

module.exports = { filter, map, reduce };

if (require.main === module) {
    let numbers = [1, 2, 3, 4, 5]
    let sum = reduce(map(filter(numbers, number => number % 2 === 0), number => number * 2), (sum, number) => sum + number);
    console.log(`Sum of even numbers in ${numbers} multiplied by two: ${sum}`);
}

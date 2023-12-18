const minus = function (a, b) {
    if (b === undefined) {
        return -a;
    }
    return a - b;
}

const square = function (number) {
    return number * number;
}

const squareNested = function (number) {
    const nestedFunction = function () {
        return number * number;
    }
    return nestedFunction();
}

const squareLambda = number => number * number;

const pow = (number, power = 2) => {
    let result = 1;
    for (let i = 0; i < power; i++) {
        result *= number;
    }
    return result;
}

const answerToLifeUniverseEverything = () => 42;

module.exports = { minus, square, squareNested, squareLambda, pow, answerToLifeUniverseEverything };

console.log(square(4));
console.log(squareNested(4));
console.log(squareLambda(4));
console.log(pow(4, 3));
console.log(pow(4));
console.log(answerToLifeUniverseEverything());

const typeUtils = require('../type-utils');

function fizzBuzz(limit) {
    if (!typeUtils.isFiniteNumber(limit)) {
        return;
    }
    for (let i = 1; i <= limit; i++) {
        let message = '';
        if (i % 3 === 0) {
            message += 'Fizz';
        }
        if (i % 5 === 0) {
            message += 'Buzz';
        }
        console.log(message === '' ? i : message);
    }
}

module.exports = fizzBuzz;

if (require.main === module) {
    fizzBuzz(100);
}

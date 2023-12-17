function fizzBuzz(limit) {
    if (typeof limit != 'number' || Number.isNaN(limit) || !Number.isFinite(limit)) {
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

fizzBuzz(100);

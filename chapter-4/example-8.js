const max = function (...numbers) {
    let max = -Infinity;
    for (let number of numbers) {
        if (max < number) {
            max = number;
        }
    }
    return max;
}

module.exports = max;

if (require.main === module) {
    console.log(`max(1, 2, 5, 4, 3): ${max(1, 2, 5, 4, 3)}`);
    console.log(`max(1, 2): ${max(1, 2)}`);
    console.log(`max(-123): ${max(-123)}`);
}

const noisy = function (f) {
    return (...args) => {
        console.log(`Called with arguments: ${args}`);
        let result = f(...args);
        console.log(`Called with arguments: ${args}; Result: ${result}`);
        return result;
    };
}

module.exports = noisy;

if (require.main === module) {
    console.log('noisy(Math.min)(3, 2, 1):');
    noisy(Math.min)(3, 2, 1);
}

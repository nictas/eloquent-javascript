const logEach = function (array) {
    array.forEach(element => console.log(element));
}

module.exports = logEach;

if (require.main === module) {
    console.log("logEach('a', 'b', 'c'):");
    logEach(['a', 'b', 'c'], console.log);
}

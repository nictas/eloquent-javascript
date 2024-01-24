const flatten = function (array) {
    if (!Array.isArray(array)) {
        return undefined;
    }
    return array.reduce((a, b) => a.concat(b), []);
}

module.exports = flatten;

if (require.main === module) {
    console.log(`flatten([[1, 2, 3], [4, 5], [6]]): ${flatten([[1, 2, 3], [4, 5], [6]])}`);
}

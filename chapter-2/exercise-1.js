const typeUtils = require('../type-utils');

function printTriangle(numberOfLines) {
    if (!typeUtils.isFiniteNumber(numberOfLines)) {
        return;
    }
    for (let line = '#'; line.length <= numberOfLines; line += '#') {
        console.log(line);
    }
}

module.exports = printTriangle;

if (require.main === module) {
    printTriangle(7);
}

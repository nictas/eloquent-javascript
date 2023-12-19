const typeUtils = require('../type-utils');

function printChessBoard(size) {
    if (!typeUtils.isFiniteNumber(size)) {
        return;
    }
    let line1 = generateChessBoardLine(size, ' ');
    let line2 = generateChessBoardLine(size, '#');
    for (let i = 0; i < size; i++) {
        console.log(i % 2 == 0 ? line1 : line2);
    }
}

function generateChessBoardLine(size, startingCharacter) {
    let line = '';
    for (let i = 0, symbol = startingCharacter; i < size; i++, symbol = symbol == ' ' ? '#' : ' ') {
        line += symbol;
    }
    return line;
}

module.exports = printChessBoard;

if (require.main === module) {
    printChessBoard(8);
}

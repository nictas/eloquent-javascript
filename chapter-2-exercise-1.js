function printTriangle(numberOfLines) {
    if (typeof numberOfLines != 'number' || Number.isNaN(numberOfLines) || !Number.isFinite(numberOfLines)) {
        return;
    }
    for (let line = '#'; line.length <= numberOfLines; line += '#') {
        console.log(line);
    }
}
module.exports = printTriangle;

printTriangle(7);

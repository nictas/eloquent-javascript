function plotTwist() {
    let greeting = 'Hello';
    var name = 'Luke'; // Avoid using var. Use let instead. See: https://stackoverflow.com/questions/762011
    const message = "I'm your father!"
    console.log(greeting + ' ' + name + '. ' + message);
}
module.exports = plotTwist;

if (require.main === module) {
    plotTwist();
}

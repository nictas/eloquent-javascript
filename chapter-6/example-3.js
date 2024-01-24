function Rabbit(type) {
    this.type = type;
}
Rabbit.prototype.speak = function (line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
}

module.exports = Rabbit;

if (require.main === module) {
    let goodRabbit = new Rabbit('good');
    let evilRabbit = new Rabbit('evil');
    goodRabbit.speak('Hello!');
    evilRabbit.speak('SKREE!');
    console.log(`Object.getPrototypeOf(Rabbit) == Function.prototype: ${Object.getPrototypeOf(Rabbit) == Function.prototype}`);
    console.log(`Object.getPrototypeOf(goodRabbit) == Rabbit.prototype: ${Object.getPrototypeOf(goodRabbit) == Rabbit.prototype}`);
    console.log(`Object.getPrototypeOf(evilRabbit) == Rabbit.prototype: ${Object.getPrototypeOf(evilRabbit) == Rabbit.prototype}`);
}

class Rabbit {
    static #defaultLine = 'Hello!' // private static field
    teeth = 'small'

    constructor(type) {
        this.type = type;
    }

    speak(line = Rabbit.#defaultLine) {
        console.log(`The ${this.type} rabbit with ${this.teeth} teeth says '${line}'`);
    }
}

module.exports = Rabbit;

if (require.main === module) {
    let goodRabbit = new Rabbit('good');
    let evilRabbit = new Rabbit('evil');
    evilRabbit.teeth = 'long, sharp, and bloody';
    goodRabbit.speak('Hello!');
    goodRabbit.speak();
    evilRabbit.speak('SKREE!');
    console.log(`Object.getPrototypeOf(Rabbit) == Function.prototype: ${Object.getPrototypeOf(Rabbit) == Function.prototype}`);
    console.log(`Object.getPrototypeOf(goodRabbit) == Rabbit.prototype: ${Object.getPrototypeOf(goodRabbit) == Rabbit.prototype}`);
    console.log(`Object.getPrototypeOf(evilRabbit) == Rabbit.prototype: ${Object.getPrototypeOf(evilRabbit) == Rabbit.prototype}`);
}

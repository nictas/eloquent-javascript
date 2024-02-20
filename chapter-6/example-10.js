let name = Symbol('name');
let jump = Symbol('jump');

class Rabbit {
    constructor(rabbitName, rabbitFurColor) {
        this[name] = rabbitName;
        this.furColor = rabbitFurColor;
    }
    [jump]() {
        return `The ${this.furColor} rabbit named ${this[name]} jumps.`
    }
}

module.exports = { name, jump, Rabbit };

if (require.main === module) {
    let whiteRabbit = new Rabbit('Jake', 'white');
    let blackRabbit = new Rabbit('Jill', 'black');
    console.log(`whiteRabbit[name]: ${whiteRabbit[name]}`);
    console.log(`blackRabbit[name]: ${blackRabbit[name]}`);
    console.log(`whiteRabbit[jump](): ${whiteRabbit[jump]()}`);
    console.log(`blackRabbit[jump](): ${blackRabbit[jump]()}`);

    console.log(`whiteRabbit['name']: ${whiteRabbit['name']}`);
    console.log(`blackRabbit['name']: ${blackRabbit['name']}`);
    console.log(`whiteRabbit.name: ${whiteRabbit.name}`);
    console.log(`blackRabbit.name: ${blackRabbit.name}`);

    console.log(`whiteRabbit['furColor']: ${whiteRabbit['furColor']}`);
    console.log(`blackRabbit['furColor']: ${blackRabbit['furColor']}`);
    console.log(`whiteRabbit.furColor: ${whiteRabbit.furColor}`);
    console.log(`blackRabbit.furColor: ${blackRabbit.furColor}`);

    console.log(`blackRabbit[Symbol('name')]: ${blackRabbit[Symbol('name')]}`);
    console.log(`blackRabbit[Symbol(name.toString)]: ${blackRabbit[Symbol(name.toString)]}`);
}

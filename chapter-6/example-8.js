function Animal(name) {
    this.name = name;
}

Animal.prototype.isHairless = () => false;

function Dog(name) {
    Animal.call(this, name);
}

Dog.prototype.bark = function () {
    return `${this.name}: Woof woof!`;
}

function Cat(name) {
    Animal.call(this, name);
}

Cat.prototype.meow = function () {
    return `${this.name}: Meeeeooww!`;
}

function HairlessCat(name) {
    Cat.call(this, name);
}

HairlessCat.prototype.isHairless = () => true;

Object.setPrototypeOf(Dog.prototype, Animal.prototype);
Object.setPrototypeOf(Cat.prototype, Animal.prototype);
Object.setPrototypeOf(HairlessCat.prototype, Cat.prototype);

module.exports = { Dog, Cat, HairlessCat };

if (require.main === module) {
    let buba = new Dog('Buba');
    let kaia = new Cat('Kaia');
    let maia = new HairlessCat('Maia');
    console.log(`buba.isHairless(): ${buba.isHairless()}`);
    console.log(`kaia.isHairless(): ${kaia.isHairless()}`);
    console.log(`maia.isHairless(): ${maia.isHairless()}`);
    console.log(`buba.bark(): ${buba.bark()}`);
    console.log(`kaia.meow(): ${kaia.meow()}`);
    console.log(`maia.meow(): ${maia.meow()}`);
}

class Animal {
    constructor(name) {
        this.name = name
    }
    isHairless() {
        return false;
    }
}

class Dog extends Animal {
    constructor(name) {
        super(name);
    }
    bark() {
        return `${this.name}: Woof woof!`;
    }
}

class Cat extends Animal {
    constructor(name) {
        super(name);
    }
    meow() {
        return `${this.name}: Meeeeooww!`;
    }
}

class HairlessCat extends Cat {
    constructor(name) {
        super(name);
    }
    isHairless() {
        return true;
    }
}

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

class SetWannabe {
    constructor() {
        this.content = [];
    }
    has(element) {
        return this.content.indexOf(element) != -1;
    }
    add(element) {
        if (!this.has(element)) {
            this.content.push(element);
        }
    }
    remove(element) {
        let index = this.content.indexOf(element);
        if (index != -1) {
            this.content.splice(index, 1);
        }
    }
    static from(content) {
        let set = new SetWannabe();
        for (let element of content) {
            set.add(element);
        }
        return set;
    }
    [Symbol.iterator]() {
        return new SetWannabeIterator(this);
    }
}

class SetWannabeIterator {
    constructor(set) {
        this.set = set;
        this.index = 0;
    }
    next() {
        if (this.index >= this.set.content.length) {
            return { done: true };
        }
        return { value: this.set.content[this.index++], done: false };
    }
}

module.exports = SetWannabe;

if (require.main === module) {
    let set = SetWannabe.from(['a', 'a', 'b', 1, 'b']);

    console.log(`${set.content} elements:`);
    for (let element of set) {
        console.log(element);
    }
}

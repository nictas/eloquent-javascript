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
}

module.exports = SetWannabe;

if (require.main === module) {
    let set = SetWannabe.from(['a', 'a', 'b', 1, 'b']);

    console.log(`set: ${set.content}`);
    console.log(`set.has('a'): ${set.has('a')}`);
    console.log(`set.has('b'): ${set.has('b')}`);
    console.log(`set.has('c'): ${set.has('c')}`);
    console.log(`set.has(1): ${set.has(1)}`);

    set.remove(1);
    console.log(`set: ${set.content}`);
    console.log(`set.has(1): ${set.has(1)}`);
}

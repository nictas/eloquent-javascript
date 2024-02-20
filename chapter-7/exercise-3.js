class ImmutableSetWannabe {
    static empty = new ImmutableSetWannabe([]);
    constructor(content) {
        this.content = Object.freeze(content);
    }
    has(element) {
        return this.content.indexOf(element) != -1;
    }
    add(element) {
        if (!this.has(element)) {
            return new ImmutableSetWannabe(this.content.concat(element));
        }
        return this;
    }
    remove(element) {
        let index = this.content.indexOf(element);
        if (index != -1) {
            return new ImmutableSetWannabe(this.content.filter(value => value !== element));
        }
        return this;
    }
}

module.exports = ImmutableSetWannabe;

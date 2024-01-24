let protoRabbit = {
    speak(line) {
        console.log(`The ${this.type} rabbit says '${line}'`);
    }
};

module.exports = protoRabbit;

if (require.main === module) {
    console.log(`Object.getPrototypeOf({}) == Object.prototype: ${Object.getPrototypeOf({}) == Object.prototype}`);
    console.log(`Object.getPrototypeOf(Object.prototype) == null: ${Object.getPrototypeOf(Object.prototype) == null}`);
    console.log(`Object.getPrototypeOf(Math.max) == Function.prototype: ${Object.getPrototypeOf(Math.max) == Function.prototype}`);
    console.log(`Object.getPrototypeOf(Math.abs) == Function.prototype: ${Object.getPrototypeOf(Math.abs) == Function.prototype}`);
    console.log(`Object.getPrototypeOf([]) == Array.prototype: ${Object.getPrototypeOf([]) == Array.prototype}`);
}

class Temperature {
    constructor(celsius) {
        this.celsius = celsius;
    }
    get fahrenheit() {
        return this.celsius * 1.8 + 32;
    }
    set fahrenheit(value) {
        this.celsius = (value - 32) / 1.8;
    }
    static fromFahrenheit(value) {
        return new Temperature((value - 32) / 1.8);
    }
}

module.exports = Temperature;

if (require.main === module) {
    let freezing = new Temperature(-10);
    console.log(`${freezing.fahrenheit} Fahrenheit = ${freezing.celsius} Celsius`);
    freezing.fahrenheit = 32;
    console.log(`${freezing.fahrenheit} Fahrenheit = ${freezing.celsius} Celsius`);
}

let Temperature = require('./example-13');

test('Getters work as expected', () => {
    let varyingSize = {
        get size() {
            return Math.floor(Math.random() * 100);
        }
    }
    let randomSpy = jest.spyOn(global.Math, 'random');
    randomSpy.mockReturnValue(0.123456789);
    expect(varyingSize.size).toBe(12);
    randomSpy.mockReturnValue(0.987654321);
    expect(varyingSize.size).toBe(98);
    randomSpy.mockRestore();
});

test('Temperature works as expected', () => {
    let freezing = new Temperature(-10);
    expect(freezing.fahrenheit).toBe(14);
    freezing.fahrenheit = 32;
    expect(freezing.fahrenheit).toBe(32);
    expect(freezing.celsius).toBe(0);
});

test('Temperature.fromFahreheit works as expected', () => {
    let temperature1 = Temperature.fromFahrenheit(50);
    expect(temperature1.celsius).toBe(10);
    expect(temperature1.fahrenheit).toBe(50);
    let temperature2 = Temperature.fromFahrenheit(68);
    expect(temperature2.celsius).toBe(20);
    expect(temperature2.fahrenheit).toBe(68);
});
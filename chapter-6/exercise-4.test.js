const object = require('./exercise-4');

test('The hasOwnProperty method can be called on an object with a hasOwnProperty property', () => {
    expect(Object.prototype.hasOwnProperty.call(object, 'hasOwnProperty')).toBe(true);
    expect({}.hasOwnProperty('hasOwnProperty')).toBe(false);
});

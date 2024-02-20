let object = {
    hasOwnProperty: 'yes'
}

module.exports = object;

if (require.main === module) {
    console.log(`object has a property called hasOwnProperty: ${Object.prototype.hasOwnProperty.call(object, 'hasOwnProperty')}`);
    console.log(`{} has a property called hasOwnProperty: ${{}.hasOwnProperty('hasOwnProperty')}`);
}

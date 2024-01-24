const ages = new Map();
ages.set('Sunny', 30);
ages.set('Maria', 24);

module.exports = ages;

if (require.main === module) {
    console.log(`ages.has('Sunny'): ${ages.has('Sunny')}`);
    console.log(`ages.has('Maria'): ${ages.has('Maria')}`);
    console.log(`ages.get('Sunny'): ${ages.get('Sunny')}`);
    console.log(`ages.get('Maria'): ${ages.get('Maria')}`);
}

const stringsExample = function () {
    let string = " bobbing boats \t\n";
    console.log(`string: ${string}`);
    console.log(`string.slice(4): ${string.slice(4)}`);
    console.log(`string.slice(4, 8): ${string.slice(4, 8)}`);
    console.log(`string.indexOf('b'): ${string.indexOf('b')}`);
    console.log(`string.indexOf('g'): ${string.indexOf('g')}`);
    console.log(`string.indexOf('bing'): ${string.indexOf('bing')}`);
    console.log(`string.lastIndexOf('b'): ${string.lastIndexOf('b')}`);
    console.log(`string.lastIndexOf('g'): ${string.lastIndexOf('g')}`);
    console.log(`string.trim(): ${string.trim()}`);
    console.log(`'7'.padStart(3, '0'): ${'7'.padStart(3, '0')}`);
    console.log(`string.trim().split(' '): ${string.trim().split(' ')}`);
    console.log(`string.trim().split(' ').join('-'): ${string.trim().split(' ').join('-')}`);
    console.log(`'ho'.repeat(3): ${'ho'.repeat(3)}`);
    console.log(`string[1]: ${string[1]}`);
    console.log(`string[7]: ${string[7]}`);
    for (let char of string.trim()) {
        console.log(char);
    }
}

module.exports = stringsExample;

if (require.main === module) {
    stringsExample();
}

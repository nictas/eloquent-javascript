const arraysExample = function () {
    let numbers = [1, 2, 3, 4, 5];
    console.log(`numbers: ${numbers}`);
    console.log(`numbers.length: ${numbers.length}`);
    console.log(`numbers["length"]: ${numbers["length"]}`);
    numbers.pop();
    console.log(`numbers after pop(): ${numbers}`);
    numbers.pop();
    console.log(`numbers after pop(): ${numbers}`);
    numbers.push(6, 7);
    console.log(`numbers after push(6, 7): ${numbers}`);
    numbers.push(8, 9);
    console.log(`numbers after push(8, 9): ${numbers}`);
    numbers.shift();
    console.log(`numbers after shift(): ${numbers}`);
    numbers.shift();
    console.log(`numbers after shift(): ${numbers}`);
    numbers.unshift(3);
    console.log(`numbers after unshift(3): ${numbers}`);
    numbers.unshift(2);
    console.log(`numbers after unshift(2): ${numbers}`);
    console.log(`numbers.indexOf(3): ${numbers.indexOf(3)}`);
    console.log(`numbers.indexOf(9): ${numbers.indexOf(9)}`);
    console.log(`numbers.lastIndexOf(3): ${numbers.lastIndexOf(3)}`);
    console.log(`numbers.slice(2, 5): ${numbers.slice(2, 5)}`);
    console.log(`numbers.slice(2): ${numbers.slice(2)}`);
    numbers = numbers.concat(10, 11);
    console.log(`numbers.concat(10, 11): ${numbers}`);
}

module.exports = arraysExample;

if (require.main === module) {
    arraysExample();
}

const objectsExample = function () {
    let object1 = { value: 10 };
    let object2 = object1;
    let object3 = { value: 10 };
    console.log('let object1 = { value: 10 }');
    console.log('let object2 = object1');
    console.log('let object3 = { value: 10 }');
    console.log(`object1 == object2: ${object1 == object2}`);
    console.log(`object1 == object3: ${object1 == object3}`);
    console.log(`object1 === object2: ${object1 === object2}`);
    console.log(`object1 === object3: ${object1 === object3}`);
    object1.value = 15;
    console.log(`object2.value (after object1.value = 15): ${object2.value}`);
}

module.exports = objectsExample;

if (require.main === module) {
    objectsExample();
}

const loop = function (value, test, update, body) {
    for (let i = value; test(i); i = update(i)) {
        body(i);
    }
}

module.exports = loop;

if (require.main === module) {
    let array = ['a', 'b', 'c'];
    console.log('loop(0, i => i < array.length, i => i + 1, i => console.log(array[i])):');
    loop(0, i => i < array.length, i => i + 1, i => console.log(array[i]));
}

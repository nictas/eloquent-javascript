const unless = function (predicate, then) {
    if (!predicate) {
        then();
    }
}

module.exports = unless;

if (require.main === module) {
    for (let i = 0; i < 5; i++) {
        unless(i % 2 === 0, () => {
            console.log(i);
        })
    }
}

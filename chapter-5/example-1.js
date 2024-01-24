const repeatN = function (n, action) {
    for (let i = 0; i < n; i++) {
        action(i);
    }
}

module.exports = repeatN;

if (require.main === module) {
    console.log('repeatN(5, console.log):');
    repeatN(5, console.log);
}

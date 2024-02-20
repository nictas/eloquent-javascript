const getRandomMapKey = function (map) {
    let randomIndex = getRandomNumber(map.size);
    let index = 0;
    for (let key of map.keys()) {
        if (index++ == randomIndex) {
            return key;
        }
    }
    return null;
}

const getRandomNumber = function (limit) {
    return Math.floor(Math.random() * limit);
}

module.exports = { getRandomMapKey, getRandomNumber };

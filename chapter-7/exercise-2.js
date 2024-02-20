const routing = require('./routing');
const runPerformanceTest = require('./exercise-1');

class OptimalRobot {
    run(state, memory) {
        if (isNullOrEmpty(memory)) {
            memory = findNextRoute(state);
        }
        if (isNullOrEmpty(memory)) {
            return { memory: [] }
        }
        return { direction: memory[0], memory: memory.slice(1) };
    }
}

const isNullOrEmpty = function (array) {
    return array == null || array.length == 0;
}

const findNextRoute = function (state) {
    if (state.undeliveredParcels.length == 0) {
        return null;
    }
    let nextRoute = findShortestRoute(state, parcel => state.location != parcel.location, parcel => parcel.location);
    if (nextRoute != null) {
        return nextRoute;
    }
    return findShortestRoute(state, parcel => state.location == parcel.location, parcel => parcel.destination);
}

const findShortestRoute = function (state, parcelFilter, destinationPicker) {
    return state.undeliveredParcels
        .filter(parcelFilter)
        .map(destinationPicker)
        .map(destination => routing.findRoute(state.villageGraph, state.location, destination))
        .reduce((a, b) => {
            if (a == null) {
                return b;
            }
            if (b == null) {
                return a;
            }
            return a.length < b.length ? a : b;
        }, null);
}

module.exports = { OptimalRobot, findNextRoute };

if (require.main == module) {
    runPerformanceTest([new OptimalRobot()]);
}

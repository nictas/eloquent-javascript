const graph = require('./graph');
const robots = require('./robots');
const village = require('./village');

const createEmptyIntArray = function (length) {
    let result = [];
    for (let i = 0; i < length; i++) {
        result.push(0);
    }
    return result;
}

const runPerformanceTest = function (parcelCount = 20, iterations = 1000) {
    const villageGraph = graph.buildGraph(graph.roads);

    const villageRobots = [
        new robots.RandomRobot(),
        new robots.RouteFollowingRobot([
            "Alice's House",
            "Bob's House",
            "Town Hall",
            "Shop",
            "Grete's House",
            "Ernie's House",
            "Daria's House",
            "Town Hall",
            "Shop",
            "Grete's House",
            "Farm",
            "Marketplace",
            "Post Office",
            "Alice's House",
            "Cabin"]),
        new robots.RouteFindingRobot(),
    ];

    let actions = createEmptyIntArray(villageRobots.length);
    for (let i = 0; i < iterations; i++) {
        const villageState = village.State.random(villageGraph, parcelCount);
        for (let j = 0; j < villageRobots.length; j++) {
            let route = robots.runRobot(villageState, villageRobots[j]);
            actions[j] += route.length;
        }
    }
    for (let i = 0; i < villageRobots.length; i++) {
        console.log(`${villageRobots[i].constructor.name} did an average of ${actions[i] / iterations} actions to deliver ${parcelCount} parcels.`);
    }
}

if (require.main === module) {
    runPerformanceTest();
}

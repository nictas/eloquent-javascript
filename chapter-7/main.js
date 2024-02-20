const graph = require('./graph');
const robots = require('./robots');
const village = require('./village');

if (require.main === module) {
    const villageGraph = graph.buildGraph(graph.roads);
    const villageState = village.State.random(villageGraph, 10);

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

    console.log(`Village state: ${JSON.stringify(villageState, null, 4)}`);
    for (let robot of villageRobots) {
        let route = robots.runRobot(villageState, robot);
        console.log(`${robot.constructor.name} delivered all parcels in ${route.length} actions. Route: ${JSON.stringify(route, null, 4)}`);
    }
}

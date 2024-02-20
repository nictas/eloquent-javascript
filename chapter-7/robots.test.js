const randomness = require('./randomness');
const robots = require('./robots');
const village = require('./village');

const undeliveredParcels = [
    new village.Parcel('B', 'C'),
    new village.Parcel('C', 'A'),
    new village.Parcel('C', 'B')
];
const villageGraph = new Map();
villageGraph.set('A', new Set(['B', 'C']));
villageGraph.set('B', new Set(['A']));
villageGraph.set('C', new Set(['A']));
const villageState = new village.State(villageGraph, 'A', undeliveredParcels);

const expectRobotToFollowRoute = function (robot, route, maxActions) {
    expect(robots.runRobot(villageState, robot, maxActions)).toStrictEqual(route);
}

test('runRobot works as expected', () => {
    let run = function (state, memory) {
        function buildAction(direction) {
            memory.push(direction);
            return { direction, memory };
        }
        if (memory.length == 0) { // With this we're testing that the runRobot function updates the memory.
            return buildAction('B');
        }
        if (memory.length == 1) {
            return buildAction('A');
        }
        if (memory.length == 2) {
            return buildAction('C');
        }
        if (memory.length == 3) {
            return buildAction('A');
        }
        if (memory.length == 4) {
            return buildAction('B');
        }
    };
    let robot = { run };
    expectRobotToFollowRoute(robot, ['B', 'A', 'C', 'A', 'B']);
});

test('RandomRobot works as expected', () => {
    const randomSpy = jest.spyOn(randomness, 'getRandomMapKey');
    let robot = new robots.RandomRobot();

    let route = ['B', 'A', 'B', 'A', 'C', 'A', 'B'];
    randomSpy.mockReturnValue(null);
    for (let action of route) {
        randomSpy.mockReturnValueOnce(action);
    }
    expectRobotToFollowRoute(robot, route);

    randomSpy.mockRestore();
});

test('RandomRobot can produce non-sensical values but these do not break the village state', () => {
    const randomSpy = jest.spyOn(randomness, 'getRandomMapKey');
    let robot = new robots.RandomRobot();

    let route = ['B', 'C', 'B', 'A', 'C', 'A', 'B'];
    randomSpy.mockReturnValue(null);
    for (let action of route) {
        randomSpy.mockReturnValueOnce(action);
    }
    expectRobotToFollowRoute(robot, ['B', 'B', 'A', 'C', 'A', 'B']);
});

test('RouteFollowingRobot works as expected', () => {
    let robot = new robots.RouteFollowingRobot(['B', 'A', 'C', 'A']);

    expectRobotToFollowRoute(robot, ['B', 'A', 'C', 'A', 'B']);
});

test('RouteFindingRobot works as expected', () => {
    let robot = new robots.RouteFindingRobot();

    expectRobotToFollowRoute(robot, ['B', 'A', 'C', 'A', 'B']);
});

test('RouteFindingRobot does nothing when in a detached node', () => {
    const villageGraph = new Map();
    villageGraph.set('A', new Set(['B', 'C']));
    villageGraph.set('B', new Set(['A']));
    villageGraph.set('C', new Set(['A']));
    villageGraph.set('D', new Set());
    let state = new village.State(villageGraph, 'D', undeliveredParcels);
    let robot = new robots.RouteFindingRobot();

    expect(robot.run(state, [])).toStrictEqual({ memory: [] });
    expect(robot.run(state, [])).toStrictEqual({ memory: [] });
});

test('RouteFindingRobot does nothing when there are no parcels to deliver', () => {
    let state = new village.State(villageGraph, 'A', []);
    let robot = new robots.RouteFindingRobot();

    expect(robot.run(state, [])).toStrictEqual({ memory: [] });
    expect(robot.run(state, [])).toStrictEqual({ memory: [] });
});

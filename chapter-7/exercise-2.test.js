const robots = require('./robots');
const village = require('./village');
const optimal = require('./exercise-2');

const villageGraph = new Map();
villageGraph.set('A', new Set(['B', 'C']));
villageGraph.set('B', new Set(['A', 'D', 'E']));
villageGraph.set('C', new Set(['A']));
villageGraph.set('D', new Set(['B', 'E']));
villageGraph.set('E', new Set(['B', 'D']));
villageGraph.set('F', new Set([]));

//   B - D
//  /  \ |
// A     E
//  \
//   C   F

test('findNextRoute collects all parcels before attempting to deliver them', () => {
    let state = new village.State(villageGraph, 'C', [
        new village.Parcel('A', 'C'),
        new village.Parcel('B', 'C'),
        new village.Parcel('D', 'C'),
    ]);

    expect(optimal.findNextRoute(state)).toStrictEqual(['A']);
    state = state.move('A');
    expect(optimal.findNextRoute(state)).toStrictEqual(['B']);
    state = state.move('B');
    expect(optimal.findNextRoute(state)).toStrictEqual(['D']);
});

test('findNextRoute prioritizes closer parcels', () => {
    let state = new village.State(villageGraph, 'A', [
        new village.Parcel('E', 'C'),
        new village.Parcel('C', 'E'),
    ]);

    expect(optimal.findNextRoute(state)).toStrictEqual(['C']);
});

test('findNextRoute delivers parcels if all are at its location', () => {
    let state = new village.State(villageGraph, 'A', [
        new village.Parcel('A', 'C'),
        new village.Parcel('A', 'E'),
    ]);

    expect(optimal.findNextRoute(state)).toStrictEqual(['C']);
    state = state.move('C');
    expect(optimal.findNextRoute(state)).toStrictEqual(['A', 'B', 'E']);
});

test('findNextRoute prioritizes delivering closer parcels', () => {
    let state = new village.State(villageGraph, 'A', [
        new village.Parcel('A', 'E'),
        new village.Parcel('A', 'C'),
    ]);
    expect(optimal.findNextRoute(state)).toStrictEqual(['C']);
});

test('findNextRoute ignores unreachable parcels', () => {
    let state = new village.State(villageGraph, 'A', [
        new village.Parcel('F', 'E'),
        new village.Parcel('F', 'A'),
        new village.Parcel('A', 'B'),
    ]);
    expect(optimal.findNextRoute(state)).toStrictEqual(['B']);
    state = state.move('B');
    expect(optimal.findNextRoute(state)).toBe(null);
});

test('findNextRoute ignores undeliverable parcels', () => {
    let state = new village.State(villageGraph, 'A', [
        new village.Parcel('A', 'F'),
        new village.Parcel('B', 'F'),
        new village.Parcel('A', 'B'),
    ]);
    expect(optimal.findNextRoute(state)).toStrictEqual(['B']);
    state = state.move('B');
    expect(optimal.findNextRoute(state)).toBe(null);
});

const expectRobotToFollowRoute = function (state, robot, route) {
    expect(robots.runRobot(state, robot)).toStrictEqual(route);
}

test('OptimalRobot follows multiple routes to deliver all parcels', () => {
    let state = new village.State(villageGraph, 'C', [
        new village.Parcel('B', 'C'),
        new village.Parcel('A', 'E'),
        new village.Parcel('D', 'C'),
    ]);
    expectRobotToFollowRoute(state, new optimal.OptimalRobot(), ['A', 'B', 'D', 'E', 'B', 'A', 'C']);
});

test('OptimalRobot follows multiple routes to deliver all deliverable parcels', () => {
    let state = new village.State(villageGraph, 'C', [
        new village.Parcel('B', 'C'),
        new village.Parcel('A', 'E'),
        new village.Parcel('F', 'D'),
        new village.Parcel('D', 'F'),
        new village.Parcel('D', 'C'),
    ]);
    expectRobotToFollowRoute(state, new optimal.OptimalRobot(), ['A', 'B', 'D', 'E', 'B', 'A', 'C']);
});

const routing = require('./routing');
const village = require('./village');

const villageGraph = new Map();
villageGraph.set('A', new Set(['B', 'C']));
villageGraph.set('B', new Set(['A', 'D', 'E']));
villageGraph.set('C', new Set(['A']));
villageGraph.set('D', new Set(['B', 'C', 'E']));
villageGraph.set('E', new Set(['B', 'D']));
villageGraph.set('F', new Set([]));

const undeliveredParcels = [
    new village.Parcel('B', 'C'),
    new village.Parcel('C', 'A'),
    new village.Parcel('C', 'B')
];

test('findRoute works as expected', () => {
    expect(routing.findRoute(villageGraph, 'A', 'E')).toStrictEqual(['B', 'E']);
    expect(routing.findRoute(villageGraph, 'E', 'A')).toStrictEqual(['B', 'A']);

    expect(routing.findRoute(villageGraph, 'C', 'E')).toStrictEqual(['A', 'B', 'E']);
    expect(routing.findRoute(villageGraph, 'E', 'C')).toStrictEqual(['B', 'A', 'C']);

    expect(routing.findRoute(villageGraph, 'A', 'D')).toStrictEqual(['B', 'D']);
    expect(routing.findRoute(villageGraph, 'D', 'A')).toStrictEqual(['B', 'A']);
});

test('findRoute returns null for unreachable nodes', () => {
    expect(routing.findRoute(villageGraph, 'A', 'F')).toBe(null);
});

test("findNextDestination works as expected", () => {
    let state1 = new village.State(villageGraph, 'B', undeliveredParcels);
    expect(routing.findNextRoute(state1)).toStrictEqual(['A', 'C']);

    let state2 = new village.State(villageGraph, 'C', undeliveredParcels);
    expect(routing.findNextRoute(state2)).toStrictEqual(['A']);

    let state3 = new village.State(villageGraph, 'A', undeliveredParcels); // No undelivered parcels at robot's current location
    expect(routing.findNextRoute(state3)).toStrictEqual(['B']);
});

test("findNextDestination skips unreachable undelivered parcels", () => {
    const parcels = Array.from(undeliveredParcels);
    parcels.unshift(new village.Parcel("F", "A"));
    parcels.unshift(new village.Parcel("F", "B"));
    let state = new village.State(villageGraph, 'A', parcels);

    expect(routing.findNextRoute(state)).toStrictEqual(['B']);
});

test("findNextDestination skips undelivered parcels with unreachable destinations", () => {
    const parcels = Array.from(undeliveredParcels);
    parcels.unshift(new village.Parcel("B", "F"));
    parcels.unshift(new village.Parcel("A", "F"));
    let state = new village.State(villageGraph, 'B', parcels);

    expect(routing.findNextRoute(state)).toStrictEqual(['A', 'C']);
});

test("findNextDestination returns null when there are no delivarable parcels", () => {
    const parcels = [
        new village.Parcel("F", "A"),
        new village.Parcel("B", "F"),
    ];
    let state = new village.State(villageGraph, 'B', parcels);

    expect(routing.findNextRoute(state)).toBe(null);
});

test("findNextDestination returns null when there are no parcels", () => {
    const parcels = [];
    let state = new village.State(villageGraph, 'B', parcels);

    expect(routing.findNextRoute(state)).toBe(null);
});

const randomness = require('./randomness');
const village = require('./village');

const villageGraph = new Map();
villageGraph.set('A', new Set(['B', 'C']));
villageGraph.set('B', new Set(['A']));
villageGraph.set('C', new Set(['A']));

const undeliveredParcels = [
    new village.Parcel('B', 'C'),
    new village.Parcel('C', 'A'),
    new village.Parcel('C', 'B')
];

test('State.move updates and removes delivered parcels', () => {
    let state = new village.State(villageGraph, 'A', undeliveredParcels);
    state = state.move("B");
    expect(state.location).toBe("B");
    expect(state.undeliveredParcels).toStrictEqual([
        new village.Parcel('B', 'C'),
        new village.Parcel('C', 'A'),
        new village.Parcel('C', 'B')
    ]);
    state = state.move("A");
    expect(state.location).toBe("A");
    expect(state.undeliveredParcels).toStrictEqual([
        new village.Parcel('A', 'C'), // Changed location
        new village.Parcel('C', 'A'),
        new village.Parcel('C', 'B')
    ]);
    state = state.move("C");
    expect(state.location).toBe("C");
    expect(state.undeliveredParcels).toStrictEqual([
        new village.Parcel('C', 'A'),
        new village.Parcel('C', 'B')
    ]);
    state = state.move("A");
    expect(state.location).toBe("A");
    expect(state.undeliveredParcels).toStrictEqual([
        new village.Parcel('A', 'B') // Changed location
    ]);
    state = state.move("B");
    expect(state.location).toBe("B");
    expect(state.undeliveredParcels).toStrictEqual([]);
});

test('State.move does nothing when move is impossible', () => {
    let originalState = new village.State(villageGraph, "B", undeliveredParcels);
    let newState1 = originalState.move("C");
    expect(newState1).toStrictEqual(originalState);
    let newState2 = originalState.move("B");
    expect(newState2).toStrictEqual(originalState);
});

test('Parcel.random works as expected', () => {
    const randomSpy = jest.spyOn(randomness, 'getRandomMapKey');
    randomSpy.mockReturnValueOnce('A');
    randomSpy.mockReturnValueOnce('C');
    let parcel1 = village.Parcel.random(villageGraph);
    expect(parcel1.location).toBe('A');
    expect(parcel1.destination).toBe('C');

    randomSpy.mockReturnValueOnce('B');
    randomSpy.mockReturnValueOnce('B'); // Should be discarded since destination == location
    randomSpy.mockReturnValueOnce('C');
    let parcel2 = village.Parcel.random(villageGraph);
    expect(parcel2.location).toBe('B');
    expect(parcel2.destination).toBe('C');

    randomSpy.mockRestore();
});

test('State.random works as expected', () => {
    const randomSpy = jest.spyOn(randomness, 'getRandomMapKey');
    const parcelRandomSpy = jest.spyOn(village.Parcel, 'random');
    randomSpy.mockReturnValueOnce('C');
    parcelRandomSpy.mockReturnValueOnce(undeliveredParcels[0]);
    parcelRandomSpy.mockReturnValueOnce(undeliveredParcels[1]);
    parcelRandomSpy.mockReturnValueOnce(undeliveredParcels[2]);

    let state = village.State.random(villageGraph, 3);
    expect(state.location).toBe('C');
    expect(state.undeliveredParcels).toStrictEqual(undeliveredParcels);

    randomSpy.mockRestore();
    parcelRandomSpy.mockRestore();
});

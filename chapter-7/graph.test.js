const graph = require('./graph');

test('buildGraph works as expected', () => {
    let edges = ['A-B', 'A-C', 'B-D'];
    let map = new Map();
    map.set("A", new Set(["B", "C"]));
    map.set("B", new Set(["A", "D"]));
    map.set("C", new Set(["A"]));
    map.set("D", new Set(["B"]));
    console.log(map);
    expect(graph.buildGraph(edges)).toStrictEqual(map);
});

test('buildGraph works as expected with the real data', () => {
    let map = new Map();
    map.set("Alice's House", new Set(["Bob's House", "Cabin", "Post Office"]));
    map.set("Bob's House", new Set(["Alice's House", "Town Hall"]));
    map.set("Daria's House", new Set(["Ernie's House", "Town Hall"]));
    map.set("Ernie's House", new Set(["Daria's House", "Grete's House"]));
    map.set("Grete's House", new Set(["Ernie's House", "Farm", "Shop"]));
    map.set("Marketplace", new Set(["Farm", "Post Office", "Shop", "Town Hall"]));
    map.set("Cabin", new Set(["Alice's House"]));
    map.set("Post Office", new Set(["Alice's House", "Marketplace"]));
    map.set("Farm", new Set(["Grete's House", "Marketplace"]));
    map.set("Shop", new Set(["Grete's House", "Marketplace", "Town Hall"]));
    map.set("Town Hall", new Set(["Bob's House", "Daria's House", "Marketplace", "Shop"]));
    console.log(map);
    expect(graph.buildGraph(graph.roads)).toStrictEqual(map);
});

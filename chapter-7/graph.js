const roads = [
    "Alice's House-Bob's House",
    "Alice's House-Cabin",
    "Alice's House-Post Office",
    "Bob's House-Town Hall",
    "Daria's House-Ernie's House",
    "Daria's House-Town Hall",
    "Ernie's House-Grete's House",
    "Grete's House-Farm",
    "Grete's House-Shop",
    "Marketplace-Farm",
    "Marketplace-Post Office",
    "Marketplace-Shop",
    "Marketplace-Town Hall",
    "Shop-Town Hall"
];

const buildGraph = function (edges) {
    let graph = new Map();
    for (let edge of edges) {
        let [start, end] = edge.split('-');
        addBidirectionalEdge(graph, start, end);
    }
    return graph;
}

const addBidirectionalEdge = function (graph, pointA, pointB) {
    addEdge(graph, pointA, pointB);
    addEdge(graph, pointB, pointA);
}

const addEdge = function (graph, start, end) {
    if (!graph.has(start)) {
        graph.set(start, new Set());
    }
    graph.get(start).add(end);
}

module.exports = { roads, buildGraph };

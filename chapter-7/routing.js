const findRoute = function (graph, location, destination) {
    return findRouteRecursively(graph, location, destination);
}

const findRouteRecursively = function (graph, location, destination, seenNodes = []) {
    if (location == destination) {
        return [];
    }
    if (seenNodes.includes(location)) {
        return null; // Not a valid route - includes backtracking;
    }
    seenNodes.push(location);
    let shortestRoute = null;
    for (let possibleLocation of graph.get(location)) {
        let route = findRouteRecursively(graph, possibleLocation, destination, seenNodes);
        if (route == null) {
            continue;
        }
        route.unshift(possibleLocation);
        if (shortestRoute == null || shortestRoute.length > route.length) {
            shortestRoute = route;
        }
    }
    return shortestRoute;
}

const findNextRoute = function (state) {
    if (state.undeliveredParcels.length != 0) {
        for (let parcel of state.undeliveredParcels) {
            if (parcel.location != state.location) {
                continue;
            }
            let route = findRoute(state.villageGraph, state.location, parcel.destination);
            if (route != null && route.length != 0) {
                return route;
            }
        }
        for (let parcel of state.undeliveredParcels) {
            let route = findRoute(state.villageGraph, state.location, parcel.location);
            if (route != null && route.length != 0) {
                return route;
            }
        }
    }
    return null;
}

module.exports = { findRoute, findNextRoute };

const randomness = require('./randomness');
const routing = require('./routing');

class RandomRobot {
    run(state) {
        let direction = randomness.getRandomMapKey(state.villageGraph);
        return { direction };
    }
}

class RouteFollowingRobot {
    constructor(route) {
        this.route = route;
    }
    run(state, memory) {
        if (isNullOrEmpty(memory)) {
            memory = this.route;
        }
        return { direction: memory[0], memory: memory.slice(1) };
    }
}

class RouteFindingRobot {
    run(state, memory) {
        if (isNullOrEmpty(memory)) {
            memory = routing.findNextRoute(state);
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

const runRobot = function (state, robot, maxActions = 1000) {
    let actions = 0, route = [], memory = [];
    while (actions++ < maxActions && state.undeliveredParcels.length != 0) {
        let action = robot.run(state, memory);
        if (action.direction == null) {
            return route;
        }
        ({ state, memory } = followAction(state, action));
        if (action.direction == state.location) {
            route.push(action.direction);
        }
    }
    return route;
}

const followAction = function (state, action) {
    return { memory: action.memory, state: state.move(action.direction) };
}

module.exports = { RandomRobot, RouteFollowingRobot, RouteFindingRobot, runRobot };

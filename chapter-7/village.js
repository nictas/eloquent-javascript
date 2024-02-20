const randomness = require('./randomness');

class State {
    constructor(villageGraph, location, undeliveredParcels) {
        this.villageGraph = villageGraph;
        this.location = location;
        this.undeliveredParcels = undeliveredParcels;
    }
    move(destination) {
        if (!this.villageGraph.get(this.location).has(destination)) {
            return this; // Move impossible - location unchanged;
        }
        let parcels = this.undeliveredParcels.map(parcel => {
            if (parcel.location === this.location) {
                return new Parcel(destination, parcel.destination);
            }
            return parcel;
        }).filter(parcel => parcel.location != parcel.destination);
        return new State(this.villageGraph, destination, parcels);
    }
    static random(villageGraph, numberOfParcels = 5) {
        let location = randomness.getRandomMapKey(villageGraph);
        let undeliveredParcels = [];
        for (let i = 0; i < numberOfParcels; i++) {
            undeliveredParcels.push(Parcel.random(villageGraph));
        }
        return new State(villageGraph, location, undeliveredParcels);
    }
}

class Parcel {
    constructor(location, destination) {
        this.location = location;
        this.destination = destination;
    }
    static random(villageGraph) {
        let location = randomness.getRandomMapKey(villageGraph);
        let destination;
        do {
            destination = randomness.getRandomMapKey(villageGraph);
        } while (destination == location);
        return new Parcel(location, destination);
    }
}

module.exports = { State, Parcel };

if (require.main === module) {
    // const villageGraph = new Map();
    // villageGraph.set('A', new Set(['B', 'C']));
    // villageGraph.set('B', new Set(['A']));
    // villageGraph.set('C', new Set(['A']));
    // villageGraph.set('D', new Set());
    // const undeliveredParcels = [
    //     new Parcel('A', 'D'), // Cannot be delivered
    //     new Parcel('B', 'C'),
    //     new Parcel('B', 'D'), // Cannot be delivered
    //     new Parcel('C', 'A'),
    //     new Parcel('C', 'D'), // Cannot be delivered
    //     new Parcel('C', 'B')
    // ];
    // let state = new State(villageGraph, 'A', undeliveredParcels);
    // let robot = new RouteFindingRobot();

    // let memory = [];
    // let route = [];
    // while (true) {
    //     let action = robot.run(state, memory);
    //     if (action.direction == null) {
    //         break;
    //     }
    //     route.push(action.direction);
    //     state = state.move(action.direction);
    //     memory = action.memory;
    // }
    // console.log(`Final route: ${route}`);
}

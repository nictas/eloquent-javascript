const journal = [];

const addEntry = function (events, squirrel) {
    journal.push({ events, squirrel }); // Shorthand for: { events: events, squirrel: squirrel }
}

const computeObservations = function () {
    let events = computeEvents();
    let observations = initializeObservations(events);
    for (let event of events) {
        for (let entry of journal) {
            if (entry.events.includes(event)) {
                if (entry.squirrel) {
                    observations[event][3]++;
                } else {
                    observations[event][2]++;
                }
            } else {
                if (entry.squirrel) {
                    observations[event][1]++;
                } else {
                    observations[event][0]++;
                }
            }
        }
    }
    return observations;
}

const initializeObservations = function (events) {
    let observations = {};
    for (let event of events) {
        /*
          [0]: no event, no squirrel
          [1]: no event, squirrel
          [2]: event, no squirrel
          [3]: event, squirrel
        */
        observations[event] = [0, 0, 0, 0];
    }
    return observations;
}

const computeEvents = function () {
    let events = [];
    for (let entry of journal) {
        for (let event of entry.events) {
            if (!events.includes(event)) {
                events.push(event);
            }
        }
    }
    return events.sort();
}

module.exports = { addEntry, computeObservations, computeEvents };

if (require.main === module) {
    // TODO
}

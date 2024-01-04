const journal = [];

const addEntry = function (events, squirrel) {
    journal.push({ events, squirrel }); // Shorthand for: { events: events, squirrel: squirrel }
}

const computeCorrelations = function () {
    let observations = computeObservations();
    let correlations = {};
    for (let event of Object.keys(observations)) {
        correlations[event] = roundWithPrecision(computePhi(observations[event]), 4);
    }
    return correlations;
}

const roundWithPrecision = function (number, precision) {
    let multiplier = Math.pow(10, precision);
    return Math.ceil(number * multiplier) / multiplier;
}

const computePhi = function (observations) {
    return (observations[3] * observations[0] - observations[2] * observations[1]) /
        Math.sqrt((observations[2] + observations[3]) *
            (observations[0] + observations[1]) *
            (observations[0] + observations[2]) *
            (observations[1] + observations[3]));
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

module.exports = { addEntry, computeCorrelations, computeObservations, computeEvents };

if (require.main === module) {
    console.log("Look at the test. ^^");
}

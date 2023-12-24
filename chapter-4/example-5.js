const journal = [];

const addEntry = function (events, squirrel) {
    journal.push({ events, squirrel }); // Shorthand for: { events: events, squirrel: squirrel }
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

module.exports = { addEntry, computeEvents };

if (require.main === module) {
    // TODO
}

var journal = [];

function addEntry(events, didITurnIntoASquirrel ) {
  journal.push({
    events: events,
    squirrel: didITurnIntoASquirrel
  });
}

addEntry(["work", "touched tree", "pizza", "running"], false)

console.log(journal);

// shoppingListFunctions.js

const readline = require('readline');

let einkaufsliste = [];

function printList(showNumbers = false) {
    console.log("Einkaufsliste:");
    einkaufsliste.forEach((item, index) => {
        const number = showNumbers ? index + 1 + ". " : "";
        console.log(number + "[" + (item.done ? 'x' : ' ') + "] " + item.title + " - Anzahl: " + item.count + " - Geschäft: " + item.store);
    });
    console.log("--------------------------");
}

function addToList(item, count = 1, store = "Unbekannt") {
    einkaufsliste.push({ title: item, count, done: false, store });
    console.log(item + " wurde zur Einkaufsliste hinzugefügt.");
    printList();
}

function toggleDoneStatus(welcherItem) {
    if (einkaufsliste[welcherItem]) {
        einkaufsliste[welcherItem].done = !einkaufsliste[welcherItem].done;
        console.log(einkaufsliste[welcherItem].title + " wurde als " + (einkaufsliste[welcherItem].done ? 'erledigt' : 'nicht erledigt') + " markiert.");
        printList(true);
    } else {
        console.log("Ungültiger Index.");
    }
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

module.exports = { printList, addToList, toggleDoneStatus };
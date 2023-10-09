// shoppingList.js

const commander = require('commander');
const { printList, addToList, toggleDoneStatus } = require('./shoppingListFunctions');

commander
    .version('1.0.0')
    .description('Eine Einkaufslistenanwendung im Terminal');

commander
    .command('add <item> [count] [store]')
    .description('Fügt ein neues Produkt zur Einkaufsliste hinzu')
    .action((item, count, store) => {
        addToList(item, count, store);
    });

commander
    .command('list')
    .description('Zeigt die Einkaufsliste an')
    .action(() => {
        printList();
    });

commander
    .command('view')
    .description('Zeigt die Einkaufsliste an und ermöglicht das Abhaken von Produkten')
    .action(() => {
        printList(true);
        commander.prompt('Welches Produkt möchten Sie abhaken (Nummer)? ', (answer) => {
            toggleDoneStatus(answer - 1);
        });
    });

commander.parse(process.argv);





// ╔═══════════════════════════════════════════════════════════════════════════════════╗
// ║ Befehl: node shoppingList.js add <item> [count] [store]                           ║
// ║ Beschreibung: Fügt ein neues Produkt zur Einkaufsliste hinzu.                     ║
// ║ Beispiel: node shoppingList.js add Brot 2 Bäckerei                                ║     
// ╠═══════════════════════════════════════════════════════════════════════════════════╣
// ║ Befehl: node shoppingList.js list                                                 ║
// ║ Beschreibung: Zeigt die Einkaufsliste an.                                         ║
// ║ Beispiel: node shoppingList.js list                                               ║
// ╠═══════════════════════════════════════════════════════════════════════════════════╣
// ║ Befehl: node shoppingList.js view                                                 ║
// ║ Beschreibung: Zeigt die Einkaufsliste an und ermöglicht das Abhaken von Produkten.║
// ║ Beispiel: node shoppingList.js view                                               ║
// ╚═══════════════════════════════════════════════════════════════════════════════════╝
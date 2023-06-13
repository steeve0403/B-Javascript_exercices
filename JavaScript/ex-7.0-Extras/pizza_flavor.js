const readlineSync = require("readline-sync");

const fs = require('fs');

const flavorsFile = 'pizza-flavors.json';
let pizzaFlavors = [];

function loadPizzaFlavors() {
  try {
    const data = fs.readFileSync(flavorsFile, 'utf8');
    pizzaFlavors = JSON.parse(data);
  } catch (err) {
    pizzaFlavors = [];
  }
}

function savePizzaFlavors() {
  const data = JSON.stringify(pizzaFlavors);
  fs.writeFileSync(flavorsFile, data, 'utf8');
}

function menuMain() {
  console.log('\nHello! Welcome to the Pizza Flavors Manager.\n');
  console.log('Please choose your actions:');
  console.log('1 - List all the pizza flavors');
  console.log('2 - Add a new pizza flavor');
  console.log('3 - Remove a pizza flavor');
  console.log('4 - Exit this program');
}

function listPizzaFlavors() {
  if (pizzaFlavors.length === 0) {
    console.log('\nThere are no pizza flavors in the list.');
  } else {
    console.log('Pizza flavors:\n');
    pizzaFlavors.forEach((flavor, index) => {
      console.log(`${index + 1}. ${flavor}`);
    });
  }
}
1
function addNewPizzaFlavor() {
  const flavor = readlineSync.question('\nEnter a new pizza flavor: ');
  pizzaFlavors.push(flavor);
  savePizzaFlavors();
  console.log('\nPizza flavor added successfully!');
}

function removePizzaFlavor() {
  const index = readlineSync.questionInt('\nEnter the number of the pizza flavor to remove: ');
  if (index >= 1 && index <= pizzaFlavors.length) {
    const removedFlavor = pizzaFlavors.splice(index - 1, 1)[0];
    savePizzaFlavors();
    console.log(`\nPizza flavor "${removedFlavor}" removed successfully!`);
  } else {
    console.log('\nInvalid pizza flavor number.');
  }
}

function main() {
  loadPizzaFlavors();

  let outputProgram = false;

  while (!outputProgram) {
    menuMain();
    const choice = readlineSync.question('Enter your action\'s number: ');

    switch (choice) {
      case '1':
        listPizzaFlavors();
        break;
      case '2':
        addNewPizzaFlavor();
        break;
      case '3':
        removePizzaFlavor();
        break;
      case '4':
        outputProgram = true;
        break;
      default:
        console.log('\nInvalid choice. Please try again.');
    }
  }

  console.log('\nThank you for using the Pizza Flavors Manager!');
}

main();
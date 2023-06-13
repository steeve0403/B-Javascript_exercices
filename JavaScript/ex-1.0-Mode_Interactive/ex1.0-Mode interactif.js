const readlineSync = require("readline-sync");

//Exercice 1.1

let age = 26;

    console.log(age)

//Exercice 1.2

let name = "Gerard";
let firstName = "Lambert";
let city = "Paris";

    console.log('Your name is ' + name +" "+ firstName + ' and you live in ' + city +'.');

// Exercice 1.3

let userName = readlineSync.question("what's your name?");

    console.log("Hello " + userName);

// Exercice 1.4

name = readlineSync.question("what's your name?");
firstName = readlineSync.question("What's your first name?");
city = readlineSync.question("Where do you live?");

    console.log("Hello " + name +" "+ firstName + " who live at " + city);

//Exercice 1.5 

let firstnum = readlineSync.question("Give a decimal number");
let secondnum = readlineSync.question("Give a other decimal number");
let multiply = Math.trunc(firstnum) * secondnum;

    console.log("here is the multiplication of your two numbers, one of which will keep only its whole part: " + multiply);

//Exercice 1.6

firstnum = readlineSync.question("Give a number");
secondnum = readlineSync.question("Give a other number");

let rest = firstnum % secondnum;

    console.log("Here’s the rest of the division you didn’t ask for: " + rest);





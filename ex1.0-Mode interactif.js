const readlineSync = require("readline-sync");

//Exemple

/*let userName = readlineSync.question('Can you give me your name please?');
console.log("Hello " + userName);

let age = 23;

let sisterAge = age + 11;

age += 12; // age = age + 12;

console.log(age);

let name = "Jean";
let nameSister = "Emma";
console.log("My name is " + name);

let userName = readlineSync.question("What's your name?");
console.log("He's called " + userName);

let htmlBadges = new Number(readlineSync.question('How many HTML badges do you have?'));

let cssBadges = new Number(readlineSync.question('How many CSS badges do you have?'));

let totalBadges = htmlBadges + cssBadges;

console.log('Woaw, you have ' + totalBadges + "!");
*/ 
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

//Exercice finish



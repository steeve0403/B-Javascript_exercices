const readlineSync = require("readline-sync");

/*
let size = 185;
let weight = 80;

if ((size >= 150) || (weight >= 45)) {
  console.log("You probably are and adult");
}

 let size = 185;
 let weight = 80;

if ((size >= 150) || (weight >= 45)) {
  console.log("You probably are an adult");
} else {
  console.log("You probably are a child");
}

let size = 185;
let weight = 80;

if ((size >= 150) || (weight >= 45)) {
  console.log("You probably are an adult");
} else if ((size >= 50) || (weight >= 10)) {
  console.log("You probably are a child");
} else {
  console.log("You probably are a baby");
}

//Exercice 2.1

let age = readlineSync.question("How old are you?");

if(age >= 18) {
    console.log("You are an adult!");
}
else {
    console.log("You are a child!");
}

//Exercice 2.2

let minaAge = readlineSync.question("Enter an minimum age");
let maxAge = readlineSync.question("Enter an maximum age");


if(minaAge >= maxAge) {
    console.log ("Are you stupid?");
}

else { console.log(currentAge = readlineSync.question("Enter your age"));
    if((currentAge >= minaAge) && (currentAge <= maxAge)) {
        console.log(currentAge);
    }
}

//Exercice 2.3

for (let number = 1; number <= 100; number++){
    if(number % 2 === 0)
        console.log(number);
}

let i = 0;
while (i <= 100){
    if (i %2 === 0)
        console.log(i);
        i++;
}

// Exercice 2.4

for (let number = 1; number <= 100; number++) {
    if(number % 2 === 0){
        const RestDivision = number / 2;
        console.log("The number: " + number + " divised by 2 egal: " + RestDivision);
    }
    else {
        const ProductMultiply = number * 3;
        console.log("The number: " + number + " multiplied by 3 egal: " + ProductMultiply);
    }
}

// Exercice 2.5

let favoriteNumber;

do{
    favoriteNumber = parseInt(readlineSync.question("What is your favorite number ?"));
    if(favoriteNumber !== 42)
        console.log("Are you sure ?")
} while (favoriteNumber !== 42);

console.log("You are the best in the world!");

// Exercice 2.6

let number = parseInt(readlineSync.question("Choice a number between 1 and 7: "));

let day; 

switch (number){
    case 1 : 
        day = "Monday";
        break;
    case 2 : 
        day = "Thursday";
        break;
    case 3 : 
        day = "Wednesday";
        break;
    case 4 : 
        day = "Thuessday";
        break;
    case 5 : 
        day = "Friday";
        break;
    case 6 : 
        day = "Saturday";
        break;
    case 7 : 
        day = "Sunday";
        break;
    default :
        console.log("Are you stupid? I said a number between 1 and 7!");
}
console.log("the day corresponding to the number is: " + day );*/

// Exercice 2.7

const n = readlineSync.question("Choice a number: ");
let total = 0;

for (let i = 0; i < n; i++) {
    const number = parseInt(readlineSync.question("Choice numbers again: "));
    total += number;
}

console.log("The sum of the numbers is => " + total)
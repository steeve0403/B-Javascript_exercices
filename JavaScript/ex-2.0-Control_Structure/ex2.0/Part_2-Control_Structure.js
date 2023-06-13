const readlineSync = require("readline-sync");


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
console.log("the day corresponding to the number is: " + day );


// Exercice 2.7

const n = readlineSync.question("Choice a number: ");
let total = 0;

for (let i = 0; i < n; i++) {
    const number = parseInt(readlineSync.question("Choice numbers again: "));
    total += number;
}

console.log("The sum of the numbers is => " + total)
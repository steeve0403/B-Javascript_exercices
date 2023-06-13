const readlineSync = require("readline-sync");

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
    //minaAge = readlineSync.question("Enter an minimum age");
    //maxAge = readlineSync.question("Enter an maximum age");
}

else { console.log(currentAge = readlineSync.question("Enter your age"));
    if((currentAge >= minaAge) && (currentAge <= maxAge)) {
        console.log(currentAge);
    }
}


//Exercice 2.3

    //Part 1:

for (let number = 1; number <= 100; number++){
    if(number % 2 === 0)
        console.log(number);
}
    //Part 2:

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

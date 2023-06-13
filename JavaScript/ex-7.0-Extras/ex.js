const readlineSync = require("readline-sync");


//Exercice 7.1

//let attemps = 0;
let valueToFind = Math.floor(Math.random()*(100 + 1));
console.log(valueToFind);

while (true){
        choiceUser = readlineSync.question("guess the number generate randomly between 1 to 100: ");
    if (choiceUser < valueToFind){
        console.log("Your number is too small");
    } else if (choiceUser > valueToFind){
        console.log("Your number is too big");
    }else{
        console.log("You're won!");
        break;
    }
}

//Exercice 7.2


function productFibonacci(Number){
    let fibonacci = new Array();
        fibonacci[0] = 0;
        fibonacci[1] = 1;
for ( let i = 2; i < Number; i++){
fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
}
return fibonacci;
}
const n = readlineSync.question("Give a number for generate a suite of Fibonacci ");
let seriesFibonacci = productFibonacci(n);
console.log(seriesFibonacci);

//Exercice 7.3

function divisors(d){
    let listDiviseur = new Array();
    for (let i = 2; i < d; i++){
        if(d % i === 0){
            listDiviseur.push(i);
        }
        /*else{
            console.log("It's a prime number");
        }*/
    }
return listDiviseur;
}
const div = readlineSync.question("Choose a number you would like to know its dividers ");
 let seriesDivisors = divisors(div);
console.log(seriesDivisors);

//Exercice 7.4


//Exercice 7.5

function altSort(arr){
    let arrayL = arr.length;
    let smallNbr = arr[0];
        for(i = 0; i < arrayL; i++){
            if(arr[i] < smallNbr){
                smallNbr = arr[i];
            }
        }
        return smallNbr;
}

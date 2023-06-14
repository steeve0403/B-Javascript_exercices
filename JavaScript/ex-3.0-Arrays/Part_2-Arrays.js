const readlineSync = require("readline-sync");

let arrayA = [1, 2, 3, 4, 5];
let arrayB = [100, 101, 102];
let sumA = 0;
let sumB = 0;

//Exercice 3.2

function numAverage(arrayA) {
    let sumAL = arrayA.length;
    let item = 0, i;
    for (i = 0; i < sumAL; i++){
      item += Number(arrayA[i]);
    }
    return item /sumAL;
}
function numAverage(arrayB){
    let sumBL = arrayB.length;
    let item = 0, i;
    for (i = 0; i < sumBL; i++){
        item += Number(arrayB[i]);
    }
    return item / sumBL;
}
console.log(numAverage(arrayA));
console.log(numAverage(arrayB));

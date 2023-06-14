const readlineSync = require("readline-sync");

let arrayA = [1, 2, 3, 4, 5];
let arrayB = [100, 101, 102];
let sumA = 0;
let sumB = 0;

//Exercice 3.3

    //Exercice 3.3.1 => simple copie

let arrayCopieA = arrayA; 
console.log(arrayCopieA);


    //Exercice 3.3.2 => for

let arrayCopieB = new Array();

for (let sumB = 0; sumB < arrayA.length; sumB++){
    arrayCopieB[sumB] = arrayA[sumB];
}
console.log(arrayCopieB);


   //Exercice 3.2.3 => push()

   let arrayCopieC = new Array();


   for ( i = 0; i < arrayA.length; i++){
       arrayCopieC.push(arrayA[i]);
   }
   console.log(arrayCopieC);
   
   
   //Exercice 3.4
   
   console.log("Min: ", Math.min.apply(null, arrayA));
   console.log("Max: ", Math.max.apply(null, arrayA));
   
   console.log("Min: ", Math.min.apply(null, arrayB));
   console.log("Max: ", Math.max.apply(null, arrayB));
   
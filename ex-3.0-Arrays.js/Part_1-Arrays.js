const readlineSync = require("readline-sync");

let arrayA = [1, 2, 3, 4, 5];
let arrayB = [100, 101, 102];
let sumA = 0;
let sumB = 0;

//Exercice 3.1

    //Exercice 3.1.1 => reduce()

let resultA = arrayA.reduce((a, b)=> {
    return a + b;    
});
console.log(resultA);

let resultB =  arrayB.reduce((a, b)=>{
    return a + b;
});
console.log(resultB);


    //Exercice 3.1.2 => forEach

arrayA.forEach(item =>{
    sumA += item;
});
arrayB.forEach(item =>{
    sumB += item;
})
console.log(sumA, sumB);


    //Exercice 3.1.2 => map()

arrayA.map(x => sumA += x);
console.log(sumA);

arrayB.map(x => sumB += x);
console.log(sumB);


    //Exercice 3.1.3 => for + length()


for ( i = 0; i < arrayA.length; i++){
    sumA += arrayA[i];
}
for ( i = 0; i < arrayB.length; i++){
    sumB += arrayB[i];
}
console.log(sumA, sumB);


    //Exercice 3.1.4 => for of

for (let x of arrayA){
    sumA += x;
}
for (let x of arrayB){
    sumB += x;
}
console.log(sumA, sumB);



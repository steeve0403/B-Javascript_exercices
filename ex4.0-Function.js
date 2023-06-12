const readlineSync = require("readline-sync");

//Exercice 4.1


/**
 * calculation of the area of a rectangle
 * @param {Number} width
 * @param {Number} length
 * @returns {Number} product of width of length
 */

let width = readlineSync.question("What's the width of the rectangle? ");
let length = readlineSync.question("What's the length of the rectangle? ");

function calcSurface(width, length) {
return width * length;
}
console.log("The surface of your rectangle is equal to "+calcSurface(width, length)+" cm²");


//Exercice 4.2


/**
 * Gives a random number in 1 and 10
 * @param {Number} minimum
 * @param {Number} maximum
 */

function rand10() {
  return Math.floor(Math.random() * 10) + 1;
}


//Exercice 4.3

/**
 * returns an array of n numbers between 1 and 10.
 * @param {Number} n
 */


function multiRand(n) {
  const result = [];
  for (let i = 0; i < n; i++) {
      result.push(rand10());
  }
  return result;
  }
  
  let n = readlineSync.questionInt('Enter the number of random numbers to generate: ');
  
  let randNumbers = multiRand(n);
  
  console.log('Random numbers:' + randNumbers);

//Exercice 4.4

  //Exercice 4.4.1



//Exercice 4.5



function calcDistance(){
function sqr(a) {
  return a*a;
}
function Distance(x1, y1, x2, y2) {
  return Math.sqrt(sqr(y2 - y1) + sqr(x2 - x1));
}
}
console.log("Calculating the distance between two points (1,1)-(2,2): " +Distance(1, 1, 2, 2));
console.log("Calculating the distance between two points (1,1)-(2,2): " +Distance(1, 1, 3, 1));
console.log("Calculating the distance between two points (1,1)-(2,2): " +Distance(4, 1, 1, 1));
console.log("Calculating the distance between two points (1,1)-(2,2): " +Distance(-2, 2, 2, -2));


//Exercice 4.6

  //Exercice 4.6.1

/**
 * start/end : will remember the time the program starts/end its execution
 * 0 = 1 / basic condition
 * @param {Number} a continue to find the factorial of this number by calling the same factorial function again and again until we reached 0.
 */
let start, end;
start = new Date().getTime();

for (var i = 0; i < 10000; i++)
    recursionFactorial(1000)

function factirialA(a){
    if (a === 0)
        return 1;
    else
        return a * recursionFactorial( a - 1 );
}

end = new Date().getTime();

console.log(end);

  //Exercice 4.6.2
/**
 * If nbr = 0 the factorial will return 1
 * @param {Number} b 
 * @returns call the recursive procedure again
 */
  function factorialB(b) {
  
  if (b === 0)
  {
     return 1;
  }
  
  return b * fact(b-1);
}
console.log(fact(rand10()));

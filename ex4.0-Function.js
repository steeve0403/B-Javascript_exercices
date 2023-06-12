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
  let = average([5, 1, 1, 1, 5]);
  function average(arr) {
      var b = arr.length,
          c = 0, i;
      for (i = 0; i < b; i++){
        c += Number(arr[i]);
      }
      return c/b;
    }
    
  console.log(average([5, 1, 1, 1, 5]));

    //Exercice 4.4.2
  
    function min(arr){
      let arrayT = arr.length;
      minimum = arr[arrayT-1];
      while (arrayT--){
          if(arr[arrayT] < minimum){
              minimum = arr[arrayT]
          }
      }
      return minimum;
  };
  let minArray = [1, 5, 6, 2, 3];
  let mN = min(minArray);
  console.log(mN)

    //Exercice 4.4.3
  
    function max(arr){
      let arrayT = arr.length;
      maximum = arr[arrayT-1];
      while (arrayT--){
          if(arr[arrayT] > maximum){
              maximum = arr[arrayT]
          }
      }
              return maximum;
  };
  let maxArray = [1, 5, 6, 2, 3];
  let mX = max(maxArray);
  console.log(mX)

//Exercice 4.4.4
//A finir
function multiMath() {
  function multiRand(n)
  function average(arr)
  function min(arr)
  function max(arr)
}

//Exercice 4.5

/**
 * function for square root
 * @param {Square root} a
 * @returns value of square root
 * function calcDistance between two points in a 2D
 * @param {Points in 2d coordinate system} (x,x, y,y)
 * @returns The value of the distance between the two points
 */
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

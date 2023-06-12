const readlineSync = require("readline-sync");


//Exercice 4.1
/**
 * calculate the area of a rectangle according to numeric data entered
 * @param {Number} width first numeric data entered for calculate the area
 * @param {Number} length second numeric data entered for calculate the area
 * @returns value product of width by length
 */

function calcSurface(width, length){
    return width * length;
}

const width = readlineSync.question("What's the width of the rectangle? ");
const length = readlineSync.question("What's the length of the rectangle? ");
const soluceSurfaceRectangle = calcSurface(width, length);
console.log("The surface of your rectangle is equal to "+ soluceSurfaceRectangle +" cm²")


//Exercice 4.2 
/**
 * generates a random number in 1 and 10
 * @param {numeric} max value maximum entered between 1 to 10 ()
 * @returns returns a random value according to a maximum value assigned in parameter
 */

function rand10(max){
    return Math.floor(Math.random()*(max + 1))
}

const soluceRand10 = rand10(10);
console.log(soluceRand10);


//Exercice 4.3

    //Part 1:
/**
 * returns an array of n numbers between 1 and 10.
 * @param {Function} n Reusing the function rand(max) for generate a random n numbers
 * @returns an array of n numbers between 1 and 10
 */

function multiRand(n){
    const result = new Array();
    for (let a = 0; a < n; a++){
        result.push(rand10(10));
    }
    return result;
}

const soluceMultiRand = multiRand(rand10(10));
console.log(soluceMultiRand);


    //Part 2:

const guess = readlineSync.question("Enter the number of random numbers to generate: ");
const soluceMultiRandGuess = multiRand(guess);
console.log(soluceMultiRandGuess);


//Exercice 4.4

    //Part 1: 
/**
 * Gives the average of a table
 * @param {Array} arr element in an array
 * @returns the quotient of the sum of the elements by the length of the elements
 */

function average(arr){
    let arrayL = arr.length,
        sum = 0,
        i = 0;
    while (i < arrayL){
        sum = sum + arr[i++];
    }
    return sum / arrayL;
}

const resultArray = average([1, 5, 2, 3, 7]);
console.log(resultArray);

    //Part 2: 

/**
 * Gives the miminum element of a table
 * @param {Array} arr element in an array
 * Loop that compares the previous element  
 * @returns 
 */

function min(arr){
    let arrayLMin = arr.length,
        numberMin = arr[arrayLMin-1];
    while (arrayLMin--){
        if(arr[arrayLMin] < [numberMin]){
            numberMin = arr[arrayLMin]
        }
    }
    return numberMin;
}

const resultArrayMin = min([1, 5, 2, 3, 7]);
console.log(resultArrayMin);

    //Part 3:

/**
 * Gives the miminum element of a table
 * @param {Array} arr element in an array
 * Loop that compares the previous element  
 * @returns 
 */

function max(arr){
    let arrayLMax = arr.length,
        numberMax = arr[arrayLMax-1];
    while (arrayLMax--){
        if(arr[arrayLMax] > [numberMax]){
            numberMax = arr[arrayLMax]
        }
    }
    return numberMax;
}

const resultArrayMax = max([1, 5, 2, 3, 7]);
console.log(resultArrayMax);

    //Part 4:


    
const user = readlineSync.question("Enter the number of multiple function numbers to generate: ");

const resultUser = multiRand(user);
const resultArrayUserAverage = average(resultUser);
const resultArrayUserMin = min(resultUser);
const resultArrayUserMax = max(resultUser);

console.log("Here are your numbers: "+resultUser+" ,its average: "+resultArrayUserAverage+" ,its minimum average: "+resultArrayUserMin+" ,and its maximum average: "+resultArrayMax);

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
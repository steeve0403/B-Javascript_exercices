const readlineSync = require("readline-sync");


function rand10() {
    return Math.floor(Math.random() * 10) + 1;
  }

//
function multiRand(n) {
    const result = [];
    for (let i = 0; i < n; i++) {
        result.push(rand10());
    }
    return result;
    }
    
    const n = readlineSync.questionInt('Enter the number of random numbers to generate: ');
    const randNumbers = multiRand(n);
    console.log('Random numbers:' + randNumbers);

//
function average(arr) {
    let b = arr.length,
        c = 0, i;
    for (i = 0; i < b; i++){
      c += Number(arr[i]);
    }
    return c/b;
  }
  
console.log(average([5, 1, 1, 1, 5]));

//
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
   
//
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
//
function multiMath() {
    function multiRand(n)
    function average(arr)
    function min(arr)
    function max(arr)
}


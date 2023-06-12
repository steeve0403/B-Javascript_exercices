

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

   function min(arr) {
    return Math.min(average(arr));
   }
console.log(average([5, 1, 1, 1, 5]))
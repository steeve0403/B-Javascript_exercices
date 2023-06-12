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
  
console.log(randNumbers);
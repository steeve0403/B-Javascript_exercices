/**
 * Generates a random integer between 1 and 10 (inclusive).
 * @returns {number} A random integer between 1 and 10.
 */
function rand10() {
    return Math.floor(Math.random() * 10) + 1;
}

/**
 * Generates an array of n random numbers between 1 and 10 (inclusive).
 * @param {number} n - The number of random numbers to generate.
 * @returns {number[]} An array of n random numbers between 1 and 10.
 */
function multiRand(n) {
const result = [];
for (let i = 0; i < n; i++) {
    result.push(rand10());
}
return result;
}

const readlineSync = require('readline-sync');
const n = readlineSync.questionInt('Enter the number of random numbers to generate: ');

const randomNumbers = multiRand(n);

console.log('Random numbers:', randomNumbers);
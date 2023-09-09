// 

const scanner = require('readline-sync')

let a = parseInt((scanner.question("Enter a number : ")))
let b = parseInt((scanner.question("Enter a number : ")))
let sum = a+b;
console.log(`The summ of ${a} and ${b} is ${sum}`);
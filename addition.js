
// sum of 2 values using predefined values
// let a = 10;
// let b = 20;
// let sum = a+b;
// console.log(`Sum of ${a} and ${b} is ${sum}`);

// sum of  2 values using user given values

const scanner = require('readline-sync')

let a = parseInt(scanner.question("Enter the first number"))
let b = parseInt(scanner.question("Enter the second number"))

let sum = a+b;
console.log(`Sum of ${a} and ${b} is ${sum}`)
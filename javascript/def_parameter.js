// default parameter means that the default value that is passed as the argument of a function

const scanner = require('readline-sync')
function add(a=10,b=20){
    let sum = a+b;
    console.log(`The sum of the sum of the value of ${a} and  ${b} is ${sum}`);
}
let a = parseInt(scanner.question("Enter the first number : "))
let b = parseInt(scanner.question("Enter the second number : "))

let addtion = add(a ,b)

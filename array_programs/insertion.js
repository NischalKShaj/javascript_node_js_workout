 const prompt = require('readline-sync')

 let size = parseInt(prompt.question("Enter the limit of the array "))
let arr = []
console.log("Enter the array values")
for(let i=0 ; i< size ;i++){
    arr[i] =  parseInt(prompt.question(" "))
}

console.log(arr);
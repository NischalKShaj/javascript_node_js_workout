// there are mainly 4 types of high order 

// foreach : it is more efficient in iteration and it provide precise and acurate outputs

const scanner = require('readline-sync')

let arr = [];
let i;
let size = parseInt(scanner.question("Enter the limit : "))

console.log("Enter the array values");
for(i = 0;i < size ;i++){
    arr[i]=parseInt(scanner.question(' '))

    
}
arr.forEach((index)=>{
    console.log(index);
})

// map is used for getting a new array as output after processing the new modified values

let square = arr.map((index)=>{
    return index * index
})
console.log(square);

// filter is used to filter the specific values from the array that is like even etc

let even = arr.filter((index)=>{

    return index %2 === 0;
})

console.log(even);

// reduce is used to reduce the array into a single value

let sum = arr.reduce((index,next_index)=>{
    return index+next_index
})
console.log(sum);

// function factory is a high order function which returns a new function

// function sumAv(a,b){
//     let sum = a+b;
//     let av = sum/2;
//     return {sum :sum ,av:av};
// }
// let add = sumAv(2,3)
// console.log(add.sum)
// console.log(add.av)

// let arr1 =[1,2,3,4,5]
// let arr =[6,7,8,9,10]

// let arr3 = [...arr1,...arr]
// console.log(arr3);

// let any = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         let a = console.log('hai');
//         reject(a)
//     },2000)
// }).then((resolve)=>{
//     console.log("resolved");

// }).catch((error)=>{
//     console.log(error);
// })\

// factory function and function factory

// function sum(num,num2){
//     let add = num+num2
//     return function(greet){
//         console.log(`The sum is ${add} ${greet}`);
//     }
// }
// let result = sum(2,3)
// result("true")

let i=0;
let interval = setInterval(()=>{
    i++;
    console.log(i);
    if(i>=5){
        clearInterval(interval)
    }
},1000)

let arr = [1,2,3,4,5]
let max = Math.max(...arr)
console.log(max);

// 



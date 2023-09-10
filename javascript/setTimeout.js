// set timeout is an asyncrouous function which will be executed after the syncronous operations

let a =    10;
let b = 30;
function sum(a, b){
    let add = a + b
    setTimeout(()=>{
        console.log(`the sum of ${a} and ${b} is ${add}`);
    },3000)

}
sum(a, b)
console.log("The function is called first...!");
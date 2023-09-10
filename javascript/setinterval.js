// set interval is an asyncronous function which will be invoked during that time period

let time = 1000
let interval = setInterval(()=>{
    console.log(`I will be invoked during every ${time} ms`);
},time)



// to clear that set interval we can use clearinterval

setTimeout(()=>{
    clearInterval(interval)
    console.log("the created interval is now destroyed");
},5000)

console.log("This is the first statement to be executed");
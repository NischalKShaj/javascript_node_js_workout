// 2 type callback are there 1 sync callback and next one is async

// 1. sync

function demo(callback){

    console.log("inside an sync function.");
    callback()
}
function test(){
    console.log("calling the callback function...");
}
demo(test)

// 2.async

function demo1(callback_test){
    setTimeout(()=>{
        console.log("inside the async function");
        callback_test()
    },2000)
}
function testing(){
    console.log("testing the  callback...");
}
demo1(testing)
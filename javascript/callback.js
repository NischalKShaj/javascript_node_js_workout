// callback fuction are the function that can be written inside another function
// app.route('/',(req,res,next)=>{
//     res.send("hello")
//     next()
// })

// const port= 3000;
// app.listen(port,()=>{
//     console.log(`server running at port ${port}`);
// })


function callbackeg(callback){
    setTimeout(()=>{
        console.log("Inside the async task...");
        callback()
    },2000)

}
function testing(){
    console.log("finished the execution of the callback function");
}
callbackeg(testing)
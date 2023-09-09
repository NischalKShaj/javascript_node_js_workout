// program to demonstrate about promise 
// promise means that it is a method to avoid callback hell or pyramid of doom
let data
let apiFetch = new Promise((resolve , reject)=>{
    setTimeout(() => {
         data = {message : "api fetched successfully"}
        resolve(data)
    }, 3000);
})
apiFetch.then(()=>{
    console.log(data.message);
}).catch((error)=>{
    console.log(error);
})
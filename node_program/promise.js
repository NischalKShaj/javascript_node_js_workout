// promise 

let fetchApi = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        data = {msg : 'api fetched succesfully'}
        resolve(data)
    },2000)
}).then(()=>{
    console.log(data);
}).catch(()=>{
    console.log(err);
})

// aysnc and await :- it returns a promise that means we can write this in a syncroinsed manner

function setApi(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("Api is fetched successfully....")
        },3000)
    })
}

async function apiFetch(){
    try{
        let message = await setApi()
        console.log(message);

    }
    catch{
        console.log(Error);
    }
}
apiFetch()
// currying means that sending multiple aruguments as a series of function

let sum = (a)=> (b)=>(c)=>{
    return a+b+c;
}

let result = sum(2)(3)(4)
console.log(result);


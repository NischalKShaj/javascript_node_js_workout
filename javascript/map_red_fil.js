// usig the map filter and reduce all together

let arr = [1,2,3,4,5]
let total = arr.map((index)=>{
    return index **2;
    
}).filter((index)=>{
    return index % 2 === 0;
    
}).reduce((current , previous)=>{
    return current + previous
})
console.log(total);
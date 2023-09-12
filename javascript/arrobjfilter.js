// using filter to the array of objects

let obj = [{
    name : "nischal",
    age :21,
},{
    name : "ajin",
    age : 23,
},{
    name : "dilshad",
    age : 25,
}]
let Age = obj.filter((value)=>{
    return value.age > 23;
})
console.log(Age);
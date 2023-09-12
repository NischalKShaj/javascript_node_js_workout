//reduce using array of objs

let obj = [{
    name : "Nischal",
    age : 21,

},{
    name : "Ajin",
    age : 23,
},{
    name : "Dilshad",
    age : 25,
}]
let sum = obj.reduce((pvalue, cvalue )=>{
    return pvalue + cvalue.age
},0)
console.log(sum)
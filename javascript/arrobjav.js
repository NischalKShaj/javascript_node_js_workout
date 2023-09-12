// array objects average 

let obj = [{
    name : "Nischal",
    age : 21,
},{
    name : "Ajin",
    age : 22,
},{
    name : "Dilshad",
    age : 25,
}]
let size = obj.length
let av = obj.reduce((pvalue,cvalue)=>{
    return (pvalue + cvalue.age)/size 
},0)
console.log(av);
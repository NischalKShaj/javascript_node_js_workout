// creating objects

let obj = {
    name :'cloe',
    age : 48,
}
obj.name = 'clove'

console.log(obj);
delete obj.age 
console.log(obj);

let obj2 = {
    name : "hari",
    age :23,
    designation :"sales",
    salary :5999
}
for(let i in obj2){
    console.log(obj2[i]);
}
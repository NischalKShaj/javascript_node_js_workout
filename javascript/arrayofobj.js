// arrayof objects

let obj = [{
    name : 'nischal',
    age : 32,
},{
    name : 'fathima',
    age : 20,

},{
    name : 'anup',
    age : 29,
}]
obj.forEach((value,index,array)=>{
    console.log(value);
    console.log(index);
    console.log(array);
})
console.log(obj);
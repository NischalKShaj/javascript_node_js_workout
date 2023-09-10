// object methods 

// object.keys used to find the keys of the object datatype

let obj = {
    name : "john",
    lname : "doe",
    age : 31,
}
let key = Object.keys(obj)
console.log(key);

// object.value used to find the values of the object datatype

let value = Object.values(obj)
console.log(value);

// object.entries used to find the key : values of the object 

let entry  = Object.entries(obj)
console.log(entry);

// object.assign used to copy the objects to another 
let obj2 = {}
Object.assign(obj2, obj)
console.log(obj2);
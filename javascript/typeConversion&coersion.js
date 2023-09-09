// program to demonstrate about typecoersion it shows that we can convert a datatype implicitly 

let a = "20";
let ty = a+5;
console.log(typeof ty);
console.log(ty);

let typ = a - 3;
console.log(typeof typ);
console.log(typ)
// when we try to sub a strig with another string but the value must be an alphabet it will result in the datatype number but the op will be
let type = a-'h'
console.log(typeof type);
console.log(type);
// but if the string has an integer value then the resulting datatype is a number and the result will be the number left out
let typeC = a-'8'
console.log(typeof typeC);
console.log(typeC);

let typec = 'a'
console.log(typec - 1);
console.log(typeof typec);



// type conversion
let b = '20'
let c = parseInt(a)
console.log(typeof a);
console.log(c,typeof c);
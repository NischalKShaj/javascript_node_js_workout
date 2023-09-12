// demo of obj creation using array
let obj = [{
    name : "Nischal",
    age : 21,
},{
    name : "Ajin",
    age : 24,
},{
    name : "Dilshad",
    age : 25,
}]
console.log(obj)

//  creating objectes using the constructors

function Const1(name, age){
    this.name = name,
    this.age = age
}

let obj1 = new  Const1("Nischal", 21)
let obj2  = new Const1("Gokul", 21)

console.log(obj1);
console.log(obj2);

// creating objects using class

class Const{
  constructor(name, age) {
    this .name = name;
    this.age = age;

        
    }
    display(){
        console.log(`This is ${this.name} and i am ${this.age}`);
    }
}
let obj3 = new Const("Nischal",21)
obj3.display()

// creating objects with class 

class Class{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    show(){
        console.log(`This is my name, i am  ${this.name} and i am ${this.age}`);
    }
}
let newobj = new Class("Nischal", 32)
newobj.show()
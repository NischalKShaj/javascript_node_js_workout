// using functions inside objects

let obj ={
    name : "Nischal",
    age : 21,
    show :function(){
        console.log(this.name, this.age);
    }
}
obj.show()
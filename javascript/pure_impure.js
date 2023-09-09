// pure function

function add(a, b){
    return a + b;
}

let sum  = add(3,5);
console.log(sum);


// impure function 

let a = 10;

function increase(){
    a++;
    return a;
}

let inc = increase()
console.log(inc);
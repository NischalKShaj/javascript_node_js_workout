// closure ith enn vechal binding of a function its own lexical scope and its parents lexical scope is called closure

function outerfuntion(){
    outervariable = 30
    function innerfunction(){
        console.log(outervariable);
    }
    innerfunction()
}
outerfuntion()


// writing closure for the sum program
let sum = (num , num2)=>{
    let sum1 = num + num2;
    console.log("inside the outer function");
    let confirm = (sum1)=>{
        console.log(sum1);
    }
    confirm(sum1)
}
let num =2 ;
let num2 =3; 
sum(num, num2)
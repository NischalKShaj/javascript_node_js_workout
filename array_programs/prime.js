const prompt = require('readline-sync')

let arr = [];
let size = parseInt(prompt.question("Enter the array size : "))

let n,i,j;
console.log('Enter the array values..')
for(i=0;i<size;i++){
    arr[i]=parseInt(prompt.question(" "))
}
let flag;

for(i = 0 ;i<size ;i++){
    flag =0
    if(arr[i]<=1){
        continue;
    }
    n = arr[i]/2;
    for(j=2;j<=n;j++){
        if(arr[i]%j===0){
            flag =1;
            
        }

    }
    if(flag===0){
        console.log('prime numbers are',arr[i])
    }
}

// doing the same code with the help of map reduce and filter

4
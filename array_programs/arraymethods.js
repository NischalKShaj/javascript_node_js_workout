// adding a new value to the array

const arr = [1,2,3,4,5,6,7]
arr.push(8)
console.log(arr);

// removing the last value
arr.pop()
console.log(arr);

// adding a new value to the begining

arr.unshift(0)
console.log(arr);

// removing the new value fromt the begining

arr.shift()
console.log(arr);

// removing a value from the specified position and adding a new value at that position

arr.splice(2,1,8)
console.log(arr);

// sorting the array in ascending and descending order

arr.sort((a,b)=> a-b)
console.log(arr);//ascending

arr.sort((a,b)=>b-a)
console.log(arr);//descending

//reversing the array

arr.reverse()
console.log(arr);

// spread 

let arr2 = [9,10,11,12,13]
let arr3 = [...arr, ...arr2]
console.log(arr3);




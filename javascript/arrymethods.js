// array methods
// push :- used to insert a new value to the end of an array

let arr = [1,2,3,4,5]
arr.push(6)

console.log(arr);

// pop :- used to delete the last element from the array
arr.pop()
console.log(arr);

// shift :-used to delete the first element from the array

arr.shift()
console.log(arr);

// unshift :- used to add a new element at the beginig of the array

arr.unshift(1)
console.log(arr);

// sort :- used to sort the array elements in a ascending or descending form

// 1.ascending
arr.sort((a,b)=> a-b)
console.log(arr);

// 2.descending
arr.sort((a, b)=>b-a)
console.log(arr);

// splice :- used to delete an element from a specified position , it is also used to adding new value at the same position

arr.splice(3,1,7,6)
console.log(arr);

// slice :-used to create a new new array from the mentioned ind

let narr = arr.slice(3)
console.log(arr);
console.log(narr);

// reverse :-used to reverse the array elements 

arr.reverse()
console.log(arr);

// flat :- used to make multidiamentional array to single diamensional array

let newarr = [1,3,[4,5,[34,5],6,7],8,543,]
let arr2 = newarr.flat(2)
console.log(arr2);

// spread :- used to merge two array together, to copy the values of an array to another
// 1.merging
let nearr = [7,8,4,3,2,13]
let current = [...arr,...nearr]
console.log(current);

// 2.using spread for finding the sum of the elements in the array

let sum =(a,b,c,d,e,f)=>{
    return a+b+c+d+e+f
}
let final = sum(...arr)
console.log(final);

//3. coping the array elements

let fresh = [...arr]
console.log(fresh);

// rest : - used to collect multiple arguments of a function into a single array 

let test = function(curent,...restof){
    console.log(curent);
    console.log(restof);
}
test(1,2,3,4,5,6,7,8,9)

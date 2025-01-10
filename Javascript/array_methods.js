// push and pop

const arr = [1,2,3,4,5,6];

console.log("push",arr.push(6));
console.log(arr)
console.log("pop",arr.pop())
console.log(arr)

//shift and unshift
console.log("shift",arr.shift()) 
console.log("unshift",arr.unshift(3,8)) 
console.log(arr)

// map()
// Creates a new array by applying a callback function to each element of the array.

let doubled = arr.map(x => x * 2); 

// filter()
// Creates a new array with elements that pass the test implemented by the callback function.

let evens = arr.filter(x => x % 2 === 0); 
console.log("even", arr)

// some()
// Returns true if at least one element satisfies the condition in the callback function.

let hasEven = arr.some(x => x % 2 === 0); // true
console.log( "hasEven",hasEven)

// every()
// Returns true if all elements satisfy the condition in the callback function.

let allEven = arr.every(x => x % 2 === 0); 
console.log( "allEven",allEven)

// includes()
// Checks if an array contains a specific value, returning true or false.
arr.includes(2); // true


// indexOf() and lastIndexOf()
// indexOf(): Returns the first index of a specified element, or -1 if not found.
arr.indexOf(2); // 1
arr.lastIndexOf(2); // 3

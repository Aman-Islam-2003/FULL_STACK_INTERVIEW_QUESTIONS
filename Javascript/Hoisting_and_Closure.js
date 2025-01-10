// Hoisting is JavaScript's behavior of moving variable and function declarations to the top of their scope during the compilation phase, allowing you to use variables or functions before declaring them.

console.log(greet());
function greet(){
    return "hello";
}

console.log(name);
var name = "aman";

// ful ftns are hoisted so it can be called before its declaration
//var is hoisted but not it's value so it returns undefined


//---------------------Closures---------------------------

// a ftn that remembers and accesses the variable from its outer scope, even after that scope has exited, means even after the outer ftn has executed, inner ftn still retains access to the outer ftn variables.

function createCounter() {
    let count = 0;

    return{
        increment: function(){
         count++ ;
         console.log(`Count: ${count}`)
        },
        decrement: function(){
            count-- ;
         console.log(`Count: ${count}`)
        },
        getCount: function(){
            return count;
        }
    }
}

// console.log(createCounter())
const counter = createCounter();
console.log(counter.getCount())

//Data Privacy:''''''''''''''''''''
//Closures can be used to create private variables that cannot be accessed directly from outside a function.
//The count variable is encapsulated within the createCounter function and cannot be modified directly from outside.

//Event Listeners
//Closures allow event handlers to retain access to the variables in their outer scope.

// function setupClickHandler(buttonId) {
//     let clickCount = 0;
  
//     document.getElementById(buttonId).addEventListener("click", function () {
//       clickCount++;
//       console.log(`Button clicked ${clickCount} times.`);
//     });
//   }
  
//   setupClickHandler("myButton");

  
//   Currying
//   Closures are fundamental for currying, which transforms a function with multiple arguments into a sequence of functions with single arguments.
  

  function curryAdd(a) {
    return function (b) {
      return function (c) {
        return a + b + c;
      };
    };
  }
  
  console.log(curryAdd(2)(3)(4)); // 9
  


// Difference Between null and undefined
// null and undefined are both primitive data types in JavaScript, but they represent different concepts.


// When to Use null and undefined?
// Use null when you want to explicitly define an empty or non-existent value.
// Let undefined occur naturally or use it to check for uninitialized variables or missing properties.

console.log(null == undefined);  // Output: true (loose equality)
console.log(null === undefined); // Output: false (strict equality)
console.log(typeof null);        // Output: "object" (this is a quirk in JavaScript)
console.log(typeof undefined);   // Output: "undefined"

//e.g not assigned a value to variable
let a;
console.log(a);

//a missing ftn parameter
 function printName(name){
    console.log("name", name)
 }

 printName(); // undefined

 //acessing a non-existent obj property
 let obj = {

 }
 console.log(obj.name)

//  null: Indicates explicitly "no value" or "empty."
// undefined: Indicates the absence of a value that hasn’t been assigned yet.
// Since they are conceptually similar, JavaScript loosely equates them in this specific case.
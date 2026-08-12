// Stack vs Heap memory in JavaScript

// 1. Stack memory (used for Primitive data types)
// Primitives: String, Number, Boolean, null, undefined, Symbol, BigInt
// When you assign a primitive value to another variable, it copies the value (by value).
let nameOne = "aadarsh";
let nameTwo = nameOne; // nameTwo gets a copy of "aadarsh"
nameTwo = "soni";      // changing nameTwo does not affect nameOne

console.log("--- Stack Example (Primitive) ---");
console.log(nameOne); // "aadarsh"
console.log(nameTwo); // "soni"

// 2. Heap memory (used for Non-Primitive / Reference data types)
// Reference types: Objects, Arrays, Functions
// When you assign a reference type to another variable, it copies the reference to the same memory location in the Heap.
let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
};

let userTwo = userOne; // userTwo points to the same object in the heap
userTwo.email = "aadarsh@google.com"; // modifying userTwo also modifies userOne

console.log("--- Heap Example (Reference Type) ---");
console.log(userOne.email); // "aadarsh@google.com"
console.log(userTwo.email); // "aadarsh@google.com"
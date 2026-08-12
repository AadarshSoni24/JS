let name="aadarsh"
let age ="89"

// null - value not assigned maybe 0
// undefined -  we did
// Number
// BigInt
// Boolean
// symbol - uniquesness


let valueinNumber = Number(age)

// console.log(typeof valueinNumber)


// number can be converted but 
// 33qbc cant be converted
// true = 1 , false 0

let  someNumber = 43
 someNumber = String(someNumber)

console.log(someNumber)
console.log(typeof someNumber)


// we can convert string number and boolean into each other


// TYPE CONVERSION IN JAVASCRIPT
// 

// We can convert String, Number and Boolean
// into each other using String(), Number(), Boolean()



// --------------------------------------------
// 1. STRING → NUMBER
// --------------------------------------------

let stringValue = "43"

let numberValue = Number(stringValue)

console.log(numberValue)         // 43
console.log(typeof numberValue)  // number


// --------------------------------------------
// 2. NUMBER → STRING
// --------------------------------------------

let number = 43

let string = String(number)

console.log(string)              // "43"
console.log(typeof string)       // string


// --------------------------------------------
// 3. STRING → BOOLEAN
// --------------------------------------------

let str = "Hello"

let bool = Boolean(str)

console.log(bool)                // true
console.log(typeof bool)         // boolean

// Any non-empty string becomes true
console.log(Boolean("Hello"))    // true
console.log(Boolean("43"))       // true
console.log(Boolean("false"))    // true

// Empty string becomes false
console.log(Boolean(""))         // false


// --------------------------------------------
// 4. BOOLEAN → STRING
// --------------------------------------------

let booleanValue = true

let stringValue2 = String(booleanValue)

console.log(stringValue2)        // "true"
console.log(typeof stringValue2) // string

console.log(String(false))       // "false"


// --------------------------------------------
// 5. NUMBER → BOOLEAN
// --------------------------------------------

let num = 1

let booleanValue2 = Boolean(num)

console.log(booleanValue2)       // true
console.log(typeof booleanValue2) // boolean

// 0 → false
// Any non-zero number → true

console.log(Boolean(0))          // false
console.log(Boolean(1))          // true
console.log(Boolean(43))         // true
console.log(Boolean(-10))        // true


// --------------------------------------------
// 6. BOOLEAN → NUMBER
// --------------------------------------------

let isLoggedIn = true

let numValue = Number(isLoggedIn)

console.log(numValue)            // 1
console.log(typeof numValue)     // number

// true → 1
// false → 0

console.log(Number(true))        // 1
console.log(Number(false))       // 0


// ============================================
// QUICK SUMMARY
// ============================================

// String → Number
Number("43")        // 43

// Number → String
String(43)          // "43"

// String → Boolean
Boolean("hello")    // true
Boolean("")         // false

// Boolean → String
String(true)        // "true"

// Number → Boolean
Boolean(1)          // true
Boolean(0)          // false

// Boolean → Number
Number(true)        // 1
Number(false)       // 0

const heroes = ["spiderman", "batman", "superman"]

let obj = {name:"aadarsh", age:20}
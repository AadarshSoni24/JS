// ==========================================
// NUMBERS & MATH IN JAVASCRIPT
// ==========================================

// ------------------------------------------
// 1. Working with Numbers
// ------------------------------------------

const score = 400; // Primitive number
const balance = new Number(100); // Number object wrapper

console.log("--- 1. toString(radix) ---");
// Standard conversion: converts number to a string
console.log(score.toString()); // "400"
console.log(typeof score.toString()); // "string"
console.log(score.toString().length); // 3 (because "400" has 3 characters)

// Radix/Base conversion: you can pass an optional base parameter (radix) from 2 to 36
// Standard bases: 2 (binary), 8 (octal), 10 (decimal), 16 (hexadecimal)
const numToConvert = 255;
console.log(numToConvert.toString(2));  // "11111111" (binary)
console.log(numToConvert.toString(16)); // "ff" (hexadecimal representation of 255)
console.log(numToConvert.toString(8));  // "377" (octal)
console.log((10).toString(2));          // "1010" (Note: double parenthesis or space needed for literals: 10.toString() throws error!)

console.log("\n--- 2. toFixed(fractionDigits) ---");
// Formats a number using fixed-point notation. It returns a STRING!
// It rounds the value if needed and pads with zeros if requested fractionDigits are larger than actual.
const pi = 3.14159;
console.log(pi.toFixed(2)); // "3.14" (standard decimal formatting)
console.log(pi.toFixed(0)); // "3" (no decimals)
console.log(pi.toFixed(4)); // "3.1416" (rounds up from 3.14159 because next digit is 9)
console.log((1.5).toFixed(0)); // "2" (rounds 1.5 up to 2)
console.log((2).toFixed(5)); // "2.00000" (pads with extra zeros)

console.log("\n--- 3. toPrecision(significantDigits) ---");
// Formats a number to a specified length of significant digits. Returns a STRING!
// It rounds or switches to exponential notation depending on the number's size.
const measurement = 123.8966;
console.log(measurement.toPrecision(3)); // "124" (3 digits: '1', '2', '4' due to rounding)
console.log(measurement.toPrecision(4)); // "123.9" (4 digits: '1', '2', '3', '9')
console.log(measurement.toPrecision(2)); // "1.2e+2" (switches to exponential when digits are fewer than integer part)
console.log((0.000123).toPrecision(2)); // "0.00012" (leading zeros don't count as significant digits)

console.log("\n--- 4. toExponential(fractionDigits) ---");
// Returns a string representing the Number object in exponential/scientific notation.
const starDistance = 987654321;
console.log(starDistance.toExponential());  // "9.87654321e+8"
console.log(starDistance.toExponential(2)); // "9.88e+8" (rounds up to 2 decimal places in scientific notation)
console.log((0.00005).toExponential(1));    // "5.0e-5"

console.log("\n--- 5. toLocaleString(locales, options) ---");
// Returns a locale-sensitive string representing the number. Extremely powerful!
const bigAmount = 1000000;
console.log(bigAmount.toLocaleString()); // "1,000,000" (Defaults to your system locale)
console.log(bigAmount.toLocaleString('en-IN')); // "10,00,000" (Indian standard: lakhs/crores format)
console.log(bigAmount.toLocaleString('de-DE')); // "1.000.000" (German standard uses periods instead of commas)

// Using options parameter for currencies, percentages, and units:
const money = 123456.789;
console.log(money.toLocaleString('en-US', { style: 'currency', currency: 'USD' })); // "$123,456.79" (auto-rounded)
console.log(money.toLocaleString('en-IN', { style: 'currency', currency: 'INR' })); // "₹1,23,456.79"
console.log(money.toLocaleString('ja-JP', { style: 'currency', currency: 'JPY' })); // "¥123,457" (Yen has no fractional/decimal values)

// Formatting as percentage or showing specific decimal limits:
console.log((0.85).toLocaleString('en-US', { style: 'percent' })); // "85%"
console.log((12.3456).toLocaleString('en-US', { minimumFractionDigits: 1, maximumFractionDigits: 2 })); // "12.35"

console.log("\n--- 6. Max, Min & Safe Integers ---");
// Max & Min Values in JavaScript:
console.log(Number.MAX_VALUE); // Largest positive representable number
console.log(Number.MIN_VALUE); // Smallest positive representable number
console.log(Number.MAX_SAFE_INTEGER); // Largest safe integer (9007199254740991)


// ------------------------------------------
// 2. The Math Object (Built-in Library)
// ------------------------------------------

console.log(Math); // Object containing various mathematical constants and functions

// Math.abs(value) - Converts negative numbers to positive (absolute value)
console.log(Math.abs(-5)); // 5

// Rounding values:
console.log(Math.round(4.6)); // 5 (normal rounding)
console.log(Math.round(4.3)); // 4

console.log(Math.ceil(4.2));  // 5 (always rounds UP to next integer)
console.log(Math.floor(4.9)); // 4 (always rounds DOWN to previous integer)

// Min and Max:
console.log(Math.min(4, 3, 6, 8)); // 3 (returns the lowest value)
console.log(Math.max(4, 3, 6, 8)); // 8 (returns the highest value)

// Math.random() - Generates a random decimal between 0 (inclusive) and 1 (exclusive)
console.log(Math.random()); 

// How to get a random integer between a range (min and max):
const min = 10;
const max = 20;

// Formula to get a random integer between min and max (inclusive):
const randomVal = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(`Random number between ${min} and ${max}:`, randomVal);

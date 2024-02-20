"use strict";
// Define an array of numbers
const numbers = [1, 2, 3, 4, 5];
// Intentionally try to access an element at an invalid index
const index = 10; // This is an invalid index
console.log("Attempting to access element at index", index);
console.log("Element at index", index, ":", numbers[index]); // This will cause an index error
// Correct the error by accessing a valid index
const validIndex = 2; // This is a valid index
console.log("\nCorrecting the error by accessing a valid index");
console.log("Element at index", validIndex, ":", numbers[validIndex]); // Accessing a valid index
// Print the array to verify its contents
console.log("\nArray contents:", numbers);

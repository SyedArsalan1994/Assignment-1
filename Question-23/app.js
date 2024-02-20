"use strict";
// Tests for equality and inequality with strings
let string1 = "apple";
let string2 = "banana";
// Equality test with strings
console.log("Equality test with strings: apple == banana? I predict False.");
console.log(string1 == string2);
// Inequality test with strings
console.log("Inequality test with strings: apple != banana? I predict True.");
console.log(string1 != string2);
// Tests using the lower case function
let str1 = "Hello";
let str2 = "hello";
// Lowercase equality test
console.log("Lowercase equality test: Hello.toLowerCase() == hello? I predict True.");
console.log(str1.toLowerCase() == str2);
// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
let num1 = 5;
let num2 = 10;
// Numerical equality test
console.log("Numerical equality test: 5 == 10? I predict False.");
console.log(num1 == num2);
// Numerical inequality test
console.log("Numerical inequality test: 5 != 10? I predict True.");
console.log(num1 != num2);
// Numerical greater than test
console.log("Numerical greater than test: 5 > 10? I predict False.");
console.log(num1 > num2);
// Numerical less than test
console.log("Numerical less than test: 5 < 10? I predict True.");
console.log(num1 < num2);
// Numerical greater than or equal to test
console.log("Numerical greater than or equal to test: 5 >= 10? I predict False.");
console.log(num1 >= num2);
// Numerical less than or equal to test
console.log("Numerical less than or equal to test: 5 <= 10? I predict True.");
console.log(num1 <= num2);
// Tests using "and" and "or" operators
let x = 5;
let y = 10;
let z = 15;
// "and" operator test
console.log("Logical AND operator test: (x < y) && (y < z)? I predict True.");
console.log((x < y) && (y < z));
// "or" operator test
console.log("Logical OR operator test: (x < y) || (y > z)? I predict True.");
console.log((x < y) || (y > z));
// Test whether an item is in an array
let fruits = ["apple", "banana", "orange"];
// Item in array test
console.log("Item in array test: 'banana' in fruits? I predict True.");
console.log("banana" in fruits);
// Test whether an item is not in an array
console.log("Item not in array test: 'grape' not in fruits? I predict True.");
console.log("grape" in fruits);

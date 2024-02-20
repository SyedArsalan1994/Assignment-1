"use strict";
// Array of favorite pizza names
let pizzas = ["Pepperoni", "Margherita", "Supreme"];
// Print each pizza name using a for loop
console.log("Printing pizza names:");
for (let i = 0; i < pizzas.length; i++) {
    console.log(pizzas[i]);
}
// Modify the for loop to print a sentence for each pizza
console.log("\nPrinting sentences about pizza:");
for (let i = 0; i < pizzas.length; i++) {
    console.log(`I like ${pizzas[i]} pizza.`);
}
// Additional sentence about liking pizza
console.log("\nI really love pizza!");

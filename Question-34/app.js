"use strict";
// Array of animals with a common characteristic
let animals = ["Dog", "Cat", "Rabbit"];
// Print each animal name using a for loop
console.log("Printing animal names:");
for (let i = 0; i < animals.length; i++) {
    console.log(animals[i]);
}
// Modify the for loop to print a statement about each animal
console.log("\nPrinting statements about animals:");
for (let i = 0; i < animals.length; i++) {
    console.log(`A ${animals[i]} would make a great pet.`);
}
// Additional sentence about the common characteristic
console.log("\nAny of these animals would make a great pet!");

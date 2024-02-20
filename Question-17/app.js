"use strict";
// Store the locations you'd like to visit in an array
let placesToVisit = ["Kashmir", "Moola Chootok", "Malam Jabba", "Swat", "Skardu", "Attabad Lake"];
// Print the array in its original order
console.log("Original order:", placesToVisit);
// Print the array in alphabetical order without modifying the actual list
console.log("Alphabetical order:", [...placesToVisit].sort());
// Show that the array is still in its original order
console.log("Original order (still intact):", placesToVisit);
// Print the array in reverse alphabetical order without changing the order of the original list
console.log("Reverse alphabetical order:", [...placesToVisit].sort().reverse());
// Show that the array is still in its original order
console.log("Original order (still intact):", placesToVisit);
// Reverse the order of the list
placesToVisit.reverse();
console.log("Reversed order:", placesToVisit);
// Reverse the order of the list again to get back to the original order
placesToVisit.reverse();
console.log("Back to original order:", placesToVisit);
// Sort the array so it's stored in alphabetical order
placesToVisit.sort();
console.log("Sorted in alphabetical order:", placesToVisit);
// Sort to change the array so it's stored in reverse alphabetical order
placesToVisit.sort((a, b) => b.localeCompare(a));
console.log("Sorted in reverse alphabetical order:", placesToVisit);

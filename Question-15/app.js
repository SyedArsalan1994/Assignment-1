"use strict";
// Store the names of people you'd like to invite to dinner in an array
let guestList = ["Governor Sindh", "Sir. Zia Khan", "Teachers"];
// Print a message inviting each person to dinner
for (let i = 0; i < guestList.length; i++) {
    console.log(`Dear ${guestList[i]}, I would like to invite you to dinner. Please join me for a wonderful evening.`);
}
;
//person who can't come to dinner and remove from the list
let guestCantCome = guestList.shift();
console.log(`\n${guestCantCome} can not come to the dinner.\n`);
//Adding new guest to the list
guestList.push(`Daniyal Nagori`);
//printing new list of guests
for (let i = 0; i < guestList.length; i++) {
    console.log(`Dear ${guestList[i]}, I would like to invite you to dinner. Please join me for a wonderful evening.`);
}
;
console.log(`\n`);
//Addning new array value on first index
guestList.unshift(`Yousuf`);
//calculate the middle index of array
let middleIndex = guestList.length / 2;
//adding new value in the middle of array 
guestList.splice(middleIndex, 0, `Arsalan`);
//Adding new value in the end of array
guestList.push(`Faish Ullah`);
for (let i = 0; i < guestList.length; i++) {
    console.log(`Dear ${guestList[i]}, I would like to invite you to dinner. Please join me for a wonderful evening.`);
}
// Print a message informing about the bigger dinner table
console.log("\nGreat news! We found a bigger dinner table.");

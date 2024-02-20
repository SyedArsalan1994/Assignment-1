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
// Print a message informing about the bigger dinner table
console.log("\nGreat news! We found a bigger dinner table.");
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
// Print a message stating that you can invite only two people for dinner
console.log("\nUnfortunately, the new dinner table won't arrive in time, so I can invite only two people for dinner.");
// Remove guests from the list one at a time until only two names remain
while (guestList.length > 2) {
    const removedGuest = guestList.pop();
    console.log(`Sorry, ${removedGuest}, I can't invite you to dinner.`);
}
// Print a message to each of the two people still on the list, letting them know they're still invited
console.log("\nYou're still invited to dinner:");
guestList.forEach((guest) => {
    console.log(`Dear ${guest}, you're still invited to dinner. Please join me for a wonderful evening.`);
});
// Remove the last two names from the list
guestList.pop();
guestList.pop();
// Print the list to make sure it's empty
console.log("\nFinal guest list:", guestList);

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
console.log(`${guestCantCome} can not come to the dinner.`);
//Adding new guest to the list
guestList.push(`Daniyal Nagori`);
//printing new list of guests
for (let i = 0; i < guestList.length; i++) {
    console.log(`Dear ${guestList[i]}, I would like to invite you to dinner. Please join me for a wonderful evening.`);
}
;
console.log(`Total Guests invited : ${guestList.length}`);

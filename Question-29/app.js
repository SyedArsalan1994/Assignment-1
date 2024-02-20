"use strict";
// Make an array of your three favorite fruits
let username = ["admin", "arsalan", "yousuf"];
for (let I = 0; I < username.length; I++) {
    const element = username[I];
    // Check for certain username in the array
    if (username[I] == 'admin') {
        console.log('Hello admin, would you like to see a status report?');
    }
    else {
        console.log(`Hello ${username[I]}, thank you for logging in again.`);
    }
}

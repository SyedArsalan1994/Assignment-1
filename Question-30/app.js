"use strict";
// Make an array of your three favorite fruits
let username = ['admin', 'arsalan', 'yousuf'];
if (username.length > 0) {
    console.log("List of users:");
    for (let i = 0; i < username.length; i++) {
        const element = username[i];
        // Check for certain username in the array
        if (username[i] == 'admin') {
            console.log('Hello admin, would you like to see a status report?');
        }
        else {
            console.log(`Hello ${username[i]}, thank you for logging in again.`);
        }
    }
}
username = [];
// Check if the list of users is not empty
if (username.length > 0) {
    // Print each username
    console.log("List of users:");
    username.forEach((user) => {
        console.log("-", user);
    });
}
else {
    console.log("We need to find some users!");
}

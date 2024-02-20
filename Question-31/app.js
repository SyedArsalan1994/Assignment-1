"use strict";
let current_users = ['arsalan', 'yousuf', 'mohsin', 'john', 'eric'];
let new_users = ['arsalan', 'john', 'sarah', 'ali', 'ahmed'];

//loop for newusers to check one by one
for (let i = 0; i < new_users.length; i++) {
    let new_user = new_users[i];
    let usernameExists = false;

  //loop for current user to check if it already exist
    for (let j = 0; j < current_users.length; j++) {
        if (current_users[j].toLowerCase() === new_user.toLowerCase()) {
            usernameExists = true;
            break;
        }
    }
    if (usernameExists) {
        console.log(`Sorry, the username "${new_user}" is already taken. Please enter a new username.`);
    }
    else {
        console.log(`Congratulations! The username "${new_user}" is available.`);
    }
}

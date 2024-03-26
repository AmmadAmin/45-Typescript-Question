"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Define an array of usernames
let usernames = ['admin', 'Eric', 'Alice', 'John', 'Jane'];
// Check if the list of users is not empty
if (usernames.length > 0) {
    // Loop through the array and print greetings
    for (let username of usernames) {
        if (username.toLowerCase() === 'admin') {
            console.log("Hello admin, would you like to see a status report?");
        }
        else {
            console.log(`Hello ${username}, thank you for logging in again.`);
        }
    }
}
else {
    console.log("We need to find some users!");
}
// Remove all usernames from the array
usernames = [];
// Check if the list of users is not empty after removal
if (usernames.length === 0) {
    console.log("We need to find some users!");
}

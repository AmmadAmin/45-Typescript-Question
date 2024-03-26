"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Passing version:
let alien_color = 'green';
// Passing version: alien_color is 'green'
if (alien_color === 'green') {
    console.log("The player just earned 5 points.");
}
// Failing version:
let alien_color1 = 'red';
// Failing version: alien_color is not 'green'
if (alien_color === 'green') {
    console.log("The player just earned 5 points.");
}

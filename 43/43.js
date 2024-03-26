"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Define the show_magicians function
function show_magicians(magicians) {
    for (const magician of magicians) {
        console.log(magician);
    }
}
// Define the make_great function
function make_great(magicians) {
    const greatMagicians = [];
    for (const magician of magicians) {
        greatMagicians.push(`the Great ${magician}`);
    }
    return greatMagicians;
}
// Array of magician's names
const magicianNames = ["Merlin", "Harry ", "David ", "Jibran ", "Ahmed"];
// Create a copy of the magicianNames array
const originalMagicianNames = magicianNames.slice();
// Call make_great function with a copy of the array to modify the magician names
const greatMagicianNames = make_great(magicianNames.slice());
// Call show_magicians function to show the original and modified arrays
console.log("Original Magicians:");
show_magicians(originalMagicianNames);
console.log("\nMagicians with 'the Great' added:");
show_magicians(greatMagicianNames);

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Define the show_magicians function
function show_magicians(magicians) {
    for (const magician of magicians) {
        console.log(magician);
    }
}
// Array of magician's names
const magicianNames = ["Merlin", "Harry ", "Jibran", "Ameen", "Tariq"];
// Call the show_magicians function
show_magicians(magicianNames);

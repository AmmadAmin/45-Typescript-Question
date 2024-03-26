"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Define the make_shirt function
function make_shirt(size = "large", message = "I love TypeScript") {
    return { size, message };
}
// Create a large shirt with the default message
const largeShirt = make_shirt();
console.log("Large Shirt:", largeShirt);
// Create a medium shirt with the default message
const mediumShirt = make_shirt("medium");
console.log("Medium Shirt:", mediumShirt);
// Create a shirt of any size with a different message
const customShirt = make_shirt("small", "Keep Calm and Code On");
console.log("Custom Shirt:", customShirt);

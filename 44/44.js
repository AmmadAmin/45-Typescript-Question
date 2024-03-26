"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Define the sandwich_order function
function sandwich_order(...items) {
    console.log("Sandwich Order:");
    if (items.length === 0) {
        console.log("No items selected.");
    }
    else {
        console.log("Items:");
        for (const item of items) {
            console.log("- " + item);
        }
    }
    console.log("-------------------");
}
// Call the function three times with different numbers of arguments
sandwich_order("Bread", "Cheese", "Tomato", "Lettuce", "Chicken");
sandwich_order("Bread", "Ham", "Cheese");
sandwich_order("Bread", "Peanut Butter", "Jelly");

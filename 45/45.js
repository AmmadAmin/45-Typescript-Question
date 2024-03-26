"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Define the car_info function
function car_info(manufacturer, modelName, additionalInfo) {
    return { manufacturer, modelName, ...additionalInfo };
}
// Call the function with required information and additional key-value pairs
const car = car_info("Toyota", "Corolla", { color: "red", year: 2022, features: ["ABS", "Airbags"] });
// Print the Object returned to ensure all the information was stored correctly
console.log(car);

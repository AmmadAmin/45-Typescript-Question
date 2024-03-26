"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let guestList = ["Hammad", "Ijaz", "Ali", "Muhammad",];
let dontCome = guestList[0];
console.log(dontCome, "He is not able to attend");
guestList.splice(0, 1, "Zain"); // remove the first element from array (Hammad)
guestList.forEach(guest => console.log(`Hi ${guest}, would you like tO Dinner with me?`));

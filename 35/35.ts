// Store animal names in an array
let animals: string[] = ['Dog', 'Cat', 'Rabbit'];

// Loop through the array and print the name of each animal
for (let animal of animals) {
    console.log(animal);
}

// Modify the program to print a statement about each animal
for (let animal of animals) {
    console.log(`A ${animal.toLowerCase()} would make a great pet.`);
}

// Print a line stating what these animals have in common
console.log("Any of these animals would make a great pet!");

// Define the show_magicians function
function show_magicians(magicians: string[]) {
    for (const magician of magicians) {
        console.log(magician);
    }
}

// Define the make_great function
function make_great(magicians: string[]) {
    return magicians.map(magician => `the Great ${magician}`);
}

// Array of magician's names
const magicianNames: string[] = ["Junaid", "Harry ", "David ", "Jibran ", "Ahmed"];

// Call make_great function to modify the array and then call show_magicians to display it
show_magicians(make_great(magicianNames));

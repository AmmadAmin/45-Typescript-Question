function runTests() {
    let x = 5;
    let y = 10;
    let name = "John";
    let age = 30;
    let isRaining = true;
    let fruits = ['apple', 'banana', 'orange'];
    let person = { name: "Alice", age: 25 };
    let isMorning = false;
    let isEvening = true;
    let isWeekend = false;

    // Test 1
    console.log("Test 1: Is x less than y? I predict True.");
    console.log(x < y);

    // Test 2
    console.log("Test 2: Is name equal to 'John'? I predict True.");
    console.log(name === "John");

    // Test 3
    console.log("Test 3: Is age greater than or equal to 18? I predict True.");
    console.log(age >= 18);

    // Test 4
    console.log("Test 4: Is it raining? I predict True.");
    console.log(isRaining);

    // Test 5
    console.log("Test 5: Is 'banana' included in fruits array? I predict True.");
    console.log(fruits.includes('banana'));

    // Test 6
    console.log("Test 6: Is person's age less than 30? I predict False.");
    console.log(person.age < 30);

    // Test 7
    console.log("Test 7: Is it morning? I predict False.");
    console.log(isMorning);

    // Test 8
    console.log("Test 8: Is it evening? I predict True.");
    console.log(isEvening);

    // Test 9
    console.log("Test 9: Is x equal to y? I predict False.");
    console.log(x === y);

    // Test 10
    console.log("Test 10: Is it weekend? I predict False.");
    console.log(isWeekend);
}

runTests();

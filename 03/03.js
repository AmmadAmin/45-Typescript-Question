// 3. Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
var firstName = "hammad amin";
console.log(firstName.toLocaleLowerCase());
console.log(firstName.toLocaleUpperCase());
console.log(firstName.replace(/\b\w/g, function (char) { return char.toUpperCase(); }));

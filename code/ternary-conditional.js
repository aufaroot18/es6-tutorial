let age = 26;
let greeting;

// statement if-else
if (age > 18) {
	greeting = 'Hello, fellow adult';
}
else {
	greeting = 'Hey kiddo';
}

console.log(greeting);

// ternary operators
greeting = age > 18 ? "Hello, fellow adult" : "Hey kiddo";

console.log(greeting);
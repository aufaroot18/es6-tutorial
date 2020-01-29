// tanpa parameters default
function sayHi(name) {
	return `Hai ${name}`;
}
console.log(sayHi());

// menggunakan parameter default
// function sayHi(name = "Aufa") {
// 	return `Hai ${name}`;
// }
// console.log(sayHi());
// console.log(sayHi("Billah"));

// Arrow function dengan parameter default
const sayHi = (name = "Aufa") => `Hi ${name}`;

console.log(sayHi());
console.log(sayHi("Billah"));
// normal function
function capitalize(word) {
	return word.toUpperCase();
}

capitalize("Selamat Datang");

// arrow function
const capitalize = (word) => {
	return word.toUpperCase();
}

capitalize("Selamat Datang");

// arrow function dengan 3 shorthand
const capitalize = word => word.toUpperCase();

capitalize("Selamat Datang");
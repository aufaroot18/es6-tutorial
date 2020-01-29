let greeting;
const newUser = true;

if (newUser) {
	// variabel let bisa di-reassign
	greeting = "Nice to meet you";
}
else {
	greeting = 'Welcome back';
}

// variabel const tidak bisa di-reassign
newUser = false; // hasilnya akan error
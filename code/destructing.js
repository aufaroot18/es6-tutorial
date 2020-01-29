const user = {
	name: "Reed",
	username: "ReedBarger",
	email: "reed@gmail.com",
	details: {
		title: "Programmer"
	}
}

// mengakses object property tanpa destructing
console.log(`${user.name}, ${user.email}`);

// destructing object untuk pengulangan lebih sedikit
const {name, email} = user;
console.log(`${name}, ${email}`);
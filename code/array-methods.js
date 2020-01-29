const users = [
	{ name: "Bob", id: 1 },
	{ name: "Jane", id: 2 },
	{ name: "Fred", id: 3 },
];


/*
	menyimpan name dari array users ke array usernames
	menggunakan for loop
*/
const usernames = [];

for (let i = 0; i < users.length; i++) {
	usernames[i] = users[i].name;
}

console.log(users);
console.log(usernames);

/*
	menyimpan name dari array users ke array usernames
	menggunakan method array map
*/
const usernames = users.map(user => user.name);

console.log(users);
console.log(usernames);
const user = {
	name: "",
	email: "",
	phoneNumber: "",
};
const newUser = {
	name: "ReedBarger",
	email: "reed@gmail.com"
};

/*
	menggabungkan object user yang kosong dengan object newUser.
	object yang tersebar terakhir akan menimpa object sebelumnya jika propertinya memiliki nama yang sama.
*/
const mergedUser = {...user, ...newUser};
console.log(mergedUser);
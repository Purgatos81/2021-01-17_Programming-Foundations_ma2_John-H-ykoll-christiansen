//# Programming Foundations Module Assignment 2
//Question 1

var pets = [
	{
		type: "cat",
		age: 5.5,
	},
	{
		type: "dog",
		age: 3.8,
	},
	{
		type: "parrot",
		age: 4.0,
	},
];

if (pets.age < 4) {

}

for (let oldPet of pets) {
	console.log(oldPet);
}

//Question 2
function trueOrFalse(boleanPlease) {
	if (boleanPlease === true || boleanPlease === false) {
		console.log(boleanPlease); 
	} else {
	console.log("Please pass a boolean value in");
	}
}
trueOrFalse(false);
//Question 3



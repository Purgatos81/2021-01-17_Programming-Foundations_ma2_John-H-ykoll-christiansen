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
for (let i of pets) { 
	if (i.age >= 4) { 
	console.log(i);
	 } 
	}

//Question 2
function trueOrFalse(boleanPlease) {
	if (boleanPlease === true || boleanPlease === false) {
		console.log(boleanPlease); 
	} else {
	console.log("Please pass a boolean value in");
	}
}
trueOrFalse(true);

//Question 3

var heading = document.querySelector("h2");
var button = document.querySelector("button");

button.onclick = function() {
	heading.innerHTML = "Updated subheading";
	heading.style.color = "blue";
}
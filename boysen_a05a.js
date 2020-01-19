/*
Bill Boysen
boysen_a05a.js
INFO_2124_WW
Thoendel
1/19/2020
*/

//Declare my array and populate it with four items on declaration
let myToDoList = ["Feed the dogs", "Make lunch", "Do Homework", "Take out the trash"];

//Print array list
console.log(myToDoList);

//Add a new item to the beginning of my array
myToDoList.unshift("Get groceries");

//Print the updated array list
console.log(myToDoList);

//Reverse the array list
myToDoList.reverse();

//Sort the array list
myToDoList.sort();

//Print the sorted array list
console.log(myToDoList);

//Look for "x" in my array
myToDoList.indexOf("x");

//Declare my array list with constructor
let myGroceryList = new Array();

//Populate the array with six items individually
myGroceryList[0] = "Water";
myGroceryList[1] = "Eggs";
myGroceryList[2] = "Cereal";
myGroceryList[3] = "Grapes";
myGroceryList[4] = "Ground beef";
myGroceryList[5] = "Butter";

//Print the array list
console.log(myGroceryList);

//Remove the first item in the array
myGroceryList.shift();

//Print the modified array list
console.log(myGroceryList);

//Add two items to the middle of my list
myGroceryList.splice(3, 0, "Bacon", "Paper towels");

//Print the modified array list
console.log(myGroceryList);
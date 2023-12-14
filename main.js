// Chapter 1 (Alerts)
// 1.
alert("John"); // Replace with the actual first name
alert("Doe"); // Replace with the actual last name
alert("john.doe@example.com"); // Replace with the actual email
alert("1234567890"); // Replace with the actual phone number
alert("securePassword123"); // Replace with the actual password

// 2.
alert("You're learning JavaScript!");

// 3.
alert("Hello, JavaScript!");

// Chapter 2 (Variables for string)
// 1.
let camelCaseVariable;

// 2.
let undefinedVariable;
undefinedVariable = "This is a string.";

// 3.
let teamName = "Team Awesome";
alert(teamName);

// 4.
let bestMan = "Charlie";
bestMan = "New Best Man";

// Chapter 3 (Variables for numbers)
// 1.
let caseQty;

// 2.
caseQty = 144;

// 3.
let num = parseInt("9"); // Convert string to number

// 4.
let sumVariable;
sumVariable = 5 + 10;

// 5.
let merchTotal = 100;
let shippingCharge = 10;
let orderTotal = merchTotal + shippingCharge;
console.log(orderTotal);

// 6.
let variable1 = 5;
variable1 = variable1 + 3;

// Chapter 4 (Variable names Legal and Illegal)
// 1.
let productCost = 3.45;

// 2.
let nameOfBand;

// 3.
let legallyNamedVariable = 42;

// 4.
let firstNameLastName;

// 5.
// Legal: variableName, _variable, $variable
// Illegal: 1variable, variable-name, variable name with space

// Chapter 5 (Math Expression I)
// 1.
// Modulus operator (%)
// 2.
let num = 20 % 6;

// 3.
let calculatedNum = 2 + (2 * 6);

// 4.
let calculatedNum = (2 + 2) * 6;

// 5.
let calculatedNum = (2 + 2) * (4 + 2);

// 6.
let calculatedNum = ((2 + 2) * 4) + 2;

// 7.
let cost = 2 + 2 * 4 + 10;

// 8.
let units = 2 + 2 * 4 + 10;

// 9.
let pressure = 4 / 2 * 4;

// Chapter 6 (Math Expression II)
// 1.
// Short form: x += 1; or x++;
// 2.
let x = 100;
x--;

// 3.
let x = 50;
let y = x++;
// y is assigned the original value of x (50)

// 4.
let y = 50;
let z = --y;
// z is assigned the decremented value of y (49)

// 5.
let num = 10;
let newNum = num;

// 6.
let var1 = 5;
let var2 = var1 + 1;

// 7.
let incrementVariable = 5;
incrementVariable++;
alert(incrementVariable);

// Chapter 7 (Math Expression III)
// 1.
let calculatedNum = 2 + (2 * 6);

// 2.
let calculatedNum = (2 + 2) * 6;

// 3.
let calculatedNum = (2 + 2) * (4 + 2);

// 4.
let calculatedNum = ((2 + 2) * 4) + 2;

// 5.
let cost = 2 + 2 * 4 + 10;

// 6.
let units = 2 + 2 * 4 + 10;

// 7.
let pressure = 4 / 2 * 4;

// Chapter 8 (Concatenating Text Strings)
// 1.
let num = "2" + "2";

// 2.
let message = "Hello," + "Dolly";
alert(message);

// 3.
alert("33" + 3); // Displays "333"

// 4.
let part1 = "Pakistan";
let part2 = "Zindabad";
alert(part1 + " " + part2);

// 5.
let concatenatedString = "String" + 123;

// 6.
let string1 = "Hello, ";
let string2 = "world!";
let concatenatedStrings = string1 + string2;

// Chapter 9 (Prompts)
// 1.
let firstName = prompt("Enter first name");

// 2.
let country = prompt("Country?", "China");

// 3.
let yourName = prompt("Enter Your Name"); // Corrected statement

// 4.
let userInput = prompt("Enter a value", "Default");

// 5.
let variable1 = "String1";
let variable2 = "String2";
let response = prompt(variable1, variable2);

// 6.
let response = prompt("Enter something", "Default");
alert(response);

// Chapter 10 (if statements)
// 1.
let city = "Karachi";
if (city === "Karachi") {
  console.log("The City OF Lights");
}

// 2.
if (x === y) {
  let z = prompt("Value of z?");
}

// 3.
let zipCode = "10010";
if (zipCode === "10010") {
  alert("Karachi");
} else {
  alert("Please write correct city");
}

// 4.
let numericalValue = 42;
if (numericalValue === 42) {
  numericalValue = 24;
}

// Chapter 11 (Comparison Operators)
// 1.
if (variable1 !== variable2) {
  // Code here
}

// 2.
if (value1 >= value2) {
  // Code here
}

// 3.
if (variable !== 42) {
  variable = 42;
}

// 4.
if (number !== differentNumber) {
  alert("Congratulations!");
}

// 5.
let enteredName = prompt("Enter your first name");
if (enteredName !== "John") {
  alert("No match");
}

// Chapter 12 (if...else and else if statements)
// 1.
if (value1 >= value2) {
  alert("Alert 1");
} else {
  alert("Alert 2");
}

// 2.
let marks = prompt("Enter your marks");
let percentage = (marks / totalMarks) * 100;
if (percentage >= 90) {
  alert("Grade A");
} else if (percentage >= 80) {
  alert("Grade B");
} else if (percentage >= 70) {
  alert("Grade C");
} else {
  alert("Fail");
}

// 3.
if (a === 10) {
  alert("a is 10");
} else {
  alert("The correct value of a is ____");
}

// 4.
let city = prompt("Enter a city");
if (city === "Karachi") {
  alert("It is Karachi.");
} else if (city === "Lahore") {
  alert("It is Lahore.");
} else {
  alert("It is another city.");
}

// ... continue with the rest of the chapters ...

// Chapter 13 (Testing sets of conditions)
// 1.
if (a === b && c === d) {
  // Code here
}

// 2.
if (a === b || c !== d) {
  // Code here
}

// 3.
if ((name === "Hamza" || name === "Arsalan") && age < 60) {
  // Code here
}

// 4.
if (var1 < var2 || var1 >= var2) {
  alert("Condition passed");
}

// 5.
let firstName = prompt("Enter your first name");
if (firstName !== "John") {
  alert("No match");
}

// Chapter 14 (If statements nested)
// 1.
let password = prompt("Enter your password");
if (password !== "") {
  if (password.length <= 5) {
    alert("Password must be greater than 5");
  } else {
    alert("OK");
  }
}

// 2.
if (a === 1) {
  if (c === "Max") {
    alert("OK");
  }
}

// 3.
if (a === 1 && c === "Max") {
  alert("OK");
}

// 4.
let variable1 = 42;
let variable2 = 42;
if (variable1 === variable2 && variable1 <= variable2) {
  alert("Message");
}

// Chapter 15 (Array I)
// 1.
let emptyArray = [];

// 2.
let arrayWithString = ["Hello"];

// 3.
let alphabet = ["h", "i", "j", "k"];
alert(alphabet[2]);

// 4.
let alphabet = ["h", "i", "j", "k", "l", "m", "n", "o"];
let arrayLength = alphabet.length;

// 5.
let newArray = ["Element 1"];
newArray[1] = "Element 2";
alert(newArray[1]);

// Chapter 16 (Array II)
// 1.
let array1 = ["String1"];
array1.push("String2");
alert(array1[array1.length - 1]);

// 2.
let alphabet = ["h", "i", "j", "k"];
alphabet.pop();

// 3.
let alphabet = ["h", "i", "j", "k"];
alphabet.push(42);

// Chapter 16 (Array III)
// 1.
let sizes = ["S", "M", "XL", "XXL", "XXXL"];
sizes.shift();

// 2.
let sizes = ["S", "M", "XL", "XXL", "XXXL"];
sizes.unshift(1, 2, 3);

// 3.
let array1 = ["Element 1"];
array1.unshift("Element 0");
alert(array1[0]);

// 4.
let sizes = ["S", "M", "XL", "XXL", "XXXL"];
sizes.splice(2, 0, "L");

// 5.
let sizes = ["S", "M", "XL", "XXL", "XXXL"];
let regSizes = sizes.slice(0, 3);

// 6.
let pets = ["dog", "cat", "ox", "duck", "frog"];
pets.splice(1, 3, "element1", "element2");

// 7.
let pets = ["dog", "cat", "ox", "duck", "frog"];
pets.splice(1, 2);

// 8.
let pets = ["dog", "cat", "ox", "duck", "frog", "flea"];
pets = pets.slice(3, 5);

// Chapter 17 - 20 (for Loops)
// 1.
for (let i = 0; i < 10; i++) {
  // Code here
}

// 2.
for (let i = 0; i <= 11; i++) {
  // Code here
}

// 3.
// Missing characters: ( ; )

for (let i = 0; i <= 4; i++) {
  // Code here
}

// 4.
for (let i = 0; i < 100; i++) {
  // Code here
}

// 5.
for (let i = 3; i > 0; i--) {
  // Code here
}

// 6.
let arrayLength = array.length;

// 7.
let flag = true;

// 8.
let pets = ["dog", "cat", "ox", "duck", "frog"];
for (let i = 0; i < pets.length; i++) {
  // Code here
}

// 9.
for (let i = 0; i < 10; i++) {
  if (i === 1) {
    alert(i);
    break;
  }
}

// 10.
let userNames = ["John", "Doe", "Alice"];
let userInput = prompt("Enter username");
for (let i = 0; i < userNames.length; i++) {
  if (userInput === userNames[i]) {
    alert("Enter");
    break;
  } else {
    alert("Please write correct username");
  }
}

// 11.
let matchFound = false;
for (let i = 0; i < list.length; i++) {
  if (userInput === list[i]) {
    alert("Match found");
    matchFound = true;
    break;
  }
}

// 12.
let firstArr = ["a", "b", "c", "d", "e", "f"];
let secondArr = [1, 2, 3, 4, 5, 6];

for (let i = 0; i < firstArr.length; i++) {
  for (let j = 0; j < secondArr.length; j++) {
    alert(firstArr[i] + secondArr[j]);
  }
}

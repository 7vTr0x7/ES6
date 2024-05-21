console.log("program 1:");
let age = 20;
console.log("Original age:", age);
age = 22;
console.log("Updated age:", age);

console.log("program 2:");
let num1 = 20;
let num2 = 5;
let product = num1 * num2;
let diff = num1 - num2;

console.log("Product of num1 and num2: ", product);
console.log("Difference between num1 and num2: ", diff);

console.log("program 3:");

const numberOfGates = 5;
// numberOfGates = 6;
// console.log(numberOfGates);

console.log("program 4:");

const person = {
  name: "John",
  age: 30,
};
console.log("Original Person", person);

person.age = 31;
console.log("Updated Person", person);

console.log("program 5:");

const colors = {
  primary: "red",
  secondary: "blue",
};

console.log("Original Object", colors);

colors.tertiary = "green";
console.log("Updated Object", colors);

console.log("program 6:");

const numbers = [1, 2, 3, 4];
numbers[2] = 99;
console.log(numbers);

console.log("program 7:");

const coordinates = { x: 10, y: 20 };
console.log(coordinates);
const newCoordinates = { x: 30, y: 40 };
// coordinates = newCoordinates;

console.log("program 8:");

let obj = { a: 1, b: 2 };
const obj2 = { a: 3, b: 4 };
obj = obj2;
console.log(obj);
console.log(obj2);

console.log("program 9:");
const numericVar = 2;
// numericVar = 3;

console.log("program 10:");

const greeting = "Hello";
console.log(greeting);
let user = " Jay";
user = " Shawn";
console.log(greeting + user);

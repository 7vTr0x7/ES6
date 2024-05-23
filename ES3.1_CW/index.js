const addNum = (a, b = 2) => a + b;

console.log(addNum(3));

const multiplyNum = (a, b = 2) => a * b;

console.log(multiplyNum(3, 3));

const concatenateStrings = (name, greeting = "Hello") => greeting + " " + name;
console.log(concatenateStrings("joe"));

const greetUser = (name = "John", greeting = "Hello") => greeting + " " + name;
console.log(greetUser());

const addNumbers = (a, b = 2, c = 3) => a + b + c;

console.log(addNumbers(1));

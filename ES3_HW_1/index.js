const rectangleArea = (l = 5, w = 3) => l * w;

console.log(rectangleArea());

console.log(rectangleArea(4));

const concatenateStrings = (str1, str2 = " Neog") => str1 + str2;

console.log(concatenateStrings("Hello", "World"));

console.log(concatenateStrings("Hello"));

const cylinderVolume = (r = 2, h = 4) => Math.PI * r ** 2 * h;

console.log(cylinderVolume(3));

console.log(cylinderVolume(3, 5));

const shoppingCartTotal = (price = 0, quantity = 1) => price * quantity;

console.log(shoppingCartTotal(10));

console.log(shoppingCartTotal(15, 3));

console.log(shoppingCartTotal());

const generateUserProfile = (
  userName = "Guest",
  age = 25,
  country = "Unknown"
) => `UserName: ${userName}, Age: ${age}, Country: ${country}`;
console.log(generateUserProfile());
console.log(generateUserProfile("Alice", 30, "USA"));

const sum = (a, b = 5) => a + b;

console.log(sum(2, 4));
console.log(sum(3));

const calculatePower = (a, b = 1) => a ** b;

console.log(calculatePower(2, 3));

console.log(calculatePower(5));

const triangleArea = (base, height = 4) => (1 / 2) * base * height;

console.log(triangleArea(5)); // Output: 10
console.log(triangleArea(3, 6)); // Output: 9

const concatenateStrings2 = (str1, str2 = "") => str1 + str2;
console.log(concatenateStrings2("Good")); // Output: Good

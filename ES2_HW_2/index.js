const isOdd = (num) => (num % 2 !== 0 ? "Odd" : "Even");
console.log(isOdd(3));
console.log(isOdd(6));

const lengthOfString = (str) => str.length;
console.log(lengthOfString("hello"));

const capitalize = (str) => str.toUpperCase();
console.log(capitalize("hello"));

const currentDate = () => new Date().toLocaleDateString();
console.log(currentDate());

const currentTime = () =>
  new Date().getHours().toString() +
  "/" +
  new Date().getMinutes().toString() +
  "/" +
  new Date().getSeconds().toString();
console.log(currentTime());

const fahrenheitToCelsius = (f) => ((f - 32) * 5) / 9;
console.log("Celsius: ", fahrenheitToCelsius(50));

const isEmptyString = (str) => (str.length !== 0 ? "Not Empty" : "Empty");

console.log(isEmptyString("Hello"));
console.log(isEmptyString(""));

const getRandomNumber = () => Math.floor(Math.random() * 30);
console.log(getRandomNumber());

const getSquareRoot = () => Math.sqrt(Math.floor(Math.random() * 100));
console.log(getSquareRoot());

const lowerCase = (str) => str.toLowerCase();
console.log(lowerCase("WORLD"));

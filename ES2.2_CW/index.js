const getRandomNumber = () => Math.floor(Math.random() * 10);
console.log(getRandomNumber());

const getCurrentDate = () => new Date().toLocaleDateString();
console.log(getCurrentDate());

const getGreeting = () => "Hello, Welcome to Neog Camp!";
console.log(getGreeting());

const getSquareValue = (num) => num ** 2;
console.log(getSquareValue(4));

const isPositive = (num) => num > 0;
console.log(isPositive(2));
console.log(isPositive(-2));

const isEven = (num) => num % 2 === 0;
console.log(isEven(2));
console.log(isEven(5));

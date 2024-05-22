const calculateAreaOfRectangle = (l, w) => l * w;
console.log(calculateAreaOfRectangle(8, 4));

const isDivisible = (a, b) => a % b === 0;
console.log(isDivisible(15, 5));

const calculateDiff = (a, b) => a % b;
console.log(calculateDiff(15, 5));

const concatString = (a, b, c) => a + " " + b + " " + c;
console.log(concatString("I", "am", "happy"));

function isBigger(a, b) {
  if (a > b) {
    return true;
  } else {
    return false;
  }
}

console.log("Is 2 bigger than 3?", isBigger(2, 3));

const printProduct = (a, b) => a * b;

console.log("Product of two numbers: ", printProduct(2, 6));

const getGreeting = (greeting, name) => greeting + name;

console.log(getGreeting("Hello ", "John"));

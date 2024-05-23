const fullName = (firstName, lastName) => ({
  firstName: firstName,
  lastName: lastName,
});

console.log(fullName("Virat", "Kolhi"));

const stringInfo = (str) => ({
  length: str.length,
  upperCase: str.toUpperCase(),
});

console.log(stringInfo("hello"));

const personDetails = (firstName, lastName, age, PNo) => ({
  fullName: `${firstName} ${lastName}`,
  age: age,
  phoneNumber: PNo,
});

console.log(personDetails("Virat", "Kolhi", 30, 97892394));

const strConcatAndCharCount = (str1, str2) => ({
  concatenation: `${str1} ${str2}`,
  charCount: str1.length + str2.length,
});

console.log(strConcatAndCharCount("Hello", "World"));

const calculateCircleProperties = (radius) => ({
  circumference: (2 * Math.PI * radius).toFixed(4),
  area: (Math.PI * radius * radius).toFixed(4),
});

console.log(calculateCircleProperties(5));

const calculateDifferenceAndQuotient = (num1, num2) => ({
  difference: num1 - num2,
  quotient: num1 / num2,
});

console.log(calculateDifferenceAndQuotient(10, 2));

const analyzeSentence = (sentence) => ({
  wordCount: sentence.split(" ").length,
});

console.log(analyzeSentence("JavaScript is fun"));

const calculateSquareAndCube = (num) => ({ square: num ** 2, cube: num ** 3 });

console.log(calculateSquareAndCube(4));

const checkNumber = (num) => ({ isPositive: num > 0, isNegative: num < 0 });

console.log(checkNumber(-7));
console.log(checkNumber(5));

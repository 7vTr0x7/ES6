const logFirstAndRest = (a, ...rest) => {
  console.log(a);
  console.log(rest);
};

logFirstAndRest(1, 2, 3, 4, 5);

const logFirstAndSecond = (a, b, ...rest) => {
  console.log(a);
  console.log(b);
  console.log(rest);
};

logFirstAndSecond(12, 22, 33, 44, 55);

const calculateProduct = (...rest) => {
  let product = rest[0];
  for (let i = 1; i < rest.length; i++) {
    product *= rest[i];
  }

  return product;
};

console.log(calculateProduct(2, 3, 4)); // Output: 24
console.log(calculateProduct(5, 2, 1, 3)); // Output: 30

const createSentence = (...args) => args.join(" ");
console.log(createSentence("JavaScript", "is", "awesome"));

const findSum = (str, ...rest) => {
  let sum = 0;
  for (let value of rest) {
    sum += value;
  }

  console.log(str, sum);
};
findSum("Sum of Numbers: ", 2, 4, 6, 8, 10);

const containsValue = (value, ...rest) => {
  let exist = false;
  for (let i = 0; i < rest.length; i++) {
    if (rest[i] === value) {
      exist = true;
    }
  }
  return exist;
};
console.log(containsValue(3, 1, 2, 3, 4));
console.log(containsValue("apple", "banana", "orange"));

const calculateAverage = (...rest) => {
  let total = 0;
  for (let value of rest) {
    total += value;
  }

  const avrg = total / rest.length;
  return avrg;
};
console.log(calculateAverage(10, 5, 15));
console.log(calculateAverage(2, 4, 6, 8));

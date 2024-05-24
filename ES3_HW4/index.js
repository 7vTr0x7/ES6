const sumAndDifference = (arr) => {
  const [a, b] = arr;
  return `Sum: ${a + b}, Difference: ${a - b}`;
};
console.log(sumAndDifference([5, 3]));

console.log(sumAndDifference([10, 7]));

const extractFirstAndLast = (str) =>
  `First character: ${str.charAt(0)}, Last character: ${str.charAt(
    str.length - 1
  )}`;
console.log(extractFirstAndLast("hello"));

console.log(extractFirstAndLast("world"));

const calculateRectangleArea = (obj) => {
  const { length, width } = obj;
  return `The area of the rectangle is: ${length * width}`;
};
console.log(calculateRectangleArea({ length: 5, width: 3 }));

console.log(calculateRectangleArea({ length: 8, width: 4 }));

const getFirstTwoColors = (arr) => {
  const [first, second] = arr;
  return `The first two colors are: ${first} and ${second}`;
};
console.log(getFirstTwoColors(["red", "blue", "green", "yellow"]));
console.log(getFirstTwoColors(["orange", "purple", "pink"]));

const extractNestedInfo = (obj) => {
  const {
    data: { name, age, country },
  } = obj;
  return `${name} is ${age} years old and lives in ${country}.`;
};
console.log(
  extractNestedInfo({ data: { name: "John", age: 35, country: "USA" } })
);

const productAndDifference = (arr) => {
  const [a, b, c] = arr;

  return `Product and Difference: ${a * b - c}`;
};

console.log(productAndDifference([5, 3, 5, 6]));

console.log(productAndDifference([10, 7, 35, 30]));

const extractData = (obj) => {
  const {
    product: { itemName, description, manufacturingCountry },
  } = obj;

  return `Item name: ${itemName}, Description: ${description}, Manufacturing Country: ${manufacturingCountry}`;
};

console.log(
  extractData({
    id: 1,
    product: {
      itemName: "Pencil",
      description: "Extra Dark Pencil",
      manufacturingCountry: "USA",
    },
  })
);

console.log(
  extractData({
    id: 2,
    product: {
      itemName: "Sharpener",
      description: "Faber Castell Premium",
      manufacturingCountry: "Germany",
    },
  })
);

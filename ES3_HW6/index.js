const printTemperature = (obj) => {
  const { location, temperature } = obj;
  return `Location: ${location}, Temperature: ${temperature} degree celsius`;
};

console.log(printTemperature({ location: "New York", temperature: 15 }));

console.log(printTemperature({ location: "London", temperature: 10 }));

const printFruit = (obj) => {
  const { fruitName, fruitColor, inStock } = obj;
  return `Fruit Name: ${fruitName}, Fruit Color: ${fruitColor}, Available: ${inStock}`;
};
console.log(
  printFruit({ fruitName: "Apple", fruitColor: "Red", inStock: true })
);

console.log(
  printFruit({ fruitName: "Grapes", fruitColor: "Green", inStock: false })
);

const printStudentScores = ([student, ...scores]) =>
  `Student: ${student}, Scores: ${scores.join(", ")}`;

console.log(printStudentScores(["Alice", 90, 85, 95]));

console.log(printStudentScores(["Bob", 80, 75, 85]));

const printProductDetails = ({ name: productName, price: productPrice }) =>
  `Product: ${productName}, Price: $${productPrice}`;
console.log(printProductDetails({ name: "Laptop", price: 899 }));

console.log(printProductDetails({ name: "Phone", price: 599 }));

const printPersonDetails = ({
  name: personName = "Anonymous",
  age: personAge = "Unknown",
}) => `Name: ${personName}, Age: ${personAge}`;

console.log(printPersonDetails({ name: "John", age: 30 }));

console.log(printPersonDetails({}));

const printCityPopulation = ([
  cityName,
  { population: cityPopulation, country },
]) => `City: ${cityName}, Population: ${cityPopulation}, Country: ${country}`;

console.log(
  printCityPopulation(["New York", { population: 8623000, country: "USA" }])
);

console.log(
  printCityPopulation(["Tokyo", { population: 37833000, country: "Japan" }])
);

const printCarDetails = ([carName, { model: carModel, price: carPrice }]) =>
  `Name: ${carName}, Model: ${carModel}, Price: Rs. ${carPrice}`;

console.log(
  printCarDetails(["All-Terrain SUV", { model: "SUV", price: 4500000 }])
);

console.log(
  printCarDetails(["GreenDrive Electric", { model: "Electric", price: 500000 }])
);

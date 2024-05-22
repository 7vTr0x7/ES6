const car = {
  brand: "Toyota",
  model: "Corolla",
};

console.log("1.1", car.brand);
console.log("1.2", car.model);

car.brand = "Honda";
console.log("1.4", car);

car.year = 2022;
car.color = "blue";

console.log("1.6 Properties of `car` object");
for (let value in car) {
  console.log(value + ": " + car[value]);
}

const citizen = {
  name: "Ramesh Kumar",
  age: 66,
  occupation: "Retired",
};

console.log("\n");

citizen.age = 68;
console.log("2.1: Updated age:", citizen.age);

citizen.age += 2;
console.log("2.2: Updated age after adding 2:", citizen.age);

citizen.city = "Delhi";

console.log("2.3: Properties of `citizen`object ");

for (let key in citizen) {
  console.log(key + ": " + citizen[key]);
}

console.log("\n");

const person = {
  name: "Abhi",
  age: 62,
};

person.bp = "Normal";

if (person.bp === "Normal" && person.age > 60) {
  console.log("Fit to travel");
} else {
  console.log("Not Fit to travel");
}

const isBirthday = true;
let age = 25;

if (isBirthday) {
  age += 1;
}

console.log("Program 1:");
console.log(`Current Age: ${age}`);
console.log("\n");

console.log("Program 2:");

const passengerAge = 22;

let ticketPrice = 100;
let discount = ticketPrice * 0.15;

let discountedPrice = ticketPrice - discount;

if (passengerAge > 60) {
  console.log(`Ticket price for age greater than 60: ${discountedPrice}`);
} else {
  console.log(`Ticket price for age less than or equal to 60: ${ticketPrice}`);
}
console.log("\n");

console.log("Program 3:");

const num1 = 5;
const num2 = 20;
const num3 = 15;

if (num3 > num2 && num3 > num1) {
  console.log(`Third number ${num3} is the largest`);
} else {
  console.log(`Third number ${num3} is not the largest`);
}
console.log("\n");

console.log("Program 4:");
console.log("\n");

const Saree = 500;
const Kurta = 300;
const Jeans = 900;
const Shoes = 400;

let totalPrice = Saree + Kurta + Jeans + Shoes;

console.log("Shopping Cart");
console.log("--------------------------");
console.log(`Item: Saree, Price: ${Saree}`);
console.log(`Item: Kurta, Price: ${Kurta}`);
console.log(`Item: Jeans, Price: ${Jeans}`);
console.log(`Item: Shoes, Price: ${Shoes}`);
console.log("--------------------------");

if (totalPrice < 1999) {
  let optionalCharge = 99;
  totalPrice += optionalCharge;
  console.log("Delivery Charges: Optional Delivery Charge of 99");
} else {
  console.log("Delivery Charges: No Delivery Charge");
}

console.log("--------------------------");
console.log("Total Cart Price:", totalPrice);

console.log("\n");

console.log("Program 5:");

const number = 10;

if (number > 0) {
  console.log("The number is positive");
} else if (number < 0) {
  console.log("The number is negative");
} else {
  console.log("The number is zero");
}

console.log("\n");

console.log("Program 6:");

const marks1 = 85;
const marks2 = 90;
const marks3 = 78;

const student1 = "Rahul";
const student2 = "Priya";
const student3 = "Tina";

if (marks1 > marks2 && marks1 > marks3) {
  console.log(`${student1}, has the highest marks: ${marks1}`);
} else if (marks2 > marks1 && marks2 > marks3) {
  console.log(`${student2}, has the highest marks: ${marks2}`);
} else {
  console.log(`${student3}, has the highest marks: ${marks3}`);
}

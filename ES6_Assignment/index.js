const concatenateStrings = (...rest) => rest.join(" ");

console.log(concatenateStrings("Hello", "world", "!"));

console.log(concatenateStrings("JavaScript", "is", "fun", "to", "learn."));

const mergeArrays = (arr1, arr2) => [...arr1, ...arr2];
console.log(mergeArrays([1, 2, 3], [4, 5, 6]));

console.log(mergeArrays(["a", "b"], ["c", "d", "e"]));

const concatenateWithSeparator = (separator, ...rest) => rest.join(separator);
console.log(concatenateWithSeparator("-", "apple", "orange", "banana"));

console.log(concatenateWithSeparator(", ", "red", "green", "blue", "yellow"));

const extractObjectValues = (obj) => {
  const { name, age } = obj;
  return `Name: ${name}, Age: ${age}`;
};
console.log(extractObjectValues({ name: "Alice", age: 25 }));

console.log(extractObjectValues({ name: "Bob", age: 30 }));

const extractArrayValues = (arr) => {
  const [...values] = arr;

  return values.join(", ");
};
console.log(extractArrayValues([1, 2, "Hello", 3]));

console.log(extractArrayValues(["apple", "orange", "banana"]));

const extractNestedValues = (obj) => {
  const {
    data: { firstName, lastName, age },
  } = obj;

  return `${firstName} ${lastName} will be ${age + 5} years old in five years.`;
};
console.log(
  extractNestedValues({
    data: { firstName: "Priya", lastName: "Gupta", age: 20 },
  })
);

console.log(
  extractNestedValues({ data: { firstName: "John", lastName: "Doe", age: 25 } })
);

const printInfo = ({
  name: { firstName: personFirstName, lastName: personLastName },
  department: personDepartment,
}) =>
  `${personFirstName} ${personLastName} works in ${personDepartment} department.`;
console.log(
  printInfo({ name: { firstName: "John", lastName: "Doe" }, department: "IT" })
);

console.log(
  printInfo({
    name: { firstName: "Alice", lastName: "Smith" },
    department: "Legal",
  })
);

const printUserDetails = ({
  name: personName = "Anonymous",
  username = "anonymous",
  post = "Hello World!",
}) => `${username} posted "${post}"`;

console.log(
  printUserDetails({
    name: "John",
    username: "john",
    post: "Hello this is John. I am from England.",
  })
);

console.log(printUserDetails({}));

const checkEvenOdd = (num) =>
  num % 2 === 0 ? `${num} is an even number.` : `${num} is an odd number.`;

console.log(checkEvenOdd(8));

console.log(checkEvenOdd(15));

const checkDiscountEligibility = (amount, isPremiumCustomer) =>
  amount > 100 && isPremiumCustomer
    ? `You are eligible for a 10% discount.`
    : `You are eligible for a 5% discount.`;
console.log(checkDiscountEligibility(120, true));

console.log(checkDiscountEligibility(90, false));

const object1 = { name: "Alice", age: 30 };
const object2 = { city: "London", country: "UK" };

const mergeObject = (obj1, obj2) => console.log({ ...obj1, ...obj2 });
mergeObject(object1, object2);

const object = { name: "Dave", age: 25 };
const addKeyValuePair = (obj, key, value) => ({ ...obj, [key]: value });
console.log(addKeyValuePair(object, "city", "New York"));

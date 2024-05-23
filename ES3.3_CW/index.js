const numbersArray = [1, 2, 3, 4, 5];
const newNumbersArray = [...numbersArray];
newNumbersArray.push(6);
console.log(newNumbersArray);
console.log("Original array", numbersArray);

const duplicateArray = (arr) => [...arr];
console.log(duplicateArray(["Apple", "Orange"]));

const addElement = (arr, element) => [...arr, element];
console.log(addElement(["kiwi", "Banana"], "apple"));

const combineArray = (arr1, arr2) => [...arr1, ...arr2];

console.log(combineArray([1, 2, 3, 4], [5, 6, 7, 8]));

const copyObject = (obj, key, value) => ({ ...obj, [key]: value });
console.log(copyObject({ name: "Alice", age: 22 }, "favColor", "blue"));

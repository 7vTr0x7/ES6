const arr = [1, 2, 3, 4, 5, 6, 7];

const calculateSum = (numArray) => {
  let sum = 0;
  for (let i = 0; i < numArray.length; i++) {
    sum += numArray[i];
  }
  return sum;
};

console.log(calculateSum(arr));

const reverseStr = (str) => {
  let reversedStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }

  return reversedStr;
};

console.log(reverseStr("Hello"));

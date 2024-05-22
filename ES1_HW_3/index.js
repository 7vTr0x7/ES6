const arr = [5, 12, 7, 25, 18, 3];

const printArray = () => {
  console.log(arr);
};

printArray();

const getNewArray = () => {
  const newArray = [];
  for (let i = 0; i < arr.length; i++) {
    let value = arr[i];
    newArray.push((value += 10));
  }
  return newArray;
};

console.log(getNewArray());

const convertOddToEven = () => {
  const even = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      let value = arr[i];
      even.push((value += 1));
    } else {
      even.push(arr[i]);
    }
  }
  return even;
};

console.log(convertOddToEven());

const createNewArray = () => {
  const newArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      newArray.push(arr[i]);
    }
  }
  return newArray;
};
console.log(createNewArray());

const sumOfAll = () => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
};
console.log("Sum: ", sumOfAll());

const sumOfOddNEven = () => {
  let sumOfOdd = 0;
  let sumOfEven = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumOfEven += arr[i];
    } else {
      sumOfOdd += arr[i];
    }
  }

  console.log("Sum Of Even: ", sumOfEven);
  console.log("Sum Of Odd: ", sumOfOdd);
};
sumOfOddNEven();

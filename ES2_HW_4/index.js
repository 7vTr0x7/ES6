const calculateAverage = (arr) => {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }

  const average = total / arr.length;
  return average;
};

console.log(calculateAverage([5, 10, 15]));

const reverseString = (str) => {
  let reversedStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }
  return reversedStr;
};
console.log(reverseString("world"));

const findLongestWord = (arr) => {
  let longestWord = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (longestWord.length < arr[i].length) {
      longestWord = arr[i];
    }
  }
  return longestWord;
};
console.log(findLongestWord(["apple", "banana", "grapefruit"]));

const calculateStringLength = (str) => {
  let length = 0;
  for (let i = 1; i <= str.length; i++) {
    length = i;
  }

  return length;
};

console.log(calculateStringLength("hello"));

const students = [
  { name: "Alice", age: 20, grade: 85 },
  { name: "Bob", age: 22, grade: 92 },
  { name: "Charlie", age: 19, grade: 88 },
];

const calculateAverageGrade = (students) => {
  let totalOfGrade = 0;
  for (let i = 0; i < students.length; i++) {
    totalOfGrade += students[i].grade;
  }

  const average = totalOfGrade / students.length;
  return average;
};

console.log("Average Grade: ", calculateAverageGrade(students));

const getNames = (students) => {
  const studentNames = [];
  for (let i = 0; i < students.length; i++) {
    studentNames.push(students[i].name);
  }

  return studentNames;
};

console.log(getNames(students));

const calculateAverageAge = (students) => {
  let totalOfAge = 0;
  for (let i = 0; i < students.length; i++) {
    totalOfAge += students[i].age;
  }

  const average = totalOfAge / students.length;
  return average;
};
console.log(calculateAverageAge(students));

const highGrades = (students) => {
  const filteredStudents = [];
  for (let i = 0; i < students.length; i++) {
    if (students[i].grade > 90) {
      filteredStudents.push(students[i]);
    }
  }

  return filteredStudents;
};

console.log(highGrades(students));

const isAnyBelow18 = (students) => {
  for (let i = 0; i < students.length; i++) {
    if (students[i].age < 18) {
      return true;
    } else {
      return false;
    }
  }
};
console.log(isAnyBelow18(students));

const findStudentByName = (students, name) => {
  for (let i = 0; i < students.length; i++) {
    if (students[i].name === name) {
      return students[i];
    }
  }
};

console.log(findStudentByName(students, "Charlie"));

const getHighScoreStudents = (students) => {
  const studentNames = [];
  for (let i = 0; i < students.length; i++) {
    if (students[i].grade > 85) {
      studentNames.push(students[i].name);
    }
  }

  return studentNames;
};
console.log(getHighScoreStudents(students));

const students = [
  {
    name: "Rahul",
    rollNo: 101,
    hindi: 80,
    english: 75,
    maths: 90,
  },
  {
    name: "Amit",
    rollNo: 102,
    hindi: 85,
    english: 70,
    maths: 95,
  },
  {
    name: "Priya",
    rollNo: 103,
    hindi: 78,
    english: 92,
    maths: 87,
  },
];

const marksForComputer = [88, 92, 95];

for (let i = 0; i < students.length; i++) {
  students[i].computer = marksForComputer[i];
}

console.log("1.1: Students Data with Computer Marks");

for (let i = 0; i < students.length; i++) {
  const studentDetails = `Name: ${students[i].name}, Roll No: ${students[i].rollNo}, Hindi: ${students[i].hindi}, English: ${students[i].english}, Maths: ${students[i].maths}, Computer: ${students[i].computer}`;
  console.log(studentDetails);
}

const marksForScience = [82, 90, 88];

for (let i = 0; i < students.length; i++) {
  students[i].science = marksForScience[i];
}

console.log("\n");

console.log("1.2: Updated Students Data with Science Marks");

for (let i = 0; i < students.length; i++) {
  const studentDetails = `Name: ${students[i].name}, Roll No: ${students[i].rollNo}, Hindi: ${students[i].hindi}, English: ${students[i].english}, Maths: ${students[i].maths}, Computer: ${students[i].computer}, Science: ${students[i].science}`;
  console.log(studentDetails);
}

const kaveri = {
  name: "Kaveri",
  rollNo: 104,
  hindi: 84,
  english: 88,
  maths: 78,
  computer: 90,
  science: 86,
};
console.log("\n");

console.log("2.1: Kaveri's Data");
console.log(kaveri);

students.push(kaveri);

console.log("\n");

console.log("2.2: Updated Students Data with Kaveri ");

for (let i = 0; i < students.length; i++) {
  const studentDetails = `Name: ${students[i].name}, Roll No: ${students[i].rollNo}, Hindi: ${students[i].hindi}, English: ${students[i].english}, Maths: ${students[i].maths}, Computer: ${students[i].computer}, Science: ${students[i].science}`;
  console.log(studentDetails);
}

console.log("\n");

const totalMarks = () => {
  console.log("2.3: Updated Students Data with Total marks ");

  for (let i = 0; i < students.length; i++) {
    let totalMarks =
      students[i].english +
      students[i].hindi +
      students[i].maths +
      students[i].computer +
      +students[i].science;

    students[i].totalMarks = totalMarks;

    const details = `Name: ${students[i].name}, Roll No: ${students[i].rollNo}, Total Marks: ${students[i].totalMarks},`;

    console.log(details);
  }
};

totalMarks();

console.log("\n");

const avgMarks = () => {
  console.log("2.4: Updated Students Data with Average marks ");

  for (let i = 0; i < students.length; i++) {
    let totalMarks =
      students[i].english +
      students[i].hindi +
      students[i].maths +
      students[i].computer +
      +students[i].science;

    students[i].avgMarks = totalMarks / 5;

    const details = `Name: ${students[i].name}, Roll No: ${students[i].rollNo}, Average Marks: ${students[i].avgMarks},`;

    console.log(details);
  }
};

avgMarks();

const calculateGrade = () => {
  for (let i = 0; i < students.length; i++) {
    if (students[i].avgMarks >= 90 && students[i].avgMarks <= 100) {
      students[i].grade = "A";
    } else if (students[i].avgMarks >= 80 && students[i].avgMarks <= 89) {
      students[i].grade = "B";
    } else if (students[i].avgMarks >= 70 && students[i].avgMarks <= 79) {
      students[i].grade = "C";
    } else if (students[i].avgMarks >= 60 && students[i].avgMarks <= 69) {
      students[i].grade = "D";
    } else if (students[i].avgMarks >= 50 && students[i].avgMarks <= 59) {
      students[i].grade = "E";
    } else if (students[i].avgMarks < 50) {
      students[i].grade = "F";
    }
  }
};

calculateGrade();

console.log("\n");

const reportCard = () => {
  for (let i = 0; i < students.length; i++) {
    const report = `
    ===== Report Card For ${students[i].name} =====
    Roll No. : ${students[i].rollNo}
    -------
    Marks
    -------
    Hindi: ${students[i].hindi}
    English: ${students[i].english}
    Maths: ${students[i].maths}
    Computer: ${students[i].computer}
    Science: ${students[i].science}
    -------
    Total: ${students[i].totalMarks}
    Average: ${students[i].avgMarks}
    Grade: ${students[i].grade}

    ------------------------------------
    `;

    console.log(report);
  }
};

reportCard();

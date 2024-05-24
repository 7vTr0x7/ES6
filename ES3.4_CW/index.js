const extractArrayValue = (arr) => {
  const [a, b, c] = arr;

  console.log(a);
  console.log(b);
  console.log(c);
};

extractArrayValue([1, 2, 3]);

const extractObjectValues = (obj) => {
  const { name, age, city } = obj;

  console.log(`${name} age ${age} years old and lives in ${city}`);
};

extractObjectValues({ name: "Alice", age: 25, city: "Paris" });

const obj = {
  id: 1,
  info: {
    title: "Javascript Basics",
    description: "Learn Fundamentals",
  },
};

const getObjValues = (obj) => {
  const {
    info: { title, description },
  } = obj;

  console.log(title);
  console.log(description);
};

getObjValues(obj);

//Restructuring

const printDetails = ({ name: personName, age: personAge }) => {
  console.log(`Person: ${personName}, Age: ${personAge}`);
};

printDetails({ name: "Alice", age: 25 });

const printFruit = ([fruitName, fruitColor]) => {
  console.log(`Fruit: ${fruitName} is ${fruitColor} in color`);
};

printFruit(["Apple", "red"]);

const printBookInfo = ({
  title: bookTitle,
  author: { name: authorName, nationality },
}) => {
  console.log(
    `Book: ${bookTitle}, Author: ${authorName}, Nationality: ${nationality}`
  );
};

printBookInfo({
  title: "Javascript Basics",
  author: { name: "John", nationality: "American" },
});

const displayPerson = ({ name: personName = "Bob", age: personAge = 25 }) => {
  console.log(`Person name: ${personName}, Person Age: ${personAge}`);
};

displayPerson({});

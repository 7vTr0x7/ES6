const createPerson = (name, age) => ({ name, age });

console.log(createPerson("Alice", 25));

console.log(createPerson("Bob", 30));

const createFruit = (name = "Apple", color = "Red") => ({ name, color });
console.log(createFruit());

console.log(createFruit("Banana", "Yellow"));

const createBookObj = (title, author, genre) => ({ title, author, genre });
console.log(
  createBookObj("The Great Gatsby", "F. Scott Fitzgerald", "Classic")
);

console.log(createBookObj("The Beatles Anthology", "The Beatles", "Music"));

const createBook = (
  bookName = "The Hitchhiker's Guide to the Galaxy",
  author = "Douglas Adams"
) => ({ bookName, author });
console.log(createBook());

console.log(createBook("A Suitable Boy", "Vikram Seth"));

let aaloo = 1;
let bhaaloo = 2;

console.log({ aaloo, bhaaloo });

const calculateArea = (length, width) => ({
  length,
  width,
  area: length * width,
});
console.log(calculateArea(5, 8));

const printObjOfArrays = (arr1, arr2) => ({ arr1, arr2 });
console.log(printObjOfArrays([1, 2, 3], ["a", "b"]));

const createTriangle = (size1, size2, size3) => ({
  size1,
  size2,
  size3,
  perimeter: size1 + size2 + size3,
});
console.log(createTriangle(3, 4, 5));

const createPoint = (x, y) => ({ x, y });
console.log(createPoint(3, 7));

const createEmail = (userName, domain) => ({
  userName,
  domain,
  fullAddress: `${userName}@${domain}`,
});
console.log(createEmail("john.doe", "example.com"));

const createStringObject = (str) => ({ text: str });
console.log(createStringObject("Hello"));

const calculateSumAndProduct = (a, b) => ({ sum: a + b, product: a * b });
console.log(calculateSumAndProduct(2, 4));

const createPersonObject = (name, age) => ({ name: name, age: age });
console.log(createPersonObject("Jay", 22));

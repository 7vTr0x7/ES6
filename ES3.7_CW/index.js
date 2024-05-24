const createMessage = (item, quantity) =>
  console.log(`You have ${quantity} of ${item}${quantity > 1 ? "s" : ""}`);

createMessage("Apple", 3);
createMessage("Guava", 1);

const generateUrl = (endPoint, params) =>
  console.log(`https://api-example.com/${endPoint}?${params}`);

generateUrl("users", "page=1&limit10");

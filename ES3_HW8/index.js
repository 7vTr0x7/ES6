const displayWeather = (city, degrees) =>
  `The weather in ${city} is ${degrees} degrees Celsius.`;
console.log(displayWeather("New York", 20));

console.log(displayWeather("London", 15));

const formatCurrency = (amount, currency) => `You have ${amount} ${currency}`;
console.log(formatCurrency(50.5, "USD"));

console.log(formatCurrency(100, "EUR"));

const displayBookSummary = (title, author, genre) =>
  `The Book "${title}" written by ${author} belongs to the ${genre} genre.`;
console.log(
  displayBookSummary("To Kill a Mockingbird", "Harper Lee", "Fiction")
);

const displayMovieInfo = (title, releaseYear, director) =>
  `The movie "${title}" was released in ${releaseYear} and directed by ${director}.`;
console.log(displayMovieInfo("Inception", 2010, "Christopher Nolan"));

const constructEmail = (recipient, subject) =>
  `
To: ${recipient}
Subject: ${subject}

Dear ${recipient},

...`;
console.log(constructEmail("alice@example.com", "Meeting Reminder"));

console.log("\n");

const assessGrade = (grade) =>
  grade >= 60 ? `You are passing.` : `You are failing.`;
console.log(assessGrade(75));

console.log(assessGrade(60));

console.log(assessGrade(45));

const showMessage = (item, quantity) =>
  `You have ${quantity} ${item}${quantity > 1 ? "s" : ""}`;
console.log(showMessage("bangle", 10));

console.log(showMessage("lipstick", 1));

const assessMarks = (score, grade) =>
  grade === "A" && score > 60 ? `You are passing.` : `You are failing.`;

console.log(assessMarks(95, "A")); // Output:

console.log(assessMarks(62, "C")); // Output: You are failing.

console.log(assessMarks(45, "D")); // Output: You are failing.

const showMsg = (bangles, banglesQuantity, lipstick, lipstickQuantity) =>
  banglesQuantity > 10 && lipstickQuantity > 5
    ? `You have a good collection.`
    : `You need to update your collection.`;

console.log(showMsg("bangle", 11, "lipstick", 6));
console.log(showMsg("bangle", 5, "lipstick", 1));
console.log(showMsg("bangle", 12, "lipstick", 4));

const shareStationeryMessage = (pencilCount, eraserCount) =>
  (pencilCount > 10 || pencilCount > 5) && (eraserCount > 5 || eraserCount > 10)
    ? `Please share stationery with friends.`
    : `Please ask your friends for stationery.`;

console.log(shareStationeryMessage(12, 8));

console.log(shareStationeryMessage(7, 15));

console.log(shareStationeryMessage(5, 3));

const restExample = (a, b, ...rest) => {
  console.log(a);
  console.log(b);
  console.log(rest);
};

restExample(1, 2, 3, 4, 5);

const concatString = (...strs) => console.log(strs.join(" "));
concatString("Hello", "world");
concatString("Javascript", "is", "fun");

const countArgs = (...args) => console.log(args.length);
countArgs(1, 2, "hello", 5, 5);
countArgs(1, 2, "hi", 5);

let username = 2;
// username = "Rohit" //This is not allowed.

/**
 * Constants in JS cannot be reassigned. They are mutable or immutable based on the type of data they hold.
 */
const age = 25; // This is a constant variable.

/**
 * Typescript mental model that we want to build is that:
 * 1. We can assign a set of values that a variable can hold through typescript.
 * 2. This is called a literal type: We are creating a value and creating a type out of that specific value.
 */
let humidity: 79 = 79;
humidity = 79; //This is allowed.
// humidity = 78; //This is not allowed.
let x = 10 as 79; //This is allowed and done in cases where the developer is sure about the type. DO NOT DO THIS.
console.log(x);

let y = new Date();
let y2 = y as any; //This is called type casting.

//TS helps you to catch errors at compile time.
const add = (a: number, b: number): number => {
  return a + b;
};
// const result = add(2, "3"); // This will throw an error.
// new Promise(result); //This will throw an error.

/**
 * Tips:
 * 1. Always be very explicit about the return type of the function that we are creating.
 * 2. Its better to see errors at the point where the function is declared and not where it is called.
 */

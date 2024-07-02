/**
 * Type queries help us get the type of a variable or property in TypeScript.
 * 1. keyof: This is used to get the type of the keys of an object.
 * 2. typeof: This is used to get the type of a variable or property. This is always a string.
 */

type DatePropertyNames = keyof Date; //This will return all the properies of Date type.

async function main() {
  const response = await Promise.all([
    fetch("https://jsonplaceholder.typicode.com/todos/1"),
    Promise.resolve(10),
  ]);

  type Response = typeof response; // This will return the type of response variable.
}

//Indexed Access Types
const person = {
  name: "John",
  age: 30,
  color: {
    primary: "red",
    secondary: "blue",
  },
};

type ColorType = (typeof person)["color"]; //This will return the type of color property of person object.

/**
 * Type registry pattern.
 */

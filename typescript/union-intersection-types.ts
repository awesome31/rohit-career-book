/**
 * Things to consider when using typescript:
 * 1. What values are allowed?
 * 2. What guranatees do we have when we use this value?
 */

/**
 * Union types
 * 1. Mental model that we should have is of a set.
 * 2. A union type is an OR relationship between types.
 * 3. Union types are much more common than intersection types.
 */
const humidity = 79;

type OneThroughFive = 1 | 2 | 3 | 4 | 5;
// let lowNumber: OneThroughFive = 8; // Error: Type '8' is not assignable to type 'OneThroughFive'

type Evens = 2 | 4 | 6 | 8;
let evenNumber: Evens = 4; // OK

let evenOrLowNumber: OneThroughFive | Evens = 4; // OK
evenOrLowNumber = 8; // OK

function flipACoin() {
  if (Math.random() > 0.5) {
    return "heads";
  }

  return "tails";
}

/**
 * Understanding union types better.
 * 1. The as const syntax is used to tell TypeScript that the array is a tuple and not an array.
 */
const success = [
  "success",
  { name: "Rohit", email: "tyagii.rohit@gmail.com" },
] as const;
const failure = ["failure", new Error("Something went wrong")] as const;

function getData() {
  if (flipACoin() === "heads") {
    return success;
  }

  return failure;
}

let result = getData();

/**
 * Narrowing with type guards.
 */
const [resultStatus, data] = result;

/**
 * Discriminated unions.
 */
if (data instanceof Error) {
  console.error(data.message);
} else if (typeof data === "object") {
  console.log(data.name, data.email);
}

if (resultStatus === "success") {
}

/**
 * Intersection types.
 * 1. Opposite of union types. It accepts the intersection of 2 types. Everything that is in both sets.
 */

/**
 * Intersection of 2 literal types is the and of the sets.
 */
type OneNumber = (1 | 2 | 3) & (3 | 4);

/**
 * Intersection of 2 object types is the combination of both types.
 */
type OtherNumber = { name: string; email: string } & {
  name: string;
  age: number;
};

/**
 * Callables.
 */

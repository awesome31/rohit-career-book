/**
 * We can also define optional types in object.
 */
type Person = {
  name: string;
  age: number;
  hasPet?: boolean;
};

/**
 * Index signatures
 * 1. We can have index signatures on top of explicit properties.
 */
type IndexSignature = {
  [key: string]: string;
};

const helpMe: IndexSignature = {
  // name: 1, // Error: Type 'number' is not assignable to type 'string'.
  name: "John", // OK
};

/**
 * Array types
 */
const arr: string[] = ["Rohit", "John", "Doe"];

/**
 * Tuple types
 * 1. There are no by default tuples in JavaScript. That is why we have to rely on TypeScript to enforce the tuple types.
 */
const myCar2 = [2020, "Ford", "Fiesta"];
const [year, make, model] = myCar2;

//This is how we can define a tuple type using typescript.
const myCar3: [number, string, string] = [2002, "Toyota", "Corolla"];

//But it has an issue. We can push more elements in the tuple and we do not get any guard from TypeScript.
console.log(myCar3.length); //3
myCar3.push("new value");
console.log(myCar3.length);

//Better way to do it to use the readonly keyword. Readonly keywords helps tell the team that a variable is immutable.
const myCar4: readonly [number, string, string] = [2002, "Toyota", "Corolla"];
// myCar4.push(2) // Error: Property 'push' does not exist on type 'readonly [number, string, string]'.

/**
 * Structural vs Nominal Typing
 * TO understand this, we first need to understand what type checking is?
 * 1. The right mental model is not "is type x equal to type y?" but "Does type y fit within type x?"
 *
 * 1. Nominal typing: This is the type of typing that is used in Java and C#. In this type of typing, the type of the variable is checked at compile time.
 * 2. Structural typing: This is the type of typing that is used in TypeScript. In this type of typing, the structure of the variable is more important than the constructor of the variable..
 */

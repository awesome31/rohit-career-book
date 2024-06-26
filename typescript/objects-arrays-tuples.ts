/**
 * Objects are types.
 */

const person: {
  name: string;
  age: number;
} = {
  name: "John",
  age: 30,
};

/**
 * We can also define optional types in object.
 */
type Person = {
  name: string;
  age: number;
  hasPet?: boolean;
};

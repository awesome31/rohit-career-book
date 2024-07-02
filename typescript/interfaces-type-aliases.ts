/**
 * Type aliases:
 * 1. Define a more meaningful name for a type.
 * 2. Declare the shape in a single place and then use it everywhere.
 * 3. Get the benifits of imports and exports.
 * 4. Type aliases can store any type in typescript.
 * 5. Type aliases can be created inside a function too.
 */

type Amount = {
  value: number;
  currency: string;
};

function printAmount(amount: Amount) {
  console.log(amount);

  console.log(amount.value);
  console.log(amount.currency);
}

printAmount({ value: 100, currency: "USD" });

/**
 * Inheritance with type aliases:
 */
type SpecialDate = Date & { getDescription: () => string };

const specialDate = Object.assign(new Date(), {
  getDescription() {
    return `The current date is ${this}`;
  },
});

console.log(specialDate.getDescription());

/**
 * Interfaces
 * 1. They cannot model all possible types in typescript.
 * This is not possible.
 interface Person {
  name: string;
  age: number;} | null;
  2. Whenever we want something that can be extending, its easier to use interfaces.
  3. interface extends interfaces and classes extends classes.
  4. classes implement an interface.
*
 */

interface Animal {
  isAlive: () => boolean;
}

interface Mammal extends Animal {
  hasHair: boolean;
}

/**
 * We can also use interfaces to make sure that a specific class implements a specific method or has a certain property.
 * Interfaces are very close to how they are used in other languages.
 * Implements keyword is used to make sure that a class implements a specific interface.
 */
class Dog implements Animal {
  isAlive() {
    return true;
  }
}

/**
 * Interfaces are open.
 * 1. We can redeclare the same interface multiple times.
 * 2. type aliases are not open. We cannot redeclare them.
 */

//THIS IS POSSIBLE. WOAH.
interface Promise<T> {
  wow: () => void;
}

new Promise(() => {}).wow();

/**
 * Recursive types.
 */
type NestedNumber = number | NestedNumber[];
const val: NestedNumber = [1, [2, [3, [4]]]];

/**
 * Question 1: Define a type for JSON. JSON value must be an
 * 1. object
 * 2. array
 * 3. number
 * 4. string or could be these literals
 * 5. false
 * 6. true
 * 7. null
 */

type JSONValue =
  | string
  | number
  | boolean
  | null
  | JSONValue[]
  | { [key: string]: JSONValue };

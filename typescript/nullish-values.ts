/**
 * Null and undefined:
 * 1. Null has to explicitly set null whereas undefined is set at runtime. Undefined means something that was never set.
 */

const Rohit = {
  name: "Rohit",
  age: null,
};
interface Person {
  name: string;
  age?: number;
}
const Shubham: Person = {
  name: "Shubham",
};
// const age: number = Shubham.age; // undefined This will throw an error.

/**
 * Non-null assertion operator
 * 1. It is used mostly when writing unit tests.
 */
interface Grocery {
  fruits?: { name: string; quantity: number }[];
}
const grocery: Grocery = {};
grocery.fruits!.push({ name: "Rohitt", quantity: 2 }); //This will throw an error.

/**
 * Definite assignment assertion
 * We can use the definite assignment assertion operator to tell TypeScript that a variable is assigned a value at runtime.
 */

/**
 * Optional chaining and nullish coercing.
 */
interface Customer {
  lastPayment?: {
    paymentMethod?: string;
  };
}
const customer: Customer = {};
customer.lastPayment?.paymentMethod; // undefined

/**
 * Nullish coalescing operator
 * 1. It is used to provide a default value when the value is null or undefined.
 */
const paymentMethod = customer.lastPayment?.paymentMethod ?? "Credit Card";

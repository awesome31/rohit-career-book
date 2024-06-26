/**
 * There are 3 types of scopes in JavaScript:
 * 1. Global Scope
 * 2. Function Scope
 * 3. Block Scope
 */

/**
 * Closures
 * A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment).
 * In other words, a closure gives you access to an outer function’s scope from an inner function.
 */

const add = (x) => (y) => x + y;
const add2 = add(2);
console.log(add2(3)); // 5

/**
 * Question1:
 */
const outerFunc = () => {
  let count = 0;
  return () => ++count;
};
const counter = outerFunc();
console.log(counter()); // 1
console.log(counter()); // 2

/**
 * Question2:
 */
function createCounter() {
  let globalCount = 0;

  function incrementCounter() {
    let incrementedValue = ++globalCount;
    return incrementedValue;
  }

  return {
    incrementCounter,
  };
}
const counter2 = createCounter();
console.log(counter2.incrementCounter());
console.log(counter2.incrementCounter());
console.log(createCounter().incrementCounter());

/**
 * Question3:
 */
function createUserManager() {
  let user: any = null;

  return function (name) {
    "use strict";
    user = { name, createdAt: new Date() };

    return user;
  };
}
const createUser = createUserManager();
console.log(createUser("John Doe") === createUser("Jane Doe"));

/**
 * We have two phases of execution in JavaScript:
 * 1. Creation Phase: In this phase, the JavaScript engine creates the global object, sets up the outer environment, and hoists variables and function declarations.
 * 2. With const and let keywords, we have a Temporal Dead Zone (TDZ) where we can't access the variables before their declaration.
 * 3. For var keyword, import statements and function keywords, we have hoisting, and we can access the variables before their declaration.
 * 4. Execution Phase: In this phase, the JavaScript engine executes the code line by line.
 */
console.log("%cOrange", "color: #FFFFFF;");

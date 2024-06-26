/**
 * This keyword in JavaScript depends on the context where it is used.
 *
 * 1. In the global context, this refers to the global object (window in the browser, global in Node.js).
 * 2. In a regular function, this refers to the object that calls the function.
 * 3. In an arrow function, this is defined by the lexical context.
 * 4. In classes, this refers to the instance of the class.
 * 5. In strict mode, this is undefined in the global context and functions.
 * 6. In event handlers, this keyword refers to the element that triggered the event.
 */

/**
 * Question1:
 */
function logThis() {
  console.log(this);
}

const obj = {
  logThis,
  logthis2() {
    return logThis();
  },
  logThis3() {
    return obj.logThis();
  },
};

obj.logThis();
obj.logthis2();
obj.logThis3();

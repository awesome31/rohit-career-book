/**
 * These are the components of a JavaScript runtime environment:
 * 1. Call Stack
 * 2. Web APIs
 * 3. Macro Task Queue (Task Queue)
 * 4. Micro Task Queue (Job Queue)
 * 4. Event Loop

* Micro Task Queue (Job Queue) has higher priority than Macro Task Queue (Task Queue).
 */

/**
 * Common examples of Micro Tasks:
 */
queueMicrotask(() => console.log("Micro Task 1")); // We can create a micro task using queueMicrotask() function.
Promise.resolve().then(() => console.log("Micro Task 2")); // We can create a micro task using Promise.

async function asyncFunction() {
  await console.log("Micro Task 3");
}

asyncFunction();

/**
 * Question 1:
 * 1. The body of the async function or a new promise constructor is executed synchronously.
 * 2. The micro task queue is executed.
 * 3. The event loop checks the micro task queue and executes the micro tasks.
 * 4. The macro task queue is executed.
 * 5. The event loop checks the macro task queue and executes the macro tasks.
 *
 * Answer:
 * 4, 5, 6, 1, 2, 3
 */
Promise.resolve().then(() => {
  console.log("1");
});
queueMicrotask(() => console.log(2));
setTimeout(() => console.log(3), 0);
console.log(4);
new Promise(() => console.log(5));
(async () => console.log(6))();

/**
 * Question2:
 *
 * Answer: 4, 5, 1, 2, 8, 7, 6, 3
 */

async function someFunction() {
  console.log("1");
  new Promise(() => console.log("2"));

  await new Promise((res) => {
    setTimeout(() => console.log(3), 0);
    res(1);
  });
}

new Promise((res) => {
  console.log("4");

  (async () => {
    console.log(5);
    await someFunction();
    console.log(6);
  })();

  res(2);
}).then(() => console.log(7));

console.log(8);

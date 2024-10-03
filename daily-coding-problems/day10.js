/**
 * Implement a job scheduler which takes in a function f and an integer n, and calls f after n milliseconds.
 */

function jobScheduler(f, n) {
  setTimeout(f, n);
}

jobScheduler(() => console.log("I am called"), 2000);

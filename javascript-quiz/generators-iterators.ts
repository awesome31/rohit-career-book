/**
 * Generators are functions that can be paused and resumed. They are created using the function* syntax.
 * Generators have iterators with the following methods and properties:
 * 1. next(): returns an object with a value property containing the yielded value and a done property which is a boolean indicating if the generator is done.
 * 2. state: returns the current state of the generator.
 * 3. return(): returns the given value and finishes the generator.
 * 4. throw(): throws an error to the generator.
 */

function* genFunction() {
  yield 1;
  yield 2;
  yield 3;

  return 4;
}

const genObj = genFunction();

console.log(genObj.next());
console.log(genObj.return(5));

console.log([...genFunction()]);

/**
 * We can make anything iterable by adding a Symbol.iterator method to it.
 */
const range = {
  from: 1,
  to: 5,
  [Symbol.iterator]() {
    return {
      current: this.from,
      last: this.to,
      next() {
        if (this.current <= this.last) {
          return { done: false, value: this.current++ };
        } else {
          return { done: true };
        }
      },
    };
  },
};

console.log([...range]);

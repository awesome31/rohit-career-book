/**
 * cons(a, b) constructs a pair, and car(pair) and cdr(pair) returns the first and last element of that pair.
 * For example, car(cons(3, 4)) returns 3, and cdr(cons(3, 4)) returns 4. Implement car and cdr
 */
function cons(a, b) {
  return function (pair) {
    return pair(a, b);
  };
}

function car(f) {
  return f((a, b) => {
    return a;
  });
}

function cdr(f) {
  return f((a, b) => {
    return b;
  });
}

console.log(car(cons(2, 3)));
console.log(cdr(cons(2, 3)));

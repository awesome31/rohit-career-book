/**
Given an array of integers, return a new array such that each element at index i of the new array is the product of all the numbers in the original array except the one at i.

For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24]. If our input was [3, 2, 1], the expected output would be [2, 3, 6].

Follow-up: what if you can't use division?
 */

function findProduct(arr) {
  let sum = 1;

  for (let i = 0; i < arr.length; i++) {
    sum *= arr[i];
  }

  return arr.map((a) => sum / a);
}

function findProductBetter(arr) {
  const leftToRightProduct = Array.from(Array(arr.length).keys());

  for (let i = 0; i < arr.length; i++) {
    if (i === 0) {
      leftToRightProduct[i] = arr[i];
    } else {
      leftToRightProduct[i] = leftToRightProduct[i - 1] * arr[i];
    }
  }

  const rightToLeftProduct = Array.from(Array(arr.length).keys());

  for (let i = arr.length - 1; i >= 0; i--) {
    if (i === arr.length - 1) {
      rightToLeftProduct[i] = arr[i];
    } else {
      rightToLeftProduct[i] = rightToLeftProduct[i + 1] * arr[i];
    }
  }

  const result = Array.from(Array(arr.length).keys());

  for (let i = 0; i < arr.length; i++) {
    if (i === 0) {
      result[i] = rightToLeftProduct[i + 1];
    } else if (i === arr.length - 1) {
      result[i] = leftToRightProduct[i - 1];
    } else {
      result[i] = leftToRightProduct[i - 1] * rightToLeftProduct[i + 1];
    }
  }

  return result;
}

console.log(findProduct([1, 2, 3, 4, 5]), "findProduct");
console.log(findProductBetter([1, 2, 3, 4, 5]), "findProductBetter");

console.log(findProduct([3, 2, 1]), "findProduct");
console.log(findProductBetter([3, 2, 1]), "findProductBetter");

console.log(findProduct([1, 2, 3, 4, 5, 6, 7, 8, 9]), "findProduct");
console.log(
  findProductBetter([1, 2, 3, 4, 5, 6, 7, 8, 9]),
  "findProductBetter"
);

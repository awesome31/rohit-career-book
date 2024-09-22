/**
 * Given an array of integers, find the first missing positive integer in linear time and constant space. 
 * In other words, find the lowest positive integer that does not exist in the array. The array can contain duplicates and negative numbers as well.

For example, the input [3, 4, -1, 1, 4] should give 2. The input [1, 2, 0] should give 3.

You can modify the input array in-place.
 */

function initializeArray(arr) {
  return arr.map((e) => (e <= 0 ? Infinity : e));
}

function firstMissingPositive(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== Infinity) {
      let index = arr[i] < 0 ? Math.abs(arr[i]) : arr[i];

      if (arr[index - 1] && arr[index - 1] > 0) {
        arr[index - 1] = 0 - arr[index - 1];
      }
    }
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 0) {
      return i + 1;
    }
  }
}

console.log(firstMissingPositive([1, 2, 0]));
console.log(firstMissingPositive([3, 4, -1, 1, 4]));

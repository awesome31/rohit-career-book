/**
 * Given a list of integers, write a function that returns the largest sum of non-adjacent numbers. Numbers can be 0 or negative.

For example, [2, 4, 6, 2, 5] should return 13, since we pick 2, 6, and 5. [5, 1, 1, 5] should return 10, since we pick 5 and 5.
 */

/**
 *
 * @param {number[]} arr
 */
function findLargestSumNonAdjacent(arr) {
  if (arr.length === 1) {
    return Math.max(0, arr[0]);
  } else if (arr.length === 2) {
    return Math.max(0, arr[0], arr[1]);
  }

  return Math.max(
    arr[0] + findLargestSumNonAdjacent(arr.slice(2)),
    findLargestSumNonAdjacent(arr.slice(1)),
    0
  );
}

console.log(findLargestSumNonAdjacent([2, 4, 6, 2, 5]));
console.log(findLargestSumNonAdjacent([-22, -2, -2, 2, -1, 5]));

/**
Good morning! Here's your coding interview problem for today.

This problem was recently asked by Google.

Given a list of numbers and a number k, return whether any two numbers from the list add up to k.

For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.

Bonus: Can you do this in one pass? 
*/

function findSum(arr, target) {
  const visitedMap = {};

  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    if (visitedMap[target - element]) {
      return [element, target - element];
    }

    visitedMap[element] = true;
  }
}

console.log(findSum([1, 2, 3, 4, 5], 6));

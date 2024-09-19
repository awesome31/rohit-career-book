function findSum(arr, target) {
  const visitedMap = {};

  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    if (visitedMap[target - element]) {
      return [element, target - element];
    }

    visitedMap[element] = true;
    console.log(visitedMap);
  }
}

console.log(findSum([1, 2, 3, 4, 5], 6));

/**
 * This problem was asked by Amazon.

There exists a staircase with N steps, and you can climb up either 1 or 2 steps at a time. Given N, write a function that returns the number of unique ways you can climb the staircase. The order of the steps matters.

For example, if N is 4, then there are 5 unique ways:

1, 1, 1, 1
2, 1, 1
1, 2, 1
1, 1, 2
2, 2
What if, instead of being able to climb 1 or 2 steps at a time, you could climb any number from a set of positive integers X? For example, if X = {1, 3, 5}, you could climb 1, 3, or 5 steps at a time.
 */

/**
 *
 * @param {number} n
 * @param {number[]} X
 */
function getNumberOfWays(n, X) {
  const dp = new Array(n + 1).fill(0);
  dp[0] = 1;

  for (let i = 1; i <= n; i++) {
    for (let x of X) {
      if (i - x >= 0) {
        dp[i] += dp[i - x]; // add the number of ways to reach i - x to i
      }
    }
  }

  return dp[n];
}

console.log(getNumberOfWays(4, [1, 2])); // 5

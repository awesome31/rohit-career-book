/**
 * Implement an autocomplete system. That is, given a query string s and a set of all possible query strings, return all strings in the set that have s as a prefix.

For example, given the query string de and the set of strings [dog, deer, deal], return [deer, deal].

Hint: Try preprocessing the dictionary into a more efficient data structure to speed up queries.
 */

/**
 *
 * @param {string[]} arr
 * @param {string} queryString
 */
function easyImplementation(arr, queryString) {
  return arr.filter((item) => item.startsWith(queryString));
}

console.log(easyImplementation(["dog", "deer", "deal"], "de"));

/**
 *
 * @param {string[]} arr
 */

function preprocessArray(arr) {
  let preprocessMap = {};

  /**
   *
   * @param {string} str
   */
  function getAllStrings(str) {
    for (let i = 1; i < str.length; i++) {
      if (preprocessMap[str.slice(0, i)]) {
        preprocessMap[str.slice(0, i)] = [
          ...preprocessMap[str.slice(0, i)],
          str,
        ];
      } else {
        preprocessMap[str.slice(0, i)] = [str];
      }
    }
  }

  arr.forEach(getAllStrings);

  return preprocessMap;
}

console.log(preprocessArray(["dog", "deer", "deal"])["de"]);

/**
 * Given the mapping a = 1, b = 2, ... z = 26, and an encoded message, count the number of ways it can be decoded.

For example, the message '111' would give 3, since it could be decoded as 'aaa', 'ka', and 'ak'.
 */

/**
 *
 * @param {string} message
 * @returns number
 */
function decodedMessage(message) {
  let count = 0;
  if (message.length === 0) {
    return 1;
  }
  if (message[0] === "0") {
    return 0;
  }
  count += decodedMessage(message.slice(1));
  if (message.length >= 2 && parseInt(message.slice(0, 2)) <= 26) {
    count += decodedMessage(message.slice(2));
  }
  return count;
}

console.log(decodedMessage("111"));

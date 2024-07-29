const { readFile } = require("../readFile");

function isCharNumber(c) {
  return c >= "0" && c <= "9";
}

let sum = 0;

readFile("data.txt", (line) => {
  let firstNumber = false;
  let lastNumber = false;

  for (let i = 0; i < line.length; i++) {
    if (!Number.isNaN(parseInt(line[i]))) {
      //Its a number.
      if (firstNumber) {
        lastNumber = parseInt(line[i]);
      } else {
        firstNumber = parseInt(line[i]);
      }
    }
  }

  sum += firstNumber * 10 + (lastNumber ? lastNumber : firstNumber);
  console.log(firstNumber * 10 + (lastNumber ? lastNumber : firstNumber));
  console.log(sum);
});

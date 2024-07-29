const fs = require("fs");
const readline = require("readline");

const readFile = (fileName, callback) => {
  const file = readline.createInterface({
    input: fs.createReadStream(fileName),
    output: process.stdout,
    terminal: false,
  });

  let sum = 0;

  file.on("line", callback);
};

module.exports = {
  readFile,
};

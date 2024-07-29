const { readFile } = require("../readFile");

const FIXED = {
  red: 12,
  green: 13,
  blue: 14,
};

let sum = 0;

readFile("data.txt", (line) => {
  const [gameNumber, data] = line.split(": ");

  const revealedCubes = data.split("; ");

  let isCorrect = true;

  revealedCubes.forEach((cube) => {
    const revealed = cube.split(", ");

    revealed.forEach((cube) => {
      const [number, color] = cube.split(" ");

      if (parseInt(number) > FIXED[color]) {
        isCorrect = false;
      }
    });
  });

  if (isCorrect) {
    const [_, gameHehe] = gameNumber.split(" ");

    sum += parseInt(gameHehe);
  }

  console.log(sum);
});

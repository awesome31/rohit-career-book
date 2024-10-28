/**
 * You are given an M by N matrix consisting of booleans that represents a board. Each True boolean represents a wall. Each False boolean represents a tile you can walk on.
 *
 * Given this matrix, a start coordinate, and an end coordinate, return the minimum number of steps required to reach the end coordinate from the start. If there is no possible path, then return null. You can move up, left, down, and right. You cannot move through walls. You cannot wrap around the edges of the board.
 *
 * For example, given the following board:
 *
 * [[f, f, f, f],
 * [t, t, f, t],
 * [f, f, f, f],
 * [f, f, f, f]]
 *
 * and start = (3, 0) (bottom left) and end = (0, 0) (top left), the minimum number of steps required to reach the end is 7, since we would need to go through (1, 2) because there is a wall everywhere else on the second row.
 */

let currentMinimumSteps = Infinity;
const visited = [];

function minimumSteps(matrix, start, end, currentSteps) {
  //Simple backtracking

  if (
    start[0] < 0 ||
    start[0] >= matrix.length ||
    start[1] < 0 ||
    start[1] >= matrix[0].length
  ) {
    return;
  }

  if (visited[start[0]] && visited[start[0]][start[1]]) {
    return;
  }

  if (start[0] === end[0] && start[1] === end[1]) {
    currentMinimumSteps = Math.min(currentMinimumSteps, currentSteps);
    return;
  }

  if (matrix[start[0]][start[1]]) {
    return;
  }

  if (!visited[start[0]]) {
    visited[start[0]] = [];
  }

  visited[start[0]][start[1]] = true;

  minimumSteps(matrix, [start[0] + 1, start[1]], end, currentSteps + 1);
  minimumSteps(matrix, [start[0] - 1, start[1]], end, currentSteps + 1);
  minimumSteps(matrix, [start[0], start[1] + 1], end, currentSteps + 1);
  minimumSteps(matrix, [start[0], start[1] - 1], end, currentSteps + 1);

  visited[start[0]][start[1]] = false;
}

minimumSteps(
  [
    [false, false, false, false],
    [true, true, false, true],
    [false, false, false, false],
    [false, false, false, false],
  ],
  [3, 0],
  [0, 0],
  0
);

console.log(currentMinimumSteps);

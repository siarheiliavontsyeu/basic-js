const { NotImplementedError } = require("../extensions/index.js");

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const reMatrix = matrix.map((row) => {
    return row.map((el) => Number(el));
  });
  for (let row = 0; row < reMatrix.length; row++) {
    for (let col = 0; col < reMatrix[row].length; col++) {
      if (reMatrix[row][col] === 1 && matrix[row][col]) {
        //right
        if (reMatrix[row][col + 1] !== undefined && !matrix[row][col + 1]) {
          reMatrix[row][col + 1] += 1;
        }
        //right-bottom
        if (
          reMatrix[row + 1][col + 1] !== undefined &&
          !matrix[row + 1][col + 1]
        ) {
          reMatrix[row + 1][col + 1] += 1;
        }
        //bottom
        if (reMatrix[row + 1] !== undefined && !matrix[row + 1][col]) {
          reMatrix[row + 1][col] += 1;
        } //bottom-left
        if (
          reMatrix[row + 1][col - 1] !== undefined &&
          !matrix[row + 1][col - 1]
        ) {
          reMatrix[row + 1][col - 1] += 1;
        }
        //left
        if (reMatrix[row][col - 1] !== undefined && !matrix[row][col - 1]) {
          reMatrix[row][col - 1] += 1;
        }
        //top-left
        if (reMatrix[row - 1] !== undefined && !matrix[row - 1][col - 1]) {
          reMatrix[row - 1][col - 1] += 1;
        }
        //top
        if (reMatrix[row - 1] !== undefined && !matrix[row - 1][col]) {
          reMatrix[row - 1][col] += 1;
        }
        //top-right
        if (reMatrix[row - 1] !== undefined && !matrix[row - 1][col + 1]) {
          reMatrix[row - 1][col + 1] += 1;
        }
      }
    }
  }
  return reMatrix;
}

module.exports = {
  minesweeper,
};

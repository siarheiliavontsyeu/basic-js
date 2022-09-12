const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let result = 0;
  let step = 1;
  while (parseInt(n / step) > 0) {
    const newNum = parseInt(n / (step * 10)) * step + (n % step);
    result = Math.max(result, newNum);
    step *= 10;
  }
  return result;
}

module.exports = {
  deleteDigit,
};

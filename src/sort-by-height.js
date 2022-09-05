const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const _minus1Idx = arr
    .map((el, i) => (el === -1 ? i : null))
    .filter((el) => el !== null);

  const newArr = arr.filter((el) => el !== -1).sort((a, b) => a - b);

  _minus1Idx.forEach((el) => {
    newArr.splice(el, 0, -1);
  });
  return newArr;
}

module.exports = {
  sortByHeight,
};

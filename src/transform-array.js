const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  const CONTROL_SEQUENCES = {
    discardNext: '--discard-next',
    discardPrev: '--discard-prev',
    doubleNext: '--double-next',
    doublePrev: '--double-prev',
  };
  let resArr = [];

  if (!Array.isArray(arr))
    throw new Error("'arr' parameter must be an instance of the Array!");

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === CONTROL_SEQUENCES.discardNext) {
      if (i + 1 < arr.length) {
        i++;
      }
    } else if (arr[i] === CONTROL_SEQUENCES.discardPrev) {
      if (arr[i - 2] !== CONTROL_SEQUENCES.discardNext) {
        resArr.pop();
      }
    } else if (arr[i] === CONTROL_SEQUENCES.doublePrev) {
      if (arr[i - 1] !== undefined) {
        if (arr[i - 2] !== CONTROL_SEQUENCES.discardNext) {
          resArr.push(arr[i - 1]);
        }
      }
    } else if (arr[i] === CONTROL_SEQUENCES.doubleNext) {
      if (arr[i + 1] !== undefined) {
        resArr.push(arr[i + 1]);
      }
    } else {
      resArr.push(arr[i]);
    }
  }
  return resArr;
}

module.exports = {
  transform,
};

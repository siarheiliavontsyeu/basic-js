const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    if (Array.isArray(arr)) {
      const depth = arr.reduce((maxDepth, next) => {
        return Math.max(this.calculateDepth(next), maxDepth);
      }, 0);
      return depth + 1;
    }
    return 0;
  }
}
const instance = new DepthCalculator();
const calculateDepth = instance.calculateDepth.bind(instance);
console.log(calculateDepth([1, 2, 3, 4, 5, [1]]));

module.exports = {
  DepthCalculator,
};

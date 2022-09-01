const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const res = [];
  let count = 1;
  [...str].forEach((el, i, a) => {
    if (el === a[i + 1]) {
      count++;
    } else {
      res.push([count, el]);
      count = 1;
    }
  });
  return res.join("").split(",").join("").replace(/1/g, "");
}

module.exports = {
  encodeLine,
};

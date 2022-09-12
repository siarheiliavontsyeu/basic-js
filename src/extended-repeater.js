const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  const {
    repeatTimes = 1,
    separator = '+',
    addition,
    additionRepeatTimes = 1,
    additionSeparator = '|',
  } = options;
  let resString = '' + str;
  let result = '';

  if ('' + addition !== 'undefined') {
    for (let i = 0; i < additionRepeatTimes; i++) {
      if (i === 0) {
        resString += addition;
      } else {
        resString += additionSeparator + addition;
      }
    }
  }

  for (let i = 0; i < repeatTimes; i++) {
    if (i === 0) {
      result += resString;
    } else {
      result += separator + resString;
    }
  }
  return result;
}

module.exports = {
  repeater,
};

const { NotImplementedError } = require("../extensions/index.js");

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  const desiredSeasonErrorText = "Unable to determine the time of year!";
  const fakeDateErrorText = "Invalid date!";
  if (!date) return desiredSeasonErrorText;

  if (
    Object.prototype.toString.call(date) !== "[object Date]" ||
    Object.prototype.hasOwnProperty.call(date, "getMonth")
  )
    throw new Error(fakeDateErrorText);

  let desiredMonth;

  try {
    desiredMonth = date.getMonth();
  } catch (error) {
    throw new Error(fakeDateErrorText);
  }
  const seasons = {
    winter: [11, 0, 1],
    spring: [2, 3, 4],
    summer: [5, 6, 7],
    autumn: [8, 9, 10],
  };

  let desiredSeason = "";
  for (let season in seasons) {
    if (seasons[season].includes(desiredMonth)) {
      desiredSeason = season;
    }
  }
  return desiredSeason;
}

module.exports = {
  getSeason,
};

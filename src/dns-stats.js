const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const DNS = {};
  domains.forEach((el) => {
    const dns = el
      .match(/[a-z]*|\.+[a-z]*/g)
      .filter(Boolean)
      .reverse();
    const dns0 = `.${dns[0]}`;
    const dn1 = `.${dns[0]}.${dns[1]}`;
    const dn2 = `.${dns[0]}.${dns[1]}.${dns[2]}`;
    if (dns[0]) DNS[dns0] = DNS[dns0] ? (DNS[dns0] += 1) : 1;
    if (dns[1]) DNS[dn1] = DNS[dn1] ? (DNS[dn1] += 1) : 1;
    if (dns[2]) DNS[dn2] = DNS[dn2] ? (DNS[dn2] += 1) : 1;
  });
  return DNS;
}

module.exports = {
  getDNSStats,
};

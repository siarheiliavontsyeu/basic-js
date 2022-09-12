const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(modification = true) {
    this.modification = modification;
  }

  checkParams(msg, key) {
    if (!msg || !key) throw new Error('Incorrect arguments!');
  }

  isLetter(l) {
    return l.toUpperCase() !== l.toLowerCase();
  }

  coding(method, input, key) {
    let msg = input.toUpperCase();
    let keyMsg = key
      .repeat(Math.ceil(msg.length / key.length))
      .slice(0, msg.length)
      .toUpperCase();

    const codingArr = [];
    for (let i = 0, j = 0; i < msg.length; i++) {
      if (this.isLetter(msg[i])) {
        if (method === 'encrypt') {
          codingArr.push(
            String.fromCharCode(
              ((msg.charCodeAt(i) + keyMsg.charCodeAt(j)) % 26) + 1 + 64
            )
          );
          j++;
        } else {
          codingArr.push(
            String.fromCharCode(
              ((msg.charCodeAt(i) + 26 - keyMsg.charCodeAt(j)) % 26) + 1 + 64
            )
          );
          j++;
        }
      } else {
        codingArr.push(msg[i]);
      }
    }
    return this.modification
      ? codingArr.join('')
      : codingArr.reverse().join('');
  }

  encrypt(message, key) {
    this.checkParams(message, key);
    return this.coding('encrypt', message, key);
  }

  decrypt(message, key) {
    this.checkParams(message, key);
    return this.coding('decrypt', message, key);
  }
}

module.exports = {
  VigenereCipheringMachine,
};

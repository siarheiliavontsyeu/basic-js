const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  deleteChain() {
    this.chain.length = 0;
  },
  addLink(value) {
    if (typeof value !== 'undefined') {
      this.chain.push(`( ${value} )`);
    } else {
      this.chain.push('( )');
    }
    return this;
  },
  removeLink(position) {
    if (
      !Number.isInteger(position) ||
      position < 1 ||
      position > this.getLength()
    ) {
      this.deleteChain();
      throw new Error("You can't remove incorrect link!");
    } else {
      this.chain.splice(position - 1, 1);
      return this;
    }
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let resString = this.chain.join('~~');
    this.deleteChain();
    return resString;
  },
};

module.exports = {
  chainMaker,
};

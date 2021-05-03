const CustomError = require("../extensions/custom-error");

const chainMaker = {
  arr: [],
  getLength() {
    this.arr.length;
  },
  addLink(value) {
    this.arr.push(value);
    return this;
  },
  removeLink(position) {
    if (!Number.isInteger(position)) {
      this.arr = [];
      throw new Error("position is incorrect")}
    this.arr.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.arr.reverse();
    return this;
  },
  finishChain() {
     const result = this.arr
        .map(el => `( ${el ? el.toString() : el} )`)
        .join("~~");
    this.arr = [];
    return result;
}
};

module.exports = chainMaker;

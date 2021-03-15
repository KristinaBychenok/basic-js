const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
    let arr = matrix.reduce(function(acc, item) {
    let result = item.filter((cats) => cats == '^^')
    return [...acc, ...result];
  }, []);
  return arr.length
};

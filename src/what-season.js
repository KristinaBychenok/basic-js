const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (date === undefined) {
    return 'Unable to determine the time of year!'
  } else if (getClass(date) !== "Date") {
    throw new Error()
  } else {
    let a = date.getMonth()
  if (a < 2 || a == 11) {
    return 'winter'
  } else if (a >=2 && a < 5) {
    return 'spring'
  } else if (a >= 5 && a < 8) {
    return 'summer'
  } else {
    return 'autumn|fall'
  }
}
};

function getClass(obj) {
  return {}.toString.call(obj).slice(8, -1);
}

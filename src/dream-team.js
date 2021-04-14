const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (Array.isArray(members)) {
    return members.reduce((acc,val) => {
      if (typeof(val) === 'string') {
        return [val.trim()[0].toUpperCase(), ...acc]
      } else return acc
    },[]).sort().join('')
    } else {
      return false
    }
};

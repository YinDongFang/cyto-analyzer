const getRandomInt = require('./getRandomInt')
const isEven = require('./isEven')

module.exports = (arr) => {
    return Math.min(...arr);
  }
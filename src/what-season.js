const { NotImplementedError } = require('../extensions/index.js');

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
   // throw new NotImplementedError('Not implemented');
  
   // let data = new Date(date);
 //npm run test test/(name-test).test
    if(!date){
    return "Unable to determine the time of year!"
  } else if(Object.prototype.toString.call(date) !== '[object Date]'){
    throw new Error("Invalid date!")
  } else if(date[Symbol.toStringTag]){
    throw new Error("Invalid date!")
  }
   else if(!(date instanceof Date)){
    throw new Error("Invalid date!")
  } else if (isNaN(date)){
    throw new Error("Invalid date!")
  } 
 
      else {
      switch (date.getMonth()) {
        case 11:
        case 0:
        case 1:
          return "winter";
        case 2:
        case 3:
        case 4:
          return "spring";
        case 5:
        case 6:
        case 7:
          return "summer";
        case 8:
        case 9:
        case 10:
          return "autumn";
        default:
     //"invalid date"
        throw new Error("Invalid date!");
      }
    } 
  }


module.exports = {
  getSeason
};

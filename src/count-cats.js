const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {

  let count = 0;
  for(let i= 0; i<matrix.lenght;i++){
    for (let j=0; j<matrix[i].lenght;j++){
      if(matrix[i][j] == '^^'){
        count++;
      } else{
      return 0;
      }
    }
  }
}
module.exports = {
  countCats
};

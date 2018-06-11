function generatePyramid(num){
  var mainBoard = []
  var row = []
  var indexX1 = num;
  var indexX2 = num;

  for (let i = 0; i < num; i++){
    row = [];
  
    for (let j = 0; j < (num * 2); j++){
      if (mainBoard.length === 0){
        if (j === num){
          row.push('*')
        }
        else {
          row.push(' ')
        }
      } else if (mainBoard.length === num - 1){
        if (j === 0){
          row.push(' ')
        } else {
          row.push('*')
        }
      } else {
        if (j === indexX1 || j === indexX2){
          row.push('*')
        }
        else {
          row.push(' ')
        }
      }
    }
    indexX1 --;
    indexX2 ++;
    mainBoard.push(row.join(''))
  }
  console.log (mainBoard.join('\n'))
}

generatePyramid(10)

/*

----------*           = 10
---------* *          = 9,11
        *   *         = 8, 12
       *     *        = 7, 13
      *       *
     *         *
    *           *
   *             *
  *               *
 *******************  = 0 & last = '-' 19 '*'   length =20


*/
function lightning(num){
  var mainBoard = [];
  var longestRowLength = num * 2
  var totalRow = num * 2 - 1
  var indexStar = num - 1

  for (let i = 0; i < totalRow; i++){
    let row = [];
    for (let j = 0; j < longestRowLength; j++){
      if (i === Math.floor(totalRow / 2)){
        if (j % 2 === 0){
          row.push('*')
        } else {
          row.push(' ')
        }
      } else {
        if (j === indexStar){
          row.push('*')
        } else {
          row.push(' ')
        }
      }
    }
    if (i === Math.floor(totalRow / 2)){
      indexStar = 1
    } else {
      indexStar ++
    }
    mainBoard.push(row.join(''))
  }
  return mainBoard.join('\n')
}










// console.log(lightning(1));
/*

*

*/

// console.log(lightning(2));

/*

 *
* *
 *

*/

// console.log(lightning(3));
/*

  *
   *
* * *
 *
  *

*/

// console.log(lightning(4));

/*

   *
    *
     *
* * * *
 *
  *
   *

*/

// console.log(lightning(5));

/*

    *
     *
      *
       *
* * * * *
 *
  *
   *
    *

*/

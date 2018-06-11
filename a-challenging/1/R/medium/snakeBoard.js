function generateSnake (rows, col){
  let mainBoard = []
  let row = []
  for (let j = 0; j < rows * col; j++){
    if (j === 0){
      row.push('~')
    }
    else if (j === rows * col - 1){
      row.push('o')
    }
    else {
      row.push('_')
    }

    if (row.length >= col){
      if (j !== 0 && j !== rows * col - 1){
        row.splice(col-1,1, '|')
      }
      mainBoard.push(row.join(''))
      row = []    
    } 
  }
  return mainBoard.join('\n')
}

console.log(generateSnake(5, 3))
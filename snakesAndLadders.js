function generateBoard (num){
  var mainBoard = []  
  var row = []
  for (var i = num * num; i >= 1; i--){
    if (row.length === num){
      mainBoard.push(row)
      row = []
    } 
    if (mainBoard.length % 2 !== 0){
      row.unshift(i) // BALIK
    } else {
      row.push(i)
    }
  }
  mainBoard.push(row)
  return mainBoard
}

console.log(generateBoard(10))

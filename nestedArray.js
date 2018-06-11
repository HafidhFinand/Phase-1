function createNestedArr(jumlahRow, jumlahCol){
  let mainBoard = [];
  for (let i = 0; i < jumlahRow; i++){
    let row = [];
    for (let i = 0; i < jumlahCol; i++){
      row.push('a');
    }
    mainBoard.push(row);
  }
  debugger;
  return mainBoard;
}


console.log(createNestedArr(5,3))

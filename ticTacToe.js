function ticTacToe (){
  const isi = ['X', 'O']
  const jumlahCol = 3
  const jumlahRow = 3

  let mainBoard = [];
  let countX = 0
  let countO = 0
  
  for (let i = 0; i < jumlahRow; i++){
    let row = [];
    for (let i = 0; i < jumlahCol; i++){
      let indexRandom = Math.floor(Math.random() * isi.length)
      let randomXO = isi[indexRandom]
      if (countO >= 5){
        row.push('X')
      } else if (countX >= 5){
        row.push('O')
      } else {
        if (randomXO === 'X'){
          countX ++
        }
        else if (randomXO === 'O'){
          countO ++
        }
        row.push(randomXO);
      }

    }
    mainBoard.push(row);
    }
  debugger;
  return mainBoard;
}

console.log (ticTacToe ())

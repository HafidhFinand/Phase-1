const alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const kamus = require('./data');

class BoggleBoard {
  constructor(){
    this.alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }

  shake(number){
    let mainBoard = [];
    for (let i = 0; i < number; i++){
      let row = [];
      for (let i = 0; i < number; i++){
        let randomIndex = Math.floor(Math.random() * alphabets.length);
        row.push(alphabets[randomIndex]);
      }
      mainBoard.push(row);
    }
    return mainBoard;
  }

  tes(){
    return this.alphabets.length   
  }

}

// let theBoard = BoggleBoard.shake(4);
// console.log(theBoard)

var board = new BoggleBoard()
console.log(board.tes())


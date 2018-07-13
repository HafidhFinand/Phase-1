class BoggleBoard {
  constructor(){
    // this.alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    // this.dictionary = require('./data');
    this.alphabets = 'AIUEOBDFG'
    this.dictionary = [
      'BIGGOD',
      'BADDOG',
      'FADED'
    ]
    this.mainBoard = null
    this.lettersPos = {

    }
  }

  shake(number){
    let mainBoard = [];
    for (let i = 0; i < number; i++){
      let row = [];
      for (let i = 0; i < number; i++){
        let randomIndex = Math.floor(Math.random() * this.alphabets.length);
        row.push(this.alphabets[randomIndex]);
      }
      mainBoard.push(row);
    }
    this.mainBoard = mainBoard;
    console.log (this.mainBoard);
  }

  isThereTheWord(){
    let boardStr = '';
    for(let i in this.mainBoard){
      for (let j in this.mainBoard[i]){
        boardStr += this.mainBoard[i][j];
      }
    }

    for (let i in this.dictionary){
      let letterCount = 0;
      for (let j in this.dictionary[i]){
        let isLetterFound = false;
        for (let k in boardStr){
          if (this.dictionary[i][j] === boardStr[k]){
            isLetterFound = true;
          }
        }
        if (isLetterFound){
          letterCount ++;
        }
      }
      if (letterCount === this.dictionary[i].length){
        return true;
      }
    }

    return false;
  }

  putTheIndexes(){
    for (let i in this.dictionary){
      for(let j in this.dictionary[i]){
        for (let k in this.mainBoard){
          for (let l in this.mainBoard[k]){
            if (this.dictionary[i][j] === this.mainBoard[k][l]){
              if (this.lettersPos[this.dictionary[i][j]] === undefined){
                this.lettersPos[this.dictionary[i][j]] = [[k,l]];
              } else {
                this.lettersPos[this.dictionary[i][j]].push([k,l]);
              }
            }
          }
        }
      }
    }
  }

  solve(){
    if(this.isThereTheWord()){
      this.putTheIndexes();
      console.log(this.lettersPos)
    } else {
      console.log('Not a single word found')
    }
  }

}

// let theBoard = BoggleBoard.shake(4);
// console.log(theBoard)

var board = new BoggleBoard()
board.shake(5)
board.solve()


function generateHourglass(num){
  var mainArr = [];
  var jumlahRow = num * 2 - 1;
  var jumlahStr = num * 2 - 1;

  /*
  0,7
  1,5
  2,3
  3,1
  2,3
  1,5
  0,7
  */
  
  var indexBlank = -1;
  for (let i = 0; i < jumlahRow; i++){
    let strNew = '';
    for (let j = 0; j < jumlahStr; j++){
      strNew += 'x';
    }
    mainArr.push(strNew);
    strNew += ' ';
  }

  return mainArr

  
}

console.log(generateHourglass(4))

function stringToArray (str) {
  let mainBoard = [];
  let strArr = str.split(',')
  for (var i in strArr){
    let row = [];
    for (var j in strArr[i]){
      row.push(strArr[i][j]);
    }
    mainBoard.push(row)
    debugger;
  }
  return mainBoard
}

console.log(stringToArray('aqrst,ukaei,ffooo'))

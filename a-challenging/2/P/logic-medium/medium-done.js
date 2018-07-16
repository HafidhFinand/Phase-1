function generateJajarGenjang(length, height){
  let mainArr = [];
  let markedIndex1 = - 2;
  let markedIndex2 = markedIndex1 + length * 2;

  for (let i = 0; i < height + 2; i++){
    let arr = [];
    for (let j = 0; j < length * 4 - 1; j++){
      if (i === 0){
        if (j % 2 === 0 && j < (length * 2) - 1 ){
          arr.push('-');
        } else {
          arr.push(' ');
        }
      } else if (i === height + 1){
        if (j % 2 === 0 && j > length + 2){
          arr.push('-');
        } else {
          arr.push(' ');
        }
      } else {
        if (j === markedIndex1 || j === markedIndex2){
          arr.push('\\');
        } else {
          arr.push(' ');
        }
      }
    }
    mainArr.push(arr.join(''))
    markedIndex1 += 2;
    markedIndex2 += 2;
  }
  console.log(mainArr.join('\n'))
}

generateJajarGenjang(5, 4)
// generateJajarGenjang(3, 3)

// (5,4)
// - - - - -          -> 9, 5 isi 4 kosong
// \         \        -> 0, 10
//   \         \      -> 2, 12
//     \         \    -> 4, 14
//       \         \  -> 6, 16
//         - - - - -  -> mulai di i 8, 9 pola awal (18 length)
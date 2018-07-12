function generateBorderBox (num){
  let mainArr = [];
  for (let i = 0; i < num; i++){
    let arr = [];
    for (let j = 0; j < num; j++){
      if (i === 1 || i === num - 2){
        if (j === 0 || j === num -1){
          arr.push('I')
        }else {
          arr.push(' ')
        }
      } else if (i === Math.floor(num / 2)){
        if (j === Math.floor(num / 2)){
          arr.push('X')
        } else if (j === 0 || j === 2 || j === num - 1 || j === num - 3){
          arr.push('I')
        } else {
          arr.push(' ')
        }
      } else if (i === 2 || i === num - 3) {
        if (j === 1 || j === num - 2){
          arr.push(' ')
        } else {
          arr.push('I')
        }
      } else if (i === 0 || i === num - 1){
        arr.push('I')
      } else {
        if (j === 0 || j === 2 || j === num - 1 || j === num - 3){
          arr.push('I')
        } else {
          arr.push(' ')
        }
      }
    }
    mainArr.push(arr.join(''));
  }
  return mainArr.join('\n');

}

console.log(generateBorderBox(23))
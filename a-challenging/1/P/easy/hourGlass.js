function generateHourglass (num){
  let mainArr = [];
  let limit = (num * 2) - 1
  let emptyIndex1 = - 1;
  let emptyIndex2 = limit;
  let specialIndex = num - 2
  
  for (let i = 0; i < limit; i++){
    let arr = [];  
    if (i >= num){
      mainArr.push(mainArr[specialIndex])
      specialIndex --;
    } else {
      for (let j = 0; j < limit; j++){
        if (i < num && j > emptyIndex1 && j < emptyIndex2){
          arr.push('X');
        } else {
          arr.push(' ');
        }
      }
      mainArr.push(arr);
    }
    emptyIndex1 ++ ;
    emptyIndex2 -- ;
  }

  return mainArr;
}

function printHourglass (arr) {
  let mainArr = [];
  for (let i in arr){
    let convertedArr = [];
    for (let j in arr[i]){
      if (arr[i][j] === 'X'){
        convertedArr.push('#')
      } else {
        convertedArr.push(arr[i][j])
      }
    }
    mainArr.push(convertedArr.join(''));
  }
  return mainArr.join('\n');
}

let hrglass = generateHourglass(5);
// console.log(hrglass);
console.log(printHourglass(hrglass));
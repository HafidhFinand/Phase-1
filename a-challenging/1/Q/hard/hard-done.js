function generateBarChart (numberArr) {
  let max = {number: 0};
  for (let i in numberArr){
    if (numberArr[i] < 0 || numberArr[i] > 9){
      return 'Input number only between 0-9';
    } else {
      if (numberArr[i] > max.number){
        max.number = numberArr[i];
      }
    }
  }

  let mainArr = [];
  for (let i = 0; i <= max.number; i++){
    let strFront = `${i}|`
    let arr = [];
    arr.push(strFront);
    for (let j = 0; j <= numberArr.length; j++){
      if (i === 0){
        if (j < numberArr.length){
          arr.push(`(${numberArr[j]})-`)
        }
      } else {
        if (i <= numberArr[j]){
          arr.push('III ')
        } else {
          arr.push ('    ')
        }
        
      }
    }
    if (i === 0){
      mainArr.push(arr.join('-'))
    } else {
      mainArr.push(arr.join(' '))
    }
  }
  mainArr.reverse();
  return mainArr.join('\n');
}

console.log(generateBarChart([3, 6, 4, 7, 2]))

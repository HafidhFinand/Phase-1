function lubangTerbesar(array){
  var mainArr = []
  for (let i in array){
    var subArr = []
    for (let j in array[i])
    subArr.push(array[i][j])
    mainArr.push(subArr)
  }


  var countBiggest = {holes: 0}

  // tembak satu array pembanding yg mengandung 0 ==> arr[0][0]
  
  // cek secara horizontal ke kananapa ada 0 yg lain ==> jika iya counter ++, trus push counter ke countHor
  // berarti gua cek arr[0][1], arr[0][2] ..... arr[0][n++]

  // cek secara vertical ke atas apa ada 0 yg lain ==> jika iya counter ++, trus push counter ke countVer
  // berarti gua cek arr[1][0], arr[2][0] ..... arr[n++][0]
  
  // ambil yg paling besar dari nilai hole

  for (let i in mainArr){
    for (let j in mainArr[i]){
      var countHor = 1
      for (let sebelah = +j + 1; sebelah < mainArr[i].length; sebelah++){
        if (mainArr[i][j] === '0'){
          if (mainArr[i][sebelah] !== '0'){
            sebelah = mainArr[i].length
          }
          if (mainArr[i][j] === mainArr[i][sebelah]){
            countHor ++    
          }
      }
      }
      if (countHor > countBiggest.holes){
        countBiggest.holes = countHor
      }
    }
  }

  for (let i in mainArr){
    for (let j in mainArr[i]){
      var countVer = 1
      for (let bawah = +i + 1; bawah < mainArr.length; bawah++){
        if (mainArr[i][j] === '0'){
          if (mainArr[bawah][j] !== '0'){
            bawah = mainArr.length
          }
          if (mainArr[i][j] === mainArr[bawah][j]){
            countVer ++
          }
      }
      }
      if (countVer > countBiggest.holes){
        countBiggest.holes = countVer
      }
    }
  }

  return countBiggest.holes
}

console.log(lubangTerbesar(["00111", "01101", "00100", "11110"])) // 3
console.log(lubangTerbesar(["111", "111", "111", "100"])); // 2
console.log(lubangTerbesar(["00111", "10011", "00111", "10010","00110",'10111'])); // 6

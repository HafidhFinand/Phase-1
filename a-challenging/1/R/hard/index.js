function lompatanKuda(input){
  const converter = {
    A: 1,
    B: 2,
    C: 3,
    D: 4,
    E: 5,
    F: 6,
    G: 7,
    H: 8,
  }
  let indexRow = Number(input[1]);
  let indexCol;
  for (let i in converter){
    if (input[0] === i){
      indexCol = converter[i];
    }
  }
  let indexes = [indexRow, indexCol];

  let pos1 = [indexRow-1, indexCol+2]
  let pos2 = [indexRow+1, indexCol-2]
  let pos3 = [indexRow-1, indexCol-2]
  let pos4 = [indexRow-2, indexCol-1]
  let pos5 = [indexRow-2, indexCol+1]
  let pos6 = [indexRow-1, indexCol+2]
  let pos7 = [indexRow+1, indexCol+2]
  let pos8 = [indexRow+2, indexCol+1]

  let poss = [pos1, pos2, pos3, pos4, pos5, pos6, pos7, pos8]

  let counter = 0;
  for (let i in poss){
    if (poss[i][0] > 0 && poss[i][0] < 9 && poss[i][1] > 0 && poss[i][1] < 9){
      counter ++
    }
  }

  return counter
}

console.log(lompatanKuda('A1')) // 2
console.log(lompatanKuda('G7')) // 4
console.log(lompatanKuda('C4')) // 8
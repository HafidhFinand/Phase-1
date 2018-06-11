function dominoCard (handArr, deckArr){
  var sameWithX = [];
  var sameWithY = [];
  var biggest = {
    card: [],
    total: 0
  };

  // cocokin sm index X
  for (let i in handArr){
    let obj = {}
    if (handArr[i][0] === deckArr[0] || handArr[i][1] === deckArr[0]){
      obj.card = handArr[i];
      obj.total = handArr[i][0] + handArr[i][1]
      sameWithX.push(obj)
    }
  }

  // cocokin sm index Y
  for (let i in handArr){
    let obj = {}
    if (handArr[i][0] === deckArr[1] || handArr[i][1] === deckArr[1]){
      obj.card = handArr[i];
      obj.total = handArr[i][0] + handArr[i][1]
      sameWithY.push(obj)
    }
  }

  for (let i in sameWithX){
    if (sameWithX[i].total > biggest.total){
      biggest.total = sameWithX[i].total;
      biggest.card = sameWithX[i].card;
    }
  }

  for (let i in sameWithY){
    if (sameWithY[i].total > biggest.total){
      biggest.total = sameWithY[i].total;
      biggest.card = sameWithY[i].card;
    }
  }


  if (deckArr === undefined || biggest.total === 0){
    console.log ('tutup 1 kartu')
  }
  else {
    console.log (`keluarkan kartu [${biggest.card}]`)
  }
}


dominoCard([[3,3],[6,5],[3,4],[2,1]], [3,5]) //”keluarkan kartu [6,5]”
dominoCard([[3,3],[6,5],[3,4],[2,1]], [1,3]) //"keluarkan kartu [3,4]"
dominoCard([[2,4],[6,6],[3,6]],[1,5]) //”tutup 1 kartu”
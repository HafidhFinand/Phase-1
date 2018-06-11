const readline = require('readline');

function Dictionary(arr){
  for (let i in arr){
    for (let j = 0; j < i; j++){
      let str = arr[i]
      if(arr[i] < arr[j]){
        arr[i] = arr [j]
        arr[j] = str
      }
    }
    debugger;
  }
  return arr
}

console.log(Dictionary(["makan", "duduk", "tidur", "terbang"])); // duduk,makan,terbang,tidur
console.log(Dictionary(["anggi", "angga", "ani", "adi"])); // adi,angga,anggi,ani

module.exports = Dictionary

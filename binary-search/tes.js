
function insertionSort(arr) {
  for (var i = 0; i < arr.length; i++){
    for (var j = 0; j < i; j++){
      let number = arr[i]
      if(arr[i] < arr[j]){
        arr[i] = arr [j]
        arr[j] = number
      }
    }
    debugger;
  }
  return arr
}

const list = [3, 31, 89, 53, 53, 85, 77, 21, 55]
console.log(insertionSort(list)) // [ 17, 20, 26, 31, 44, 54, 55, 77, 93 ]
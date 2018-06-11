function linearSearch (target, values) {
  for (var i in values){
    if (values[i] === target){
      return i
    }
    debugger;
  }
}

let random_numbers = [ 6, 29, 18, 2, 72, 19, 18, 10, 37 ]
console.log(linearSearch(18, random_numbers));
// 2
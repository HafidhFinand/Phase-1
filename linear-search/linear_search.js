'use strict'

// Release 0
console.log("Linear Search")
let linearSearch = (target, values) => {
  for (var i in values){
    if (values[i] === target){
      return i;
    }
  }
  return -1;
}

let random_numbers = [ 6, 29, 18, 2, 72, 19, 18, 10, 37 ];

console.log(linearSearch(18, random_numbers));
// 2
console.log(linearSearch(9, random_numbers));
// -1

// Release 1
console.log("Global Linear Search")
let globalLinearSearch = (target, values) => {
  let index = [];
  for (var i in values){
    if (values[i] === target){
      index.push(Number(i))
    }
  }
  if (index.length > 0) return index;
  return -1;
}

let banana_arr = "banana".split("");
// ["b", "a", "n", "a", "n", "a"]
console.log(globalLinearSearch("a", banana_arr));
// [ 1, 3, 5 ]

module.exports = {
  linearSearch,
  globalLinearSearch
}

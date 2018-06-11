function checkAllVowels(str){
  var strLower = str.toLowerCase()
  var anyConsonantYet = false
  for (var i in strLower){
    if (strLower[i] !== 'a' && strLower[i] !== 'i' && strLower[i] !== 'u' && strLower[i] !== 'e' && strLower[i] !== 'o'){
      anyConsonantYet = true
    }
    debugger;
  }

  if (anyConsonantYet) return false;
  return true;
}

console.log(checkAllVowels('oio')) // true
console.log(checkAllVowels('Coding')) // false
console.log(checkAllVowels('mEnyENangkAn')) // false 
console.log(checkAllVowels('oOoIaIa')) // true
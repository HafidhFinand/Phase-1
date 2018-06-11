function toRomanRecursive(number){
  var convert = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
  }
  
  
  var result = ''
  var angka = number
  
  if (number === 0){
    return result
  }

  for(var i in convert){
    if(angka >= convert[i]){
      result += i
      angka -= convert[i]
      return result + toRomanRecursive (angka)
    }
  }
  debugger;
}


console.log(toRomanRecursive(2453))
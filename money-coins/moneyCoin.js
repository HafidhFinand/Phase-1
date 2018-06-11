function convertToCoin(number){
  var pecahan = {
    a: 10000,
    b: 5000,
    c: 2000,
    d: 1000,
    e: 500,
    f: 200,
    g: 100,
    h: 50,
    i: 20,
    j: 10,
    k: 1
  }
  var result = []
  var money = number

  for (var i in pecahan){
    while (money >= pecahan[i]){
      result.push(pecahan[i])
      money -= pecahan[i]
    }
  }
  return result
}

console.log(convertToCoin(37454))
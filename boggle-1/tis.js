var x = [
  ['D', 'G'],
  ['K', 'L']
]
var y = ''

for (let i in x){
  for (let j in x[i]){
    y += x[i][j]
  }
}


console.log(y)
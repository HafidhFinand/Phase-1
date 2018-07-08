const beli = require('./beli.js');

let permen = {
  item: 'permen',
  harga: 1000,
  waktu: 2000,
}
let cola = {
  item: 'cola',
  harga: 5000,
  waktu: 1500,
}
let greenTea = {
  item: 'green tea',
  harga: 10000,
  waktu: 1000,
}

beli(2000, permen)
.then(
  result => {
  console.log(result.msg)
  return beli(result.change, cola)}
)
.then(
  result => {
  console.log(result.msg)
  return beli(result.change, greenTea)}
).catch(
  err => {
  console.log(err.msg)} 
)

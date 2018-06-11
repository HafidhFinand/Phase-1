const beli = require('./beli.js')

let cake = {
  item: 'kue',
  harga: 30000,
  waktu: 3000
}

let candy = {
  item: 'permen',
  harga: 4000,
  waktu: 400
}

let drinks = {
  item: 'cola',
  harga: 10000,
  waktu: 1000
}


beli(200000, cake, function(kembalian){
  beli(kembalian, candy, function(uang){
    beli(uang, drinks, function(kembalian){
      beli(kembalian, candy, function(duit){
        beli(duit, candy, function(money){
          console.log(`uang saya sekarang tinggal ${money}`)
        })
      })
    })
  })
})

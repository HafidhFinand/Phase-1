class Superpower {
  constructor (){
  }

  nightVision(){
    return ('Dapat melihat dalam gelap')
  }

  superJump(){
    return ('Dapat melompat tinggi ke angkasa')
  }

  superStrength(){
    return ('Dapat menghancurkan apa saja yang dipukul')
  }

}

class Animal {
  constructor (numOfLegs, haveFur, hotBlooded){
    this._numOfLegs = numOfLegs
    this._haveFur = haveFur
    this._hotBlooded = hotBlooded
    this._superPower = new Superpower()
  }

  get superPower (){
    return this._superPower
  }
}

class Cat extends Animal {
  constructor () {
    super(4, true, true)
  }
}

class Frog extends Animal {
  constructor (){
    super(4, false, false)
  }
}

class Gorilla extends Animal {
  constructor () {
    super(2, true, true)
  }
}

let cat = new Cat ()
let frog = new Frog ()
let gorilla = new Gorilla ()

console.log(cat)
console.log(frog.superPower.superJump())



// class Animal {
//   constructor (numOfLegs, haveFur, hotBlooded){
//     this._numOfLegs = numOfLegs
//     this._haveFur = haveFur
//     this._hotBlooded = hotBlooded
//   }
//
//   get legs (){
//     return this._numOfLegs
//   }
//
//   set tambahKaki (num){
//     return this._numOfLegs += num
//   }
// }
//
// let hewan = new Animal (4, true, true)
//
// console.log (hewan)
// hewan.tambahKaki = 6
// console.log(hewan.legs)

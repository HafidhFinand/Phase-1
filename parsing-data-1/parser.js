"use strict"

const fs = require('fs')

class Person {
  constructor (id, firstName, lastName, email, phone, createdAt){
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.phone = phone;
    this.createdAt = createdAt
  }
  // Look at the above CSV file
  // What attributes should a Person object have?
}

class PersonParser {
  constructor(file) {
    this._file = file
    this._people = []
    this._size = this._people.length
  }

  parseData(){
    var peopleArr = fs.readFileSync(this._file).toString().split('\n')
    var peopleObjArr = []

    for (let i = 1; i < peopleArr.length; i++){
      let param = peopleArr[i].split(',')
      let person = new Person (param[0], param[1], param[2], param[3], param[4], param[5])
      peopleObjArr.push(person)
    }
    return peopleObjArr
  }

  get people() {
    return this._people
  }

  addPerson(personObj) {
    return this._people.push(personObj)
  }

  save(){
    var mainStr = ''
    var keysStr = Object.keys(parser.parseData()[0])
    mainStr += keysStr.join(',')
    for (let i in this._people){
      var subArr = []
      for (let j in this._people[i]){
        subArr.push(this._people[i][j])
      }
      mainStr += '\n' + subArr.join(',')
    }
    fs.writeFileSync('people.csv', mainStr)
  }
}


let parser = new PersonParser('people.csv')
parser.parseData()
let Brian = new Person (9999, 'Brian', 'Fury', 'g@mail.com', '081234567890', '2018-06-04T07:04:40-08:00')
parser.addPerson(Brian)
parser.save()

console.log(parser.parseData())
// console.log((fs.readFileSync('people.csv').toString().split('\n')[0]).split(','))



// console.log(parser.addPerson(Brian))
// console.log(`There are ${parser._size} people in the file '${parser._file}'.`)

class RumahSakit {
  constructor(){
    this._vip = []
    this._kelas1 = []
    this._kelas2 = []
    this._price = {
      vip: 1500000,
      kelas1: 750000,
      kelas2: 350000
    }
    this._budgetMax = {
      bpjs: 2000000,
      asuransi: 5500000
    }
    this._dayTreatment = {
      diare: 2,
      muntaber: 3,
      demamberdarah: 4,
      tipes: 7,
      others: 1
    }
    this._patients = []
  }

  cretePatient (obj){
    if (obj.room == 'VIP'){
      this._vip.push(obj)
    } else if (obj.room == 'Kelas 1'){
      this._kelas1.push(obj) 
    } else { 
      this._kelas2.push(obj)
    }
  }

  checkIn (obj){
    if (obj.type == 'BPJS' && obj.room == 'VIP'){
      console.log('Mohon maaf layanan kamar ini tidak tersedia')
    }
    else {

      console.log('Pasien telah terdaftar')
    }
  }

}

class Patient {
  constructor(){
    this._name = name
    this._age = age
    this._gender = gender
    this._type = type
    this._diagnosis = diagnosis
    this._totalDayTreatment = 0
    this._room = room
    this._isCheckout = false
  }
}

let pasienBpjs = [{
  name: 'A',
  age: 10,
  gender: 'M',
  type: 'BPJS',
  budgetMax: 
},{}]
let pasienAsuransi = [{},{}]
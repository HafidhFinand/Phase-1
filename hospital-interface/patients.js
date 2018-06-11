class Patient {
  constructor(arrPatient) {
    this.id = arrPatient[0];
    this.name = arrPatient[1];
    this.diagnosis = arrPatient[2];
  }
}

module.exports = Patient;
const View = require('./view');
const Model = require('./model');

class Employee {

  static error (){
    View.showError();
  }

  static createEmployee (arrEmp){
    Model.readData('./employees.json', (data) => {
      Model.register('./employees.json', data, arrEmp, View.createSuccess(data, arrEmp));
    })
  }

  static login (username, password){
    Model.readData('./employees.json', (data) => {
      Model.login('./employees.json', data, username, password, (isCorrect) => {
        if (isCorrect){
          View.loginSuccess(username);
        } else {
          View.loginFailed();
        }
      })
    })
  }

  static createPatient(arrPatient){
    Model.readData('./employees.json', (data) => {
      Model.isDoctorLoggedIn(data, (isDoctor) => {
        if (isDoctor){
          Model.readData('./patients.json', (data) => {
            Model.addPatient('./patients.json', data, arrPatient, View.addPatientSuccess(data))
          });
        } else {
          View.isNotADoctor();
        }
      })
    })
  }
  

}

module.exports = Employee;
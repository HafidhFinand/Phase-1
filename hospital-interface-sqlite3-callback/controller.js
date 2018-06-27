const View = require('./view');
const Model = require('./model');


class Controller {

  static error (param = 'Invalid Input'){
    View.showMessage(param);
  }

  static createEmployee (empArr){
    Model.register(empArr, (err, result) => {
      if (err === 'no error'){
        View.createSuccess(result);
      } else {
        View.showMessage(err.message);
      }
    })
  }

  static login (username, password){
    Model.login(username, password, (err, result) => {
      if (err === 'no error'){
        View.showMessage(result)
      } else {
        View.showMessage(err.message);
      }
    })  
  }

  static logout (username){
    Model.logout(username, (err, result) => {
      if (err === 'no error'){
        View.showMessage(result);
      } else {
        View.showMessage(err.message);
      }
    })
  }

  static addPatient (name, diseases){
    Model.addPatient(name, diseases, (err, result) => {
      if (err === 'no error'){
        View.showMessage(result);
      } else {
        View.showMessage(err.message);
      }
    })
  }

}


module.exports = Controller;


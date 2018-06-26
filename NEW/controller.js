const View = require('./view');
const Model = require('./model');


class Employee {

  static error (param = 'Invalid Input'){
    View.showError(param);
  }

  static createEmployee (empArr){
    Model.register(empArr, (status) => {
      if (status === 'success'){
        View.createSuccess(empArr);
      } else {
        View.showError(status.message);
      }
    })
  }

  static login (username, password){
    Model.login(username, password, (result) => {
      if (result === 'passwordCorrect'){
        View.loginSuccess(username);
      } else if (result === 'passwordIncorrect') {
        View.loginFailed();
      } else {
        View.showError(result.message);
      }
    })
  }
}


module.exports = Employee;

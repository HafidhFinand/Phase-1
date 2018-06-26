const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./poll.db');
const Employees = require ('./employees');
const Patients = require ('./patients');

class Employee {

  static update (table, id, col, cb){

  }

  static register(empArr, cb){
    let query = `INSERT INTO Employees (Username, Password, Position, LoginStatus) VALUES ('${empArr[0]}', '${empArr[1]}', '${empArr[2]}', 'false')`;
    db.run(query, (err) => {
      if (err) {
        cb (err);
      } else {
  
        cb ('success');
      }
    })
    }

  static login(username, password, cb){
    let query = `SELECT Username, Password FROM Employees WHERE Username = '${username}' AND Password = '${password}'`
    db.all (query, (err, result) => {
      if (err) {
        cb (err);
      } else {
        if (result.length > 0){
          cb ('passwordCorrect');

        } else {
          cb ('passwordIncorrect');
        }
      }
    })
  }

}


module.exports = Employee;

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./poll.db');

class Model {

  static update (table, id, col, cb){

  }

  static register(empArr, cb){
    let query = `INSERT INTO Employees (Username, Password, Position) VALUES (?,?,?)`;

    let empObj = {
      username: empArr[0],
      password: empArr[1],
      position: empArr[2]
    }

    db.run(query, [empArr[0], empArr[1], empArr[2]], (err) => {
      if (err) {
        cb (err, null);
      } else {
        Model.countEmployee((err, result) => {
          if(err === 'no error'){
            cb('no error', [empObj, result[0].totalEmployee]);
          } else {
            cb(err, null);
          }
        })
      }
    })
  }

  static countEmployee(cb){
    let query = `SELECT COUNT(id) AS totalEmployee FROM Employees`;

    db.all(query, (err, result)=> {
      if (err){
        cb(err, null);
      } else {
        cb('no error', result)
      }
    })
  }
    
  static login(username, password, cb){
    let queryIsAnotherPersonLogin = `SELECT * FROM Employees WHERE LoginStatus = 1`;
    let queryLoggingIn = `UPDATE Employees SET LoginStatus = 1 WHERE Username = '${username}' AND Password = '${password}'`;
    let queryCheckPass = `SELECT * FROM Employees WHERE Username = '${username}' AND Password = '${password}'`;

    db.get (queryIsAnotherPersonLogin, (err, result) => {
      if (err) {
        cb (err, null);
      } else {
        if (result === undefined){
          db.get (queryCheckPass, (err, result) => {
            if (err){
              cb (err, null)
            } else {
              if (result === undefined){
                cb ('no error', 'username or password is incorrect')
              } else {
                db.run (queryLoggingIn, (err) => {
                  if (err){
                    cb (err, null);
                  } else {
                    cb ('no error', `${username} logged in succesfully`);
                  }
                })
              }
            }
          })
        } else {
          cb ('no error', 'Someone else is still logged in')
        }
      }
    })
  }

  static logout (username, cb){
    let queryIsAnotherPersonLogin = `SELECT * FROM Employees WHERE LoginStatus = 1`;
    let queryLogout = `UPDATE Employees SET LoginStatus = NULL`;

    db.get (queryIsAnotherPersonLogin, (err, result) => {
      if (err){
        cb (err, null);
      } else {
        db.run (queryLogout, (err) => {
          if (err){
            cb (err, null)
          } else {
            cb ('no error', 'Logout success')
          }
        })
      }
    })
  }

  static addPatient(name, disease, cb){
    let queryIsDoctorLoggedIn = `SELECT * FROM Employees WHERE LoginStatus = 1 AND Position = 'Dokter'`;
    let diseasesStr = disease.join(',');
    let queryAddPatient = `INSERT INTO Patients (Name, Diagnosis) VALUES
    ('${name}', '${diseasesStr}')`;

    db.get (queryIsDoctorLoggedIn, (err, result)=> {
      if (err){
        cb (err, null);
      } else {
        if (result !== undefined){
          db.run(queryAddPatient, (err)=> {
            if (err) {
              cb (err, null);
            } else {
              Model.countPatient((err, result) => {
                if(err === 'no error'){
                  cb('no error', `Patient added. Total patients data : ${result[0].totalPatient}`);
                } else {
                  cb(err, null);
                }
              })
            }
          })
        } else {
          cb ('no error', 'You dont have authority to do that because youre not a doctor')
        }
      }
    })
  }

  static countPatient(cb){
    let query = `SELECT COUNT(id) AS totalPatient FROM Patients`;

    db.all(query, (err, result)=> {
      if (err){
        cb(err, null);
      } else {
        cb('no error', result)
      }
    })
  }
}


module.exports = Model;


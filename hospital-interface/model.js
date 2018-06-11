const fs = require('fs');
const Employees = require ('./employees');
const Patients = require ('./patients');

class Employee {
  
  static readData(path, cb){
    fs.readFile(path, (err, data) => {
      if (err) throw err;
      cb(JSON.parse(data));
    });
  }

  static writeData(path, data){
    fs.writeFile(path, JSON.stringify(data), (err) => {
      if (err) throw err;
    });
  }

  static register(path, data, arrEmp, cb){
    let newEmp = new Employees (arrEmp);
    data.push(newEmp);
    Employee.writeData(path, data);
  }

  static login(path, data, username, password, cb){
    let isCorrect = false;
    for (let i in data){
      if (data[i].username === username && data[i].password === password){
        data[i].loginStatus = true;
        Employee.writeData(path, data)
        isCorrect = true;
      }
    }
    if (isCorrect){
      cb(true);
    } else {
      cb(false);
    }
  }

  static isDoctorLoggedIn (data, cb){
    let isDoctor = false;
    for (let i in data){
      if (data[i].position === 'doctor' && data[i].loginStatus === true){
        isDoctor = true;
      }
    }
    if (isDoctor){
      cb(true);
    } else {
      cb(false);
    }
  }

  static addPatient (path, data, arrPatient, cb){
    let newPatient = new Patients (arrPatient);
    data.push(newPatient);
    Employee.writeData(path, data);
  }
}


module.exports = Employee;
class Employee {
  constructor(arrEmp) {
    this.username = arrEmp[0];
    this.password = arrEmp[1];
    this.position = arrEmp[2];
    this.loginStatus = 'false';
  }
}

module.exports = Employee;

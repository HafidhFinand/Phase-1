class Employee {

  static showError (){
    console.log('Invalid command!');
  }

  static createSuccess(data, arrEmp){
    console.log(`username: "${arrEmp[0]}" position: "${arrEmp[2]}" with password: "${arrEmp[1]}" registered. Total employee: ${data.length + 1}`);
  }

  static loginSuccess (username){
    console.log(`user ${username} logged in succesfully`);
  }

  static loginFailed(){
    console.log(`wrong username or password`);
  }

  static addPatientSuccess(data){
    console.log(`Patient's data added successfully. Total patients data : ${data.length + 1}`);
  }

  static isNotADoctor(){
    console.log(`You don't have the authority to add patient`);
  }

}

module.exports = Employee;
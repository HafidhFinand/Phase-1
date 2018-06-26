class Employee {

  static showError (param = 'Invalid command!'){
    console.log(param)
  }

  static createSuccess(empArr){
    console.log(`username: "${empArr[0]}" position: "${empArr[2]}" with password: "${empArr[1]}" registered`);
  }

  static loginSuccess (username){
    console.log(`user ${username} logged in succesfully`);
  }

  static loginFailed(){
    console.log(`wrong username or password`);
  }

  static addPatientSuccess(data){
    console.log(`Patient's data added successfully. Total patients data : ${data.length}`);
  }

  static isNotADoctor(){
    console.log(`You don't have the authority to add patient`);
  }

  static logout(){
    console.log(`Logout success!!`)
  }

}

module.exports = Employee;

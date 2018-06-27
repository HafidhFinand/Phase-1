class View {

  static showMessage (text = 'Invalid command!'){
    console.log(text)
  }

  static createSuccess(resultArr){
    console.log(`save data success ${JSON.stringify(resultArr[0])}. Total employee : ${resultArr[1]}`);
  }

  static loginSuccess (username){
    console.log(`user ${username} logged in succesfully`);
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

module.exports = View;


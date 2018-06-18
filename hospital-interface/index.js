const Controller = require('./controller');

const command = process.argv[2];
const input1 = process.argv[3];
const input2 = process.argv[4];
const input3 = process.argv[5];
const inputDesease = (process.argv).slice(5)

if (!command){
  Controller.error();
} else if (command == 'register'){
  let arrEmp = [input1, input2, input3]
  Controller.createEmployee(arrEmp)
} else if (command == 'login'){
  let username = input1;
  let password = input2;
  Controller.login(username, password)
} else if (command == 'addPatient'){
  let arrPatient = [input1, input2, inputDesease];
  Controller.createPatient(arrPatient);
} else if (command == 'logout'){
  let username = input1;
  Controller.logout(username)
} else {
  Controller.error();
}




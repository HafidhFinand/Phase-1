const Controller = require('./controller');

const command = process.argv[2];
const input1 = process.argv[3];
const input2 = process.argv[4];
const input3 = process.argv[5];
const inputDisease = (process.argv).slice(4)

if (command == 'register'){
  let empArr = [input1, input2, input3]
  Controller.createEmployee(empArr);
} else if (command == 'login'){
  Controller.login(input1, input2);
} else if (command == 'logout'){
  Controller.logout(input1)
} else if (command == 'addPatient'){
  Controller.addPatient(input1, inputDisease)
} else {
  Controller.error();
}


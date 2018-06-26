const Controller = require('./controller');

const command = process.argv[2];
const input1 = process.argv[3];
const input2 = process.argv[4];
const input3 = process.argv[5];
const inputDesease = (process.argv).slice(5)

if (command == 'register'){
  let empArr = [input1, input2, input3]
  Controller.createEmployee(empArr);
} else if (command == 'login'){
  Controller.login(input1, input2);
}

else {
  Controller.error();
}

'use strict'

class Calculator {
  //write your code here
  constructor (input) {
    this.num = input;
    this.pi = Math.PI;
  }
  add (input) {
    this.num += input;
    return this;
  }
  subtract (input) {
    this.num -= input;
    return this;
  }
  multiply (input) {
    this.num *= input
    return this;
  }
  divide (input) {
    this.num /= input;
    return this;
  }
  square (input) {
    this.num = Math.pow(this.num, input);
    return this;
  }
  squareRoot () {
    this.num = Math.sqrt(this.num);
    return this;
  }
  circleArea(input){
    this.num = this.pi * input * input
    return this;
  }
}

/** note : you can use several features from ecmascript, such as:
* - Classes
* - Default Parameters
* - Destructured Assignment
* - Template Literals
* - Method Chaining
*/

module.exports = Calculator

export default class Calculator {
  constructor() {
    this.currentValue = 0;
    this.memory = 0;
  }

  // Методы для выполнения операций
  add(operand) {
    this.currentValue += operand;
  }

  subtract(operand) {
    this.currentValue -= operand;
  }

  multiply(operand) {
    this.currentValue *= operand;
  }

  divide(operand) {
    if (operand === 0) {
      throw Error('division by zero');
    }
    this.currentValue /= operand;
  }

  exp(operand) {
    this.currentValue **= operand;
  }

  cbrt() { // have to fix
    if (this.currentValue < 0) {
      throw Error('square root of negative number');
    }
    this.currentValue = Math.sqrt(this.currentValue);
  }

  inv() {
    if (this.currentValue === 0) {
      throw Error('division by zero');
    }
    this.currentValue = 1 / this.currentValue;
  }

  memoryClear() {
    this.memory = null;
  }

  memoryRead() {
    if (this.memory !== null) {
      this.currentValue = this.memory;
    } else {
      console.warn('Memory is empty');
    }
  }

  memorySave(number) {
    this.memory = number;
  }

  getResult() {
    return this.currentValue;
  }
}

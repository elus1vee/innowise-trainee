// eslint-disable-next-line import/prefer-default-export
export class Calculator {
  constructor() {
    this.currentValue = 0;
    this.memory = 0;
    this.commands = [];
    this.command = null;
    this.flag = false;
  }

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

  cbrt(value) {
    if (this.currentValue < 0) {
      throw Error('square root of negative number');
    }
    this.currentValue **= 1 / value;
  }

  inv() {
    if (this.currentValue === 0) {
      throw Error('division by zero');
    }
    this.currentValue = 1 / this.currentValue;
  }

  percent(operand) {
    if (this.currentValue === 0) {
      this.currentValue = 1 * (operand / 100);
    }
    return this.currentValue * (operand / 100);
  }

  unpercent(operand) {
    this.currentValue /= (1 + operand / 100);
  }

  signChange() {
    this.currentValue = -this.currentValue;
  }

  clear() {
    this.currentValue = 0;
  }

  factorial() {
    if (!Number.isInteger(this.currentValue)) {
      throw Error('factorial is available only for integers');
    }
    const flag = this.currentValue;
    let result = 1;
    for (let i = 1; i <= flag; i += 1) {
      result *= i;
    }
    this.currentValue = result;
  }

  memoryClear() {
    this.memory = 0;
  }

  // eslint-disable-next-line consistent-return
  memoryRead() {
    if (this.memory !== 0) {
      return this.memory;
    }
    console.warn('Memory is empty');
  }

  memorySave(number) {
    this.memory = number;
  }

  memoryPlus(number) {
    this.memory += number;
  }

  memoryMinus(number) {
    this.memory -= number;
  }

  getResult() {
    return this.currentValue;
  }

  setValue(number) {
    this.currentValue = number;
  }

  changeFlag(value) {
    this.flag = value;
  }

  pushCommand(command) {
    this.commands.push(command);
    this.command = command;
  }
}

import {
  AddCommand, CbrtCommand, ClearCommand, DivideCommand, ExpCommand, FactorialCommand,
  InvCommand, MultiplyCommand, PercentCommand, SignChangeCommand, SubtractCommand,
} from './Command.js';

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
    this.commands.push(AddCommand);
    this.command = new AddCommand();
    this.currentValue += operand;
  }

  subtract(operand) {
    this.commands.push(SubtractCommand);
    this.command = new SubtractCommand();
    this.currentValue -= operand;
  }

  multiply(operand) {
    this.commands.push(MultiplyCommand);
    this.command = new MultiplyCommand();
    this.currentValue *= operand;
  }

  divide(operand) {
    if (operand === 0) {
      throw Error('division by zero');
    }
    this.commands.push(DivideCommand);
    this.command = new DivideCommand();
    this.currentValue /= operand;
  }

  exp(operand) {
    this.commands.push(ExpCommand);
    this.command = new ExpCommand();
    this.currentValue **= operand;
  }

  cbrt() { // have to fix
    if (this.currentValue < 0) {
      throw Error('square root of negative number');
    }
    this.commands.push(CbrtCommand);
    this.command = new CbrtCommand();
    this.currentValue = Math.sqrt(this.currentValue);
  }

  inv() {
    if (this.currentValue === 0) {
      throw Error('division by zero');
    }
    this.commands.push(InvCommand);
    this.command = new InvCommand();
    this.currentValue = 1 / this.currentValue;
  }

  percent(operand) {
    // this.commands.push(PercentCommand);
    // this.command = PercentCommand();
    return this.currentValue * (operand / 100);
  }

  unpercent(operand) {
    this.currentValue /= (1 + operand / 100);
  }

  signChange() {
    this.commands.push(SignChangeCommand);
    this.command = new SignChangeCommand();
    this.currentValue = -this.currentValue;
  }

  clear() {
    this.commands.push(ClearCommand);
    this.command = new ClearCommand();
    this.currentValue = 0;
  }

  factorial() {
    if (!Number.isInteger(this.currentValue)) {
      throw Error('factorial is available only for integers');
    }

    this.commands.push(FactorialCommand);
    this.command = new FactorialCommand();
    // eslint-disable-next-line no-plusplus
    const flag = this.currentValue;
    let result = 1;
    for (let i = 1; i <= flag; i += 1) {
      result *= i;
    }
    this.currentValue = result;
    console.log(`Получили: ${this.currentValue}`);
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

  setValue(number) {
    this.currentValue = number;
  }

  changeFlag(value) {
    this.flag = value;
  }
}

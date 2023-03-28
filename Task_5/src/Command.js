/* eslint-disable func-names */
export class Command {
  constructor() {
    this.execute = function () {};
    this.unexecute = function () {};
    this.setParams = function () {};
  }
}

export class AddCommand extends Command {
  constructor(calculator, operand) {
    super();
    this.calculator = calculator;
    this.operand = operand;
    this.setParams = function (calc, opa) {
      this.calculator = calc;
      this.operand = opa;
    };
    this.execute = function () {
      this.calculator.add(this.operand);
    };
    this.unexecute = function () {
      this.calculator.substract(this.operand);
    };
  }
}

export class SubtractCommand extends Command {
  constructor(calculator, operand) {
    super();
    this.calculator = calculator;
    this.operand = operand;
    this.setParams = function (calc, opa) {
      this.calculator = calc;
      this.operand = opa;
    };
    this.execute = function () {
      this.calculator.subtract(this.operand);
    };
    this.unexecute = function () {
      this.calculator.add(this.operand);
    };
  }
}

export class MultiplyCommand extends Command {
  constructor(calculator, operand) {
    super();
    this.calculator = calculator;
    this.operand = operand;
    this.setParams = function (calc, opa) {
      this.calculator = calc;
      this.operand = opa;
    };
    this.execute = function () {
      this.calculator.multiply(this.operand);
    };
    this.unexecute = function () {
      this.calculator.divide(this.operand);
    };
  }
}

export class DivideCommand extends Command {
  constructor(calculator, operand) {
    super();
    this.calculator = calculator;
    this.operand = operand;
    this.setParams = function (calc, opa) {
      this.calculator = calc;
      this.operand = opa;
    };
    this.execute = function () {
      this.calculator.divide(this.operand);
    };
    this.unexecute = function () {
      this.calculator.multiply(this.operand);
    };
  }
}

export class ExpCommand extends Command {
  constructor(calculator, operand) {
    super();
    this.calculator = calculator;
    this.operand = operand;
    this.setParams = function (calc, opa) {
      this.calculator = calc;
      this.operand = opa;
    };
    this.execute = function () {
      this.calculator.exp(this.operand);
    };
    this.unexecute = function () {
      this.calculator.cbrt(this.operand);
    };
  }
}

export class CbrtCommand extends Command {
  constructor(calculator, operand) {
    super();
    this.calculator = calculator;
    this.operand = operand;
    this.setParams = function (calc, opa) {
      this.calculator = calc;
      this.operand = opa;
    };
    this.execute = function () {
      this.calculator.cbrt(this.operand);
    };
    this.unexecute = function () {
      this.calculator.exp(this.operand);
    };
  }
}

export class InvCommand extends Command {
  constructor(calculator) {
    super();
    this.execute = function () {
      calculator.inv();
    };
    this.unexecute = function () {
      calculator.inv();
    };
  }
}

export class PercentCommand extends Command {
  constructor(calculator, operand) {
    super();
    this.calculator = calculator;
    this.operand = operand;
    this.setParams = function (calc, opa) {
      this.calculator = calc;
      this.operand = opa;
    };
    this.execute = function () {
      return this.calculator.percent(this.operand);
    };
    this.unexecute = function () {
      this.calculator.unpercent(this.operand);
    };
  }
}

export class SignChangeCommand extends Command {
  constructor(calculator) {
    super();
    this.execute = function () {
      calculator.signChange();
    };
    this.unexecute = function () {
      calculator.signChange();
    };
  }
}

export class ClearCommand extends Command {
  constructor(calculator) {
    super();
    this.execute = function () {
      calculator.clear();
    };
  }
}

export class FactorialCommand extends Command {
  constructor(calculator) {
    super();
    this.execute = function () {
      calculator.factorial();
    };
  }
}

export class MemoryClearCommand extends Command {
  constructor(calculator) {
    super();
    this.calculator = calculator;
    this.execute = function () {
      calculator.memoryClear();
    };
  }
}

export class MemorySaveCommand extends Command {
  constructor(calculator) {
    super();
    this.calculator = calculator;
    this.execute = function () {
      calculator.memorySave();
    };
    this.unexecute = function () {
      calculator.memoryClear();
    };
  }
}

export class MemoryPlusCommand extends Command {
  constructor(calculator, value) {
    super();
    this.calculator = calculator;
    this.execute = function () {
      calculator.memoryPlus(value);
    };
    this.unexecute = function () {
      calculator.memoryMinus(value);
    };
  }
}

export class MemoryMinusCommand extends Command {
  constructor(calculator, value) {
    super();
    this.calculator = calculator;
    this.execute = function () {
      calculator.memoryMinus(value);
    };
    this.unexecute = function () {
      calculator.memoryPlus(value);
    };
  }
}

export class MemoryReadCommand extends Command {
  constructor(calculator) {
    super();
    this.calculator = calculator;
    this.execute = function () {
      calculator.memoryRead();
    };
  }
}

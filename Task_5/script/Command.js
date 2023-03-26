export class Command {
  constructor() {
    this.execute = function () {};
    this.unexecute = function () {};
  }
}

export class AddCommand extends Command {
  constructor(calculator, operand) {
    super();
    this.execute = function () {
      calculator.add(operand);
    };
    this.unexecute = function () {
      calculator.substract(operand);
    };
  }
}

export class SubtractCommand extends Command {
  constructor(calculator, operand) {
    super();
    this.execute = function () {
      calculator.subtract(operand);
    };
    this.unexecute = function () {
      calculator.add(operand);
    };
  }
}

export class MultiplyCommand extends Command {
  constructor(calculator, operand) {
    super();
    this.execute = function () {
      calculator.multiply(operand);
    };
    this.unexecute = function () {
      calculator.divide(operand);
    };
  }
}

export class DivideCommand extends Command {
  constructor(calculator, operand) {
    super();
    this.execute = function () {
      calculator.divide(operand);
    };
    this.unexecute = function () {
      calculator.multiply(operand);
    };
  }
}

export class ExpCommand extends Command {
  constructor(calculator, operand) {
    super();
    this.execute = function () {
      calculator.exp(operand);
    };
    this.unexecute = function () {
      calculator.cbrt(operand);
    };
  }
}

export class CbrtCommand extends Command {
  constructor(calculator, operand) {
    super();
    this.execute = function () {
      calculator.cbrt(operand);
    };
    this.unexecute = function () {
      calculator.exp(operand);
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

export class MemoryReadCommand extends Command {
  constructor(calculator) {
    super();
    this.calculator = calculator;
    this.execute = function () {
      calculator.memoryRead();
    };
  }
}

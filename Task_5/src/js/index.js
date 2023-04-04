/* eslint-disable import/extensions */
// eslint-disable-next-line import/extensions, quotes
import {
  AddCommand, CbrtCommand, ClearCommand, DivideCommand, ExpCommand, FactorialCommand,
  InvCommand, MemoryClearCommand,
  MemoryMinusCommand, MemoryPlusCommand, MemoryReadCommand, MultiplyCommand,
  SignChangeCommand, SubtractCommand,
} from './calculator/Command.js';
import { Calculator } from './calculator/Calculator.js';
import '../css/styles.css';

const calculator = new Calculator();
const input = document.getElementsByClassName('calculator__input')[0];
const calc = document.getElementsByClassName('calculator__body')[0];
let themeFlag = 'black';

function themeChange(flag) {
  if (flag === 'black') {
    document.querySelectorAll('.item').forEach((element) => {
      element.classList.add('item_white');
    });
    document.getElementsByClassName('calculator__body')[0].classList.add('calculator__body_white');
    document.getElementsByClassName('calculator')[0].classList.add('calculator_white');
    document.getElementsByClassName('calculator__header')[0].classList.add('calculator__header_white');
    document.querySelectorAll('.item__number').forEach((element) => {
      element.classList.add('item__number_white');
    });
    themeFlag = 'white';
  } else {
    document.querySelectorAll('.item').forEach((element) => {
      element.classList.remove('item_white');
    });
    document.getElementsByClassName('item')[0].classList.add('item_white');
    document.getElementsByClassName('calculator__body')[0].classList.remove('calculator__body_white');
    document.getElementsByClassName('calculator')[0].classList.remove('calculator_white');
    document.getElementsByClassName('calculator__header')[0].classList.remove('calculator__header_white');
    document.querySelectorAll('.item__number').forEach((element) => {
      element.classList.remove('item__number_white');
    });
    themeFlag = 'black';
  }
}

calc.addEventListener('click', (event) => {
  const button = event.target;
  const buttonClass = button.className.split(' ')[1];
  switch (buttonClass) {
    case 'item_1':
      calculator.setValue(Number(input.value));
      calculator.pushCommand(new ExpCommand(calculator, 2));
      calculator.command.execute();
      input.value = calculator.getResult();
      break;
    case 'item_2':
      calculator.setValue(Number(input.value));
      calculator.pushCommand(new InvCommand(calculator));
      calculator.command.execute();
      input.value = calculator.getResult();
      break;
    case 'item_3':
      calculator.pushCommand(new MemoryReadCommand(calculator));
      input.value = calculator.command.execute();
      break;
    case 'item_4':
      calculator.pushCommand(new ClearCommand(calculator));
      calculator.command.execute();
      input.value = '0';
      calculator.changeFlag(false);
      break;
    case 'item_5':
      calculator.setValue(Number(input.value));
      calculator.pushCommand(new SignChangeCommand(calculator));
      calculator.command.execute();
      input.value = calculator.getResult();
      break;
    case 'item_6':
      if (calculator.getResult() === 0) {
        calculator.percent(Number(input.value));
        input.value = calculator.getResult();
      } else {
        input.value = calculator.percent(Number(input.value));
      }
      break;
    case 'item_7':
      if (calculator.flag) {
        calculator.command.setParams(calculator, Number(input.value));
        calculator.command.execute();
      } else {
        calculator.setValue(Number(input.value));
        calculator.changeFlag(true);
      }
      calculator.pushCommand(new DivideCommand());
      input.value = '0';
      break;
    case 'item_8':
      calculator.setValue(Number(input.value));
      calculator.pushCommand(new ExpCommand(calculator, 3));
      calculator.command.execute();
      input.value = calculator.getResult();
      break;
    case 'item_9':
      calculator.setValue(Number(input.value));
      calculator.pushCommand(new CbrtCommand(calculator, 2));
      calculator.command.execute();
      input.value = calculator.getResult();
      break;
    case 'item_10':
      calculator.pushCommand(new MemoryPlusCommand(calculator, Number(input.value)));
      calculator.command.execute();
      input.value = '0';
      break;
    case 'item_11':
      if (input.value === '0') { input.value = '7'; } else { input.value += '7'; }
      break;
    case 'item_12':
      if (input.value === '0') { input.value = '8'; } else { input.value += '8'; }
      break;
    case 'item_13':
      if (input.value === '0') { input.value = '9'; } else { input.value += '9'; }
      break;
    case 'item_14':
      if (calculator.flag) {
        calculator.command.setParams(calculator, Number(input.value));
        calculator.command.execute();
      } else {
        calculator.setValue(Number(input.value));
        calculator.changeFlag(true);
      }
      calculator.pushCommand(new MultiplyCommand());
      input.value = '0';
      break;
    case 'item_15':
      if (calculator.flag) {
        calculator.command.setParams(calculator, Number(input.value));
        calculator.command.execute();
      } else {
        calculator.setValue(Number(input.value));
        calculator.changeFlag(true);
      }
      calculator.pushCommand(new ExpCommand());
      input.value = '0';
      break;
    case 'item_16':
      calculator.setValue(Number(input.value));
      calculator.pushCommand(new CbrtCommand(calculator, 3));
      calculator.command.execute();
      input.value = calculator.getResult();
      break;
    case 'item_17':
      calculator.pushCommand(new MemoryMinusCommand(calculator, Number(input.value)));
      calculator.command.execute();
      input.value = '0';
      break;
    case 'item_18':
      if (input.value === '0') { input.value = '4'; } else { input.value += '4'; }
      break;
    case 'item_19':
      if (input.value === '0') { input.value = '5'; } else { input.value += '5'; }
      break;
    case 'item_20':
      if (input.value === '0') { input.value = '6'; } else { input.value += '6'; }
      break;
    case 'item_21':
      if (calculator.flag) {
        calculator.command.setParams(calculator, Number(input.value));
        calculator.command.execute();
        input.value = '0';
      } else if (input.value === '0') {
        input.value = '-';
      } else {
        calculator.setValue(Number(input.value));
        calculator.changeFlag(true);
        input.value = '0';
      }
      calculator.pushCommand(new SubtractCommand());
      break;
    case 'item_22':
      calculator.setValue(Number(input.value));
      calculator.pushCommand(new FactorialCommand(calculator));
      calculator.command.execute();
      input.value = calculator.getResult();
      break;
    case 'item_23':
      if (calculator.flag) {
        calculator.command.setParams(calculator, Number(input.value));
        calculator.command.execute();
      } else {
        calculator.setValue(Number(input.value));
        calculator.changeFlag(true);
      }
      calculator.pushCommand(new CbrtCommand());
      input.value = '0';
      break;
    case 'item_24':
      calculator.pushCommand(new MemoryClearCommand(calculator));
      calculator.command.execute();
      break;
    case 'item_25':
      if (input.value === '0') { input.value = '1'; } else { input.value += '1'; }
      break;
    case 'item_26':
      if (input.value === '0') { input.value = '2'; } else { input.value += '2'; }
      break;
    case 'item_27':
      if (input.value === '0') { input.value = '3'; } else { input.value += '3'; }
      break;
    case 'item_28':
      if (calculator.flag) {
        calculator.command.setParams(calculator, Number(input.value));
        calculator.command.execute();
      } else {
        calculator.setValue(Number(input.value));
        calculator.changeFlag(true);
      }
      calculator.pushCommand(new AddCommand());
      input.value = '0';
      break;
    case 'item_29':
      themeChange(themeFlag);
      break;
    case 'item_30':
      if (input.value !== '0') { input.value += '0'; }
      break;
    case 'item_31':
      input.value += '.';
      break;
    case 'item_32':
      if (calculator.flag) {
        calculator.command.setParams(calculator, Number(input.value));
        calculator.command.execute();
        input.value = calculator.getResult();
        calculator.changeFlag(false);
      }
      break;
    default:
      break;
  }
});

document.addEventListener('keydown', (event) => {
  const { key } = event;
  switch (key) {
    case '1':
      if (input.value === '0') { input.value = '1'; } else { input.value += '1'; }
      break;
    case '2':
      if (input.value === '0') { input.value = '2'; } else { input.value += '2'; }
      break;
    case '3':
      if (input.value === '0') { input.value = '3'; } else { input.value += '3'; }
      break;
    case '4':
      if (input.value === '0') { input.value = '4'; } else { input.value += '4'; }
      break;
    case '5':
      if (input.value === '0') { input.value = '5'; } else { input.value += '5'; }
      break;
    case '6':
      if (input.value === '0') { input.value = '6'; } else { input.value += '6'; }
      break;
    case '7':
      if (input.value === '0') { input.value = '7'; } else { input.value += '7'; }
      break;
    case '8':
      if (input.value === '0') { input.value = '8'; } else { input.value += '8'; }
      break;
    case '9':
      if (input.value === '0') { input.value = '9'; } else { input.value += '9'; }
      break;
    case '0':
      if (input.value !== '0') { input.value += '0'; }
      break;
    case '.':
      input.value += '.';
      break;
    default:
      break;
  }
});

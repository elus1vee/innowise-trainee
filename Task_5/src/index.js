/* eslint-disable import/extensions */
// eslint-disable-next-line import/extensions, quotes
import {
  AddCommand, CbrtCommand, ClearCommand, DivideCommand, ExpCommand, FactorialCommand,
  InvCommand, MemoryClearCommand,
  MemoryMinusCommand, MemoryPlusCommand, MemoryReadCommand, MultiplyCommand,
  SignChangeCommand, SubtractCommand,
} from './Command.js';
import { Calculator } from './Calculator.js';
import './styles.css';

const calculator = new Calculator();
const input = document.getElementsByClassName('calculator__input')[0];
const calc = document.getElementsByClassName('calculator__body')[0];
let themeFlag = 'black';

function themeChange(flag) {
  if (flag === 'black') {
    document.querySelectorAll('.item').forEach((element) => {
      element.classList.add('item-white');
    });
    document.getElementsByClassName('calculator__body')[0].classList.add('calculator__body-white');
    document.getElementsByClassName('calculator')[0].classList.add('calculator-white');
    document.getElementsByClassName('calculator__header')[0].classList.add('calculator__header-white');
    document.querySelectorAll('.item-number').forEach((element) => {
      element.classList.add('item-number-white');
    });
    themeFlag = 'white';
  } else {
    document.querySelectorAll('.item').forEach((element) => {
      element.classList.remove('item-white');
    });
    document.getElementsByClassName('item')[0].classList.add('item-white');
    document.getElementsByClassName('calculator__body')[0].classList.remove('calculator__body-white');
    document.getElementsByClassName('calculator')[0].classList.remove('calculator-white');
    document.getElementsByClassName('calculator__header')[0].classList.remove('calculator__header-white');
    document.querySelectorAll('.item-number').forEach((element) => {
      element.classList.remove('item-number-white');
    });
    themeFlag = 'black';
  }
}

calc.addEventListener('click', (event) => {
  const button = event.target;
  const buttonClass = button.className.split(' ')[1];
  switch (buttonClass) {
    case 'item1':
      calculator.setValue(Number(input.value));
      calculator.pushCommand(new ExpCommand(calculator, 2));
      calculator.command.execute();
      input.value = calculator.getResult();
      break;
    case 'item2':
      calculator.setValue(Number(input.value));
      calculator.pushCommand(new InvCommand(calculator));
      calculator.command.execute();
      input.value = calculator.getResult();
      break;
    case 'item3':
      calculator.pushCommand(new MemoryReadCommand(calculator));
      input.value = calculator.command.execute();
      break;
    case 'item4':
      calculator.pushCommand(new ClearCommand(calculator));
      calculator.command.execute();
      input.value = '0';
      calculator.changeFlag(false);
      break;
    case 'item5':
      calculator.setValue(Number(input.value));
      calculator.pushCommand(new SignChangeCommand(calculator));
      calculator.command.execute();
      input.value = calculator.getResult();
      break;
    case 'item6':
      if (calculator.getResult() === 0) {
        calculator.percent(Number(input.value));
        input.value = calculator.getResult();
      } else {
        input.value = calculator.percent(Number(input.value));
      }
      break;
    case 'item7':
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
    case 'item8':
      calculator.setValue(Number(input.value));
      calculator.pushCommand(new ExpCommand(calculator, 3));
      calculator.command.execute();
      input.value = calculator.getResult();
      break;
    case 'item9':
      calculator.setValue(Number(input.value));
      calculator.pushCommand(new CbrtCommand(calculator, 2));
      calculator.command.execute();
      input.value = calculator.getResult();
      break;
    case 'item10':
      calculator.pushCommand(new MemoryPlusCommand(calculator, Number(input.value)));
      calculator.command.execute();
      input.value = '0';
      break;
    case 'item11':
      if (input.value === '0') { input.value = '7'; } else { input.value += '7'; }
      break;
    case 'item12':
      if (input.value === '0') { input.value = '8'; } else { input.value += '8'; }
      break;
    case 'item13':
      if (input.value === '0') { input.value = '9'; } else { input.value += '9'; }
      break;
    case 'item14':
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
    case 'item15':
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
    case 'item16':
      calculator.setValue(Number(input.value));
      calculator.pushCommand(new CbrtCommand(calculator, 3));
      calculator.command.execute();
      input.value = calculator.getResult();
      break;
    case 'item17':
      calculator.pushCommand(new MemoryMinusCommand(calculator, Number(input.value)));
      calculator.command.execute();
      input.value = '0';
      break;
    case 'item18':
      if (input.value === '0') { input.value = '4'; } else { input.value += '4'; }
      break;
    case 'item19':
      if (input.value === '0') { input.value = '5'; } else { input.value += '5'; }
      break;
    case 'item20':
      if (input.value === '0') { input.value = '6'; } else { input.value += '6'; }
      break;
    case 'item21':
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
    case 'item22':
      calculator.setValue(Number(input.value));
      calculator.pushCommand(new FactorialCommand(calculator));
      calculator.command.execute();
      input.value = calculator.getResult();
      break;
    case 'item23':
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
    case 'item24':
      calculator.pushCommand(new MemoryClearCommand(calculator));
      calculator.command.execute();
      break;
    case 'item25':
      if (input.value === '0') { input.value = '1'; } else { input.value += '1'; }
      break;
    case 'item26':
      if (input.value === '0') { input.value = '2'; } else { input.value += '2'; }
      break;
    case 'item27':
      if (input.value === '0') { input.value = '3'; } else { input.value += '3'; }
      break;
    case 'item28':
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
    case 'item29':
      themeChange(themeFlag);
      break;
    case 'item30':
      if (input.value !== '0') { input.value += '0'; }
      break;
    case 'item31':
      input.value += '.';
      break;
    case 'item32':
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

// eslint-disable-next-line import/extensions, quotes
import {
  AddCommand, DivideCommand, ExpCommand, MultiplyCommand, PercentCommand, SignChangeCommand, SubtractCommand,
} from './script/Command.js';
import { Calculator } from './script/Calculator.js';

const calculator = new Calculator();
const input = document.getElementsByClassName('calculator__input')[0];
const calc = document.getElementsByClassName('calculator__body')[0];

calc.addEventListener('click', (event) => {
  const button = event.target;
  const buttonClass = button.className.split(' ')[1];
  console.log(buttonClass);
  console.log(calculator.command);
  switch (buttonClass) {
    case 'item1':
      calculator.setValue(Number(input.value));
      calculator.exp(2);
      input.value = calculator.getResult();
      break;
    case 'item2':
      break;
    case 'item3':
      break;
    case 'item4':
      calculator.clear();
      input.value = '0';
      calculator.changeFlag(false);
      break;
    case 'item5':
      calculator.setValue(Number(input.value));
      console.log(calculator.getResult());
      calculator.signChange();
      input.value = calculator.getResult();
      break;
    case 'item6':
      input.value = calculator.percent(Number(input.value));
      break;
    case 'item7':
      calculator.command = new DivideCommand();
      if (calculator.flag) {
        calculator.divide(Number(input.value));
        input.value = calculator.getResult();
      } else {
        calculator.setValue(Number(input.value));
        calculator.changeFlag(true);
        input.value = '0';
      }
      break;
    case 'item8':
      calculator.setValue(Number(input.value));
      calculator.exp(3);
      input.value = calculator.getResult();
      break;
    case 'item9':
      break;
    case 'item10':
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
      calculator.command = new MultiplyCommand();
      if (calculator.flag) {
        calculator.multiply(Number(input.value));
        input.value = calculator.getResult();
      } else {
        calculator.setValue(Number(input.value));
        calculator.changeFlag(true);
        input.value = '0';
      }
      break;
    case 'item15':
      calculator.command = new ExpCommand();
      if (calculator.flag) {
        calculator.exp(Number(input.value));
        input.value = calculator.getResult();
      } else {
        calculator.setValue(Number(input.value));
        calculator.changeFlag(true);
        input.value = '0';
      }
      break;
    case 'item16':
      break;
    case 'item17':
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
      calculator.command = new SubtractCommand();
      if (calculator.flag) {
        calculator.subtract(Number(input.value));
        input.value = calculator.getResult();
      } else {
        calculator.setValue(Number(input.value));
        calculator.changeFlag(true);
        input.value = '0';
      }
      break;
    case 'item22':
      calculator.setValue(Number(input.value));
      calculator.factorial();
      input.value = calculator.getResult();
      break;
    case 'item23':
      break;
    case 'item24':
      break;
    case 'item25':
      if (calculator.flag) {
        input.value = '0';
      }
      if (input.value === '0') { input.value = '1'; } else { input.value += '1'; }
      break;
    case 'item26':
      if (input.value === '0') { input.value = '2'; } else { input.value += '2'; }
      break;
    case 'item27':
      if (input.value === '0') { input.value = '3'; } else { input.value += '3'; }
      break;
    case 'item28':
      calculator.command = new AddCommand();
      if (calculator.flag) {
        calculator.add(Number(input.value));
        input.value = calculator.getResult();
      } else {
        calculator.setValue(Number(input.value));
        calculator.changeFlag(true);
        input.value = '0';
      }
      break;
    case 'item29':
      break;
    case 'item30':
      if (input.value !== '0') { input.value += '0'; }
      break;
    case 'item31':
      input.value += '.';
      break;
    case 'item32':
      console.log(calculator.command);
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
  console.log(calculator.flag);
  console.log(calculator.getResult());
});

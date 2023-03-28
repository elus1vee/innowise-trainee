/* eslint-disable no-undef */
import { Calculator } from './src/Calculator';

describe('Calculator', () => {
  let calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  describe('add', () => {
    test('adds two positive numbers', () => {
      calculator.currentValue = 2;
      calculator.add(3);
      expect(calculator.currentValue).toBe(5);
    });

    test('adds a positive and a negative number', () => {
      calculator.add(-2);
      calculator.add(3);
      expect(calculator.currentValue).toBe(1);
    });
  });
  describe('subtract', () => {
    test('subtracts two positive numbers', () => {
      calculator.currentValue = 5;
      calculator.subtract(2);
      expect(calculator.currentValue).toBe(3);
    });

    test('subtracts a positive and a negative number', () => {
      calculator.currentValue = -2;
      calculator.subtract(3);
      expect(calculator.currentValue).toBe(-5);
    });
  });

  describe('multiply', () => {
    test('multiplies two positive numbers', () => {
      calculator.currentValue = 2;
      calculator.multiply(4);
      expect(calculator.currentValue).toBe(8);
    });

    test('multiplies a positive and a negative number', () => {
      calculator.currentValue = -9;
      calculator.multiply(10);
      expect(calculator.currentValue).toBe(-90);
    });

    test('multiplies by 0', () => {
      calculator.currentValue = 5;
      calculator.multiply(0);
      expect(calculator.currentValue).toBe(0);
    });
  });

  describe('divide', () => {
    test('divides two positive numbers', () => {
      calculator.currentValue = 6;
      calculator.divide(3);
      expect(calculator.currentValue).toBe(2);
    });

    test('divides a positive and a negative number', () => {
      calculator.currentValue = -6;
      calculator.divide(2);
      expect(calculator.currentValue).toBe(-3);
    });
  });

  describe('procent', () => {
    test('0-100 procents of a number', () => {
      calculator.percent(20);
      expect(calculator.currentValue).toBe(0.2);
    });
  });
  describe('sign change', () => {
    test('input is empty', () => {
      calculator.currentValue = 10;
      calculator.signChange();
      expect(calculator.currentValue).toBe(-10);
    });
  });
  describe('power', () => {
    test('power', () => {
      calculator.currentValue = 2;
      calculator.exp(3);
      expect(calculator.currentValue).toBe(8);
    });
    test('negative power', () => {
      calculator.currentValue = 2;
      calculator.exp(-2);
      expect(calculator.currentValue).toBe(0.25);
    });
  });
  describe('root', () => {
    test('positive root', () => {
      calculator.currentValue = 4;
      calculator.cbrt(2);
      expect(calculator.currentValue).toBe(2);
    });
  });
  test('factorial', () => {
    calculator.currentValue = 5;
    calculator.factorial();
    expect(calculator.currentValue).toBe(120);
  });
});

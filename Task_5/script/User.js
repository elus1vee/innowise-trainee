// // eslint-disable-next-line import/extensions
// import Calculator from './Calculator.js';
// import {
//   AddCommand, CbrtCommand, ClearCommand, DivideCommand, ExpCommand, FactorialCommand,
//   InvCommand, MemoryClearCommand, MemoryReadCommand, MemorySaveCommand, MultiplyCommand,
//   PercentCommand,
//   SignChangeCommand, SubtractCommand,
// // eslint-disable-next-line import/extensions
// } from './Command.js';

// // eslint-disable-next-line import/prefer-default-export
// export class User {
//   constructor() {
//     this.calculator = new Calculator();
//     this.commands = [];
//     this.command = null;
//     this.flag = false;

//     this.add = function (operand) {
//       this.commands.push(this.command);
//       this.command.execute();
//     };

//     this.subtract = function (operand) {
//       this.command = new SubtractCommand(this.calculator, operand);
//       this.commands.push(this.command);
//       this.command.execute();
//     };

//     this.multiply = function (operand) {
//       this.command = new MultiplyCommand(this.calculator, operand);
//       this.commands.push(this.command);
//       this.command.execute();
//     };

//     this.divide = function (operand) {
//       this.command = new DivideCommand(this.calculator, operand);
//       this.commands.push(this.command);
//       this.command.execute();
//     };

//     this.exp = function (operand) {
//       this.command = new ExpCommand(this.calculator, operand);
//       this.commands.push(this.command);
//       this.command.execute();
//     };

//     this.cbrt = function (operand) {
//       this.command = new CbrtCommand(this.calculator, operand);
//       this.commands.push(this.command);
//       this.command.execute();
//     };

//     this.inv = function () {
//       this.command = new InvCommand(this.calculator);
//       this.commands.push(this.command);
//       this.command.execute();
//     };

//     this.percent = function (operand) {
//       this.command = new PercentCommand(this.calculator, operand);
//       this.commands.push(this.command);
//       return this.command.execute();
//     };

//     this.signChange = function () {
//       this.command = new SignChangeCommand(this.calculator);
//       this.commands.push(this.command);
//       this.command.execute();
//     };

//     this.clear = function () {
//       this.command = new ClearCommand(this.calculator);
//       this.commands.push(this.command);
//       this.command.execute();
//     };

//     this.factorial = function (operand) {
//       this.command = new FactorialCommand(this.calculator, operand);
//       this.commands.push(this.command);
//       this.command.execute();
//     };

//     this.memoryClear = function () {
//       this.command = new MemoryClearCommand(this.calculator);
//       this.commands.push(this.command);
//       this.command.execute();
//     };

//     this.memorySave = function () {
//       this.command = new MemorySaveCommand(this.calculator);
//       this.commands.push(this.command);
//       this.command.execute();
//     };

//     this.memoryRead = function () {
//       this.command = new MemoryReadCommand(this.calculator);
//       this.commands.push(this.command);
//       this.command.execute();
//     };

//     this.getCount = function () {
//       return this.calculator.getResult();
//     };

//     this.setValue = function (number) {
//       this.calculator.setValue(number);
//     };

//     this.changeFlag = function (value) {
//       this.flag = value;
//     };

//     this.unexecute = function () {
//       if (this.commands.length === 0) {
//         throw new Error('Command stack is empty');
//       }
//       this.command = this.commands.pop();
//       this.command.unexecute();
//     };
//   }
// }

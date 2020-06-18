const numberButtons = document.querySelectorAll('[data-number]');
const operatorButtons = document.querySelectorAll('[data-operator]');
const deleteButton = document.querySelector('[data-delete]');
const resetButton = document.querySelector('[data-reset]');
const outputText = document.querySelector('[data-output-text');

function add(num1, num2) {
  if(Number.isInteger(num1) && Number.isInteger(num2)) {
    return num1 + num2;
  }
  return "please choose a number";
};

function subtract(num1, num2) {
  return num1 - num2;
};

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

function operate(num1, operator, num2) {
  if (Number.isInteger(num1) && Number.isInteger(num2)) {
    
  }
}
class Calculator {
  constructor(currentOperandElement, previousOperandElement) {
    this.currentOperandElement = currentOperandElement;
    this.previousOperandElement = previousOperandElement;
    this.clear();
  }

  clear() {
    this.currentOperand = '';
    this.previousOperand = '';
    this.operation = undefined;
  }

  delete() {

  }

  appendNumber(number) {
    if(number === '.' && this.currentOperand.includes('.')) return;
    this.currentOperand = this.currentOperand.toString() + number.toString();
  }

  selectedOperator(operation) {
    if (this.currentOperand === '') return;
    if (this.previousOperand !-== '') {
      this.operate();
    }
    this.operation = operation;
    this.previousOperand = this.currentOperand;
    this.currentOperand = '';
  }

  operate() {
    let computation;
    const current = parseFloat(this.currentOperand);
    const prev = parseFloat(this.previousOperand);
    if(isNan(current) || isNan(prev)) return;
    
    switch(this.operation) {
      case "+":
        computation = current + prev;
        break;
      case "-":
        computation = current - prev;
        break;
      case "*":
        computation = current * prev;
        break;
      case "/":
        computation = current / prev;
        break;
      default:
        console.log("Something happened");
        return;
    }
    this.currentOperand = computation;
    this.operation = undefined;
    this.previousOperand = '';
  }

  updateDisplay() {
    this.currentOperandElement.innerText = this.currentOperand;
    this.previousOperandElement.innerText = this.previousOperand;
  }
}

const numberButtons = document.querySelectorAll('[data-number]');
const operatorButtons = document.querySelectorAll('[data-operator]');
const equalsButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete]');
const resetButton = document.querySelector('[data-reset]');
const currentOperandElement = document.querySelector('[data-current-operand');
const previousOperandElement = document.querySelector('[data-previous-operand');

const display = document.querySelector('[data-output]');

const calculator = new Calculator(currentOperandElement, previousOperandElement);

numberButtons.forEach(button => {
  button.addEventListener('click', () => {
    calculator.appendNumber(button.innerText);
    calculator.updateDisplay();
  })
})

operatorButtons.forEach(button => {
  button.addEventListener('click', () => {
    calculator.selectedOperator(button.innerText);
    calculator.updateDisplay();
  })
})

equalsButton.addEventListener('click', button => {
  calculator.compute();
  calculator.updateDisplay();
})

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

function updateDisplay() {

}
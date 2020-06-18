class Calculator {
  constructor(currentOperandElement, previousOperandElement) {
    this.currentOperandElement = currentOperandElement;
    this.previousOperandElement = previousOperandElement;
    this.readyToReset = false;
    this.clear();

  }
  
  clear() {
    this.currentOperand = '';
    this.previousOperand = '';
    this.operation = undefined;
  } 

  delete() {
    this.currentOperand = this.currentOperand.toString().slice(0, -1);
  }

  appendNumber(number) {
    if(number === '.' && this.currentOperand.includes('.')) return;
    this.currentOperand = this.currentOperand.toString() + number.toString();
  }

  selectedOperator(operation) {
    if (this.currentOperand === '') return;
    if (this.previousOperand !== '' && this.currentOperand !== "") {
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
    if(isNaN(current) || isNaN(prev)) return;
    switch(this.operation) {
      case "+":
        computation = prev + current;
        break;
      case "-":
        computation = prev - current;
        break;
      case "×":
        computation = prev * current;
        break;
      case "÷":
        computation = prev / current;
        break;
      default:
        console.log("Something happened");
        break;
    }
    this.readyToReset = true;
    this.currentOperand = computation;
    this.operation = undefined;
    this.previousOperand = '';
  }

  updateDisplay() {
    this.currentOperandElement.innerText = this.currentOperand;

    if (this.operation != null) {
      this.previousOperandElement.innerText = 
        `${this.previousOperand} ${this.operation}`;
    } else {
      this.previousOperandElement.innerText = "";
    }
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
    if (calculator.previousOperand === "" && calculator.currentOperand !== "" && calculator.readyToReset) {
      calculator.currentOperand = "";
      calculator.readyToReset = false;
    }
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
  calculator.operate();
  calculator.updateDisplay();
})

resetButton.addEventListener('click', button => {
  calculator.clear();
  calculator.updateDisplay();
})

deleteButton.addEventListener('click', button => {
  calculator.delete();
  calculator.updateDisplay();
})
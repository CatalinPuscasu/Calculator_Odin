//math operations

// function add(a, b) {
//     return a + b;
// }

// console.log(add(10, 45));

// function subtract(a, b) {
//     return a - b;
// }

// console.log(subtract(43, 8));

// function multiply(a, b) {
//     return a * b;
// }

// console.log(multiply(2, 9));

// function divide(a, b) {
//     return a / b;
// }

// console.log(divide(48, 2));

// function operate(a, b) {
//   return add(a, b);
// }

// console.log(operate(14, 89));

let Numbuttons = document.querySelector('.buttons-container');


const calculator = {
     displayedValue : '0',
     Operand1 : null,
     awaitingSecondOperand : false,
     operator : null,
};

function userInput(digit) {
     const {displayedValue, awaitingSecondOperand} = calculator;

     if(awaitingSecondOperand === true) {

          calculator.displayedValue = digit;
          calculator.awaitingSecondOperand = false;

     } else {
            calculator.displayedValue = displayedValue === '0' ? digit : displayedValue + digit;
     }
   console.log(calculator);
     
};

function operate(nextOperator) {
      
     const {Operand1, displayedValue, operator} = calculator;
     
     const inputValue = parseFloat(displayedValue);

     if(operator && calculator.awaitingSecondOperand)  {
               calculator.operator = nextOperator;
               console.log(calculator);
               return;
     }

     if (Operand1 === null && !isNaN(inputValue)) {
          calculator.Operand1 = inputValue;
     }

     else if (operator) {
          const result = calculate(Operand1, inputValue, operator);

          calculator.displayedValue = String(result);
          calculator.Operand1 = result;
     }

     calculator.awaitingSecondOperand = true;
     calculator.operator = nextOperator;

   console.log(calculator);


};

function calculate(Operand1, Operand2, operator) {
      
     if(operator === "+") {
         return Operand1 + Operand2;
     }
     else if (operator === '-') {
         return Operand1 - Operand2;
     }
     else if (operator === '*') {
         return Operand1 * Operand2;
     }
     else if (operator === '/') {
         return Operand1 / Operand2;
     }

    return Operand2;
}

function reset() {

    calculator.displayedValue = '0';
    calculator.Operand1 = null;
    calculator.awaitingSecondOperand = false;
    calculator.operator = null;
    console.log(calculator);

}


function resultDisplay() {
    const result = document.querySelector('.result');
    result.value = calculator.displayedValue;
}

// resultDisplay();




Numbuttons.addEventListener('click', (event) => {
          
     let {target} = event;

     const {value} = target;

          if(!target.matches('button')) {

                return;
          }

          switch (value) {

               case '+':
               case '-':
               case '*':
               case '/':
               case '=':
                    operate(value);
                    break;
               case 'Clear':
                    reset();
                    break;

               default:
                    if(Number.isInteger(parseFloat(value))) {
                         userInput(value);
                    }
          }

          resultDisplay();
    });





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
const equalBtn = document.querySelector('.equalBtn');
const plusBtn = document.querySelector('.plusBtn');

const calculator = {
     displayedValue : '0',
     Operand1 : null,
     awaitingSecondOperand : false,
     operator : null,
};

function userInput(digit) {
     const {displayedValue} = calculator;

     calculator.displayedValue = displayedValue === '0' ? digit : displayedValue + digit;
}
userInput();

function resultDisplay() {
    const result = document.querySelector('.result');
    result.value = calculator.displayedValue;
}

resultDisplay();




    Numbuttons.addEventListener('click', (event) => {
          let {target} = event;

          if(!target.matches('button')) {

                return;
          }

          if (target.classList.contains('operator'))  {
               console.log('operator', target.value);
               return;
          }

           if (target.classList.contains('clearBtn'))  {
               console.log('clear', target.value);
               return;
          }

          userInput(target.value);
          resultDisplay();
    });

// Numbuttons.forEach(button => {
//     button.addEventListener('click', () => {
//          document.querySelector('.result').textContent = `${button.textContent}`;
//          if(Numbuttons.textContent !== null) {
//             button.addEventListener('click', () => {
//                  document.querySelector('.result').textContent = `${button.textContent}${button.textContent}`;
//             })
//          }
//     })
// });



// Numbuttons.forEach(button => {

//     if (firstInput !== null) {
//            button.addEventListener('click', () => {
//          document.querySelector('.result').textContent = `${button.value}`;
//          console.log(button.value);
//          return button.value;
//     })
//     }
   
// });

// console.log(secondInput);


// let secondInput = Numbuttons.forEach(button => {
//     button.addEventListener('click', () => {
//          if (firstInput !== null) {
//                  console.log("1 input is already put");
//                  document.querySelector('.result').textContent = `${button.textContent}`;
//          }
         
//     })
// });



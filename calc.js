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

const Numbuttons = document.querySelectorAll('.btn');
const equalBtn = document.querySelector('.equalBtn');
const plusBtn = document.querySelector('.plusBtn');


Numbuttons.forEach(button => {
    button.addEventListener('click', () => {
         document.querySelector('.result').textContent = `${button.textContent}`;
         if(Numbuttons.textContent !== null) {
            button.addEventListener('click', () => {
                 document.querySelector('.result').textContent = `${button.textContent}${button.textContent}`;
            })
         }
    })
});

plusBtn.addEventListener('click', () => {
    return (Numbuttons + Numbuttons);
});

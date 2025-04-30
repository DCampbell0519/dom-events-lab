/*-------------------------------- Constants --------------------------------*/


/*-------------------------------- Variables --------------------------------*/
let currentInput = "";
let previousInput = "";
let operator = null;

/*------------------------ Cached Element References ------------------------*/
const calculator = document.querySelector('#calculator');
const display = document.querySelector('.display')
display.innerText = 0;


/*----------------------------- Event Listeners -----------------------------*/
calculator.addEventListener('click', (event) => {
    if (event.target.classList.contains('number')) {
        clickNumber(event.target.innerText);
    } else if (event.target.classList.contains('operator')) {
        if (event.target.innerText === "C") {
            clearCalculator();
        } else {
            clickOperators(event.target.innerText)
        }
    } else if (event.target.classList.contains('equals')) {
        calculateResult();
    }

    
    
})
console.dir(display)
/*-------------------------------- Functions --------------------------------*/
function clickNumber(num) {
    const number = event.target.innerText;
    currentInput += num;
    console.log(num)
    display.innerText = currentInput;
}

function clickOperators(opt) {
    console.log({opt, previousInput, currentInput})
    if (operator === "C") {
        clearCalculator();
        return;
    } 

    if (currentInput === "") return;
    previousInput = currentInput;
    currentInput = "";
    operator = opt;
    console.log({operator, previousInput, currentInput})
    
}

function calculateResult() {
    console.log({operator, previousInput, currentInput})
    if (operator === "+") {
        let sum = parseInt(previousInput) + parseInt(currentInput)
        display.innerText = sum;
    } else if (operator === "-") {
        let sum = parseInt([previousInput]) - parseInt(currentInput)
        display.innerText = sum;
    } else if (operator === "*") {
        let sum = parseInt([previousInput]) * parseInt(currentInput)
        display.innerText = sum;
    } else if (operator === "/") {
        let sum = parseInt([previousInput]) / parseInt(currentInput)
        display.innerText = sum;
    } 
}

function clearCalculator() {
    console.log({operator, previousInput, currentInput})
    currentInput = "";
    previousInput = "";
    operator = null;
    display.innerText = 0;
}
/*-------------------------------- User Stories --------------------------------*/
/*As a user, I want to be able to select numbers so that I can perform operations with them.
As a user, I want to be able to add two numbers together.
As a user, I want to be able to subtract one number from another.
As a user, I want to be able to multiply two numbers together.
As a user, I want to be able to divide one number by another.
As a user, I want to be able to see the output of the mathematical operation.
As a user, I want to be able to clear all operations and start from 0.
*/
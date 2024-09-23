

const display = document.getElementById("display-text");
const clearButton = document.getElementById("clear");
const equalsButton = document.getElementById("equals");

const numbers = [...document.querySelectorAll("#numbers > button")];
const operators = [...document.querySelectorAll("#operations > button")];
const add = (a, b) => a + b;

const substract = (a, b) => a - b;

const multiply = (a, b) => a * b;

const divide = (a, b) => a / b;


const calculate = (num1, num2, op) =>
{

    switch (op)
    {
        case '+':
            return add(num1, num2);
        case '-':
            return substract(num1, num2);
        case '*':
            return multiply(num1, num2);
        case '/':
            
            if (num2 == 0)
                return "NO";
            return (divide(num1, num2)).toFixed(6);

        default:
            console.log("ERROR");
    }
}

let num1 = "";
let num2 = "";
let op = "";

let secondNumber = false;


const updateDisplay = (num) =>
{
   display.textContent += num;

   const text = String(display.textContent);
    if (!secondNumber)
        num1 += num;
    else 
        num2 += num;

    
        console.log(text.length);
    if (text.length > 9)
        display.style.fontSize = "40px";
    else
        display.style.fontSize = "80px"
   
}

const processOperator = (operator) =>
{

   

    
    let displayInput = String(display.textContent);
    if (displayInput == "" || ['+', '-', '*', '/'].includes(displayInput.slice(-1)))
        return;


    // if there are 2 or more operators
    if (secondNumber)
        {
            num1 = calculate(parseInt(num1), parseInt(num2), op);
            num2 = "";
        }
    display.textContent += operator;
    op = operator;

    secondNumber = true;


}

const reset = () =>
{
    display.textContent = "";
    num1 = "";
    num2 = "";
    op = "";
    secondNumber = false;
}

reset();


numbers.forEach(button => button.addEventListener("click", () => updateDisplay(button.textContent)));

operators.forEach(button => button.addEventListener("click", () => processOperator(button.textContent)));
clearButton.addEventListener("click", reset)

equalsButton.addEventListener("click", () =>
{

    if (num1 === "" || num2 === "" || op === "")
    {
        return;
    }
    let result = calculate(parseInt(num1), parseInt(num2), op);
    reset();
    display.textContent = result;
    num1 = result;
})
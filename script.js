




const add = (a, b) => a + b;

const substract = (a, b) => a - b;

const multiply = (a, b) => a * b;

const divide = (a, b) => a / b;




const operator = (num1, num2, operator) =>
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
            return divide(num1, num2);

        default:
            console.log("ERROR");
    }
}

let num1 = 2;
let num2 = 3;
let op = '+';


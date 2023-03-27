let expression = []; 
let result = document.getElementById('result');
let input = document.getElementById('currentNum');
let currentAction = '';
let currentNum = null;
let newNum = null;

const operations = {
    ' + ': (a, b) => a + b,
    ' - ': (a, b) => a - b,
    ' * ': (a, b) => a * b,
    ' / ': (a, b) => a / b
}

function clearDisplay() {
    result.value = '';
    input.value = '';
    expression = [];
}

function updateInput() {
    input.value = currentNum;
}

function addToExpression(x) {
    expression.push(x);
    result.value = expression.join('');
}

function changeLastNum() {
    while (+expression[expression.length-1]) expression.pop();
    addToExpression(input.value);
}

function display(digit) {
    currentNum = +(input.value.toString() + digit.toString());
    addToExpression(digit);
    updateInput();
}

function action(operation) {
    newNum = currentNum;
    currentAction = operation;
    currentNum = null;
    updateInput();
    addToExpression(operation);
}

function percentage() {
    currentNum = currentNum/100;
    updateInput();
    changeLastNum();
}

function changeSign() {
    currentNum = -(currentNum);
    updateInput();
    changeLastNum();
}
function calculate() {
    currentNum = operations[currentAction](newNum, currentNum);
    updateInput();
}
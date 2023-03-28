let expression = []; 
let result = document.getElementById('result');
let input = document.getElementById('currentNum');
let currentAction = '';
let currentNum = null;
let newNum = null;

const operations = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => a / b
}

function clearDisplay() {
    result.value = '';
    input.value = '';
    expression = [];
}

function updateInput() {
    input.value = currentNum;
}

function updateResult() {
    result.value = expression.join(' ');
}

function addToExpression(x) {
    expression.push(x);    
}

function updateLastNum() {
    addToExpression(input.value);
    updateResult();
}

function addDigit(digit) {
    currentNum = +(input.value.toString() + digit.toString());
    
    updateInput();
}

function action(operation) {
    addToExpression(currentNum);
    newNum = currentNum;
    currentAction = operation;
    currentNum = null;
    updateInput();
    addToExpression(operation);
    updateResult();
}

function percentage() {
    currentNum = currentNum/100;
    updateInput();
}

function changeSign() {
    currentNum = -(currentNum);
    updateInput();
}

function calculate() {
    addToExpression(currentNum);
    updateResult();
    currentNum = operations[currentAction](newNum, currentNum);
    updateInput();
}
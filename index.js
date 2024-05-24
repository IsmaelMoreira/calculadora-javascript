let displayValue = '0';

function updateDisplay() {
    document.getElementById('display').innerText = displayValue;
}

function inputDigit(digit) {
    if (displayValue === '0') {
        displayValue = digit;
    } else {
        displayValue += digit;
    }
    updateDisplay();
}

function inputOperator(operator) {
    displayValue += ' ' + operator + ' ';
    updateDisplay();
}

function clearDisplay() {
    displayValue = '0';
    updateDisplay();
}

function deleteLast() {
    displayValue = displayValue.slice(0, -1);
    if (displayValue === '') {
        displayValue = '0';
    }
    updateDisplay();
}

function calculateResult() {
    try {
        displayValue = eval(displayValue.replace('×', '*').replace('÷', '/')).toString();
    } catch (e) {
        displayValue = 'Error';
    }
    updateDisplay();
}
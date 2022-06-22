// program for abasic calculaor

//takingthe operator input
const operator = prompt('Enter operator (either +, -, * or /): ');

// taking the input
const number1 = parseFloat(prompt('first number: '));
const number2 = parseFloat(prompt('second number:'));

//using if...else if...else

let result;
if (operator == '+') {
    result = number1 + number2;
}
else if (operator == '-') {
    result = number1 - number2;
}
else if (operator == '*') {
    result = number1 * number2;
}
else {
    result = number1 / number2;
}

//result display on the console
console.log('${number1} ${operator} ${number2} = ${result}');






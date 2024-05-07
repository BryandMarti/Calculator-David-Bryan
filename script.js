//Since id's were used in html, adding every element individually was necessary
//grab every element for the calculator's button
const display = document.querySelector("#display");
const btnOn = document.querySelector("#gridbutton-2");
const btnOff = document.querySelector("#gridbutton-3");
const btnSqrt = document.querySelector("#gridbutton-4");
const btnMod = document.querySelector("#gridbutton-5");
const btnMC = document.querySelector("#gridbutton-7");
const btnMRC = document.querySelector("#gridbutton-8");
const btnMminus = document.querySelector("#gridbutton-9");
const btnMplus = document.querySelector("#gridbutton-10");
const btnDiv = document.querySelector("#gridbutton-11");
const btnSquared = document.querySelector("#gridbutton-12");
const btn7 = document.querySelector("#gridbutton-13");
const btn8 = document.querySelector("#gridbutton-14");
const btn9 = document.querySelector("#gridbutton-15");
const btnMul = document.querySelector("#gridbutton-16");
const btn4 = document.querySelector("#gridbutton-17");
const btn5 = document.querySelector("#gridbutton-18");
const btn6 = document.querySelector("#gridbutton-19");
const btnSub = document.querySelector("#gridbutton-20");
const btn1 = document.querySelector("#gridbutton-21");
const btn2 = document.querySelector("#gridbutton-22");
const btn3 = document.querySelector("#gridbutton-23");
const btnAdd = document.querySelector("#gridbutton-24");
const btn0 = document.querySelector("#gridbutton-25");
const btnDec = document.querySelector("#gridbutton-26");
const btnEquals = document.querySelector("#gridbutton-27");
const btnMem = document.querySelector("#gridbutton-Mem");

//add an event listener for each button
display.addEventListener('click', pressOn);
btnOn.addEventListener('click', pressOn);
btnOff.addEventListener('click', pressOff);
btnSqrt.addEventListener('click', pressSqrt);
btnMod.addEventListener('click', pressMod);
btnMC.addEventListener('click', pressMC);
btnMRC.addEventListener('click', pressMRC);
btnMminus.addEventListener('click', pressMminus);
btnMplus.addEventListener('click', pressMplus);
btnDiv.addEventListener('click', pressDiv);
btnSquared.addEventListener('click', pressSquared);
btn7.addEventListener('click', press7);
btn8.addEventListener('click', press8);
btn9.addEventListener('click', press9);
btnMul.addEventListener('click', pressMul);
btn4.addEventListener('click', press4);
btn5.addEventListener('click', press5);
btn6.addEventListener('click', press6);
btnSub.addEventListener('click', pressSub);
btn1.addEventListener('click', press1);
btn2.addEventListener('click', press2);
btn3.addEventListener('click', press3);
btnAdd.addEventListener('click', pressAdd);
btn0.addEventListener('click', press0);
btnDec.addEventListener('click', pressDec);
btnEquals.addEventListener('click', pressEquals);
btnMem.addEventListener('click', pressMem);

//store display state
let isOn = true;
//store results for memory features
const results = [];
//Store Memory value 
let M = 0;
//Keeps track how many times mem button was clicked
let memClicks = 1;
//store split up equation in array 
const equation = [];
//store entire expression
let expression = "";
//reset display
display.value = "";

//Turn display on or clear if already on
function pressOn() {
    if (isOn) {
        //reset stored values
        display.value = "";
        equation.splice(0, equation.length);
        expression = "";
        memClicks = 1;
    } else {
        //turn on calculator
        display.disabled = false;
        display.placeholder = "000000000000000";
        isOn = true;
    }
}

//turn off calculator
function pressOff() {
    display.disabled = true;
    display.placeholder = "";
    isOn = false;
    memClicks = 1;
}

//Evaluate expression
function evaluateInMiddle() {
    memClicks = 1;
    if (equation[equation.length - 2] === '√') {
        expression += ")"
        display.value = evaluate(expression);
    } else {
        display.value = evaluate(expression);
    }
}

//Show full expression
function goBackToExpression() {
    memClicks = 1;
    if (equation.length > 3) {
        //Get expression from equation array
        let expr = "";
        for (const element of equation) {
            expr += element;
        }
        //Change text to math notation
        expr = expr.replaceAll(/[*]/g, "x");
        expr = expr.replaceAll(/[*]{2}2/g, "²");
        expr = expr.replaceAll(/Math.sqrt(\d*)(\.?)(\d*)/g, "√$1$2$3");

        display.value = expr;
    } else if (isNaN(equation[0]) && equation[0] !== '√') {
        display.value = 'ERR: invalid';
    }
}

//0 button
function press0() {
    //Adds digit to a new index if last index was an operator, otherwise adds the digit to the last number
    if (isNaN(equation[equation.length - 1])) {
        equation.push(0);
    } else {
        equation[equation.length - 1] += '0';
    }
    //Updates expression and display values
    expression += 0;
    display.value += 0;
    evaluateInMiddle();
}

//Add number to equation, expression, and display when 1 is pressed button
function press1() {
    //Adds digit to a new index if last index was an operator, otherwise adds the digit to the last number
    if (isNaN(equation[equation.length - 1])) {
        equation.push(1);
    } else {
        equation[equation.length - 1] += '1';
    }
    //Updates expression and display values
    expression += 1;
    display.value += "1";
    evaluateInMiddle();
}

//Add number to equation, expression, and display when 2 button is pressed
function press2() {
    //Adds digit to a new index if last index was an operator, otherwise adds the digit to the last number
    if (isNaN(equation[equation.length - 1])) {
        equation.push(2);
    } else {
        equation[equation.length - 1] += '2';
    }
    //Updates expression and display values
    expression += 2;
    display.value += "2";
    evaluateInMiddle()
}

//Add number to equation, expression, and display when 3 button is pressed
function press3() {
    //Adds digit to a new index if last index was an operator, otherwise adds the digit to the last number
    if (isNaN(equation[equation.length - 1])) {
        equation.push(3);
    } else {
        equation[equation.length - 1] += '3';
    }
    //Updates expression and display values

    expression += 3;
    display.value += "3";

    evaluateInMiddle();
}

//Add number to equation, expression, and display when 4 button is pressed
function press4() {
    //Adds digit to a new index if last index was an operator, otherwise adds the digit to the last number
    if (isNaN(equation[equation.length - 1])) {
        equation.push(4);
    } else {
        equation[equation.length - 1] += '4';
    }
    //Updates expression and display values
    expression += 4;
    display.value += "4";

    evaluateInMiddle()
}

//Add number to equation, expression, and display when 5 button is pressed
function press5() {
    //Adds digit to a new index if last index was an operator, otherwise adds the digit to the last number
    if (isNaN(equation[equation.length - 1])) {
        equation.push(5);
    } else {
        equation[equation.length - 1] += '5';
    }
    //Updates expression and display values
    expression += 5;
    display.value += "5";

    evaluateInMiddle();
}

//Add number to equation, expression, and display when 6 button is pressed
function press6() {
    //Adds digit to a new index if last index was an operator, otherwise adds the digit to the last number
    if (isNaN(equation[equation.length - 1])) {
        equation.push(6);
    } else {
        equation[equation.length - 1] += '6';
    }
    //Updates expression and display values
    expression += 6;
    display.value += "6";

    evaluateInMiddle();
}

//Add number to equation, expression, and display when 7 button is pressed
function press7() {
    //Adds digit to a new index if last index was an operator, otherwise adds the digit to the last number
    if (isNaN(equation[equation.length - 1])) {
        equation.push(7);
    } else {
        equation[equation.length - 1] += '7';
    }
    //Updates expression and display values
    expression += 7;
    display.value += "7";

    evaluateInMiddle();
}

//Add number to equation, expression, and display when 8 button is pressed
function press8() {
    //Adds digit to a new index if last index was an operator, otherwise adds the digit to the last number
    if (isNaN(equation[equation.length - 1])) {
        equation.push(8);
    } else {
        equation[equation.length - 1] += '8';
    }
    //Updates expression and display values
    expression += 8;
    display.value += "8";

    evaluateInMiddle();
}

//Add number to equation, expression, and display when 9 button is pressed
function press9() {
    //Adds digit to a new index if last index was an operator, otherwise adds the digit to the last number
    if (isNaN(equation[equation.length - 1])) {
        equation.push(9);
    } else {
        equation[equation.length - 1] += '9';
    }
    //Updates expression and display values
    expression += 9;
    display.value += "9";
    console.log("1: ")
    console.log(equation);
    console.log(expression);
    evaluateInMiddle();
}

//Add addition operator
function pressAdd() {
    //if last element is a square root add a paranthesis before the number, other wise only add number
    if (equation[equation.length - 2] === '√') {
        expression += ")+";
        equation.push('+');
        display.value += "+";
        goBackToExpression();
    } else {
        switch (equation[equation.length - 1]) {
            case '*':
            case '/':
            case '-':
            case '+':
            case '²':
            case '%':
            case '√':
                //If last element is an operator, replace it
                display.value = display.value.replace(/[x\+\/\-%]$/, '+');
                equation[equation.length - 1] = '+';
                expression = expression.replace(/[x\+\/\-%]$/, '+');
                break;
            default:
                equation.push('+');
                expression += '+';
                display.value += "+";
                goBackToExpression();
        }
    }
}

//Add subtraction operator
function pressSub() {
    switch (equation[equation.length - 1]) {
        case '*':
        case '/':
        case '-':
        case '+':
        case '²':
        case '%':
        case '√':
            //If last element is an operator, replace it
            display.value = display.value.replace(/[x\+\/\-%]$/, '-');
            equation[equation.length - 1] = '-';
            expression = expression.replace(/[x\+\/\-%]$/, '-');
            break;
        default:
            equation.push('-');
            expression += '-';
            display.value += "-";
            goBackToExpression()
    }
}

//Add multiplication operator
function pressMul() {
    switch (equation[equation.length - 1]) {
        case '*':
        case '/':
        case '-':
        case '+':
        case '²':
        case '%':
        case '√':
            //If last element is an operator, replace it
            display.value = display.value.replace(/[x\+\/\-%]$/, 'x');
            equation[equation.length - 1] = '*';
            expression = expression.replace(/[x\+\/\-%]$/, '*');
            break;
        default:
            equation.push("*");
            expression += '*';
            display.value += "x";
            goBackToExpression()
    }
}

//Add division operator
function pressDiv() {
    switch (equation[equation.length - 1]) {
        case '*':
        case '/':
        case '-':
        case '+':
        case '²':
        case '%':
        case '√':
            //If last element is an operator, replace it
            display.value = display.value.replace(/[x\+\/\-%]$/, '/');
            equation[equation.length - 1] = '/';
            expression = expression.replace(/[x\+\/\-%]$/, '/');
            break;
        default:
            display.value += "/";
            expression += "/"
            equation.push('/');
            goBackToExpression();
    }
}

//Add Modulo operator
function pressMod() {
    switch (equation[equation.length - 1]) {
        case '*':
        case '/':
        case '-':
        case '+':
        case '²':
        case '%':
        case '√':
            //If last element is an operator, replace it
            display.value = display.value.replace(/[x\+\/\-%]$/, '%');
            equation[equation.length - 1] = '%';
            expression = expression.replace(/[x\+\/\-%]$/, '%');
            break;
        default:
            equation.push('%');
            display.value += "%";
            expression += "%";
            goBackToExpression();
    }
}

//Add power of 2 operator
function pressSquared() {
    switch (equation[equation.length - 1]) {
        case '*':
        case '/':
        case '-':
        case '+':
        case '²':
        case '%':
        case '√':
            display.value = 'ERR: two operators';
            break;
        default: {
            const lastElement = equation[equation.length - 1];
            equation[equation.length - 1] = lastElement * lastElement;
            expression += '**2';
            display.value = '';
            for (const element of equation) {
                display.value += element;
            }

        }
    }
}

//Add square root operator
function pressSqrt() {
    const lastElement = equation[equation.length - 1];
    if (lastElement === '√') {
        display.value = 'ERR: two operators';
    } else if (!isNaN(lastElement)) {
        equation.push('*');
        equation.push('√');
        display.value += "x√";
        expression += `*Math.sqrt(`
        goBackToExpression()
    } else {
        equation.push('√');
        display.value += "√";
        expression += `Math.sqrt(`
        goBackToExpression();
    }
}

//Add decimal symbol
function pressDec() {
    switch (equation[equation.length - 1]) {
        case '*':
        case '/':
        case '-':
        case '+':
        case '²':
        case '%':
        case '√':
            display.value = 'ERR: invalid data';
            break;
        default:
            equation[equation.length - 1] += '.';
            display.value += ".";
            expression += '.'
            goBackToExpression();
    }
}

//Memory button for user control
function pressMem() {
    //Grab last calculations based on amount of clicks
    const result = results[results.length - memClicks];
    if (!isNaN(result)) {
        display.value = result;
        memClicks++;
    } else {
        display.value = 0;
        equation.splice(0, equation.length);
        expression = '';
    }
}

//Clears memory, equation, expressions, and display
function pressMC() {
    pressOn();
    M = 0;
    results.splice(0, results.length);
    display.value = "MEM CLEARED";
}

//Displays M value
function pressMRC() {
    memClicks = 1;
    equation.splice(0, equation.length);
    expression = "";
    display.value = M;
}

//Subtracts currently displayed expression to M value
function pressMminus() {
    memClicks = 1;
    equation.splice(0, equation.length);
    expression = "";
    const result = evaluate(display.value);
    if (!isNaN(result))
        M -= result;
}

//Adds currently displayed expression to M value
function pressMplus() {
    memClicks = 1;
    equation.splice(0, equation.length);
    expression = "";
    const result = evaluate(display.value);
    if (!isNaN(result))
        M += result;
}

function pressEquals() {
    if (expression === "") {
        //catch any malicious commands coming through display with user keyboard
        try {
            display.value = evaluate(display.value);
            console.log('intended: ' + evaluate(display.value));
        }
        catch (err) {
            display.value = "ERR: invalid data"
        }
    } else {
        const result = evaluate(expression)
        display.value = result;
        results.push(result);
    }
}

function evaluate(expr) {
    //replaces '{', '}', '(', ')', ',', and '/' with empty string to prevent malicious code
    expr = expr.replaceAll(/[{}()]/gm, "");
    expr = expr.replaceAll(/[,]/gm, "");
    expr = expr.replaceAll(/Math.sqrt(\d*)(\.?)(\d*)/g, "Math.sqrt(" + '$1$2$3' + ")");

    //uses indirect eval to limit the scope and abilities of eval, while still returning accurate information
    let result = eval?.(`"use strict";(${expr})`);
    // round to 4 decimal places if number is a double or float
    if (result % 1 !== 0) {
        return result.toFixed(4);
    }
    return result;
}
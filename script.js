const display = document.querySelector("#display");
const btnOn = document.querySelector("#gridbutton-2");
const btnOff = document.querySelector("#gridbutton-3");
const btnSqrt = document.querySelector("#gridbutton-4");
const btnMod = document.querySelector("#gridbutton-5");
const btnMR = document.querySelector("#gridbutton-6");
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

display.addEventListener('click', pressOn);
btnOn.addEventListener('click', pressOn);
btnOff.addEventListener('click', pressOff);
btnSqrt.addEventListener('click', pressSqrt);
btnMod.addEventListener('click', pressMod);
btnMR.addEventListener('click', pressMR);
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

let isOn = true;
const equation = [''];
let expression = "";
display.value = "";

function pressOn() {
    if (isOn) {
        display.value = "";
        equation.splice(0, equation.length);
        expression = "";
    } else {
        display.placeholder = "000000000000000";
        isOn = true;
    }
}

function pressOff() {
    display.placeholder = "";
    isOn = false;
}

function press0() {
    if (isNaN(equation[equation.length - 1])) {
        equation.push(0);
    }  else {
        equation[equation.length - 1] += '0';
    }
    
    expression += 0;
    display.value += 0;
    // display.value = '';
    // for (let i = 0; i < equation.length; i++) {
    //     display.value += equation[i];
    // }
}

function press1() {
    if (isNaN(equation[equation.length - 1])) {
        equation.push(1);
    }  else {
        equation[equation.length - 1] += '1';
    }

    expression += 1;
    display.value += "1";
}

function press2() {
    if (isNaN(equation[equation.length - 1])) {
        equation.push(2);
    }  else {
        equation[equation.length - 1] += '2';
    }
    
    expression += 2;
    display.value += "2";
}

function press3() {
    if (isNaN(equation[equation.length - 1])) {
        equation.push(3);
    }  else {
        equation[equation.length - 1] += '3';
    }

    expression += 3;
    display.value += "3";
}

function press4() {
    if (isNaN(equation[equation.length - 1])) {
        equation.push(4);
    }  else {
        equation[equation.length - 1] += '4';
    }
    expression += 4;
    display.value += "4";
}

function press5() {
    if (isNaN(equation[equation.length - 1])) {
        equation.push(5);
    }  else {
        equation[equation.length - 1] += '5';
    }
    expression += 5;
    display.value += "5";
}

function press6() {
    if (isNaN(equation[equation.length - 1])) {
        equation.push(6);
    }  else {
        equation[equation.length - 1] += '6';
    }
    expression += 6;
    display.value += "6";
}

function press7() {
    if (isNaN(equation[equation.length - 1])) {
        equation.push(7);
    }  else {
        equation[equation.length - 1] += '7';
    }
    expression += 7;
    display.value += "7";
}

function press8() {
    if (isNaN(equation[equation.length - 1])) {
        equation.push(8);
    }  else {
        equation[equation.length - 1] += '8';
    }
    expression += 8;
    display.value += "8";
}

function press9() {
    if (isNaN(equation[equation.length - 1])) {
        equation.push(9);
    }  else {
        equation[equation.length - 1] += '9';
    }
    expression += 9;
    display.value += "9";
}

function pressAdd() {
    if (equation[equation.length - 2] === '√') {
        expression += ")+";
        equation.push('+');
        display.value += " + ";
    } else {
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
            default:
                equation.push('+');
                expression += '+';
                display.value += " + ";
        }
    }
}

function pressSub() {
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
        default:
            equation.push('-');
            expression += '-';
            display.value += "-";
    }
}

function pressMul() {
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
        default:
            equation.push("*");
            expression += '*';
            display.value += " x ";
    }
}

function pressDiv() {
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
        default:
            display.value += " / ";
            expression += "/"
            equation.push('/');
    }
}

function pressMod() {
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
        default:
            equation.push('%');
            display.value += "%"
            expression += "%"
    }
}

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
            const lastNumber = equation[equation.length - 1];
            equation[equation.length - 1] = lastNumber * lastNumber;
            expression += '**2';
            display.value = '';
            for (let i = 0; i < equation.length; i++) {
                display.value += equation[i];
            }
        }
    }
}

function pressSqrt() {
    if (equation[equation.length - 1] === '√') {
        display.value = 'ERR: two operators';
            
    } else {
        equation.push('√');
        display.value += "√";
        expression += `Math.sqrt(`
    }
}

function pressDec() {
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
        default:
            equation[equation.length - 1] += '.';
            display.value += ".";
            expression += '.'
    }
}

function pressMR() {
    display.value = "" + display.value;
    console.log(equation);
    console.log(expression);

    // equation.splice(0, equation.length);;
    // display.value = "";
    // expression = ''
}

function pressMC() {
    display.value = "MEM CLEARED";
    
}

function pressMRC() {
    display.value = "" + display.value;
}

function pressMminus() {
    display.value = "" + display.value;
}

function pressMplus() {
    display.value = "" + display.value;
}

function pressEquals() {
    if (expression === "") {
        //catch any malicious commands coming through display with user keyboard
        try {
            display.value = evaluate(display.value);
            console.log('intended: ' + evaluate(display.value));
        }
        catch(err) {
            display.value = "ERR: invalid data"
        }
    } else {
        display.value = evaluate(expression);
    }
}

function evaluate(expr) {
    //replaces '{', '}', '(', ')', ',', and '/' with empty string to prevent malicious code
    expr = expr.replaceAll(/[{}()]/gm, "");
    expr = expr.replaceAll(/[,\/]/gm, "");
    expr = expr.replaceAll(/Math.sqrt\d*\.?\d*/g, "Math.sqrt(");

    console.log(expr);
    //uses indirect eval to limit the scope and abilities of eval, while still returning accurate information
    return eval?.(`"use strict";(${expr})`);
}
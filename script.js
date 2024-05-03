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
const equation = ['('];
let expression = "(";
display.value = "";

function pressOn() {
    if (isOn) {
        display.value = "";
        equation.splice(0, 1);
        expression = "(";
    } else {
        display.style.backgroundColor = "transparent";
        isOn = true;
    }
}

function pressOff() {
    display.style.backgroundColor = "black";
    isOn = false;
}

function pressSqrt() {
    if (Math.sqrt(display.value)) {
        switch (equation[--equation.length]) {
            case '*':
            case '/':
            case '-':
            case '+':
            case '²':
            case '%':
            case '':
                equation.push(3);
                equation.push(')');
                equation.push('(');
                break;
            default:
                equation.push(3);
        }
        display.value += `${Math.sqrt(display.value)}`;
    } else {
        display.value = "Err: invalid sqrt";
    }
}
function pressMod() {
    display.value += " % ";
    equation.push('%');
}

function pressMR() {
    display.value = "" + display.value;
    console.log(equation);
    console.log(expression)
}

function pressMC() {
    display.value = "" + display.value;
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

function pressDiv() {
    display.value += " ÷ ";
    equation.push('/');
}

function pressSquared() {
    display.value = display.value + "²";
    equation.push("²");
}

function press7() {
    switch (equation[--equation.length]) {
        case '*':
        case '/':
        case '-':
        case '+':
        case '²':
        case '%':
        case '√':
            equation.push(7);
            equation.push(')');
            equation.push('(');
            break;
        default:
            equation.push(7);
    }
    display.value += "7";
}

function press8() {
    switch (equation[--equation.length]) {
        case '*':
        case '/':
        case '-':
        case '+':
        case '²':
        case '%':
        case '√':
            equation.push(8);
            equation.push(')');
            equation.push('(');
            break;
        default:
            equation.push(8);
    }
    display.value += "8";
}

function press9() {
    switch (equation[--equation.length]) {
        case '*':
        case '/':
        case '-':
        case '+':
        case '²':
        case '%':
        case '√':
            equation.push(9);
            equation.push(')');
            equation.push('(');
            break;
        default:
            equation.push(9);
    }
    display.value += "9";
}

function pressMul() {
    equation.push("*");
    display.value += " x ";
}

function press4() {
    switch (equation[--equation.length]) {
        case '*':
        case '/':
        case '-':
        case '+':
        case '²':
        case '%':
        case '√':
            equation.push(4);
            equation.push(')');
            equation.push('(');
            break;
        default:
            equation.push(4);
    }
    display.value += "4";
}

function press5() {
    switch (equation[--equation.length]) {
        case '*':
        case '/':
        case '-':
        case '+':
        case '²':
        case '%':
        case '√':
            equation.push(5);
            equation.push(')');
            equation.push('(');
            break;
        default:
            equation.push(5);
    }
    display.value += "5";
}

function press6() {
    switch (equation[--equation.length]) {
        case '*':
        case '/':
        case '-':
        case '+':
        case '²':
        case '%':
        case '√':
            equation.push(6);
            equation.push(')');
            equation.push('(');
            break;
        default:
            equation.push(6);
    }
    display.value += "6";
}

function pressSub() {
    equation.push['-'];
    display.value += "-";
}

function press1() {
    switch (equation[--equation.length]) {
        case '*':
        case '/':
        case '-':
        case '+':
        case '²':
        case '%':
        case '√':
            equation.push(1);
            equation.push(')');
            equation.push('(');
            break;
        default:
            equation.push(1);
    }
    display.value += "1";
}

function press2() {
    switch (equation[--equation.length]) {
        case '*':
        case '/':
        case '-':
        case '+':
        case '²':
        case '%':
        case '√':
            equation.push(2);
            equation.push(')');
            equation.push('(');
            break;
        default:
            equation.push(2);
    }
    display.value += "2";
}

function press3() {
    switch (equation[--equation.length]) {
        case '*':
        case '/':
        case '-':
        case '+':
        case '²':
        case '%':
        case '√':
            equation.push(3);
            equation.push(')');
            equation.push('(');
            break;
        default:
            equation.push(3);
    }
    display.value += "3";
}

function pressAdd() {
    equation.push('+');
    display.value += " + ";
}

function press0() {
    switch (equation[--equation.length]) {
        case '*':
        case '/':
        case '-':
        case '+':
        case '²':
        case '%':
        case '√':
            equation.push(0);
            equation.push(')');
            equation.push('(');
            break;
        default:
            equation.push(0);
    }
    display.value += "0";
}

function pressDec() {
    equation.push['.'];
    display.value += ".";
}

function pressEquals() {
    for (let i = 0; i < equation.length; i++) {
        switch (equation[i]) {
            case '*':

                break;
            case '/':

                break;
            case '-':

                break;
            case '+':

                break;
            case '²':

                break;
            case '%':

                break;
            case '√':

                break;
            default:


        }

        // if (equation[i] !== '*' && equation[i] !== '+' && equation[i] !== '-' && equation[i] !== '/' && equation[i] !== '²' && equation[i] !== '%' && equation[i] !== '') {
        //     expression += equation[i];
        // } else {

        // }
    }
}

function evaluate(expr) {
    display.value = eval?.(`"use strict";(${expr})`);
}
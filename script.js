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
let backgroundEquation = "";

function pressOn() {
    if (isOn) {
        display.value = "";
    } else {
        display.style.backgroundColor = "white";
        isOn = true;
    }
}

function pressOff() {
    display.style.backgroundColor = "black";
    isOn = false;
}

function pressSqrt() {
    if (Math.sqrt(display.value)) {
        display.value = Math.sqrt(display.value);
    } else {
        display.value = "Err: invalid sqrt"
    }
}
function pressMod() {
    display.value += " % ";
}

function pressMR() {
    display.value = "" + display.value;
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
}

function pressSquared() {
    display.value = display.value + "²";
}

function press7() {
    if (display.value.includes(" ")) {
        
    } else {
        display.value += "7";
    }
}

function press8() {
    display.value += "8";
}

function press9() {
    display.value += "9";
}

function pressMul() {
    display.value += " x ";
}

function press4() {
    display.value += "4";
}

function press5() {
    display.value += "5";
}

function press6() {
    display.value += "6";
}

function pressSub() {
    display.value += "-";
}

function press1() {
    display.value +="1";
}

function press2() {
    display.value += "2";
}

function press3() {
    display.value += "3";
}

function pressAdd() {
    display.value += " + ";
}

function press0() {
    display.value += "0";
}

function pressDec() {
    display.value += ".";
}

function pressEquals() {
    const expression = display.value;
    backgroundEquation = "";
}

function evaluate(expr) {
    return eval?.(`"use strict";(${obj})`);
}
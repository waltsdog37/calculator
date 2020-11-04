let number = [];
let display;

// listen for number buttons to be clicked and add to number array
let btns = document.querySelectorAll(".number, .function");
for (let i=0; i<btns.length; i++) {
    btns[i].addEventListener("click", function() {
        number.push(btns[i].value);  
        console.log(number);
        output(number);
    });
}

// display number, as buttons pushed, in output area
// clear output if "a/c" pushed
function output(number) {
    display = document.getElementById("output")
    display.innerHTML = number.join("");
    if (number[number.length-1] == '') {
        display.value = "";
    }
}


function getOperation(element) {
    let operation;
    if (element == "plus-ios" || element == "plus-old") {
        operation = "+";
    } else {
        operation = element;
    }
    operate(operation);
}

function operate(operation) {
    switch (operation) {
        case "+":
            add();
            break;
        case "-":
            console.log("sub ")
            subtract();
            break;
        case "*":
            multiply();
            break;
        case "/":
            divide();
            break;
    }
}

// Four main operation functions
function add(first, second) {
    let answer = first + second;
    console.log(answer);
}

function subtract(first, second) {
    console.log(first, second);
    let answer = first - second;
    console.log(answer);
}

function multiply(first, second) {
    let answer = first * second;
    return answer;
}

function divide(first, second) {
    let answer = first / second;
    return answer;
}





// change CSS file with click of toggle switch
function changeStyle() {
    let style = document.getElementById("style");
    let old = "oldschool.css";
    let ios = "ios.css";
    let check = document.getElementById("change-style");
    if (check.checked == true) {
        style.setAttribute("href", old);
    } else {
        style.setAttribute("href", ios);
    }
}


let number = "";
let first;
let second;
const display = document.getElementById("output");


// listen for button press and trigger resulting functions
let btns = document.querySelectorAll("button");

for (let i = 0; i < btns.length; i++) {
    let btn = btns[i];
    let findNumberClass = btn.getAttribute("class");
    btn.addEventListener("click", function () {

        // if button is a number, add it to number array
        if (findNumberClass == "number") {
            let digit = btn.value;
            number = number + digit;
            output(number);

            // if button is AC, clear display
        } else if (findNumberClass == "function") {
            if (btn.value == "clear") {
                number = "";
                first = "";
                second = "";
                output(number);
            }

            // if button is operation, save number array as first and begin getting second
        } else if (findNumberClass == "operation") {
            operation = btn.value;
            first = number;
            number = "";

            // if equals, change both numbers to integers and trigger operation function
        } else if (findNumberClass == "equals") {
            second = number;
            first = parseInt(first);
            second = parseInt(second);
            operate(operation, first, second);

        }
    });
};

// display number in output area, as buttons are pushed
function output(number) {
    if (number == "") {
        display.innerHTML = "";
    } else { 
        display.innerHTML = number;
    }
}

// find the answer using the selected operation and both numbers
function operate(operation, first, second) {
    switch (operation) {
        case "+":
            add(first, second);
            break;
        case "-":
            subtract(first, second);
            break;
        case "*":
            multiply(first, second);
            break;
        case "/":
            divide(first, second);
            break;
    }
}

// Four main operation functions
function add(first, second) {
    number = first + second;
    output(number);
}

function subtract(first, second) {
    number = first - second;
    output(number);
}

function multiply(first, second) {
    number = first * second;
    output(number);
}

function divide(first, second) {
    number = first / second;
    output(number);
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

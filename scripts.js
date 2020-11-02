function firstNumber () {

}

function secondNumber () {

}


function operate () {
    answer = firstNumber + operation + secondNumber;
    return answer;
}

let style = document.getElementById("style");
console.log(style.href);

function changeStyle () {
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
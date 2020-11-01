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
    console.log(style.href);
    if (style.href = "ios.css") {
        style.href = "oldschool.css";
        console.log("yes");
    } else {
        style.href = "ios.css";
        console.log("no");
    }

}
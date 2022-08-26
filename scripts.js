//Element selection//

let numbers = document.getElementsByClassName("number");
let display = document.querySelector(".display");
let quickMath = document.getElementsByClassName("operator");
let equals = document.querySelector(".equals");
let addition = document.querySelector(".addition");
let value = document.querySelector(".value");
let clickable = document.getElementsByClassName("push");


let accumulator = 0;
let reset = 0;
let sum = 0;

//Basic calculations//

function calculations(a) {
    let splitted = a.split("");
    splitted.pop();
    let joined = splitted.join("");
    let additive = joined.slice(joined.lastIndexOf("+") + 1);
    let negative = joined.slice(joined.lastIndexOf("-"));
    if (!joined.includes("+") && !joined.includes("-") && !joined.includes("x")) {
        sum = parseInt(joined);
        return sum;
    }
    if (joined.includes("+")) {
        sum += parseInt(additive);
        joined = joined.split("").splice(0, 2, sum);
        return sum;
    } else if (joined.includes("-")) {
        console.log("nega");
    }
}

//Enable & disable button functions 
function disableOperator() {
    for (let i = 0; i < quickMath.length; i++) {
        quickMath[i].disabled = true;
    }
}

function enableOperator() {
    for (let i = 0; i < quickMath.length; i++) {
        quickMath[i].disabled = false;
    }
}

disableOperator();

//General clickable event

result = ""
for (let i = 0; i < clickable.length; i++) {
    clickable[i].addEventListener("click", function (e) {
        if (clickable[i].classList.contains("number")) {
            enableOperator();
        } else if (clickable[i].classList.contains("operator")) {
            disableOperator();
        }
        result += clickable[i].id;
        display.textContent = result;
    })
}


//Clicking on an operator.

for (let i = 0; i < quickMath.length; i++) {
    quickMath[i].addEventListener("click", function (e) {
        currentValue = display.textContent;
        if (currentValue[currentValue.length - 1] === "+" || currentValue[currentValue.length - 1] === "-" || currentValue[currentValue.length - 1] === "x" || currentValue[currentValue.length - 1] === "&divide;") {
            value.style.display = "block";
            value.textContent = calculations(currentValue);
            // console.log(sum);
        }
    })
}
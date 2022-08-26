//Element selection//

let numbers = document.getElementsByClassName("number");
let display = document.querySelector(".display");
let quickMath = document.getElementsByClassName("operator");
let equals = document.querySelector(".equals");
let addition = document.querySelector(".addition");
let value = document.querySelector(".value");
let clickable = document.getElementsByClassName("push");


let accumulator = 0;
let currentValue = 0;
let sum = 0;

//Basic calculations//

function calculations(a) {
    let splitted = a.split("");
    splitted.pop();
    let joined = splitted.join("");
    // console.log(joined);

    if (!joined.includes("+") && !joined.includes("-") && !joined.includes("x")) {
        sum = parseInt(joined);
        return sum;
    } else if (joined.includes("+")) {
        console.log(joined);
        let test = joined.split("+");
        sum = test.reduce((c, d) => parseInt(c) + parseInt(d));
        // console.log(joined);
        return sum;
        // let test = joined.split(/[-+*/]/);
    } else if (joined.includes("-")) {
        console.log(joined);
        let subtractee = joined.slice(joined.lastIndexOf("-") + 1);
        console.log(subtractee);
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
            console.log(sum);
        }
    })
}
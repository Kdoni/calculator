//Element selection//

let numbers = document.getElementsByClassName("number");
let display = document.querySelector(".display");
let quickMath = document.getElementsByClassName("operator");
let equals = document.querySelector(".equals");
let addition = document.querySelector(".addition");
let value = document.querySelector(".value");
let clickable = document.getElementsByClassName("push");
let point = document.querySelector(".point");


let accumulator = 0;
let sum = 0;

//Basic calculations//

function calculations(a) {
    let numberArray = [];
    let operatorArray = [];
    let splitted = a.split("");
    splitted.pop();
    let joined = splitted.join("");
    if (!joined.includes("+") && !joined.includes("-") && !joined.includes("x") && !joined.includes("÷") && !joined.includes("=")) {
        sum = Number(joined);
        return sum;
    }
    let numbers = joined.split(/[\+\-x\/÷|=]/g);
    let operators = joined.split(/\d+\.\d+|\d+/g).filter(word => word !== "");
    console.log(operators);
    if (operators[0] === "+") {
        accumulator = Number(numbers[0]) + Number(numbers[1]);
    } else if (operators[0] === "-") {
        accumulator = Number(numbers[0]) - Number(numbers[1]);
    } else if (operators[0] === "x") {
        accumulator = Number(numbers[0]) * Number(numbers[1]);
    } else if (operators[0] === "÷") {
        accumulator = (Number(numbers[0]) / Number(numbers[1])).toFixed(2);
        if (Number(numbers[1] === "0")) {
            return "cringe...";
        };
    }
    for (let i = 2; i < numbers.length; i++) {
        if (operators[i - 1] === "+") {
            accumulator = accumulator + (Number(numbers[i]));
        } else if (operators[i - 1] === "-") {
            accumulator = accumulator - (Number(numbers[i]));
        } else if (operators[i - 1] === "x") {
            accumulator = accumulator * Number(numbers[i]);
        } else if (operators[i - 1] === "÷") {
            accumulator = (accumulator / Number(numbers[i])).toFixed(2);
            if (Number(numbers[i] === "0")) {
                return "cringe...";
            }
        }
    };
    return accumulator;
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

function enableNumber() {
    for (let i = 0; i < numbers.length; i++) {
        numbers[i].disabled = false;
    }
}

function disableNumber() {
    for (let i = 0; i < numbers.length; i++) {
        numbers[i].disabled = true;
    }
};

function disablePoint() {
    point.disabled = true;
}

function enablePoint() {
    point.disabled = false;
}

disableOperator();

//General clickable event

result = ""
for (let i = 0; i < clickable.length; i++) {
    clickable[i].addEventListener("click", function (e) {
        display.style.display = "block";
        value.style.display = "none";
        value.style.marginBottom = "0";
        value.style.fontSize = "0";
        if (clickable[i].classList.contains("number")) {
            enableOperator();
        } else if (clickable[i].classList.contains("operator")) {
            disableOperator();
            enablePoint();
        }
        result += clickable[i].id;
        display.textContent = result;
    })
}


//Clicking on an operator.

for (let i = 0; i < quickMath.length; i++) {
    quickMath[i].addEventListener("click", function (e) {
        currentValue = display.textContent;
        enableNumber();
        if (currentValue[currentValue.length - 1] === "+" || currentValue[currentValue.length - 1] === "-" || currentValue[currentValue.length - 1] === "x" || currentValue[currentValue.length - 1] === "÷" ||
            currentValue[currentValue.length - 1] === "=") {
            value.style.display = "block";
            value.textContent = calculations(currentValue);
        }
    })
};

equals.addEventListener("click", (e) => {
    result = calculations(currentValue);
    value.style.marginBottom = "20px";
    value.style.fontSize = "1.5em";
    display.style.display = "none";
    enableOperator();
    disableNumber();
});

point.addEventListener("click", (e) => {
    disableOperator();
    disablePoint();
})
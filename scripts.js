//Element selection//

let numbers = document.getElementsByClassName("number");
let display = document.querySelector(".display");
let quickMath = document.getElementsByClassName("operator");
let equals = document.querySelector(".equals");
let addition = document.querySelector(".addition");
let value = document.querySelector(".value");
let clickable = document.getElementsByClassName("push");
let point = document.querySelector(".point");
let clear = document.querySelector(".clear");
let mistake = document.querySelector(".mistake");


let accumulator = 0;
let sum = 0;

//Basic calculations//

function calculations(a) {
    let splitted = a.split("");
    // splitted.pop();
    let joined = splitted.join("");
    // if (!joined.includes("+") && !joined.includes("-") && !joined.includes("x") && !joined.includes("÷") && !joined.includes("=")) {
    //     sum = Number(joined);
    //     return sum;
    // }
    let numbers = joined.split(/[\+\-x\/÷|=]/g);
    if (Number(numbers[numbers.length - 1]) % 1 !== 0) {
        point.disabled = true
    }
    let operators = joined.split(/\d+\.\d+|\d+/g).filter(word => word !== "");
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
disablePoint();

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
            enablePoint();
        } else if (clickable[i].classList.contains("operator")) {
            disableOperator();
            enablePoint();
        }
        if (display.textContent.length < 20) {
            result += clickable[i].id;
            display.textContent = result;
        };
        let splitted = display.textContent.split("");
        let joined = splitted.join("");
        let numbers = joined.split(/[\+\-x\/÷|=]/g);
        if (Number(numbers[numbers.length - 1]) % 1 !== 0) {
            point.disabled = true
        }
    });
};

//Clicking on an operator.

for (let i = 0; i < quickMath.length; i++) {
    quickMath[i].addEventListener("click", function (e) {
        currentValue = display.textContent;
        enableNumber();
        disablePoint();
        if (currentValue[currentValue.length - 1] === "+" || currentValue[currentValue.length - 1] === "-" || currentValue[currentValue.length - 1] === "x" || currentValue[currentValue.length - 1] === "÷" ||
            currentValue[currentValue.length - 1] === "=") {
            value.style.display = "block";
            value.textContent = calculations(currentValue);
        }
    })
};

//Pressing "="//

equals.addEventListener("click", (e) => {
    result = calculations(currentValue);
    value.style.marginBottom = "20px";
    value.style.fontSize = "1.5em";
    display.style.display = "none";
    enableOperator();
    disableNumber();
});

//Pressing the dot (.)//
point.addEventListener("click", (e) => {
    disableOperator();
    disablePoint();
});

//Keyboard support//

document.addEventListener("keydown", (e) => {
    if (e.key === "/" && quickMath[1].disabled === false) {
        [...quickMath].forEach(word => {
            word.disabled = true;
        });
        result += "÷";
        display.textContent = result;
        return;
    }
    for (let i = 0; i < numbers.length; i++) {
        if (e.key === numbers[i].id) {
            point.disabled = false;
            if (display.textContent.length < 20) {
                result += e.key;
                display.textContent = result;
                [...quickMath].forEach(word => {
                    word.disabled = false;
                });
                let splitted = display.textContent.split("");
                let joined = splitted.join("");
                let numbers = joined.split(/[\+\-x\/÷|=]/g);
                if (Number(numbers[numbers.length - 1]) % 1 !== 0) {
                    point.disabled = true
                }
            };
        };
    };
    for (let i = 0; i < quickMath.length; i++) {
        if (e.key === quickMath[i].id && quickMath[i].disabled === false) {
            if (display.textContent.length < 20) {
                result += e.key;
                display.textContent = result;
                point.disabled = true;
                [...quickMath].forEach(word => {
                    word.disabled = true;
                });
            };
        };
    };
    if (e.key === "." && point.disabled === false) {
        result += e.key;
        display.textContent = result;
        point.disabled = true;
        [...quickMath].forEach(word => {
            word.disabled = true;
        });
    };
    if (e.key === "=") {
        result = calculations(display.textContent);
        value.style.display = "block";
        value.style.marginBottom = "20px";
        value.style.fontSize = "1.5em";
        value.textContent = result;
        display.style.display = "none";
        enableOperator();
        disableNumber();
    };
    if (e.key === "Backspace") {
        disableOperator();
        disablePoint()
        oopsie();
    }
});

//Pressing the clear button//

function reset() {
    value.style.display = "none";
    display.style.display = "block";
    display.textContent = 0;
    result = "";
    disableOperator();
    enableNumber();
    disablePoint()
}

clear.addEventListener("click", reset);

//correcting mistakes

function oopsie() {
    disableOperator();
    disablePoint();
    if (result !== "") {
        if (result.length === 1) {
            disableOperator();
            disablePoint();
            display.textContent = "0";
            result = "";
            return;
        }
        let answer = result.substring(0, result.length - 1);
        result = answer;
        display.textContent = result;
    };
};

mistake.addEventListener("click", oopsie);
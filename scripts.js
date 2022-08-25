//Element selection//

let numbers = document.getElementsByClassName("number");
let display = document.querySelector(".display");
let quickMath = document.getElementsByClassName("operator");
let equals = document.querySelector(".equals");
let addition = document.querySelector(".addition");
let value = document.querySelector(".value");
let clickable = document.getElementsByClassName("push");

//Basic calculations//

let sum = 0;
const calculations = {
    addition: function (math) {
        let splitted = math.split(/[+-]/);
        let popped = splitted.pop();
        console.log(splitted);
        if (splitted.length === 1) {
            value.style.display = "block";
            value.textContent = splitted;
        } else {
            sum = splitted.reduce((a, b) => parseInt(a) + parseInt(b));
            value.style.display = "block";
            value.textContent = sum;
        }
    },
    subtraction: function (math) {
        let splitted = math.split(/[+-]/);
        let popped = splitted.pop();
        console.log(splitted);
        if (splitted.length === 1) {
            value.style.display = "block";
            value.textContent = splitted;
        } else {
            sum = splitted.reduce((a, b) => parseInt(a) - parseInt(b));
            value.style.display = "block";
            value.textContent = sum;
        }
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
        sum = display.textContent;
        if (sum.includes("+")) {
            calculations.addition(sum);
        } else if (sum.includes("-")) {
            calculations.subtraction(sum)
        }
        console.log(sum);
        console.log(display.textContent);
    })
}
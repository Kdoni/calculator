const calculations = {
    addition: function (a) {
        return a.reduce((a, b) => a + b);
    },
    division: function (a, b) {
        if (b === 0) {
            return ":D";
        };
        return (a / b).toFixed(2);
    },
    subtraction: function (a, b) {
        return a - b;
    },
    multiplication: function (a, b) {
        return a * b;
    }
};


//Element selection//

let numbers = document.getElementsByClassName("number");
let display = document.querySelector(".display");
let quickMath = document.getElementsByClassName("operator");
let equals = document.querySelector(".equals");
let addition = document.querySelector(".addition");
let value = document.querySelector(".value");
let clickable = document.getElementsByClassName("push");
console.log(clickable)



//Clicking the number//

let result = "";
for (let i = 0; i < clickable.length; i++) {
    clickable[i].addEventListener("click", function (e) {
        result += clickable[i].id;
        value.style.display = "block";
        value.textContent = displayResult();
        return display.textContent = result;
    })
}

//Updating value//

//clicking the operators//

// for (let i = 0; i < quickMath.length; i++) {
//     quickMath[i].addEventListener("click", function (e) {
//         result += quickMath[i].id;
//         return display.textContent = result;
//     })
// };

function displayResult() {
    let currentNumber = parseInt(result);
    for (let i = 0; i < quickMath.length; i++) {
        quickMath[i].addEventListener("click", function (e) {
            currentNumber = display.textContent.length - 1;
        })
    }
    return currentNumber;
};

// equals.addEventListener("click", function (e) {

// });
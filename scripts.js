const calculations = {
    "+": function (a, b) {
        return a + b;
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


//Clicking the number//

let result = "";
for (let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener("click", function (e) {
        result += numbers[i].id;
        value.style.display = "block";
        value.textContent = result;
        return display.textContent = result;
    })
}

//Updating value//

//clicking the operators//

for (let i = 0; i < quickMath.length; i++) {
    quickMath[i].addEventListener("click", function (e) {
        result += quickMath[i].id;
        return display.textContent = result;
    })
};

addition.addEventListener("click", function (e) {
    console.log(display.textContent);
})
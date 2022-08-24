//Element selection//

let numbers = document.getElementsByClassName("number");
let display = document.querySelector(".display");
let quickMath = document.getElementsByClassName("operator");
let equals = document.querySelector(".equals");
let addition = document.querySelector(".addition");
let value = document.querySelector(".value");
let clickable = document.getElementsByClassName("push");


result = ""
for (let i = 0; i < clickable.length; i++) {
    clickable[i].addEventListener("click", function (e) {
        result += clickable[i].id;
        display.textContent = result;
    })
}
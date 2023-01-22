"use strict";
const page = document.querySelector("body");
function randomNumber(maxvalue) {
    return Math.floor(Math.random() * maxvalue);
}
function colorGenerator() {
    let firstNb = randomNumber(255);
    let secondeNb = randomNumber(255);
    let thirdNb = randomNumber(255);
    let res = "#" + firstNb.toString() + secondeNb.toString() + thirdNb.toString();
    return res;
}
setInterval(() => {
    let color = colorGenerator();
    if (page != undefined) {
        page.style.backgroundColor = color;
        page.style.transition = "all 3s";
    }
}, 1250);

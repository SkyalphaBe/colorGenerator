"use strict";
const corp = document.querySelector("body");
const generateBtn = document.getElementById("generateBtn");
const menu = document.getElementsByClassName("menu")[0];
let time = setInterval(() => {
    let color = colorGenerator();
    if (corp != undefined) {
        corp.style.backgroundColor = color;
        corp.style.transition = "all 3.5s";
    }
}, 1250);
function randomNumber(maxvalue) {
    return Math.floor(Math.random() * maxvalue);
}
function colorGenerator() {
    let firstNb = randomNumber(255);
    let secondeNb = randomNumber(255);
    let thirdNb = randomNumber(255);
    let res = "#" + firstNb.toString(16) + secondeNb.toString(16) + thirdNb.toString(16);
    return res;
}
generateBtn === null || generateBtn === void 0 ? void 0 : generateBtn.addEventListener("click", () => {
    if (corp != undefined && generateBtn != undefined && menu != undefined) {
        let color = colorGenerator();
        generateBtn.style.display = "None";
        let content = document.createElement("div");
        let textField = document.createElement("input");
        let divColor = document.createElement("div");
        let changeColorBtn = document.createElement("button");
        let saveBtn = document.createElement("button");
        let divBtn = document.createElement("div");
        content.className = "content";
        textField.id = "hexaColor";
        textField.setAttribute("type", "text");
        textField.value = color;
        divColor.id = "boxColor";
        divColor.style.backgroundColor = color;
        content.appendChild(divColor);
        content.appendChild(textField);
        changeColorBtn.textContent = "change color";
        changeColorBtn.id = "changeBtn";
        saveBtn.id = "saveBtn";
        saveBtn.textContent = "save color";
        divBtn.id = "divBtn";
        divBtn.appendChild(changeColorBtn);
        divBtn.appendChild(saveBtn);
        menu.insertBefore(content, generateBtn);
        menu.appendChild(divBtn);
        corp.style.backgroundColor = color;
        clearInterval(time);
        changeColorBtn.addEventListener("click", () => {
            let newColor = colorGenerator();
            textField.value = newColor;
            divColor.style.backgroundColor = newColor;
            corp.style.backgroundColor = newColor;
        });
    }
});

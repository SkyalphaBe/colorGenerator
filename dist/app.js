"use strict";
const page = document.querySelector("body");
function colorGenerator() {
    let res = "#000000";
    return res;
}
setInterval(() => {
    let color = colorGenerator();
    if (page != undefined) {
        page.style.backgroundColor = color;
    }
}, 1000);

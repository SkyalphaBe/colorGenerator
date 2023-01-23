const corp = document.querySelector("body");
const generateBtn = document.getElementById("generateBtn")
const menu = document.getElementsByClassName("menu")[0];

let time = setInterval(()=>{
    let color:string = colorGenerator();
    if(corp != undefined){
        corp.style.backgroundColor = color;
        corp.style.transition = "all 3.5s"
    }
},1250);

function randomNumber(maxvalue:number):number{
    return Math.floor(Math.random() * maxvalue);
}

function colorGenerator():string{
    let firstNb : number = randomNumber(255);
    let secondeNb:number = randomNumber(255);
    let thirdNb:number = randomNumber(255);

    let res:string = "#"+firstNb.toString(16)+secondeNb.toString(16)+thirdNb.toString(16);

    return res;
}

generateBtn?.addEventListener("click",()=>{
    if(corp != undefined && generateBtn != undefined && menu != undefined){
        let color:string = colorGenerator();
        generateBtn.style.display = "None";

        let content:HTMLElement = document.createElement("div");
        let textField:HTMLInputElement = document.createElement("input");
        let divColor:HTMLElement = document.createElement("div");
        let changeColorBtn:HTMLElement = document.createElement("button");
        let saveBtn:HTMLElement = document.createElement("button");
        let divBtn: HTMLElement = document.createElement("div")

        content.className = "content";

        textField.id = "hexaColor";
        textField.setAttribute("type","text");
        textField.value=color;

        divColor.id = "boxColor";
        divColor.style.backgroundColor = color;

        content.appendChild(divColor);
        content.appendChild(textField);

        changeColorBtn.textContent="change color";
        changeColorBtn.id="changeBtn";
        saveBtn.id="saveBtn";
        saveBtn.textContent="save color";
        divBtn.id="divBtn";
        divBtn.appendChild(changeColorBtn);
        divBtn.appendChild(saveBtn);

        menu.insertBefore(content,generateBtn);
        menu.appendChild(divBtn);
        corp.style.backgroundColor = color;
        clearInterval(time);

        changeColorBtn.addEventListener("click",()=>{
            let newColor:string=colorGenerator();
            textField.value = newColor;
            divColor.style.backgroundColor = newColor;
            corp.style.backgroundColor = newColor;
        });
        
    }


});
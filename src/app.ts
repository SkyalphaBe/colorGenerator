const corp = document.querySelector("body");
const generateBtn = document.getElementById("generateBtn")
const menu = document.getElementsByClassName("menu")[0];

class colorSave {
    date:Date;
    color:string;
    constructor(savedColor:string){
        this.date = new Date();
        this.color = savedColor;
    }
}

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
    let firstNb:number = randomNumber(255);
    let secondeNb:number = randomNumber(255);
    let thirdNb:number = randomNumber(255);

    let res:string = "#"+firstNb.toString(16)+secondeNb.toString(16)+thirdNb.toString(16);

    return res;
}

function createLineColor(color:colorSave){
    let savedBar = document.getElementsByClassName("storageDiv")[0];

    let newColorHexa:HTMLElement = document.createElement("p");
    let newColorBox:HTMLElement = document.createElement("div");
    let newColorDate:HTMLElement = document.createElement("p");
    let newContentBox:HTMLElement = document.createElement("div")
    let newColorContainer:HTMLElement = document.createElement("div");

    newColorHexa.textContent = "Color code : "+color.color;
    newColorBox.id = "lineboxColor";
    newColorDate.textContent = "Saved date : "+color.date.getDate().toString()+" / "+(color.date.getMonth()+1).toString()+" / "+color.date.getFullYear().toString();
    newColorBox.style.backgroundColor = color.color;

    newColorContainer.className = "colorLine";
    newContentBox.className = "lineContent";
    newContentBox.appendChild(newColorHexa);
    newContentBox.appendChild(newColorDate);
    newColorContainer.appendChild(newColorBox);
    newColorContainer.appendChild(newContentBox);

    savedBar.appendChild(newColorContainer);
}

generateBtn?.addEventListener("click",()=>{
    //let colorStorage = localStorage;
    if(corp != undefined && generateBtn != undefined && menu != undefined){
        let color:string = colorGenerator();
        generateBtn.style.display = "None";

        let saveColorHisto:HTMLElement = document.createElement("div");
        let savetitle:HTMLElement = document.createElement("h2");
        saveColorHisto.className = "storageDiv";
        savetitle.textContent = "Saved colors"
        saveColorHisto.appendChild(savetitle);

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
        corp.appendChild(saveColorHisto);
        clearInterval(time);

        changeColorBtn.addEventListener("click",()=>{
            let newColor:string=colorGenerator();
            textField.value = newColor;
            divColor.style.backgroundColor = newColor;
            corp.style.backgroundColor = newColor;
        });

        let tabColor:Array<colorSave> = []; 

        saveBtn.addEventListener("click",()=>{
            saveColorHisto.style.display = "flex";
            let newC = new colorSave(textField.value);
            if(tabColor.includes(newC)){
                console.log("erreur");
            }
            else{
                tabColor.push(newC);
                createLineColor(newC);
            }
        });
        
    }
});
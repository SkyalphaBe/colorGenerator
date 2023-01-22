const page = document.querySelector("body");

function randomNumber(maxvalue:number):number{
    return Math.floor(Math.random() * maxvalue);
}

function colorGenerator():string{
    let firstNb : number = randomNumber(255);
    let secondeNb:number = randomNumber(255);
    let thirdNb:number = randomNumber(255);

    let res:string = "#"+firstNb.toString()+secondeNb.toString()+thirdNb.toString();

    return res;
}

setInterval(()=>{
    let color:string = colorGenerator();
    if(page != undefined){
        page.style.backgroundColor = color;
        page.style.transition = "all 3s"
    }
},1250);
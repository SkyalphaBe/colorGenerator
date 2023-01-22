const page = document.querySelector("body");

function colorGenerator():string{
    let res:string = "#000000";
    return res;
}

setInterval(()=>{
    let color:string = colorGenerator();
    if(page != undefined){
        page.style.backgroundColor = color;
    }
},1000);
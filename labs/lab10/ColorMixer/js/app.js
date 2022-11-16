//Kade Cooper 11/15/2022
let box = document.getElementById("box");
let buttons = document.getElementsByClassName("button");
let message = document.getElementById("message");
//addes on click to each button
for(let i = 0;i<buttons.length;i++){
    buttons[i].addEventListener("click",clicked);
}

let red = 0;
let green = 0;
let blue = 0;

function clicked(event){
    if(event.target.getAttribute("data-color")=="red"){
        red+=Number(event.target.getAttribute("data-add"));
        
    }
    else if(event.target.getAttribute("data-color")=="green"){
        green+=Number(event.target.getAttribute("data-add"));
        
    }
    else{
        blue+=Number(event.target.getAttribute("data-add"));
    }
    //sets the text of the message div to the rgb value
    message.innerHTML="current rgb: "+red+","+green+","+blue;
    //sets the color of the main div to the rgb value
    box.style.backgroundColor = "rgb("+red+","+green+","+blue+")";

}
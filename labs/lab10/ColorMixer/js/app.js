//Kade Cooper 11/15/2022
let box = document.getElementById("box");
let buttons = document.getElementsByClassName("button");

for(let i = 0;i<buttons.length;i++){
    buttons[i].addEventListener("click",clicked);
}

function clicked(event){
    box.style.backgroundColor += event.target.getAttribute("data-add");
}
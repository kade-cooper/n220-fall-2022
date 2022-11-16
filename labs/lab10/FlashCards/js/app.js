//Kade Cooper 11/15/2022
let buttons=document.getElementsByClassName("button");
let answer=document.getElementById("answer");
for(let i = 0;i<buttons.length;i++){
    buttons[i].addEventListener("click",clicked);
}
function clicked(event){
    answer.innerHTML=event.target.getAttribute("data-answer");
}
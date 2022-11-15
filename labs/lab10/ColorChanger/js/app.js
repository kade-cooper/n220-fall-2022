//Kade Cooper 11/15/2022
let element1=document.getElementById("box1");
let element2=document.getElementById("box2");
let element3=document.getElementById("box3");
element1.addEventListener("click",clicked);
element2.addEventListener("click",clicked);
element3.addEventListener("click",clicked);

function clicked(event){
    event.target.style.backgroundColor = event.target.getAttribute("data-color");
}
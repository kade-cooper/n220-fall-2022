//Kade Cooper 11/2/2022 N220
let out=document.getElementById("output");

function randomNumberGen(){
    return Math.floor(Math.random() * 11);
}

function clicked(){
    out.innerHTML=randomNumberGen();
}
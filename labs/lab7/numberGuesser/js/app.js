//Kade Cooper 10/25/2022 N220
let inp=document.getElementById("input");
let out=document.getElementById("output");

let number = Math.round(Math.random() * (19) + 1);
console.log(number);
function clicked(){
    if(inp.value<number){
        out.innerHTML = "Too low";
    }
    else if(inp.value>number){
        out.innerHTML = "Too High";
    }
    else{
        out.innerHTML = "Correct! Generating new number";
        number = Math.round(Math.random() * (19) + 1);
        console.log(number);
    }
}
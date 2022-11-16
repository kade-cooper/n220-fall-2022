let result = document.getElementById("result");
let buttons = document.getElementsByClassName("button");
for(let i=0;i<buttons.length;i++){
    buttons.addEventListener("click",clicked);
}

let possibilities = {
    "rock": {"rock": "tie", "paper": "lose", "scissors": "win"},
    "paper": {"rock": "win", "paper": "tie", "scissors": "lose"},
    "scissors": {"rock": "lose", "paper": "win", "scissors": "tie"}
}

function clicked(event){
    let computer =  Math.random() * 3;
    //computer of 0 = rock; 1 = paper; 2 = scissors
    
}
//Kade Cooper 10/11/2022 N220
let dvTop = document.getElementById("topDiv");
let dvRock= document.getElementById("div1");
let dvPaper= document.getElementById("div2");
let dvScissors= document.getElementById("div3");
let dvGuard= document.getElementById("div4");
computer=0;
choice = "";
score = 0;
function anyClicked(){
    //0 = rock 1 = paper 2 = scissors
    if(computer>=2){
        dvTop.innerHTML = "score: " + score +"        You Chose " + choice + " Computer Chose Scissors";
    }
    else if(computer<2 && computer>=1){
        dvTop.innerHTML = "score: " + score +"        You Chose " + choice + " Computer Chose Paper";
    }
    else{
        dvTop.innerHTML = "score: " + score +"        You Chose " + choice + " Computer Chose Rock";
    }
}
function rock(){
    computer =  Math.random() * 3;
    console.log(computer);
    if(computer>=2){
        score+=1;
    }
    else if(computer<2 && computer>=1){
        score-=1;
    }
    choice = "rock";
}
function paper(){
    computer =  Math.random() * 3;
    console.log(computer);
    if(computer<1){
        score+=1;
    }
    else if(computer>=2){
        score-=1;
    }
    choice = "paper";
}
function scissors(){
    computer =  Math.random() * 3;
    console.log(computer);
    if(computer<1){
        score-=1;
    }
    else if(computer<2 && computer>=1){
        score+=1;
    }
    choice = "scissors";
}
function guard(){
    computer =  Math.random() * 3;
    console.log(computer);
    score-=0.5;
    choice = "guard";
}
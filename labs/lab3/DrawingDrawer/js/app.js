//Kade Cooper 9/13/2022 N220
function setup(){
    createCanvas(600,600);
    fill("yellow");
    rect(80,50,10,20);
    rect(100,50,10,30);
    rect(60,40,50,20);
    circle(50,50,20);
    fill(0);
    circle(50,50,10);
}

function drawKey(x,y){
    fill("yellow");
    rect(x+30,y,10,20);
    rect(x+50,y,10,30);
    rect(x+10,y-10,50,20);
    circle(x,y,20);
    fill(0);
    circle(x,y,10);
}

var keyX=100;
var keyY=50;

function draw(){
    background(0);
    drawKey(mouseX,mouseY);
    drawKey(keyX,keyY);
    keyY+=Math.sin(frameCount/30)*7.5
    drawKey(200,200);
    drawKey(500,500);
}
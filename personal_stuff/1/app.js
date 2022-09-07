function setup(){
    createCanvas(800,800);
    var timer;
    textSize(24);
    textAlign(CENTER);
}
var score=0;
var randX;
var randY;
function draw(){
    background(100);
    line(mouseX-800,mouseY,mouseX+800,mouseY)
    line(mouseX,mouseY-800,mouseX,mouseY+800)
    timer=millis();
    if(timer%2000<=15){
    randX = random(20,700);
    randY = random(20,700);
    fill("white");
    }
    console.log(timer);
    var d = dist(mouseX,mouseY,randX,randY);
    if(d<80 && mouseIsPressed){
        fill("red");
        score+=1;
    }
    text(score.toString(),60,60)
    circle(randX,randY,80);
}
function setup(){
//makes canvas
createCanvas(800,800);
}
var x = 50;
function draw(){
    background(0);
//checks if mouse is pressed
if(mouseIsPressed){
    x+=1;
}
circle(mouseX,mouseY,x)
}
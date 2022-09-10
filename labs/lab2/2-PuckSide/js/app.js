//Kade Cooper 9/10/2022 N220
function setup(){
createCanvas(400,300)
}
function draw(){
    background("white");
    //if else staments that change fill color depening on what side of the screen the circle is on
    if(mouseX>200){
        fill("red");
    }
    else{
        fill("blue");
    }
    circle(mouseX,mouseY,80);
}
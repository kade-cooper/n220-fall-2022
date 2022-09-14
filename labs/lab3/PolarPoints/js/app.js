//Kade Cooper 9/13/2022 N220
function setup(){
    createCanvas(600,600);

}

function polarPoint(r){
    let x = r*Math.sin(mouseX);
    let y = r * Math.cos(mouseX);
    return createVector(x,y);
}


function draw(){
    let res= polarPoint(30);
    translate(100,100);
    circle(res.x,res.y,10);
}
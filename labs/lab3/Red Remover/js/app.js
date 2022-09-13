//Kade Cooper 9/13/2022 N220
function setup(){
    createCanvas(600,600);
    let noRed = colorChange(color(170, 200, 150) )
    fill(noRed);
    circle(100,100,30);
}

function colorChange(c){
    c.setRed(0)
    return c;
}


function draw(){
    
}
//Kade Cooper 9/10/2022 N220
function setup(){
createCanvas(400,400)
}
var diameter=1;
function draw(){
    diameter+=1;
    //resets circle when it gets to 200 diameter
    if(diameter==200){
        diameter=1;
    }
    background("white");
    circle(200,200,diameter);
}
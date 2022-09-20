function setup(){
    createCanvas(800,800);
}

function donut(innerR,outerR,color,x,y){
    this.ir=innerR;
    this.or=outerR;
    this.color = color;
    this.x = x;
    this.y=y;
}

function drawDonut(donut1){
    fill(donut1.color);
    circle(donut1.x,donut1.y,donut1.or);
    fill("white");
    circle(donut1.x,donut1.y,donut1.ir);
}

function draw(){
    donut1=new donut(20,30,"pink",200,200);
    donut2=new donut(20,40,"red",400,200);
    drawDonut(donut1);
    drawDonut(donut2);
}
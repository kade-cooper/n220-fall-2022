function setup(){
    createCanvas(800,800);
}

function tv(x,y,scHeight,scWidth,bodHeight,bodWidth,antenaLength){
    this.x=x;
    this.y=y;
    this.scHeight = scHeight;
    this.scWidth = scWidth;
    this.bodHeight = bodHeight;
    this.bodWidth = bodWidth;
    this.antenaLength = antenaLength;
}

function drwatv(x,y,scHeight,scWidth,bodHeight,bodWidth,antenaLength){
    rect(x-((bodWidth-scWidth)/2),y-((bodHeight-scHeight)/2),bodWidth,bodHeight)
    rect(x,y,scWidth,scHeight);
    ellipse(x+(scWidth/2),y+bodHeight+5,bodWidth,20);
    line(x-((bodWidth-scWidth)/2),y-((bodHeight-scHeight)/2),x-((bodWidth-scWidth)/2)-antenaLength,y-((bodWidth-scWidth)/2)-antenaLength,)
}

function draw(){
    tv1 = new tv(100,100,50,50,60,60,20);
    drwatv(tv1.x,tv1.y,tv1.scHeight,tv1.scWidth,tv1.bodHeight,tv1.bodWidth,tv1.antenaLength);
    tv2 = new tv(300,300,300,400,310,410,40);
    drwatv(tv2.x,tv2.y,tv2.scHeight,tv2.scWidth,tv2.bodHeight,tv2.bodWidth,tv2.antenaLength);
}
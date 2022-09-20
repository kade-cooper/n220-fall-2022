function setup(){
    createCanvas(800,800);
}

function tallRectangle(width,height,x,y){
    this.width = width;
    this.height = height;
    this.x = x;
    this.y=y;
}

rectangle1 = new tallRectangle(20,100,200,300);
rectangle2 = new tallRectangle(20,100,600,300);

function draw(){
    background(0);
    rect(rectangle1.x,rectangle1.y,rectangle1.width,rectangle1.height);
    rect(rectangle2.x,rectangle2.y,rectangle2.width,rectangle2.height);
    if(keyIsDown(UP_ARROW)){
        rectangle1.y+=5;
        rectangle2.y-=5;
    }
    if(keyIsDown(DOWN_ARROW)){
        rectangle1.y-=5;
        rectangle2.y+=5;
    }
}
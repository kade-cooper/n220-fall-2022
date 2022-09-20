function setup(){
    createCanvas(800,600);
}

function ball(size,color,xvel,yvel){
    this.size=size;
    this.color=color;
    this.xvel=xvel;
    this.yvel=yvel;
}
ballx=100;
bally=100;
ball1=new ball(20,"red",2.5,2.5);
function draw(){
    background("white");
    fill(ball1.color);
    circle(ballx,bally,ball1.size);
    ballx+=ball1.xvel;
    bally+=ball1.yvel;
    if(ballx>=800 || ballx<=0){
        ball1.xvel*=-1;
    }
    if(bally>=600 || bally<=0){
        ball1.yvel*=-1;
    }
}
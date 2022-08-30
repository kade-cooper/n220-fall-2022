function setup(){
    createCanvas(800,400);
    background(0,222,155);
    fill("orange");
    triangle(100,150,0,100,100,50);
    for(var i=0; i <= 20;i++){
        if(i%2==0){
            fill("orange");
        }
        else{
            fill("blue");
        }
        circle(100+i*30,100, 50);
    }
    for(var i=0; i <= 3;i++){
        if(i%2==0){
            fill("orange");
        }
        else{
            fill("blue");
        }
        circle(700,100+i*30, 50);
    }
    for(var i=20; i >= 0;i--){
        if(i%2==0){
            fill("blue");
        }
        else{
            fill("orange");
        }
        circle(100+i*30,190, 50);
    }
    for(var i=0; i <= 3;i++){
        if(i%2==0){
            fill("blue");
        }
        else{
            fill("orange");
        }
        circle(100,190+i*30, 50);
    }
    for(var i=0; i <= 20;i++){
        if(i%2==0){
            fill("orange");
        }
        else{
            fill("blue");
        }
        circle(100+i*30,280, 50);
    }
    rect(650,230,100,100);
    
}
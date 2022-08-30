function setup(){
    createCanvas(800,600);
    background()
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
            fill("orange");
        }
        else{
            fill("blue");
        }
        circle(100+i*30,190, 50);
    }
}
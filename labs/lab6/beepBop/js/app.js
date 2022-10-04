//Kade Cooper 10/4/2022 N220
let dvBox = document.getElementById("box");
for(let i=1;i<=25;i++){
    if(i%5==0 && i%3==0){
        dvBox.innerHTML += "beepbop ";
    }
    else if(i%3==0){
        dvBox.innerHTML += "beep ";
    }
    else if(i%5==0){
        dvBox.innerHTML += "bop ";
    }
    else{
        dvBox.innerHTML += i + " ";
    }
}
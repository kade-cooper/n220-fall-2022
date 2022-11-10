//Kade Cooper 11/2/2022 N220
let inp=document.getElementById("input");
let out=document.getElementById("output");

function checkWin(arr){
    let sum=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]==1){
            sum+=1;
        }
        else{
            sum=0;
        }
        if(sum==3){
            break;
        }
    }
    if(sum==3){
        return true;
    }
    else{
        return false;
    }
}

function clicked(){
    arr = inp.value.split(",");
    if(checkWin(arr)==true){
        out.innerHTML="You Win!";
    }
    else{
        out.innerHTML="You lose.";
    }
}
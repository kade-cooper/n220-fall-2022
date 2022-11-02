//Kade Cooper 11/2/2022 N220
let inp=document.getElementById("input");
let out=document.getElementById("output");

function divisibleBy7(num){
if(num%7==0){
    return true;
}
else{
    return false;
}
}

function clicked(){
    if(divisibleBy7(inp.value)==true){
        out.innerHTML="Number is divisible by 7";
    }
    else{
        out.innerHTML="Number is not divisible by 7";
    }
}
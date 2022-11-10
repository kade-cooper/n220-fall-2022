//Kade Cooper 11/2/2022 N220
let inp=document.getElementById("input");
let out=document.getElementById("output");

function average(num){
    let sum=0;
    for(let i=0;i<num.length;i++){
        sum+=Number(num[i]);
        console.log(sum);
    }
    console.log(sum/num.length)
    return sum/num.length;
}

function clicked(){
    arr = inp.value.split(",");
    out.innerHTML=average(arr);
}
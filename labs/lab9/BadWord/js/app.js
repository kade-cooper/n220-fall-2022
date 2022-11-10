//Kade Cooper 11/2/2022 N220
let inp=document.getElementById("input");
let out=document.getElementById("output");

function numBadWords(arr){
    let bad=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]=="clear" || arr[i]=="water" || arr[i] == "tires"){
            bad+=1;
        }
    }
    return bad;
}

function clicked(){
    let arr = inp.value.split(" ");
    let bad=numBadWords(arr);
    if(bad==0){
        out.innerHTML="No bad words were found in the sentance";
    }
    else{
        out.innerHTML=bad+" bad word(s) were found in the sentance";
    }
    inp.value=""
}
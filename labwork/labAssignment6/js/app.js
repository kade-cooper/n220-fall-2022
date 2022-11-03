//Kade Cooper 11/2/2022 N220
let inp=document.getElementById("input");
let out=document.getElementById("output");

function checkVowel(character){
    let str=character.toLowerCase()
    if(str=="a" || str=="e" || str=="i" || str=="o" || str=="u"
    || str=="y"){
        return true;
    }
        return false;
}



function removeVowels(strg){
    let newStr = "";
    for(var i=0; i<strg.length; i++){
        if(checkVowel(strg[i])==false){
            newStr+=strg[i];
        }
    }
return newStr;
}

function clicked(){
    out.innerHTML = removeVowels(inp.value);
}
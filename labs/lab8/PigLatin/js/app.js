//Kade Cooper 11/2/2022 N220
let inp=document.getElementById("input");
let out=document.getElementById("output");

function convertToPig(str){
    let newStr = "";
    for(var i=0; i<str.length; i++){
        //checks for first vowel in word
        if(str[i]=="a" || str[i]=="e" || str[i]=="i" || str[i]=="o" || str[i]=="u"
        || str[i]=="y"){
            for(var v=i; v<str.length;v++){
                newStr+=str[v];
            }
            for(var b=0; b<i;b++){
                newStr+=str[b];
            }
            newStr+="ay";
            break;
        }
    }
return newStr;
}

function clicked(){
    out.innerHTML = convertToPig(inp.value);
}
//Kade Cooper 10/1/2022 N220
let dvBox = document.getElementById("box");
dvBox.style.width = "100px";
dvBox.style.height = "100px";
dvBox.style.backgroundColor = '#0000FF';
height=100;
boocount=1;
boostring='BOO! ';
function cchange1(){
    for(i=0;i<boocount;i++){
        boostring+='BOO! ';
    }
    dvBox.innerHTML = boostring;
dvBox.style.backgroundColor="#FFFFFF";
height+=10;
dvBox.style.height=height+'px';
}
function cchange2(){
    dvBox.style.backgroundColor="#0000FF";
    dvBox.innerHTML = "";
}
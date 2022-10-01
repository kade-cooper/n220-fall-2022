//Kade Cooper 10/1/2022 N220
let dvBox = document.getElementById("box");
dvBox.style.width = "100px";
dvBox.style.height = "100px";
dvBox.style.backgroundColor = '#0000FF';
height=100;
boostring='BOO! ';
function cchange1(){
    dvBox.innerHTML = boostring;
    //adds another boo to boostring 
    boostring+='BOO! ';
    dvBox.style.backgroundColor="#FFFFFF";
    //increases height of div
    height+=10;
    dvBox.style.height=height+'px';
}
function cchange2(){
    //changes color back to blue and resets text to nothing
    dvBox.style.backgroundColor="#0000FF";
    dvBox.innerHTML = "";
}
//Kade Cooper 10/1/2022 N220
let dvBox = document.getElementById("box");
dvBox.style.width = "100px";
dvBox.style.height = "100px";
dvBox.style.backgroundColor = '#00FF00';
width=100;
height=100;
function enlarge(){
    //increases width and height by 10%
    width*=1.1;
    height*=1.1;
    dvBox.style.width = width+'px';
    dvBox.style.height = height+'px';
}
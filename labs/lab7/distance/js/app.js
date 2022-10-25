//Kade Cooper 10/25/2022 N220
let x1=document.getElementById("x1");
let y1=document.getElementById("y1");
let x2=document.getElementById("x2");
let y2=document.getElementById("y2");
let out=document.getElementById("output");

function distance(x1,y1,x2,y2){
   ans = Math.sqrt(((x2-x1)*(x2-x1)) + ((y2-y1)*(y2-y1)));
   return ans;
}

function clicked(){
    output = distance(x1.value,y1.value,x2.value,y2.value)
    out.innerHTML = "Distance = " + distance(x1.value,y1.value,x2.value,y2.value);;
}
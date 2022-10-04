//Kade Cooper 10/4/2022 N220
let dvBox = document.getElementById("box");
let favorites = ['Gaming','Pizza','Tech','White rice','Steak']
for(let i=0;i<favorites.length;i++){
    dvBox.innerHTML += favorites[i] + ", is one of my favorite things." + '<br>';
}
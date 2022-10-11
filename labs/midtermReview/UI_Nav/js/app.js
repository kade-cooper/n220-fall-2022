//Kade Cooper 10/11/2022 N220
let dvTop = document.getElementById("topDiv");
let dvBox1= document.getElementById("div1");
let dvBox2= document.getElementById("div2");
let dvBox3= document.getElementById("div3");
let dvBox4= document.getElementById("div4");
let dvBox5= document.getElementById("div5");
let dvBox6= document.getElementById("div6");
let animals = ["dog","cat","trutle","flamingo","shark","dolphin"];
let display = "";
let green = 0;
function anyClicked(){
    dvBox1.style.backgroundColor="white";
    dvBox2.style.backgroundColor="white";
    dvBox3.style.backgroundColor="white";
    dvBox4.style.backgroundColor="white";
    dvBox5.style.backgroundColor="white";
    dvBox6.style.backgroundColor="white";
    if(green==1){
        dvBox1.style.backgroundColor="green";
    }
    else if(green==2){
        dvBox2.style.backgroundColor="green";
    }
    else if(green==3){
        dvBox3.style.backgroundColor="green";
    }
    else if(green==4){
        dvBox4.style.backgroundColor="green";
    }
    else if(green==5){
        dvBox5.style.backgroundColor="green";
    }
    else{
        dvBox6.style.backgroundColor="green";
    }
    dvBox1.innerHTML = animals[0];
    dvBox2.innerHTML = animals[1];
    dvBox3.innerHTML = animals[2];
    dvBox4.innerHTML = animals[3];
    dvBox5.innerHTML = animals[4];
    dvBox6.innerHTML = animals[5];
    dvTop.innerHTML = display;
    animals = ["dog","cat","trutle","flamingo","shark","dolphin"];
}
function clicked1(){
    animals[0]="<strong> dog"
    display="dog";
    green =1;
}
function clicked2(){
    animals[1]="<strong> cat"
    display="cat";
    green =2;
}
function clicked3(){
    animals[2]="<strong> turtle"
    display="turtle";
    green =3;
}
function clicked4(){
    animals[3]="<strong> flaimingo"
    display="flamingo";
    green =4;
}
function clicked5(){
    animals[4]="<strong> shark"
    display="shark";
    green =5;
}
function clicked6(){
    animals[5]="<strong> dolphin"
    display="dolphin";
    green =6;
}
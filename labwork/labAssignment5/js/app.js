let dvFortune = document.getElementById("fortune");
let inp=document.getElementById("input");
let fortuneArray = ["you will die tomorrow","try again","never lucky rubber ducky"]
random=3;
function fortuneTime(){
    console.log("hi");
    let r=Math.floor(Math.random()*random);
    dvFortune.innerHTML = fortuneArray[r]
}
function newFortune(){
    fortuneArray.push(inp.value)
    random+=1;
    inp.value="";
}
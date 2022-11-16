let display = document.getElementById("display");




function start(){
    let arr=[];
    let roundMax=3;
    //first for loop makes array upon start button being pressed
    for(let i =0;i<8;i++){
        let rand=Math.floor(Math.random()*4);
        if(rand==0){
            arr[i]="ArrowRight";
        }
        else if(rand==1){
            arr[i]="ArrowLeft";
        }
        else if(rand==2){
            arr[i]="ArrowDown";
        }
        else{
            arr[i]="ArrowUp";
        }
    }
    //loops through array roundMax times
            let curIndex=0;
            setTimeout(displayPrompt,3000)
            function displayPrompt(){
                display.innerHTML=arr[curIndex];
                curIndex++;
                if(curIndex<roundMax+1){
                    setTimeout(displayPrompt,1000);
                } 
                else{
                    display.innerHTML="waiting for input";
                }
            }
            let response=[];
            //detects key presses
            document.onkeydown=function(event){
                console.log(response);
                if(response.length<roundMax){
                        response.push(event.key);
                }
                else{
                    for(let h=0;h<roundMax;h++){
                        if(response[h]!=arr[h]){
                            return;
                        }
                    }
                    response=[];
                    roundMax++;
                    curIndex=0;
                    setTimeout(displayPrompt,3000)
                }
                console.log(response);
            }
            //checks that user input array (response) is equal to the portion of the main array
            console.log("break");
    console.log(arr);
    }

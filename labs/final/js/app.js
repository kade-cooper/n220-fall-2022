let display = document.getElementById("display");

let timeid = 0;


function start(){
    let arr=[];
    let dispArr=[];
    let roundMax=3;
    //first for loop makes array upon start button being pressed
    for(let i =0;i<8;i++){
        let rand=Math.floor(Math.random()*4);
        if(rand==0){
            arr[i]="ArrowRight";
            dispArr[i]="→"
        }
        else if(rand==1){
            arr[i]="ArrowLeft";
            dispArr[i]="←"
        }
        else if(rand==2){
            arr[i]="ArrowDown";
            dispArr[i]="↓"
        }
        else{
            arr[i]="ArrowUp";
            dispArr[i]="↑"
        }
    }
    //loops through array roundMax*2 times
            let curIndex=0;
            displayPrompt();
            function displayPrompt(){
                if(curIndex%2==0){
                    display.innerHTML=dispArr[curIndex/2];
                }
                else{
                    display.innerHTML="next";
                }
                curIndex++;
                if(curIndex<roundMax*2){
                    console.log(curIndex);

                    //turn off old timeout
                    if(timeid!=0){
                    clearTimeout(timeid);
                    }

                    timeid = setTimeout(displayPrompt,1000);
                    
                } 
                else{
                    display.innerHTML="waiting for input (press any key when done)";
                }
            }
            let response=[];
            //detects key presses
            document.onkeydown=function(event){
                if(response.length<roundMax){
                        response.push(event.key);
                }
                else{
                    for(let h=0;h<roundMax;h++){
                        //checks that user input array (response) is equal to the portion of the main array
                        if(response[h]!=arr[h]){
                            display.innerHTML="failed";
                            return;
                        }
                        else if(roundMax==arr.length){
                            display.innerHTML="You Win";
                            return;
                        }
                        else{
                            display.innerHTML="Success";
                        }
                    }
                    response=[];
                    roundMax++;
                    console.log(roundMax);
                    curIndex=0;
                    if(timeid!=0){
                        clearTimeout(timeid);
                        }
                    setTimeout(displayPrompt,1000);
                }
            }
            console.log("next attempt");
    console.log(arr);
    }

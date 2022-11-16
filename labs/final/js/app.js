let display = document.getElementById("display");



function start(){
    let arr=[];
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
    //loops through array starting with first 3 then first 4 etc
    for(let j=3;j<arr.length;j++){
        for(let g=0;g<j;g++){
            console.log(arr[g]);
            display.innerHTML=arr[g];
        }
        //not done yet but will detect user input to check if they got the correct order
        let response=[];
        document.onkeydown=function(event){
            response+=event.key;
               
            console.log(response);
        }
        //checks that user input array (response) is equal to the portion of the main array
        for(let h=0;h<j;h++){
            if(response[h]!=arr[h]){
                break;
            }
        }
        console.log("break"+j);
    }
    console.log(arr);
}


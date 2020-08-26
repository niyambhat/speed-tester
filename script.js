const testWrapper = document.querySelector(".test-wrapper");
const testArea = document.querySelector("#test-area");
const originText = document.querySelector("#origin-text p").innerHTML;
const resetButton = document.querySelector("#reset");
const theTimer = document.querySelector(".timer");

var timer=[0,0,0,0];
var running = true;
var interval;
var timerRunning= false;


testArea.addEventListener("keypress", start, false); //start is a function
testArea.addEventListener("keyup", spellCheck, false);
resetButton.addEventListener("click",reset)


function leadingZero(time){
   if(time<10){
       time= "0"+ time;
   } 
   return time;
}


function runTimer(){
    if(running) { 
        let currentTime = leadingZero(timer[0]) + ":" + leadingZero(timer[1]) + ":" + leadingZero(timer[2]);
        theTimer.innerHTML= currentTime;
        timer[3]++;
        timer[0] = Math.floor((timer[3]/100)/60);
        timer[1] = Math.floor((timer[3]/100) - (timer[0] * 60));
        timer[2] = Math.floor(timer[3] - (timer[1] * 100) - (timer[0] * 6000));
    }
    else {
        timer="00:00:00";   
        theTimer.innerHTML= timer; }
}

   
    function start(){
        let textEnteredLength= testArea.value.length; 
         if (textEnteredLength===0 && !timerRunning){
           interval = setInterval(runTimer, 10);
           timerRunning=true;
        }
        console.log(textEnteredLength);
    }



function spellCheck() {
    let textEntered = testArea.value;
    let originTextMatch = originText.substring(0,textEntered.length);

    if (textEntered == originText) {    
        clearInterval(interval);  
        testWrapper.style.borderColor = "#429890";
        

    } else {
        if (textEntered == originTextMatch) {
            testWrapper.style.borderColor = "#65CCf3";
        } else {
            testWrapper.style.borderColor = "#E95D0F";
        }
    }

}




function reset(){
    running=false;  
}








const startButton = document.getElementById("start")
const pauseButton = document.getElementById("pause")
const minTimer = document.getElementById("minute")
let startMinutes =0.1;
let breakTime=0.2;
let breakTotaltime = breakTime *60;
let time = startMinutes * 60;
let isRunning = false;
let userPause = false; 


function breakTimer(){
    updateTimer(breakTotaltime)
}

function updateTimer(duration){
    let time = duration;
    function countdownFunc(){
        let minutes = Math.floor(time / 60);
        let seconds = time % 60;
        let displayM;
        let displayS;
        if(minutes < 10){
            displayM = "0" + minutes;
        }else {
            displayM = minutes;
        }
        if(seconds < 10){
            displayS = "0" + seconds;
        }else{
            displayS = seconds;
        }
        minTimer.innerHTML = `${displayM}:${displayS}`;
        time--;

        if(time < 0){ 
            clearInterval(countdown);
            isRunning = false;
            breakTimer(breakTotaltime)
        }
    }
    countdown = setInterval(countdownFunc,1000);
    
}

function start(){
    if(isRunning == false){
        isRunning = true;
        updateTimer(time)
    }
}

function pause(){
    if(isRunning == true){
        userPause = true;
        isRunning = false;
    }
}

function setPreset1(){

}

function setPreset2(){

}



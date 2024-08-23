const startButton = document.getElementById("start")
const pauseButton = document.getElementById("pause")
const minTimer = document.getElementById("minute")
let startMinutes = 25;
let breakMinutes = 5;
let breakTotaltime = breakMinutes *60;
let time = startMinutes * 60;
let isRunning = false;
let userPause = false; 
let countdown;


function breakTimer(){
    breakTotaltime = breakMinutes * 60;
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
            breakTimer(breakTotaltime)
        }
    }
    countdown = setInterval(countdownFunc,1000);
    
}

function start(){
    if(isRunning == false){
        isRunning = true;
        time = startMinutes * 60
        updateTimer(time);
    }
}

function reset(){
    clearInterval(countdown);
    minTimer.innerHTML = `${startMinutes}:00`;
    isRunning = false;
}

function setPreset1(){
    startMinutes = 25;
    breakMinutes = 5;
    reset();
}

function setPreset2(){
    startMinutes = 50;
    breakMinutes = 10;
    reset();
}



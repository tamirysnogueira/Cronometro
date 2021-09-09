var hours = 0
var minutes = 0
var seconds = 0
var timer = 0

let textHours = document.getElementById('hours')
let textMinutes = document.getElementById('minutes')
let textSeconds = document.getElementById('seconds')

function start(){
    timer = setInterval( update, 1000);
}

function update(){
    seconds = seconds + 1

    if (seconds == 60) {
        minutes += 1
        seconds = 0
        textMinutes.innerHTML = minutes < 10 ? textMinutes.innerHTML = `0${minutes} :` : `${minutes} :`
    }

    if (minutes == 60){
        hours += 1
        minutes = 0
        textHours.innerHTML = minutes < 10 ? textHours.innerHTML = `0${hours} :` : `${hours} :`
    }

    textSeconds.innerHTML = seconds < 10 ? textSeconds.innerHTML = `0${seconds}` : `${seconds}`
}

function pause(){
    clearInterval(timer)
}

function stop(){
    pause()
    textHours.innerHTML = `00 :`
    textMinutes.innerHTML = `00 :`
    textSeconds.innerHTML = `00`

    hours = 0
    minutes = 0
    seconds = 0    
}
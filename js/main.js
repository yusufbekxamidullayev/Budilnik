let pauseBtn = document.getElementById("pause-alarm");
let playBtn = document.getElementById("play-alarm");
let audio = document.getElementById("audio");
let alarmTime = document.getElementById("alarm");
let selectedTime;

alarmTime.addEventListener("submit", function (e) {
    e.preventDefault();
    selectedTime = e.target[0].value
})

playBtn.addEventListener("click" , function(){
    audio.play()
})


let stopAlarm = setInterval(() => {
    let date = new Date();

    let time = date.toTimeString().split(" ")[0]
    let realTime = time.split(":").slice(0, 2).join(":");
    console.log(time);
    console.log(realTime);

    if(selectedTime === realTime){
        audio.play();
    }
}, 1000)

pauseBtn.addEventListener("click", function () {
    audio.pause();
    clearInterval(stopAlarm)
})

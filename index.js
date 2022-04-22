
let time = document.querySelector(".digital");

function startTime() {
    const today = new Date();
    let hour = today.getHours();
    let minute = today.getMinutes();
    let seconds = today.getSeconds();
    minute = checkTime(minute);
    seconds = checkTime(seconds);
    let am_pm = "";
    // converting am and pm
    if (hour >= 12) {
        am_pm = "pm"
    } else {
        am_pm = "am"
    }
// converting 12hours
    if (hour == 12) {
        hour = 12;
    } else {
        if (hour > 12) {
            hour = hour - 12
        }
    }
    time.textContent = hour + " : " + minute + " : " + seconds + " " + am_pm;
}
// startTime();
let timCount = setInterval(startTime, 1000)

function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

 
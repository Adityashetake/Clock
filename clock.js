const hour = document.querySelector(".hour");
const minute = document.querySelector(".Minute");
const second = document.querySelector(".Second");
const day = document.getElementById("day");

var monthName = [
    'January', 'February', 'March', 'April', 'May', 'June', 
    'July', 'August', 'September', 'October', 'November', 'December'
];

function updateClock() {
    let today = new Date();
    
    let d = today.getDate();
    let m = today.getMonth();
    let y = today.getFullYear();
    let h = today.getHours();
    let min = today.getMinutes();
    let sec = today.getSeconds();

    h = h < 10 ? "0" + h : h;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;

    day.innerHTML = `${d} ${monthName[m]} ${y}`;
    hour.textContent = h;
    minute.textContent = min;
    second.textContent = sec;
}

setInterval(updateClock, 1000);

updateClock();

'use strict'

let milsec = 0;
const clock = {
  hour: 0,
  min: 0,
  sec: 0,
};




function culcMillisecond(hour, min, sec) {
  const inputNum = {
    sec: sec,
    min: min * 60,
    hour: hour * 60 * 60
  };
  return (inputNum.sec + inputNum.min + inputNum.hour)
}

function culcTime(milsec) {
  return {
    min: Math.floor(milsec / 60),
    sec: milsec % 60
  }
}

milsec = culcMillisecond(0, 5, 30);

setInterval(() => {
  document.getElementById('milsec').innerText = `sec=${milsec} / ${culcTime(milsec).min}分${culcTime(milsec).sec}秒`;
  milsec --;
  culcTime.min = Math.floor(milsec / 60);
  culcTime.sec = milsec % 60;
}, 1000)

function setTime() {
  clock.hour = document.getElementById('hour').value;
  clock.min = document.getElementById('min').value;
  clock.sec = document.getElementById('sec').value;
  console.log(`hour: ${clock.hour} / min: ${clock.min} / sec: ${clock.sec}`);
}


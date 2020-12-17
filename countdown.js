'use strict'

const clock = {
  hour: 0,
  min: 0,
  sec: 0,
  milsec: 0,
};

clock.hour = document.getElementById('hour').Value;
clock.min = document.getElementById('min').value;
clock.sec = document.getElementById('sec').value

function culcMillisecond(hour, min, sec) {
  const inputNum = {
    sec: sec,
    min: min * 60,
    hour: hour * 60 * 60
  };
  return (inputNum.sec + inputNum.min + inputNum.hour)
}

clock.milsec = culcMillisecond(0, 5, 30);

const culcTime = {
  min: Math.floor(clock.milsec / 60),
  sec: clock.milsec % 60
}

setInterval(() => {
  document.getElementById('milsec').innerText = `sec=${clock.milsec} / ${culcTime.min}分${culcTime.sec}秒`;
  clock.milsec --;
  culcTime.min = Math.floor(clock.milsec / 60);
  culcTime.sec = clock.milsec % 60;
}, 1000)


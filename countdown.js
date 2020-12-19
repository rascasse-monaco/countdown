'use strict'

let miliSec = 0;
const clock = {
  hour: 0,
  min: 0,
  sec: 0,
};

function setTime() {
  clock.hour = parseInt(document.getElementById('hour').value);
  clock.min = parseInt(document.getElementById('min').value);
  clock.sec = parseInt(document.getElementById('sec').value);
  console.log(`hour: ${clock.hour} / min: ${clock.min} / sec: ${clock.sec}`);
  miliSec = culcToMillisecond(clock.hour, clock.min, clock.sec);
}

function culcToMillisecond(hour, min, sec) {
  const inputNum = {
    sec: sec,
    min: min * 60,
    hour: hour * 60 * 60
  };
  return (inputNum.sec + inputNum.min + inputNum.hour)
}

function culcToTimeDisplay(milsec) {
  return {
    hour: Math.floor(milsec / 60 / 60),
    min: Math.floor((milsec / 60) % 60),
    sec: milsec % 60
  }
}

function start() {
  setTime();
  setInterval(() => {
    document.getElementById('milsec').innerText = `sec=${miliSec} / ${culcToTimeDisplay(miliSec).hour}時間${culcToTimeDisplay(miliSec).min}分${culcToTimeDisplay(miliSec).sec}秒`;
    miliSec --;
  }, 1000)
}


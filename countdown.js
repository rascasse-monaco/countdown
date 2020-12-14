'use strict'
const date =new Date();
const now = date.getTime();

const fiveMin = 1000 * 60 * 5;
const later = now + fiveMin;

const inputNum = {
  sec: 30,
  min: 0,
  hour: 0
};
function culcMillisecond(hour, min, sec) {
  const inputNum = {
    sec: sec,
    min: min * 60,
    hour: hour * 60 * 60
  };

  return (inputNum.sec + inputNum.min + inputNum.hour) * 1000
}

const zeroPoint = later - now;
const min = Math.floor(zeroPoint / 60 / 1000);

const inputSec = inputNum.sec * 1000;
const sec = (zeroPoint + inputSec) % (60 * 1000) / 1000;

function countDown() {
  document.getElementById('countdown').innerText =`${zeroPoint + inputSec},func${culcMillisecond(0, 5, 30)}=${min}分${sec}秒`;
}

countDown();
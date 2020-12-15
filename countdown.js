'use strict'

function culcMillisecond(hour, min, sec) {
  const inputNum = {
    sec: sec,
    min: min * 60,
    hour: hour * 60 * 60
  };
  return (inputNum.sec + inputNum.min + inputNum.hour) * 1000
}

const min = Math.floor(culcMillisecond(0, 5, 30) / 60 / 1000);
const sec = culcMillisecond(0, 5, 30) % (60 * 1000) / 1000;

function countDown() {
  document.getElementById('countdown').innerText =`func.milsec ${culcMillisecond(0, 5, 30)} = ${min}分${sec}秒`;
}

countDown();
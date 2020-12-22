'use strict'

let miliSec = 0;
const clock = {
  hour: 0,
  min: 0,
  sec: 0,
  switch: 0 // ボタン制御用変数、0の時set可能、1の時start、2の時pause、それぞれ可能
};
let interVal = null;

function getTime() {
  clock.hour = parseInt(document.getElementById('hour').value);
  clock.min = parseInt(document.getElementById('min').value);
  clock.sec = parseInt(document.getElementById('sec').value);
  console.log(`hour: ${clock.hour} / min: ${clock.min} / sec: ${clock.sec}`);
  miliSec = culcToMillisecond(clock.hour, clock.min, clock.sec)
}

function setTimer() {
  if (clock.switch === 0) {
  clock.switch = 1;
  getTime();
  document.getElementById('timeArea').innerText =
  `${toDoubleDigits(culcToTimeDisplay(miliSec).hour)}:${toDoubleDigits(culcToTimeDisplay(miliSec).min)}:${toDoubleDigits(culcToTimeDisplay(miliSec).sec)}秒`;
  }
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
  if (clock.switch === 1) {
    clock.switch = 2;
    interVal = setInterval(() => {
      miliSec --;
      document.getElementById('timeArea').innerText =
      `${toDoubleDigits(culcToTimeDisplay(miliSec).hour)}:${toDoubleDigits(culcToTimeDisplay(miliSec).min)}:${toDoubleDigits  (culcToTimeDisplay(miliSec).sec)}秒`;
        if (miliSec === 0) {
        pause();
      }
    }, 1000);
  }
}

function pause() {
  if (clock.switch === 2 && miliSec > 0) {
    clock.switch = 1;
    clearInterval(interVal);
  } else {
    clock.switch = 0;
    clearInterval(interVal);
  }
}

function reload() {
  location.reload();
}

/**
 * 10の位に0を挿入して数字の桁数を合わせる
 * @return {String} 0を足した文字列
 * @param {Number} num 秒、分など
 */
function toDoubleDigits(num){
  num += '';
  if (num.length === 1) {
    return num = `0${num}`;
  } else {
    return num;
  }
}


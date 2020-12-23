'use strict'

let countNum = 0;
const clock = {
  hour: 0,
  min: 0,
  sec: 0,
  switch: 0 // ボタン制御用変数、0の時set可能、1の時start、2の時pause、それぞれ可能
};
let interVal = null;

//フォームから時間を取得、数値に変換しcountNumに代入
function getTime() {
  clock.hour = parseInt(document.getElementById('hour').value);
  clock.min = parseInt(document.getElementById('min').value);
  clock.sec = parseInt(document.getElementById('sec').value);
  countNum = culcToSecond(clock.hour, clock.min, clock.sec)
}

//時間設定用関数
function setTimer() {
  if (clock.switch === 0) {
  clock.switch = 1;
  getTime();
  document.getElementById('timeArea').innerText =
  `${toDoubleDigits(culcToTimeDisplay(countNum).hour)}:${toDoubleDigits(culcToTimeDisplay(countNum).min)}:${toDoubleDigits(culcToTimeDisplay(countNum).sec)}`;
  }
}
/**
 * 時、分、秒を秒に変換
 * @return {Number} 合計の秒数
 * @param {Number} 秒、分、時など
 */
function culcToSecond(hour, min, sec) {
  const inputNum = {
    sec: sec,
    min: min * 60,
    hour: hour * 60 * 60
  };
  return (inputNum.sec + inputNum.min + inputNum.hour)
}
//秒を時、分、秒の表記に変換
function culcToTimeDisplay(Num) {
  return {
    hour: Math.floor(Num / 60 / 60),
    min: Math.floor((Num / 60) % 60),
    sec: Num % 60
  }
}
//カウントダウン実行関数
function start() {
  if (clock.switch === 1) {
    clock.switch = 2;
    interVal = setInterval(() => {
      countNum --;
      document.getElementById('timeArea').innerText =
      `${toDoubleDigits(culcToTimeDisplay(countNum).hour)}:${toDoubleDigits(culcToTimeDisplay(countNum).min)}:${toDoubleDigits  (culcToTimeDisplay(countNum).sec)}`;
        if (countNum === 0) {
        pause();
      }
    }, 1000);
  }
}
//一時停止
function pause() {
  if (clock.switch === 2 && countNum > 0) {
    clock.switch = 1;
    clearInterval(interVal);
  } else {
    clock.switch = 0;
    clearInterval(interVal);
  }
}
//リセット、再読み込みする。
function reload() {
  location.reload();
}
//セットボタンをおしたら表示を変更する。
function replaceButton() {
  const setButtonID = document.getElementById('set');
  const buttonAreaID = document.getElementById('buttonArea');

  const startButton = document.createElement('input');
        startButton.setAttribute('type', 'button');
        startButton.setAttribute('class', 'button');
        startButton.setAttribute('id', 'start');
        startButton.setAttribute('onclick', 'start()');
        startButton.setAttribute('value', 'Start');

  const pauseButton = document.createElement('input');
        pauseButton.setAttribute('type', 'button');
        pauseButton.setAttribute('class', 'button');
        pauseButton.setAttribute('id', 'pause');
        pauseButton.setAttribute('onclick', 'pause()');
        pauseButton.setAttribute('value', 'Pause');

  const resetButton = document.createElement('input');
        resetButton.setAttribute('type', 'button');
        resetButton.setAttribute('class', 'button');
        resetButton.setAttribute('id', 'reset');
        resetButton.setAttribute('onclick', 'reload()');
        resetButton.setAttribute('value', 'Reset');

  buttonAreaID.replaceChild(startButton, setButtonID);
  buttonAreaID.appendChild(pauseButton);
  buttonAreaID.appendChild(resetButton);
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


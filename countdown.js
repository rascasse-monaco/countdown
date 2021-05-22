'use strict'
import { getTimeSetting, culcToTime } from './time-handle-util.js';
import { RemoveElement, EventListener, CreateChildElement } from './dom-util.js';

let count = 0;
let interVal = null;// setInterval代入用

const addEventListener = new EventListener();
const createChildElement = new CreateChildElement();
const removeElement = new RemoveElement();

// setボタンイベントリスナー設定
addEventListener.getId('set');
addEventListener.add('click', setTimer);

//時間設定&ボタン置き換え実行用関数
function setTimer() {
  count = getTimeSetting();

  if (count > 0) {
    // 時間セッティング部分削除
    removeElement.removeAllChildren('settingArea');
    // setボタン削除
    removeElement.removeAllChildren('buttonArea');

    // Startボタン作成
    createChildElement.getParentElement('buttonArea');
    createChildElement.create('button', 'button', 'start', '<i class="fas fa-play"></i> Start');
    addEventListener.getId('start');
    addEventListener.add('click', start);
    // 設定した時間表示
    displayTime(count);
  }
}
//カウントダウン実行関数
function start() {
    // Startボタン削除
    removeElement.removeAllChildren('buttonArea');

    // Pauseボタン作成
    createChildElement.getParentElement('buttonArea');
    createChildElement.create('button', 'button', 'pause', '<i class="fas fa-pause"></i> Pause')
    addEventListener.getId('pause');
    addEventListener.add('click', pause);

    // 短いリセットボタン作成
    createChildElement.getParentElement('buttonArea');
    createChildElement.create('button', 'button', 'reset', '<i class="fas fa-redo"></i> Reset')
    addEventListener.getId('reset');
    addEventListener.add('click', reload);

    interVal = setInterval(() => {
      count --;
      displayTime(count);
        if (count === 0) { // タイマーがゼロになったらアラームを鳴らしてボタンを変更する
          removeElement.removeAllChildren('buttonArea'); // PauseとResetボタン削除
          // アラーム音を止めるボタン作成
          createChildElement.getParentElement('buttonArea');
          createChildElement.create('button', 'button', 'alarmStop', '<i class="fas fa-volume-mute fa-lg"></i> Sound Stop');
          addEventListener.getId('alarmStop');
          // Resetボタン作成
          createChildElement.getParentElement('buttonArea');
          createChildElement.create('button', 'button', 'reset', '<i class="fas fa-redo"></i> Reset')
          addEventListener.add('click', mute);
          addEventListener.getId('reset');
          addEventListener.add('click', reload)
          alarm(); // アラーム音鳴らす
          clearInterval(interVal); // タイマーストップ
      }
    }, 1000);
}
//タイマー一時停止関数
function pause() {
  clearInterval(interVal); // タイマーストップ
  removeElement.removeAllChildren('buttonArea'); // PauseとResetボタン削除
  // 短いスタートボタン作成
  createChildElement.getParentElement('buttonArea');
  createChildElement.create('button', 'button', 'startShort', '<i class="fas fa-play"></i> Re Start')
  addEventListener.getId('startShort');
  addEventListener.add('click', start);
  // 短いリセットボタン作成
  createChildElement.getParentElement('buttonArea');
  createChildElement.create('button', 'button', 'reset', '<i class="fas fa-redo"></i> Reset')
  addEventListener.getId('reset');
  addEventListener.add('click', reload); 
}

//リセット、再読み込みする。
function reload() {
  location.reload();
}
//アラーム鳴らす関数
function alarm() {
  const audio = document.getElementById('alarm');
  audio.play();
}
//アラーム止める関数
function mute() {
  const audio = document.getElementById('alarm');
  audio.pause();
}

// 時間表示
function displayTime(count) {
  return document.getElementById('timeArea').innerText =
  `${culcToTime(count).hour}:${culcToTime(count).min}:${culcToTime(count).sec}`;
}
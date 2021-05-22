'use strict';
//フォームから時間を取得
function getTimeSetting() {
  const timeValue = {
    hour: 0,
    min: 0,
    sec: 0,
  };
  timeValue.hour = parseInt(document.getElementById('hour').value);
  timeValue.min = parseInt(document.getElementById('min').value);
  timeValue.sec = parseInt(document.getElementById('sec').value);
  return culcToSecond(timeValue.hour, timeValue.min, timeValue.sec);
}
/**
 * 時、分、秒を秒に変換して合計の秒数を返す
 * @return {Number} 合計の秒数
 * @param {Number} 秒、分、時など
 */
function culcToSecond(hour, min, sec) {
  const value = {
    sec: sec,
    min: min * 60,
    hour: hour * 60 * 60
  };
  return (value.sec + value.min + value.hour)
}

// 値を受け取って値を文字列にしてかえす。返す値がひと桁の場合は十の位に0を入れる。
function formatDisplay(value) {
  return Math.floor(value).toString().padStart(2, '0');
}
//秒を時、分、秒の表記に変換
function culcToTime(count) {
  return {
    hour: formatDisplay(count / 60 / 60),
    min: formatDisplay((count / 60) % 60),
    sec: (count % 60).toString().padStart(2, '0')
  }
}

export { getTimeSetting, culcToSecond, culcToTime };
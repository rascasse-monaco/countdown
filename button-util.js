'use strict';

/**
 * 子要素をまとめて削除する
 * @param {String} id 'parentID'
 */
function removeAllChildren(id) {
  const element = document.getElementById(`${id}`);

  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}
/**
 * 子要素を削除する
 * @param {String} parentID 'parentID'親要素のID
 * @param {String} childID 'childID'子要素のID
 */
function removeChild(parentID, childID) {
  const elementParentID = document.getElementById(`${parentID}`);
  const elementChildID = document.getElementById(`${childID}`)

  elementParentID.removeChild(elementChildID);
}
/**
 * 子要素のボタンを作成する関数
 * @param {String} parentAreaID 'parentAreaID' 親要素のID
 * @param {String} id 'id' ボタンのID
 * @param {String} funcName 'funcName' ボタンが呼びたしたい関数名
 * @param {String} value 'value' ボタンに表示するテキスト
 */
function createBtn(parentAreaID, id, innerHTML) {
  const areaID = document.getElementById(`${parentAreaID}`);
  const button = document.createElement('button');
        button.setAttribute('type', 'button');
        button.setAttribute('class', 'button');
        button.setAttribute('id', `${id}`);
        
  areaID.appendChild(button);

  if (innerHTML) {
    button.innerHTML = innerHTML;
  }
}
//ボタンをおしたら表示を変更する。
function replaceSetButton() {
  const settingAreaID = document.getElementById('settingArea');
  //Pauseを表示。
  const pauseButton = document.createElement('button');
        pauseButton.setAttribute('type', 'button');
        pauseButton.setAttribute('class', 'button');
        pauseButton.setAttribute('id', 'pause');
  //Resetを表示。
  const resetButton = document.createElement('button');
        resetButton.setAttribute('type', 'button');
        resetButton.setAttribute('class', 'button');
        resetButton.setAttribute('id', 'reset');
        resetButton.setAttribute('onclick', 'reload()');

  settingAreaID.appendChild(pauseButton)
  pauseButton.innerHTML = '<i class="fas fa-pause"></i> Pause'
  settingAreaID.appendChild(resetButton);
  resetButton.innerHTML = '<i class="fas fa-redo"></i> Reset'
}
/**
 * 子要素を削除する
 * @param {String} ID 要素のID
 * @param {String} event ボタンのイベント
 * @param {Function} fucName
 */
function buttonEventListener(ID, event, funcName,) {
  const ButtonID = document.getElementById(`${ID}`);
  ButtonID.addEventListener( `${event}`, funcName, false);
}

export { removeAllChildren, removeChild, createBtn, replaceSetButton, buttonEventListener }
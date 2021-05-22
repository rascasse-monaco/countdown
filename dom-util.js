'use strict';

//ボタンのaddEventListener設定用クラス
class EventListener {
  constructor() {
    this.id;
  }
  getId(id) {
    const buttonId = document.getElementById(id);
    return this.id = buttonId;
  }
  add(type, func){
   this.id.addEventListener(type, func, false);
  }
}

// 子要素作成クラス
class CreateChildElement {
  constructor() {
    this.parentElement;
    this.param = null;
  }
  getParentElement(elementId) { // 親要素のID取得
    const element = document.getElementById(elementId)
    return this.parentElement = element;
  }
  create(element, elementClass, elementId, innerText) { // 子要素を作成
    const childElement = document.createElement(element);
    this.parentElement.appendChild(childElement);
    childElement.setAttribute('type', element);
    childElement.setAttribute('class', elementClass);
    childElement.setAttribute('id', elementId);
    childElement.innerHTML = innerText;

    return this.param = { parent: this.parentElement, newChild: childElement }; // 親要素と子要素をコンストラクタのparamに設定する。
  }  
}

//子要素リプレース用クラス
class ReplaceChildElement extends CreateChildElement {
  constructor() {
    super();
  }
  from(oldChildElementId) { // 置換え前の要素のIDを取得
    const oldChildElement = document.getElementById(oldChildElementId);
    this.param.parent.replaceChild(this.param.newChild, oldChildElement);
  }

}

// エレメント削除関数クラス
class RemoveElement {
  constructor() {
  }
  removeElement(elementId) {
    const element = document.getElementById(elementId);
    element.remove();
  }
  removeAllChildren(elementId) {
    const element = document.getElementById(elementId);
    while (element.firstChild) {
      element.removeChild(element.firstChild);
    }
  }
}

export { RemoveElement, EventListener, CreateChildElement, ReplaceChildElement };

export class MainContent {
  _main: HTMLElement
  constructor() {
    this._main = document.createElement('main') as HTMLElement
  }
  addElement(elem: HTMLElement) {
    this._main.insertAdjacentElement("afterbegin", elem)
    return this._main
  }
}
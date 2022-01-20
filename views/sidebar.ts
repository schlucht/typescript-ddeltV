export class Sidebar {
  private _div: HTMLDivElement;
  constructor() {
    this._div = <HTMLDivElement>document.createElement('div')
    this._div.classList.add('sidebar')
    
  }

  createSideBar() {
    return this._div;
  }
}
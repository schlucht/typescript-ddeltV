export enum ContentPosition {
  contentRight,
  contentLeft
}

export class Layout {
  _left: HTMLDivElement;
  _right: HTMLDivElement;
  constructor(content: HTMLDivElement) {
    this._left = document.createElement('div')
    this._right = document.createElement('div')
    this._left.classList.add('left');
    this._right.classList.add('right');
    content.appendChild(this._left);
    content.appendChild(this._right);
  }

  addContent(content: HTMLElement, position: ContentPosition) {
    switch (position) {
      case 0:
        this._right.appendChild(content);
        break;
      case 1:
        this._left.appendChild(content);
        break;
      default:
        break;
    }    
  }
  
}
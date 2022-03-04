
import {SVG, Position, Dimension } from './rect';

export class Box {
  
  width = 0;
  height = 0;
  x = 0;
  y = 0;
  crossH = 15;
  crossW = 5;
  diff = 7;
  _isActive = false;
  distance = 0;

  get isActive() {
    return this._isActive;
  }
   set isActive(value: boolean) {
     this.renderActivtedBorder(value);
     this._isActive = value;     
   }

  constructor (public ctx: CanvasRenderingContext2D, 
    x: number, 
    y: number, 
    width: number, 
    height: number, 
    public text = 'OP_START') {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;    
  }

  createBox() {
    let diff = 7;
    let fontSize = 14;
    this.ctx.setLineDash([]);
    this.ctx.beginPath()
    this.ctx.fillStyle = '#ddd';    
    this.ctx.fillRect(this.x, this.y, this.width, this.height);

    this.ctx.strokeStyle = '#ccc';
    this.ctx.lineWidth = diff;
    this.ctx.strokeRect(this.x + diff, this.y + diff, this.width - diff * 2, this.height - diff * 2);
    this.ctx.lineWidth = 1;

    this.ctx.beginPath()
    this.ctx.strokeStyle = '#fff';    
    this.ctx.moveTo(this.x + diff, this.y + diff);
    this.ctx.lineTo(this.x + this.width - diff, this.y + diff);
    this.ctx.lineTo(this.x + this.width - diff, this.y + this.height - diff);
    this.ctx.stroke();

    this.ctx.beginPath()
    this.ctx.strokeStyle = '#888';
    this.ctx.lineTo(this.x + this.width - diff, this.y + this.height - diff);
    this.ctx.lineTo(this.x + diff, this.y + this.height - diff);
    this.ctx.lineTo(this.x + diff, this.y + diff);
    this.ctx.stroke();
    this.ctx.beginPath()
    this.ctx.fillStyle = '#000';
    this.ctx.font = `${fontSize}px monospace`;
    this.ctx.textAlign = "center";
    this.ctx.fillText(this.text, this.x + this.width / 2, (this.y + (diff + this.height) / 2));
    
    this.ctx.stroke();
  }

  renderCross(distance: number) {
    this.distance = distance;
    let x = this.x + (this.width / 2);
    let y = this.y + this.height + (distance / 2) - (this.crossH / 2);
    this.renderLine(x, this.y + this.height, distance);
    this.ctx.beginPath();
    this.ctx.strokeStyle = "#555";
    this.ctx.lineWidth = this.crossW;
    this.ctx.lineCap = "round";
    this.ctx.moveTo(x , y);
    this.ctx.lineTo(x, y + this.crossH);
    this.ctx.moveTo(x - this.crossH / 2, y + this.crossH / 2);
    this.ctx.lineTo(x + this.crossH / 2, y + this.crossH / 2);
    this.ctx.stroke();
  }

  renderLine(x: number, y: number, distance: number) {
    this.ctx.beginPath();
    this.ctx.strokeStyle = '#000';
    this.ctx.lineWidth = 0.5;
    this.ctx.moveTo(x, y);
    this.ctx.lineTo(x, y + distance);
    this.ctx.stroke();
  }

  private renderActivtedBorder(activated: boolean): void {
    this.ctx.lineWidth = .5;    
    this.ctx.setLineDash([4, 2]);
    if (activated) {    
      this.ctx.strokeStyle = 'black';      
      this.ctx.strokeRect(this.x - 5, this.y - 5, this.width + 10, this.height + 10);    
    } else {      
      this.ctx.clearRect(this.x - 6, this.y - 6, this.width + 12, this.height + 12);     
      this.createBox();
      // this.renderCross(this.distance);
    }
    
  }

  isInsideBox(mousePos: {x: number, y: number}): boolean {
    return mousePos.x > this.x 
      && mousePos.x < (this.x + this.width)
      && mousePos.y  > this.y
      && mousePos.y  < (this.y + this.height)
  }

  toString() {
    return `X: ${this.x}, Y: ${this.y}, w: ${this.width}, h: ${this.height}`;
  }

}
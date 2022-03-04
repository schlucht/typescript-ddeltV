
export class Cross {
  
  w = 5;
  h = 15;
  x = 0;
  y = 0;

  constructor (public ctx: CanvasRenderingContext2D, x: number, y: number,  public isEnd = false) {
    this.x = x;
    this.y = y - (this.h / 2);    
  }

  renderCross() {  
    this.ctx.beginPath();    
    this.ctx.strokeStyle = "red";
    this.ctx.lineWidth = this.w;
    this.ctx.lineCap = "round";
    this.ctx.moveTo(this.x , this.y );
    this.ctx.lineTo(this.x, this.y + this.h);
    this.ctx.moveTo(this.x - this.h / 2, this.y + this.h / 2);
    this.ctx.lineTo(this.x + this.h / 2, this.y + this.h / 2);
    this.ctx.stroke();
  }



}
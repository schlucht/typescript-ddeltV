
export class Box { 
  crossH = 15;
  crossW = 5;
  diff = 7;
  _isActive = false;
  distance = 0;
  ctx: CanvasRenderingContext2D; 

  get isActive() {
    return this._isActive;
  }
   set isActive(value: boolean) {
     this.renderActivtedBorder(value);
     this._isActive = value;     
   }

  constructor (
    public x: number, 
    public y: number, 
    public width: number, 
    public height: number, 
    public text = 'OP_START') {
    
  }

  createBox(ctx: CanvasRenderingContext2D) {
     if (!ctx) {
        throw new Error('Fehler')
      }
    this.ctx = ctx;
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
     if (!this.ctx) {
        throw new Error('Fehler')
      }
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
     if (!this.ctx) {
        throw new Error('Fehler')
      }
    this.ctx.beginPath();
    this.ctx.strokeStyle = '#000';
    this.ctx.lineWidth = 0.5;
    this.ctx.moveTo(x, y);
    this.ctx.lineTo(x, y + distance);
    this.ctx.stroke();
  }

  private renderActivtedBorder(activated: boolean): void {
     if (!this.ctx) {
        throw new Error('Fehler')
      }
    this.ctx.lineWidth = .5;    
    this.ctx.setLineDash([4, 2]);
    if (activated) {    
      this.ctx.strokeStyle = 'black';      
      this.ctx.strokeRect(this.x - 5, this.y - 5, this.width + 10, this.height + 10);    
    } else {      
      this.ctx.clearRect(this.x - 6, this.y - 6, this.width + 12, this.height + 12);     
      this.createBox(this.ctx);
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
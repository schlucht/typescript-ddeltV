import { Rectangle } from "./rectangel";
import { StepParameter } from "./stepParameter";

export class Step {
  private _name: string = ''
  public get Name() {
    return this._name;
  }
  private _description: string = ''
  public get Description() {
    return this._description;
  }
  private _rect: Rectangle
  public get Rect(): Rectangle {
    return this._rect
  }
  private _stepParam: StepParameter[] = []
  public get StepParam(): StepParameter[] {
    return this._stepParam
  }
  constructor(public stepLines: string[]) {
    this.readName()
    this.readDescription()
    this.readRect()
    this.readStepParam()
  }

  private readName() {
    let reg = /STEP NAME="(.*)" D/gm
    let match = reg.exec(this.stepLines[0]);
    if (match) {
      this._name = match[1];      
    }
  }

  private readDescription() {
    let reg = / DESCRIPTION="(.*)"/gm
    let match = reg.exec(this.stepLines[2]);
    if (match) {
      this._description = match[1];      
    }
  }
  private readRect() {
    let reg = /[XYHW]=([-\d]*)/gm
    let match = this.stepLines[3].match(reg)
    if (match) {
      this._rect = {
        X: Number(match[0].match(/[0-9].*/)), 
        Y: Number(match[1].match(/\d.*/)), 
        H: Number(match[2].match(/\d.*/)),
        W: Number(match[3].match(/\d.*/))}      
    }
  }
  private readStepParam() {
    let start = false
    let brackets = 0
    let text: string[] = []

    for (let i = 0; i < this.stepLines.length; i++) {
      if (start) {
        text.push(this.stepLines[i]);
        brackets += this.stepLines[i].indexOf('{') > -1 ? 1 : 0;
        brackets -= this.stepLines[i].indexOf('}') > -1 ? 1 : 0;
        if (brackets === 0) {
          start = false;
          brackets = 0;
          this._stepParam.push(new StepParameter(text));
          text = [];
        }
      } else {
        start = this.stepLines[i].indexOf('STEP_PARAMETER') > -1
        if (start) {
          text.push(this.stepLines[i])
        }
      }
    }
  }
}
import { Step } from "./step"

export class PfcAlgorithm {
  private _step: Step[] = []
  public get Step() : Step[] {
    return this._step
  }
  constructor(public pfcLines: string[]) {
    this.readStep()
  }
  private readStep() {
    let start = false
    let brackets = 0
    let text: string[] = []

    for (let i = 0; i < this.pfcLines.length; i++) {
      if (start) {
        text.push(this.pfcLines[i]);
        brackets += this.pfcLines[i].indexOf('{') > -1 ? 1 : 0;
        brackets -= this.pfcLines[i].indexOf('}') > -1 ? 1 : 0;
        if (brackets === 0) {
          start = false;
          brackets = 0;
          this._step.push(new Step(text));
          text = [];
        }
      } else {
        start = this.pfcLines[i].indexOf('STEP NAME') > -1
        if (start) {
          text.push(this.pfcLines[i])
        }
      }
    }

  }
  
}
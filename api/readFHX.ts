import { UpList } from './up/uplist'
import { UP } from './up/up'
import { Batch } from './batch/batch'

export class ReadFHX {
  batches: Batch[] = []
  private _lines: string[] = []
  
  constructor(fhXString: string) {
    if (fhXString) {
      this._lines = fhXString.split('\n')
      this.readBatch()
      // console.log(this.batches[0].Pfc.Step[0].StepParam[5])
    }
  }

  readBatch() {
    let start = false
    let brackets = 0
    let text:string[] = []
    let batch: Batch
    for (let i = 0; i < this._lines.length; i++) {
      if (start) {
        text.push(this._lines[i])
        brackets += this._lines[i].indexOf('{') > -1 ? 1 : 0
        brackets -= this._lines[i].indexOf('}') > -1 ? 1 : 0
        if (brackets === 0) {
          start = false
          brackets = 0
          batch = new Batch(text)
          this.batches.push(batch)
          text = []
        }
      } else {
        start = this._lines[i].indexOf('BATCH_RECIPE')> -1
        if (start) {
          text.push(this._lines[i])
          text.push(this._lines[i + 1])
          i += 1
        }
      }
    }
  }

  
}
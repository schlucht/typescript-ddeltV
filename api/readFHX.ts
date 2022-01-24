
import { Unit } from './module/unit'
import { SaveUnit } from './module/saveUnits';
import { ReadStorage } from './readStorage';

export class ReadFHX {
  private units: Unit[] = []
  private _lines: string[] = []
  private _store: ReadStorage = new ReadStorage()
  
  private _folder = '';
  public get Folder(): string {
    return this._folder;
  }

  constructor(public fhXString: string) {
    this._store.readStorage()
    if (this.fhXString) {
      this._lines = this.fhXString.split('\n')
      this.readBatch()      
      this.saveBatch()
    } else {

    }
  }

  readBatch() {
    let start = false
    let brackets = 0
    let text:string[] = []
    let batch: Unit
    for (let i = 0; i < this._lines.length; i++) {
      if (start) {
        text.push(this._lines[i])
        brackets += this._lines[i].indexOf('{') > -1 ? 1 : 0
        brackets -= this._lines[i].indexOf('}') > -1 ? 1 : 0
        if (brackets === 0) {
          start = false
          brackets = 0
          batch = new Unit(text)
          this.units.push(batch)
          text = []
        }
      } else {
        start = this._lines[i].indexOf('BATCH_RECIPE')> -1
        if (start) {
          const fold = /CATEGORY="(.*)"/g
          const match = fold.exec(this._lines[i])
          if (match) {
            this._folder = match[1]
          }
          text.push(this._lines[i])
          text.push(this._lines[i + 1])
          i += 1
        }
      }
    }
  }

  saveBatch() {
    const save = new SaveUnit(this.units);
    const saveDates = save.save()
    saveDates.forEach((val: Unit[], key: string) => {
      window.localStorage.setItem(key, JSON.stringify(val))
    })    
  }

  
}
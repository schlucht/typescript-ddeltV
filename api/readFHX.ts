
import { Unit } from './module/unit'
import { SaveUnit } from './module/saveUnits';
import { ReadStorage } from './readStorage';

export class ReadFHX {
  private units: Unit[] = []
  private lines: string[] = []
  private store: ReadStorage = new ReadStorage()
  
  private folder = '';
  public get Folder(): string {
    return this.folder;
  }

  constructor(public fhXString: string) {
    this.store.readStorage()
    if (this.fhXString) {
      this.lines = this.fhXString.split('\n')
      this.readBatch()      
      this.saveBatch()
    }
  }

  readBatch() {
    let start = false
    let brackets = 0
    let text:string[] = []
    let batch: Unit
    for (let i = 0; i < this.lines.length; i++) {
      if (start) {
        text.push(this.lines[i])
        brackets += this.lines[i].indexOf('{') > -1 ? 1 : 0
        brackets -= this.lines[i].indexOf('}') > -1 ? 1 : 0
        if (brackets === 0) {
          start = false
          brackets = 0
          batch = new Unit(text)
          this.units.push(batch)
          text = []
        }
      } else {
        start = this.lines[i].indexOf('BATCH_RECIPE')> -1
        if (start) {
          const fold = /CATEGORY="(.*)"/g
          const match = fold.exec(this.lines[i])
          if (match) {
            this.folder = match[1]
          }
          text.push(this.lines[i])
          text.push(this.lines[i + 1])
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
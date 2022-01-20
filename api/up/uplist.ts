import { UP } from "./up"

export class UpList {
  private _ups: UP[] = []
  private _regName = /BATCH_RECIPE NAME="(.*)" TYPE=(.*) C/gm
  

  public get List() {
    return this._ups
  }
  constructor(private lines: string[]) {
    this._add()
  }
  
  private _add(): UpList {
    let up = new UP();    
    if (this.lines.length > 0) {
      this.lines.forEach((line: string) => {       
        let match = this._regName.exec(line)        
        if (match) {
          up.Name = match[1]
          up.Type = match[2]
          this._ups.push(up)
        }
      })
    }
    
    return this
  }
  private _upText(): string[] {
    return []
  }
  
}
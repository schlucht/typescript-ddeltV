export class StepParameter {
  private _name = ''
  public get Name() {
    return this._name
  }
   private _defName = ''
  public get DeferredName() {
    return this._defName
  }

  constructor(public stepParamLines: string[]){
    this.readName()
    this.readDeferredName()    
  }

  private readName() {
     let reg = /STEP_PARAMETER NAME="(.*)"/gm
    let match = reg.exec(this.stepParamLines[0]);
    if (match) {
      this._name = match[1];      
    }
  }

  private readDeferredName() {
    this.stepParamLines.forEach((line: string) => {
      if (line.indexOf('DEFERRED_TO') > -1) {
        let match = /DEFERRED_TO=(.*)/gm.exec(line) 
        this._defName = match[1]
      }
    })
  }
}
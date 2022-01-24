export class StepParameter {
  private name = ''
  public get Name() {
    return this.name
  }
   private defName = ''
  public get DeferredName() {
    return this.defName
  }

  constructor(public stepParamLines: string[]){
    this.readName()
    this.readDeferredName()    
  }

  private readName() {
     let reg = /STEP_PARAMETER NAME="(.*)"/gm
    let match = reg.exec(this.stepParamLines[0]);
    if (match) {
      this.name = match[1];      
    }
  }

  private readDeferredName() {
    this.stepParamLines.forEach((line: string) => {
      if (line.indexOf('DEFERRED_TO') > -1) {
        let match = /DEFERRED_TO=(.*)/gm.exec(line) 
        this.defName = match[1]
      }
    })
  }
}
export class FormulaParameter {
  private _name = ''
  public get Name(): string {
    return this._name
  }
  private _type = ''
  public get Type(): string {
    return this._type
  }
  
  

  constructor(public formulaLines: string[]){
    this.readNameType(this.formulaLines[0])
  }

  private readNameType(line: string): void {
    let regName = /FORMULA_PARAMETER NAME="(.*)" TYPE=(.*)/gm;
    let match = regName.exec(line);
    
    if (match) {
      this._name = match[1];
      this._type = match[2];
    }
  }
}
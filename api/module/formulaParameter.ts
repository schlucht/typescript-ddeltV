
export class FormulaParameter {
  private name = ''
  public get Name(): string {
    return this.name
  }
  private type = ''
  public get Type(): string {
    return this.type
  }

  constructor(public formulaLines: string[]){
    this.readNameType(this.formulaLines[0])
  }

  private readNameType(line: string): void {
    let regName = /FORMULA_PARAMETER NAME="(.*)" TYPE=(.*)/gm;
    let match = regName.exec(line);
    
    if (match) {
      this.name = match[1];
      this.type = match[2];
    }
  }
}
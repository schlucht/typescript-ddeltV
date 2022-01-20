import { AttributeInstance } from './attributeInstance';
import { FormulaParameter } from './formulaParameter';
import { PfcAlgorithm } from './pfcAlgoritm';


export class Batch {
  private _name = '';
  public get Name(): string {
    return this._name;
  }

  private _type = '';
  public get Type(): string {
    return this._type;
  }

  private _description = '';
  public get Description(): string {
    return this._description;
  }

  private _author = '';
  public get Author(): string {
    return this._author;
  }

  private _unit = '';
  public get Unit(): string {
    return this._unit;
  }

  private _pfc: PfcAlgorithm;
  public get Pfc(): PfcAlgorithm {
    return this._pfc;
  }
  private _formulaParam: FormulaParameter[] = []
  public get FormulaParam(): FormulaParameter[] {
    return this._formulaParam
  }
  private _attributeParam: AttributeInstance[] = []
  public get AttributeInst(): AttributeInstance[] {
    return this._attributeParam
  }

  constructor(public batchLines: string[]) {
    if (batchLines) {
      this.readName(batchLines[0]);
      this.readProperties();
      this.readPFC();
      this.readFormulaParam();
      this.readAttribute()
    }
    // console.log(this)
  }

  private readName(line: string) {
    let regName = /BATCH_RECIPE NAME="(.*)" TYPE=(.*) C/gm;
    let match = regName.exec(line);
    if (match) {
      this._name = match[1];
      this._type = match[2];
    }
  }
  private readProperties() {
    let regDesc = /DESCRIPTION="(.*)"/g;
    let regUser = /AUTHOR="(.*)"/g;
    let regUnit = /EQUIPMENT_UNIT="(.*)"/g;

    for (let line of this.batchLines) {
      let matchDesc = regDesc.exec(line);
      if (matchDesc) {
        this._description = matchDesc[1];
        continue;
      }
      let matchUnit = regUnit.exec(line);
      if (matchUnit) {
        this._unit = matchUnit[1];
        continue;
      }
      let matchUser = regUser.exec(line);
      if (matchUser) {
        this._author = matchUser[1];
        continue;
      }
      if (
        this._description !== '' &&
        this._unit !== '' &&
        this._author !== ''
      ) {
        break;
      }
    }
  }
  
  private readPFC() {
    let start = false;
    let brackets = 0;
    let text: string[] = [];
    for (let i = 0; i < this.batchLines.length; i++) {
      if (start) {
        text.push(this.batchLines[i]);
        brackets += this.batchLines[i].indexOf('{') > -1 ? 1 : 0;
        brackets -= this.batchLines[i].indexOf('}') > -1 ? 1 : 0;
        if (brackets === 0) {
          start = false;
          brackets = 0;
          this._pfc = new PfcAlgorithm(text);
          text = [];
        }
      } else {
        start = this.batchLines[i].indexOf('PFC_ALGORITHM') > -1;
        if (start) text.push(this.batchLines[i]);
        
      }
    }
  }

  private readFormulaParam() {
    let start = false
    let brackets = 0
    let text: string[] = []

    for (let i = 0; i < this.batchLines.length; i++) {
      if (start) {
        text.push(this.batchLines[i]);
        brackets += this.batchLines[i].indexOf('{') > -1 ? 1 : 0;
        brackets -= this.batchLines[i].indexOf('}') > -1 ? 1 : 0;
        if (brackets === 0) {
          start = false;
          brackets = 0;
          this._formulaParam.push(new FormulaParameter(text));
          text = [];
        }
      } else {
        start = this.batchLines[i].indexOf('FORMULA_PARAMETER') > -1
        if (start) {
          text.push(this.batchLines[i])
        }
      }
    }
  }

  private readAttribute() {
    let start = false
    let brackets = 0
    let text: string[] = []
    for (let form of this._formulaParam){
      for (let i = 0; i < this.batchLines.length; i++) {
        if (start) {
          text.push(this.batchLines[i]);
          brackets += this.batchLines[i].indexOf('{') > -1 ? 1 : 0;
          brackets -= this.batchLines[i].indexOf('}') > -1 ? 1 : 0;
          if (brackets === 0) {
            start = false;
            brackets = 0;
            this._attributeParam.push(new AttributeInstance(text));
            text = [];
          }
        } else {
          start = this.batchLines[i].indexOf(`ATTRIBUTE_INSTANCE NAME="${form.Name}"`) > -1
          if (start) {
            text.push(this.batchLines[i])
          }
        }
      }
    }
  }
}

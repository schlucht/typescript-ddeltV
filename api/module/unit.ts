import { AttributeInstance } from './attributeInstance';
import { FormulaParameter } from './formulaParameter';
import { PfcAlgorithm } from './pfcAlgoritm';


export class Unit {
  private name = '';
  public get Name(): string {
    return this.name;
  }

  private type = '';
  public get Type(): string {
    return this.type;
  }

  private description = '';
  public get Description(): string {
    return this.description;
  }

  private author = '';
  public get Author(): string {
    return this.author;
  }

  unit = '';
  public get Unit(): string {
    return this.unit;
  }

  private folder = '';
  public get Folder(): string {
    return this.folder;
  }

  private pfc: PfcAlgorithm;
  public get Pfc(): PfcAlgorithm {
    return this.pfc;
  }
  private formulaParam: FormulaParameter[] = []
  public get FormulaParam(): FormulaParameter[] {
    return this.formulaParam
  }
  private attributeParam: AttributeInstance[] = []
  public get AttributeInst(): AttributeInstance[] {
    return this.attributeParam
  }

  constructor(public batchLines: string[]) {
    if (batchLines) {
      this.readName(batchLines[0]);
      this.readProperties();
      this.readPFC();
      this.readFormulaParam();
      this.readAttribute()
    }
  }

  private readName(line: string) {
    let regName = /BATCH_RECIPE NAME="(.*)" TYPE=(.*) C/gm;
    const regFolder = /CATEGORY="(.*)"/g
    const folderMatch = regFolder.exec(line)
    if (folderMatch) {
      this.folder = folderMatch[1]
    }
    let match = regName.exec(line);
    if (match) {
      this.name = match[1];
      this.type = match[2];
    }
  }
  
  private readProperties() {
    let regDesc = /DESCRIPTION="(.*)"/g;
    let regUser = /AUTHOR="(.*)"/g;
    let regUnit = /EQUIPMENT_UNIT="(.*)"/g;

    for (let line of this.batchLines) {
      let matchDesc = regDesc.exec(line);
      if (matchDesc) {
        this.description = matchDesc[1];
        continue;
      }
      let matchUnit = regUnit.exec(line);
      if (matchUnit) {
        this.unit = matchUnit[1];
        continue;
      }
      let matchUser = regUser.exec(line);
      if (matchUser) {
        this.author = matchUser[1];
        continue;
      }
      if (
        this.description !== '' &&
        this.unit !== '' &&
        this.author !== ''
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
          this.pfc = new PfcAlgorithm(text);
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
          this.formulaParam.push(new FormulaParameter(text));
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
    for (let form of this.formulaParam){
      for (let i = 0; i < this.batchLines.length; i++) {
        if (start) {
          text.push(this.batchLines[i]);
          brackets += this.batchLines[i].indexOf('{') > -1 ? 1 : 0;
          brackets -= this.batchLines[i].indexOf('}') > -1 ? 1 : 0;
          if (brackets === 0) {
            start = false;
            brackets = 0;
            this.attributeParam.push(new AttributeInstance(text));
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

import { AttributeInstance } from './attributeInstance';
import { FormulaParameter } from './formulaParameter';
import { Transition, StepTransition } from './transition';
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
  private formulaParam: FormulaParameter[] = [];
  public get FormulaParam(): FormulaParameter[] {
    return this.formulaParam;
  }
  private attributeParam: AttributeInstance[] = [];
  public get AttributeInst(): AttributeInstance[] {
    return this.attributeParam;
  }
  private transition: Transition[] = [];
  public get UnitTrans(): Transition[] {
    return this.transition;
  }
  private stepTrans: StepTransition[] = [];
  public get StepTrans(): StepTransition[] {
    return this.stepTrans;
  }
  private transStep: StepTransition[] = [];
  public get TransStep(): StepTransition[] {
    return this.transStep;
  }

  constructor(public batchLines: string[]) {
    if (batchLines) {
      this.readName(batchLines[0]);
      this.readProperties();
      this.readPFC();
      this.readFormulaParam();
      this.readAttribute();
      this.readTransition()
    }
  }

  private readName(line: string) {
    let regName = /BATCH_RECIPE NAME="(.*)" TYPE=(.*) C/gm;
    const regFolder = /CATEGORY="(.*)"/g;
    const folderMatch = regFolder.exec(line);
    if (folderMatch) {
      this.folder = folderMatch[1];
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
      if (this.description !== '' && this.unit !== '' && this.author !== '') {
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
          this.formulaParam.push(new FormulaParameter(text));
          text = [];
        }
      } else {
        start = this.batchLines[i].indexOf('FORMULA_PARAMETER') > -1;
        if (start) {
          text.push(this.batchLines[i]);
        }
      }
    }
  }

  private readAttribute() {
    let start = false;
    let brackets = 0;
    let text: string[] = [];
    for (let form of this.formulaParam) {
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
          start =
            this.batchLines[i].indexOf(
              `ATTRIBUTE_INSTANCE NAME="${form.Name}"`
            ) > -1;
          if (start) {
            text.push(this.batchLines[i]);
          }
        }
      }
    }
  }
  
  private readTransition() { 
    let trans = new Transition();
    const allTrans: Transition[] = []
    for (let i = 0; i < this.batchLines.length; i++) {
      if (this.batchLines[i].indexOf('TRANSITION ') > -1) {
        let reg = / NAME="(.*)"/gm;
        let regPos = /POSITION= { X=(.*) Y=(.*) /gm;
        let regTerm = /TERMINATION=(.*)/gm;
        let regExpr= /EXPRESSION="(.*)"/gm;
        let match = reg.exec(this.batchLines[i]);
         if (match) {
          trans.Name = match[1];      
        }
        let matchPos = regPos.exec(this.batchLines[i + 2]);
         if (matchPos) {
          trans.Position.x = +matchPos[1];      
          trans.Position.y = +matchPos[2];      
        }
        let matchTerm = regTerm.exec(this.batchLines[i + 3]);
         if (matchTerm) {
          trans.Terminate = matchTerm[1];      
        }
        let matchExpr = regExpr.exec(this.batchLines[i + 4]);
         if (matchExpr) {
          trans.Expression = matchExpr[1];      
        }       
        allTrans.push(trans)
        trans = new Transition()
      }
      if (this.batchLines[i].indexOf('STEP_TRANSITION_CONNECTION') > -1) {
        let regStep = /STEP="(.*)" T/;
        let regTrans = /TRANSITION="(.*)" /;
        let matchStep = regStep.exec(this.batchLines[i]);
        let matchTrans = regTrans.exec(this.batchLines[i]);
        
        this.stepTrans.push(
          {
            step: matchStep ? matchStep[1] : '', 
            transition: matchTrans ? matchTrans[1] : ''
          })
      }
      if (this.batchLines[i].indexOf('TRANSITION_STEP_CONNECTION') > -1) {
        let regTrans = /TRANSITION="(.*)" S/;
        let regStep = /STEP="(.*)" /;
        let matchStep = regStep.exec(this.batchLines[i]);
        let matchTrans = regTrans.exec(this.batchLines[i]);
        
        this.transStep.push(
          {
            step: matchStep ? matchStep[1] : '', 
            transition: matchTrans ? matchTrans[1] : ''
          })
      }       
    }
    this.transition = allTrans;  
  }
}

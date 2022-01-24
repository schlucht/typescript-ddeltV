import { Value } from './value';

export class AttributeInstance {
  private name = '';
  public get Name(): string {
    return this.name;
  }

  private value: Value = {
    set: '',
    stringValue: '',
    high: '',
    low: '',
    cv: '',
    description: '',
    units: ''
  };
  public get Value(): Value {
    return this.value;
  }

  constructor(public attributeLines: string[]) {
    this.readNameType(this.attributeLines[0]);
    this.readValue();
  }

  private readNameType(line: string): void {
    let regName = /ATTRIBUTE_INSTANCE NAME="(.*)"/gm;
    let match = regName.exec(line);
    if (match) {
      this.name = match[1];
    }
  }
  private readValue() {
    for (let line of this.attributeLines) {
      // console.log(line.match(/SET="(.*)"/) ? line.match(/SET="(.*)"/)[1] : '',)
      if (!this.value.set) {
        this.value.set = line.match(/SET="(.*)"/)
          ? line.match(/SET="(.*)"/)[1]
          : '';
      }
      if (!this.value.stringValue) {
        this.value.stringValue = line.match(/STRING_VALUE="(.*)"/)
          ? line.match(/STRING_VALUE="(.*)"/)[1]
          : '';
      }
      if (!this.value.high) {
        this.value.high = line.match(/ HIGH=(.*) L/)
          ? line.match(/ HIGH=(.*) L/)[1]
          : '';
      }
      if (!this.value.low) {
        this.value.low = line.match(/LOW=(.*) S/)
          ? line.match(/LOW=(.*) S/)[1]
          : '';
      }
      if (!this.value.cv) {
        this.value.cv = line.match(/CV=(.*) U/) ? line.match(/CV=(.*) U/)[1] : '';
      }
      if (!this.value.units) {
        this.value.units = line.match(/UNITS="(.*)" /)
          ? line.match(/UNITS="(.*)" /)[1]
          : '';
      }
      if (!this.value.description) {
        this.value.description = line.match(/DESCRIPTION="(.*)" H/)
          ? line.match(/DESCRIPTION="(.*)" H/)[1]
          : '';
      }
    }
  }
}

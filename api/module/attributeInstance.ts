import { Value } from './value';

export class AttributeInstance {
  private _name = '';
  public get Name(): string {
    return this._name;
  }

  private _value: Value = {
    set: '',
    stringValue: '',
    high: '',
    low: '',
    cv: '',
    description: '',
    units: ''
  };
  public get Value(): Value {
    return this._value;
  }

  constructor(public attributeLines: string[]) {
    this.readNameType(this.attributeLines[0]);
    this.readValue();
  }

  private readNameType(line: string): void {
    let regName = /ATTRIBUTE_INSTANCE NAME="(.*)"/gm;
    let match = regName.exec(line);
    if (match) {
      this._name = match[1];
    }
  }
  private readValue() {
    for (let line of this.attributeLines) {
      // console.log(line.match(/SET="(.*)"/) ? line.match(/SET="(.*)"/)[1] : '',)
      if (!this._value.set) {
        this._value.set = line.match(/SET="(.*)"/)
          ? line.match(/SET="(.*)"/)[1]
          : '';
      }
      if (!this._value.stringValue) {
        this._value.stringValue = line.match(/STRING_VALUE="(.*)"/)
          ? line.match(/STRING_VALUE="(.*)"/)[1]
          : '';
      }
      if (!this._value.high) {
        this._value.high = line.match(/ HIGH=(.*) L/)
          ? line.match(/ HIGH=(.*) L/)[1]
          : '';
      }
      if (!this._value.low) {
        this._value.low = line.match(/LOW=(.*) S/)
          ? line.match(/LOW=(.*) S/)[1]
          : '';
      }
      if (!this._value.cv) {
        this._value.cv = line.match(/CV=(.*) U/) ? line.match(/CV=(.*) U/)[1] : '';
      }
      if (!this._value.units) {
        this._value.units = line.match(/UNITS="(.*)" /)
          ? line.match(/UNITS="(.*)" /)[1]
          : '';
      }
      if (!this._value.description) {
        this._value.description = line.match(/DESCRIPTION="(.*)" H/)
          ? line.match(/DESCRIPTION="(.*)" H/)[1]
          : '';
      }
    }
  }
}

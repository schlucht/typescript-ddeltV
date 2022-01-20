
export class UP {  
  
  private _name: string;
  public get Name(): string {
    return this._name
  }
  public set Name(value: string) {
    if (this._name !== value) {
      this._name = value.toLowerCase()
    }
  }
  private _type: string
  public get Type(): string {
    return this._type
  }
  public set Type(value: string) {
    if (this._type !== value) {
      this._type = value.toLowerCase();
    }
  }
  private _text: string[]
  public get Text(): string[] {
    return this._text
  }
  public set Text(value: string[]) {
    if (value.length > 0) {
      this._text = value
    }
  }

  constructor() {    
  }
}



export interface StepTransition {
  step: string;
  transition: string
}


export class Transition {
  private name = '';
  public get Name(): string {
    return this.name;
  }
  public set Name(value: string) {
    this.name = value;
  }
  private position = {x: 0, y: 0};
  public get Position():{x: number,y: number} {
    return this.position
  }
   public set Position(value: {x: number, y: number}) {
    this.position = value;
  }
  private terminate = '';
  public get Terminate(): string {
    return this.terminate;
  }
  public set Terminate(value: string) {
    this.terminate = value
  }
  private expression = ''
  public get Expression(): string {
    return this.expression;
  }
  public set Expression(value: string) {
    this.expression = value;
  }
  constructor() {
    // this.readTransition()
  }

  
}
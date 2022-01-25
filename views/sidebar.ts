export class Sidebar {
  #div: HTMLDivElement;
  #select: HTMLSelectElement;

  #storageDates: string[] = []
  public set StorageDates(value: string[]) {
    this.#storageDates = value;
    this.#div.appendChild(this.#createForm());
  }
  public get StorageDates(): string[] {
    return this.#storageDates;
  }

  #selectedUp = '';
  public get SelectedUP(): string {
    return this.#selectedUp;
  }
  public set SelectedUP(value: string) {
    this.#selectedUp = value;
  }

  constructor() {
    this.#div = <HTMLDivElement>document.createElement('div')    
    this.#div.classList.add('sidebar')
    this.#div.appendChild(this.#createLogo())    
  }

  #createLogo() {
    const divLogo = document.createElement('div') as HTMLDivElement;
    divLogo.classList.add('logo');
    divLogo.innerHTML = `
      <ots-logo></ots-logo>      
    `;
    return divLogo;
  }

  #createForm() {
    const form = <HTMLFormElement>document.createElement('form')
    const formElement = <HTMLFieldSetElement>document.createElement('fieldset')
    this.#select = <HTMLSelectElement>document.createElement('select')
    this.#select.setAttribute('name', 'listUp')
    this.#select.setAttribute('id', 'listUp')
   
    this.#select.innerHTML = this.#auswahlList();
    formElement.innerHTML = `
      <label for="listUp">Auswahl</label>      
    `
    formElement.insertAdjacentElement('beforeend', this.#select)
    form.insertAdjacentElement('afterbegin', formElement);
    
    return form;
  }

  createSideBar() {
    return this.#div;
  }
  onChangeSelect(cb) {
     this.#select.addEventListener('change', (e) => {
      const ele = <HTMLSelectElement> e.target
      this.SelectedUP = ele.value;    
      return cb(this.SelectedUP)  
    })
  }
  #auswahlList(): string {
    const res: string[] = []
    this.#storageDates.forEach(s => {
      let si = s.split('/');
      let siRes = si[si.length - 1]
      res.push(`<option value="${s}">${siRes}</option>`)
    })
    return res.join('');
  }
  
}
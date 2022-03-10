import { Unit } from "../api/module/unit";
import { Rectangle } from "../api/module/rectangel"
import { Step } from "../api/module/step";

export class UpList {
  constructor(public dataList: Unit[], private ulElement: HTMLUListElement) {

  }

  readUnitTitle() {
    if (this.dataList.length <= 0) return;
    let li: HTMLLIElement;
    for (let unit of this.dataList) {
      li = document.createElement('li');      
      li.classList.add('up');
      li.innerHTML = `<h3>${unit['name']}</h3>`;
      li.addEventListener('click', (e) => {
        const list = e.target as HTMLLIElement;       
        console.dir(unit.Pfc)
      });

      this.ulElement.appendChild(li);
    }
  }

}
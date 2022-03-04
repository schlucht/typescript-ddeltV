import { Unit } from "../api/module/unit";

export class UpList {
  constructor(public dataList: Unit[], private ulElement: HTMLUListElement) {

  }

  readUnitTitle() {
    if (this.dataList.length <= 0) return;
    let li: HTMLLIElement;
    for (let unit of this.dataList) {
      li = document.createElement('li');
      li.textContent = unit['name'];
      this.ulElement.appendChild(li);
    }


  }

}
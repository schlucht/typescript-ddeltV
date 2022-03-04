import { Unit } from "../api/module/unit";

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
      this.ulElement.appendChild(li);
    }


  }

}
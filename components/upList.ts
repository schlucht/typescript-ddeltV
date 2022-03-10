import { Unit } from "../api/module/unit";
import { Box } from "./box";

export class UpList {

  constructor(public dataList: Unit[], private ulElement: HTMLUListElement) {

  }

  readUnitTitle(ctx: CanvasRenderingContext2D) {
    if (this.dataList.length <= 0) return;
    let li: HTMLLIElement;
    const boxes: Box[] = [];
    for (let unit of this.dataList) {
      li = document.createElement('li');      
      li.classList.add('up');
      li.innerHTML = `<h3>${unit['name']}</h3>`;
      li.addEventListener('click', (e) => {
        const list = e.target as HTMLLIElement;
        let steps = unit.Pfc.Step;               
        for (let op of steps) {
          boxes.push()
        }
      });

      this.ulElement.appendChild(li);
    }
  }

}
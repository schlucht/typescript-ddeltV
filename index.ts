// Import stylesheets
import './style.css';
import { ReadStorage } from './api/readStorage'
import { Box } from './components/box';
import { UpList } from './components/upList';
import { Unit } from './api/module/unit';
import { ReadFHX } from './api/readFHX';
import daten from './api/daten';

const canvasParent = document.getElementById('canvasParent') as HTMLDivElement;
const canvas = document.getElementById('canvas') as HTMLCanvasElement;
const ulElement = document.getElementById('upList') as HTMLUListElement;
canvas.height = canvasParent.clientHeight;
canvas.width = canvasParent.clientWidth;
const pos = canvasParent.getBoundingClientRect();
let boxes: Box[] = [];
const op = ['OP_MELDEN', 'OP_BEAGS', 'OP_DRUCK'];
const boxStart = 10;
const boxWidth = 150;
const boxHeight = 60;
const boxCenter = (canvas.clientWidth - boxWidth) / 2;

const distance = 50;

const fhx = new ReadFHX(daten);
const ctx = canvas.getContext('2d');
let dates: Unit[] = fhx.Units;

const createList = new UpList(dates, ulElement);
createList.readUnitTitle(ctx);

for (let i = 0; i < op.length; i++) {
  boxes.push(new Box(ctx, boxCenter, boxStart + ((boxHeight + distance) * i), boxWidth, boxHeight, op[i]))
}

canvas.addEventListener('mousemove', pointer);
canvas.addEventListener('click', activatedBox);

function pointer(e: MouseEvent) {
  let mousePosition = {x: e.clientX - pos.x, y: e.clientY - pos.y};

  for (let box of boxes) {
    if (box.isInsideBox(mousePosition)) {
      canvas.classList.add('pointer');     
    } else {
      canvas.classList.remove('pointer');
    } 
  }
}

function activatedBox(e: MouseEvent) {
   let mousePosition = {x: e.clientX - pos.x, y: e.clientY - pos.y};

  for (let box of boxes) {
    if (box.isInsideBox(mousePosition)) {      
      box.isActive = !box.isActive;
    }
 
  }
}

// boxes = [b, b2, b3];
for (let box of boxes) {
  box.createBox(ctx);
  box.renderCross(distance);
}



 


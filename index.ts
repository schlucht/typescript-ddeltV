// Import stylesheets
import './style.css';
import { ReadStorage } from './api/readStorage'


// Write TypeScript code!

const appDiv = document.getElementById('app') as HTMLDivElement;


const rs = new ReadStorage();
const map = rs.readStorage();

console.log(map);

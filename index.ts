// Import stylesheets
import './style.css';
import daten from './api/daten'
import { ReadFHX } from './api/readFHX'
import { ContentPosition, Layout } from './views/layout'
import { Sidebar } from './views/sidebar'

// Write TypeScript code!

const appDiv = document.getElementById('app') as HTMLDivElement;
appDiv.innerHTML = `<pre>${daten}</pre>`;
const layout = new Layout(appDiv);
const sidebar = new Sidebar();
const readFHX = new ReadFHX(daten)
layout.addContent(sidebar.createSideBar(), ContentPosition.contentLeft)


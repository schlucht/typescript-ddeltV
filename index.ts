// Import stylesheets
import './style.css';
import daten from './api/daten'
import { ReadFHX } from './api/readFHX'
import { ReadStorage } from './api/readStorage'
import { ContentPosition, Layout } from './views/layout'
import { Sidebar } from './views/sidebar'

import { OtsLogo } from './views/otsLogo/otsLogo';


// Write TypeScript code!

const appDiv = document.getElementById('app') as HTMLDivElement;
// appDiv.innerHTML = `<pre>${daten}</pre>`;
const layout = new Layout(appDiv);
const sidebar = new Sidebar();
const rs = new ReadStorage();
const map = rs.readStorage();
const listData = [...map.keys()]
sidebar.StorageDates = listData;
const readFHX = new ReadFHX(daten)
layout.addContent(sidebar.createSideBar(), ContentPosition.contentLeft)

window.customElements.define('ots-logo', OtsLogo);
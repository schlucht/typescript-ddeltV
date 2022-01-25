import otsLogoTemplate from './otsLogoView'

const template = document.createElement('template');
template.innerHTML = otsLogoTemplate;

export class OtsLogo extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(
            template.content.cloneNode(true)
        )
    }
}